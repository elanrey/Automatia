    // Funcionalidad para buscar sectores
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Sector search functionality initialized');

        // Obtener el input de sector
        const sectorInput = document.getElementById('sector-input');

        if (!sectorInput) {
            console.error('Sector input not found');
            return;
        }

        console.log('Sector input ready');

        // Agregar event listener para detectar Enter
        sectorInput.addEventListener('keydown', async function(e) {
            if (e.key === 'Enter') {
                console.log('Enter pressed');

                e.preventDefault();

                const sectorName = this.value.trim().toLowerCase();

                if (!sectorName) {
                    console.log('Empty sector name, ignoring');
                    return;
                }

                console.log(`Searching for sector: "${sectorName}"`);

                // Limpiar el input
                this.value = '';

                try {
                    // Mostrar modal con loading
                    showSectorModal();

                    console.log('Making API call...');
                    const response = await fetchSectorContent(sectorName);

                    console.log('API response:', response);

                    if (response && response.length > 0) {
                        const sectorData = response[0];
                        console.log('✅ SUCCESS - Sector data:', sectorData);
                        // Mostrar contenido en modal
                        updateSectorModal(sectorData, sectorName);
                    } else {
                        console.warn('⚠️ No data found for sector');
                        showSectorModalError(`No se encontró información para el sector "${sectorName}".`);
                    }
                } catch (error) {
                    console.error('❌ API ERROR:', error);
                    showSectorModalError(`Error conectado con el servidor. Detalles: ${error.message}`);
                }
            }
        });

        console.log('Sector search functionality ready!');
    });

