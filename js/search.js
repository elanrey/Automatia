    // Funcionalidad para buscar sectores
    document.addEventListener('DOMContentLoaded', function() {

        // Obtener el input de sector
        const sectorInput = document.getElementById('sector-input');

        if (!sectorInput) {
            return;
        }

        // Función para realizar la búsqueda
        async function performSearch() {
            const sectorName = sectorInput.value.trim().toLowerCase();

            if (!sectorName) {
                return;
            }

            // Limpiar el input
            sectorInput.value = '';

            try {
                // Mostrar modal con loading
                showSectorModal();
                const response = await fetchSectorContent(sectorName);

                if (response && response.length > 0) {
                    const sectorData = response[0];
                    // Mostrar contenido en modal
                    updateSectorModal(sectorData, sectorName);
                } else {
                    showSectorModalError(`No se encontró información para el sector "${sectorName}".`);
                }
            } catch (error) {
                showSectorModalError(`Error conectado con el servidor. Detalles: ${error.message}`);
            }
        }

        // Agregar event listener para detectar Enter
        sectorInput.addEventListener('keydown', async function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });

        // Obtener el botón de búsqueda
        const searchButton = document.getElementById('search-button');

        if (searchButton) {
            searchButton.addEventListener('click', performSearch);
        }

    });

// Función para hacer la llamada a la API
async function fetchSectorContent(sectorName) {
    try {
        const response = await fetch('https://api.automatia.cc/content', {
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

        return data;
    } catch (error) {
        throw error;
    }
}

// Función para mostrar la modal de sector
function showSectorModal() {

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
            background: rgba(0, 0, 0, 0.75);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 40px 20px;
        `);

        modalWrapper.innerHTML = `
            <div style="
                background: #0f1729; /* bg-dark */
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
                        <div style="
                            display: flex;
                            height: 2.5rem;
                            width: 2.5rem;
                            align-items: center;
                            justify-content: center;
                            border-radius: 0.5rem;
                            background: #1d45fa;
                            border: 1px solid white;
                        ">
                            <img src="img/logo-small.png" alt="AutomatIA Logo" style="
                                width: 1.5rem;
                                height: 1.5rem;
                                object-fit: contain;
                            ">
                        </div>
                        <div>
                            <a href="index.html" class="text-lg font-bold text-white no-underline group"><span class="font-orbitron">Automat</span><em class="font-orbitron not-italic text-primary ml-0.5 group-hover:text-secondary transition-colors duration-1500" style="text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff;">IA</em></a>
                        </div>
                    </div>
                    <button style="
                        background: none;
                        background-image: url('../img/close.png');
                        background-size: 16px;
                        background-repeat: no-repeat;
                        background-position: center;
                        border: none;
                        cursor: pointer;
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                        border-radius: 50%;
                        transition: background-color 0.2s;
                    " id="sector-modal-close"></button>
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
                            border: 3px solid #475569; /* slate-600 */
                            border-top: 3px solid #1d45fa;
                            border-radius: 50%;
                            animation: spin 1s linear infinite;
                            margin-bottom: 1rem;
                            animation: spin 1s linear infinite;
                        " id="loading-spinner"></div>
                        <p style="color: #cbd5e1; /* slate-300 */ font-size: 1rem; margin: 0;">Cargando información del sector...</p>
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

    const loadingDiv = document.getElementById('sector-modal-loading');
    const contentDiv = document.getElementById('sector-modal-content');
    const errorDiv = document.getElementById('sector-modal-error');

    // Construir el contenido con estilos inline
    contentDiv.innerHTML = `
        <div style="
            text-align: center;
            margin-bottom: 2.5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #475569; /* slate-600 */
        ">
            <h2 style="
                font-size: 1.75rem;
                font-weight: 700;
                line-height: 1.2;
                margin-bottom: 1rem;
                color: white; /* Título blanco */
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
                color: #cbd5e1; /* slate-300 */
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
                    background: #1e293b; /* slate-800 */
                    padding: 2rem;
                    border-radius: 0.75rem;
                    border: 1px solid #475569; /* slate-700 */
                    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2);
                    text-align: center;
                    transition: transform 0.2s;
                ">
                    <h4 style="
                        font-size: 1.125rem;
                        font-weight: 600;
                        color: white; /* Título de ítem blanco */
                        margin-bottom: 0.75rem;
                        display: flex;
                        align-items: flex-start;
                        gap: 0.5rem;
                    ">
                        <i class="fas fa-check" style="color: #dc41f1; flex-shrink: 0; margin-top: 0.125rem;"></i>
                        ${item.título || 'Solución especializada'}
                    </h4>
                    <p style="
                        color: #cbd5e1; /* slate-300 */
                        line-height: 1.5;
                        text-align: justify;
                        margin: 0;
                    ">
                        ${item.descripción || 'Descripción detallada próximamente.'}
                    </p>
                </div>
            `).join('') : '<p style="color: #cbd5e1;">Información detallada próximamente.</p>'}
        </div>

        <div style="
            margin-top: 2.5rem;
            padding: 2rem;
            background: #1e293b; /* slate-800 */
            border-radius: 0.75rem;
            text-align: center;
            border: 1px solid #475569; /* slate-700 */
            box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2);
        ">
            <h3 style="
                font-size: 1.5rem;
                font-weight: 600;
                color: white; /* Título blanco */
                margin-bottom: 0.75rem;
                line-height: 1.4;
            ">
                ¿Listo para transformar tu negocio?
            </h3>
            <p style="
                font-size: 1rem;
                color: #cbd5e1; /* slate-300 */
                max-width: 500px;
                margin: 0 auto 1.5rem auto;
                line-height: 1.5;
            ">
                Contáctanos y descubre cómo impulsar tus resultados con soluciones diseñadas a tu medida.
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

    const loadingDiv = document.getElementById('sector-modal-loading');
    const contentDiv = document.getElementById('sector-modal-content');
    const errorDiv = document.getElementById('sector-modal-error');

    if (errorDiv) {
        errorDiv.innerHTML = `
            <div class="sector-error-content" style="color: #cbd5e1;">
                <i class="fas fa-exclamation-triangle sector-error-icon" style="color: #dc2626;"></i>
                <h3>Error al cargar información</h3>
                <p>${message}</p>
                <p class="sector-error-suggestion" style="color: #94a3b8;">
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
