// LISTA DE LAS 100 CITAS (Puedes personalizar el texto de cada una)
const TODAS_LAS_CITAS = [
    "Picnic en el parque",
    "Ir al cine a ver una película de terror",
    "Cocinar juntos una pizza desde cero",
    "Ver el atardecer juntos",
    "Maratón de películas con pijamas y palomitas",
    "Irme de viaje de fin de semana",
    "Tener una cita de karaoke en casa",
    "Irme a un museo o exposición de arte",
    "Pintar un lienzo o cerámica juntos",
    "Ir a un parque de atracciones",
    "Ver las estrellas de noche con una manta",
    "Ir a comer helado a un lugar nuevo",
    "Tener una cita de juegos de mesa",
    "Ir a un mercado vintage o de pulgas",
    "Comprar ropa el uno para el otro",
    "Hacer un intercambio de fotos instantáneas",
    "Ir a un café bonito a leer o platicar",
    "Hacer una noche de spa e hidratación en casa",
    "Ir a patinar sobre hielo o ruedas",
    "Noche de tacos y juegos de cartas",
    "Tomarse fotos en una cabina fotográfica (photobooth)",
    "Hacer una cápsula del tiempo para abrir en un año",
    "Ir a un concierto de su banda favorita",
    "Caminar bajo la lluvia con un solo paraguas",
    "Cita de degustación de postres",
    // Agrega o edita el resto de tus ideas aquí hasta llegar a las 100...
];

// Si no completas las 100 en la lista de arriba, el código rellenará automáticamente
while (TODAS_LAS_CITAS.length < 100) {
    TODAS_LAS_CITAS.push(`Cita especial #${TODAS_LAS_CITAS.length + 1}`);
}

// Cargar estado guardado de LocalStorage
let citasGuardadas = JSON.parse(localStorage.getItem("citas_completadas")) || {};

function abrirModalCitas() {
    document.getElementById("citasModalOverlay").classList.add("active");
    document.body.classList.add("modal-open");
    renderizarCitas();
}

function cerrarModalCitas() {
    document.getElementById("citasModalOverlay").classList.remove("active");
    document.body.classList.remove("modal-open");
}

function renderizarCitas() {
    const lista = document.getElementById("listaCitas");
    lista.innerHTML = "";
    let completadasCount = 0;

    TODAS_LAS_CITAS.forEach((citaText, index) => {
        const estaCompletada = !!citasGuardadas[index];
        if (estaCompletada) completadasCount++;

        const li = document.createElement("li");
        li.className = `cita-item ${estaCompletada ? 'completada' : ''}`;
        li.onclick = () => toggleCita(index);

        li.innerHTML = `
            <input type="checkbox" ${estaCompletada ? 'checked' : ''} tabindex="-1">
            <span class="cita-texto">${index + 1}. ${citaText}</span>
        `;

        lista.appendChild(li);
    });

    // Actualizar contador
    document.getElementById("citasContador").innerText = `Completadas: ${completadasCount} / 100`;
}

function toggleCita(index) {
    // Alternar valor
    citasGuardadas[index] = !citasGuardadas[index];
    
    // Guardar en el navegador para que no se pierda al recargar
    localStorage.setItem("citas_completadas", JSON.stringify(citasGuardadas));
    
    // Volver a renderizar
    renderizarCitas();
}