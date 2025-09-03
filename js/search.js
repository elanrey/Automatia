
const allSectors = [
    { name: "Agricultura", url: "sectores/agricultura.html" },
    { name: "Agencia de Marketing", url: "sectores/marketing.html" },
    { name: "Centros de Contacto", url: "sectores/centros-contacto.html" },
    { name: "Clínica o Consultorio Médico", url: "sectores/medicos.html" },
    { name: "Comercio Minorista (Retail)", url: "sectores/comercio.html" },
    { name: "Construcción", url: "sectores/construccion.html" },
    { name: "Consultoría", url: "sectores/consultoria.html" },
    { name: "Despacho Contable", url: "sectores/contadores.html" },
    { name: "Entretenimiento", url: "sectores/entretenimiento.html" },
    { name: "Escuela o Academia", url: "sectores/escuelas.html" },
    { name: "Finanzas y Banca", url: "sectores/finanzas.html" },
    { name: "Gimnasio", url: "sectores/gimnasios.html" },
    { name: "Hoteles y Turismo", url: "sectores/hoteles.html" },
    { name: "Inmobiliaria", url: "sectores/inmobiliarias.html" },
    { name: "Jurídico/Notarías", url: "sectores/juridico.html" },
    { name: "Logística y Transporte", url: "sectores/logistica.html" },
    { name: "Manufactura", url: "sectores/manufactura.html" },
    { name: "Recursos Humanos", url: "sectores/recursos-humanos.html" },
    { name: "Restaurante o Cafetería", url: "sectores/restaurantes.html" },
    { name: "Seguridad Privada", url: "sectores/seguridad-privada.html" },
    { name: "Seguros", url: "sectores/seguros.html" },
    { name: "Taller Mecánico", url: "sectores/talleres.html" },
    { name: "Telecomunicaciones", url: "sectores/telecomunicaciones.html" },
    { name: "Tienda en Línea (eCommerce)", url: "sectores/ecommerce.html" },
    { name: "Gobierno", url: "sectores/gobierno.html" },
    { name: "Energía", url: "sectores/energia.html" },
    { name: "Farmacéutica", url: "sectores/farmaceutica.html" },
    { name: "Medios de Comunicación", url: "sectores/medios-comunicacion.html" },
    { name: "Transporte Aéreo", url: "sectores/transporte-aereo.html" },
    { name: "Servicios Públicos", url: "sectores/servicios-publicos.html" },
    { name: "Investigación y Desarrollo", url: "sectores/investigacion-desarrollo.html" },
    { name: "Arte y Diseño", url: "sectores/arte-diseno.html" },
    { name: "Gestión de Residuos", url: "sectores/gestion-residuos.html" },
    { name: "Veterinaria", url: "sectores/veterinaria.html" }
];

document.addEventListener('DOMContentLoaded', function() {
    const sectorSearchInput = document.getElementById('sector-search');
    const searchResultsDiv = document.getElementById('search-results');

    if (!sectorSearchInput || !searchResultsDiv) return;

    sectorSearchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length === 0) {
            displayResults(allSectors, query);
        } else {
            const filteredSectors = allSectors.filter(sector => 
                sector.name.toLowerCase().includes(query)
            );
            displayResults(filteredSectors, query);
        }
    });

    sectorSearchInput.addEventListener('focus', function() {
        displayResults(allSectors, "");
    });

    document.addEventListener('click', function(event) {
        if (!sectorSearchInput.contains(event.target) && !searchResultsDiv.contains(event.target)) {
            searchResultsDiv.innerHTML = '';
            searchResultsDiv.style.display = 'none';
        }
    });

    function displayResults(results, query) {
        searchResultsDiv.innerHTML = '';
        if (results.length === 0 && query.length > 0) {
            searchResultsDiv.style.display = 'none';
            return;
        }

        results.forEach(sector => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.textContent = sector.name;
            resultItem.addEventListener('click', function() {
                sectorSearchInput.value = sector.name;
                if(typeof window.loadSectorContent === 'function') {
                    window.loadSectorContent(sector.url);
                }
                searchResultsDiv.innerHTML = '';
                searchResultsDiv.style.display = 'none';
            });
            searchResultsDiv.appendChild(resultItem);
        });
        searchResultsDiv.style.display = 'block';
    }
});