// Función para hacer la llamada a la API
async function fetchSectorContent(sectorName) {
    try {
        console.log('Making API call to:', `https://www.automatia.cc/api/v1/content`);
        const response = await fetch('https://www.automatia.cc/api/v1/content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sector: sectorName
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API response received:', data);
        return data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// Función para mostrar la modal de sector
function showSectorModal() {
    console.log('Showing sector modal with loading state');

    // Crear modal si no existe
    let modalWrapper = document.getElementById('sector-modal-wrapper');
    if (!modalWrapper) {
        modalWrapper = document.createElement('div');
        modalWrapper.id = 'sector-modal-wrapper';
        modalWrapper.setAttribute('style', `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 40px 20px;
        `);

        modalWrapper.innerHTML = `
            <div style="
                background: white;
                border-radius: 16px;
                max-width: 800px;
                width: 100%;
                max-height: 80vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
            " class="sector-modal-content">
                <div style="
                    background: linear-gradient(135deg, #0f1729, #1d45fa);
                    color: white;
                    padding: 1rem 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 1rem 1rem 0 0;
                ">
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                    ">
                        <img src="img/logo.png" alt="AutomatIA Logo" style="
                            width: 2.5rem;
                            height: 2.5rem;
                            border-radius: 50%;
                            background: white;
                            padding: 0.125rem;
                            object-fit: contain;
                        ">
                        <div>
                            <div style="font-weight: bold; font-size: 1.125rem; line-height: 1.2;">Automat<span style="color: #dc41f1;" class="font-orbitron">IA</span></div>
                            <div style="font-size: 0.75rem; opacity: 0.8;" id="sector-modal-subtitle">Información del Sector</div>
                        </div>
                    </div>
                    <button style="
                        background: none;
                        border: none;
                        color: white;
                        cursor: pointer;
                        padding: 0.25rem;
                        border-radius: 0.25rem;
                        font-size: 1.25rem;
                    " id="sector-modal-close">
                        ×
                    </button>
                </div>

                <div style="
                    flex: 1;
                    overflow-y: auto;
                    max-height: 70vh;
                    padding: 0;
                " class="sector-modal-body">
                    <div style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 3rem 2rem;
                        text-align: center;
                    " id="sector-modal-loading">
                        <div style="
                            width: 3rem;
                            height: 3rem;
                            border: 3px solid #e5e7eb;
                            border-top: 3px solid #1d45fa;
                            border-radius: 50%;
                            animation: spin 1s linear infinite;
                            margin-bottom: 1rem;
                            animation: spin 1s linear infinite;
                        " id="loading-spinner"></div>
                        <p style="color: #64748b; font-size: 1rem; margin: 0;">Cargando información del sector...</p>
                    </div>

                    <div style="padding: 2rem; display: none;" id="sector-modal-content" class="sector-modal-content-area">
                        <!-- Contenido dinámico aquí -->
                    </div>

                    <div style="padding: 2rem; display: none; text-align: center;" id="sector-modal-error" class="sector-modal-error">
                        <!-- Mensaje de error aquí -->
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modalWrapper);

        // Agregar eventos de cerrar (solo con el botón de cerrar)
        modalWrapper.addEventListener('click', function(e) {
            if (e.target.id === 'sector-modal-close') {
                hideSectorModal();
            }
        });

        // Note: Cierre con Escape deshabilitado - solo se permite cerrar con el botón

        // Agregar animación del spinner
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    modalWrapper.style.display = 'flex';

    // Asegurar que siempre comience en estado de carga
    const loadingDiv = document.getElementById('sector-modal-loading');
    const contentDiv = document.getElementById('sector-modal-content');
    const errorDiv = document.getElementById('sector-modal-error');

    if (loadingDiv) loadingDiv.style.display = 'flex';
    if (contentDiv) contentDiv.style.display = 'none';
    if (errorDiv) errorDiv.style.display = 'none';
}

// Función para ocultar la modal
function hideSectorModal() {
    const modalWrapper = document.getElementById('sector-modal-wrapper');
    if (modalWrapper) {
        modalWrapper.classList.remove('active');
        setTimeout(() => modalWrapper.style.display = 'none', 300);
    }
}

// Función para actualizar el contenido de la modal
function updateSectorModal(sectorData, originalSector) {
    console.log('Updating modal content with data:', sectorData);

    const loadingDiv = document.getElementById('sector-modal-loading');
    const contentDiv = document.getElementById('sector-modal-content');
    const errorDiv = document.getElementById('sector-modal-error');
    const subtitleDiv = document.getElementById('sector-modal-subtitle');

    // Actualizar subtítulo
    if (subtitleDiv) {
        subtitleDiv.textContent = `Sector: ${originalSector.charAt(0).toUpperCase() + originalSector.slice(1)}`;
    }

    // Construir el contenido con estilos inline
    contentDiv.innerHTML = `
        <div style="
            text-align: center;
            margin-bottom: 2.5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #e5e7eb;
        ">
            <h2 style="
                font-size: 1.75rem;
                font-weight: 700;
                line-height: 1.2;
                margin-bottom: 1rem;
            ">
                <span style="
                    background: linear-gradient(135deg, #1d45fa, #dc41f1);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                ">${sectorData.Título || 'Soluciones Especializadas'}</span>
            </h2>
            <p style="
                font-size: 1.125rem;
                color: #64748b;
                max-width: 600px;
                margin: 0 auto;
                line-height: 1.5;
            ">
                ${sectorData.Subtítulo || 'Descubre cómo podemos ayudar a tu sector específico.'}
            </p>
        </div>

        <div style="
            display: grid;
            gap: 1.5rem;
        ">
            ${sectorData.Items ? sectorData.Items.map(item => `
                <div style="
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    border-left: 4px solid #1d45fa;
                    transition: transform 0.2s ease;
                ">
                    <h4 style="
                        font-size: 1.125rem;
                        font-weight: 600;
                        color: #0f1729;
                        margin-bottom: 0.75rem;
                        display: flex;
                        align-items: flex-start;
                        gap: 0.5rem;
                    ">
                        <i class="fas fa-check" style="color: #dc41f1; flex-shrink: 0; margin-top: 0.125rem;"></i>
                        ${item.título || 'Solución especializada'}
                    </h4>
                    <p style="
                        color: #64748b;
                        line-height: 1.5;
                        margin: 0;
                    ">
                        ${item.descripción || 'Descripción detallada próximamente.'}
                    </p>
                </div>
            `).join('') : '<p>Información detallada próximamente.</p>'}
        </div>

        <div style="
            margin-top: 2.5rem;
            padding: 2rem;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            border-radius: 0.75rem;
            text-align: center;
            border: 1px solid #e5e7eb;
        ">
            <h3 style="
                font-size: 1.25rem;
                font-weight: 600;
                color: #0f1729;
                margin-bottom: 0.75rem;
                line-height: 1.4;
            ">
                ¿Listo para transformar tu negocio?
            </h3>
            <p style="
                font-size: 1rem;
                color: #64748b;
                max-width: 500px;
                margin: 0 auto 1.5rem auto;
                line-height: 1.5;
            ">
                Contacta con nuestros expertos en automatización y descubre cómo podemos ayudarte a implementar soluciones personalizadas para tu sector.
            </p>
            <button style="
                background: linear-gradient(135deg, #1d45fa, #dc41f1);
                border: none;
                color: white;
                padding: 0.75rem 2rem;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                box-shadow: 0 4px 12px rgba(29, 69, 250, 0.3);
            "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(29, 69, 250, 0.4)';"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(29, 69, 250, 0.3)';"
            onclick="hideSectorModal(); document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth', block: 'start'});"
            >
                Contactar Ahora
            </button>
        </div>
    `;

    // Cambiar estados
    if (loadingDiv) loadingDiv.style.display = 'none';
    if (errorDiv) errorDiv.style.display = 'none';
    if (contentDiv) contentDiv.style.display = 'block';
}

// Función para mostrar error en la modal
function showSectorModalError(message) {
    console.log('Showing modal error:', message);

    const loadingDiv = document.getElementById('sector-modal-loading');
    const contentDiv = document.getElementById('sector-modal-content');
    const errorDiv = document.getElementById('sector-modal-error');

    if (errorDiv) {
        errorDiv.innerHTML = `
            <div class="sector-error-content">
                <i class="fas fa-exclamation-triangle sector-error-icon"></i>
                <h3>Error al cargar información</h3>
                <p>${message}</p>
                <p class="sector-error-suggestion">
                    Verifica la conexión a internet e inténtalo de nuevo.
                </p>
            </div>
        `;
    }

    // Cambiar estados
    if (loadingDiv) loadingDiv.style.display = 'none';
    if (contentDiv) contentDiv.style.display = 'none';
    if (errorDiv) errorDiv.style.display = 'flex';
}
