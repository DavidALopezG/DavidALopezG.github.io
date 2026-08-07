// LISTA DE LAS 100 CITAS DE LA IMAGEN
const TODAS_LAS_CITAS = [
    "Ir al cine",
    "Salir a comer",
    "Ir al parque",
    "Día de picnic",
    "Cenar en un restaurante bonito",
    "Viaje fuera de la ciudad",
    "Ir a un museo",
    "Pedir cena a domicilio",
    "Armar un rompecabezas",
    "Preparar un postre",
    "Pintar un cuadro",
    "Ir a patinar",
    "Ir a un partido de béisbol",
    "Maratón de series",
    "Ir a la playa",
    "Ir a un concierto",
    "Ir por bebidas con tapioca",
    "Ir al zoológico",
    "Ir de compras",
    "Ir a remar / pescar",
    "Ir a un tour",
    "Ir a un circo",
    "Ir a una fiesta",
    "Pasear en la plaza",
    "Ir por un helado",
    "Ir a un cumpleaños",
    "Cenar en el coche",
    "Ir a una boda",
    "Ir a una cascada",
    "Cena romántica",
    "Cocinar juntos",
    "Acampar",
    "Caminar bajo la lluvia",
    "Ver un atardecer",
    "Leer juntos",
    "Desayuno en la cama",
    "Ver partidos en la TV",
    "Ir al supermercado",
    "Trabajar juntos",
    "Pintar una pared",
    "Dibujar / pintar juntos",
    "Subirnos a un globo aerostático",
    "Armar un Lego",
    "Vestir iguales",
    "Jugar videojuegos",
    "Viajar en barco o yate",
    "Ponernos mascarillas",
    "Salir a bailar",
    "Disfrazarnos en pareja",
    "Ir por un café",
    "Escuchar música",
    "Armar un mueble",
    "Volar un papalote",
    "Guerra de almohadas",
    "Pijamada",
    "Observar las estrellas",
    "Hacer una cita con temática",
    "Pasear a nuestras mascotas",
    "Pedir pizza",
    "Salir a caminar",
    "Hacer una fogata",
    "Hacer una sesión de fotos",
    "Hacer manualidades",
    "Jugar juegos de mesa",
    "Ir a un bazar",
    "Ir a comer donas",
    "Comer en un buffet",
    "Empezar una alcancía",
    "Ver la luna",
    "Escribirnos una carta",
    "Hacernos un tatuaje",
    "Ir a un pueblo mágico",
    "Ir a un spa",
    "Cena familiar",
    "Ir por hamburguesas",
    "Ir a una posada",
    "Viajar en avión",
    "Salir con amigos",
    "Noche de películas",
    "Ir a cenar tacos",
    "Ir a un parque de diversiones",
    "Salir por un elote / esquite",
    "Comprar plantas",
    "Ir a jugar bolos",
    "Ir al planetario",
    "Visitar el acuario",
    "Pasear en bicicleta",
    "Ver una obra de teatro",
    "Ir a una feria",
    "Sacar un peluche de una máquina",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos",
    "Hora de ser espontáneos"
];

// Cargar estado guardado de LocalStorage
let citasGuardadas = JSON.parse(localStorage.getItem("citas_completadas")) || {};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCitas();
});

function renderizarCitas() {
    const lista = document.getElementById("listaCitas");
    if (!lista) return;

    lista.innerHTML = "";
    let completadasCount = 0;

    TODAS_LAS_CITAS.forEach((citaText, index) => {
        const estaCompletada = !!citasGuardadas[index];
        if (estaCompletada) completadasCount++;

        const div = document.createElement("div");
        div.className = `cita-item ${estaCompletada ? 'completada' : ''}`;
        div.onclick = () => toggleCita(index);

        div.innerHTML = `
            <input type="checkbox" ${estaCompletada ? 'checked' : ''} tabindex="-1">
            <span class="cita-texto">${index + 1}. ${citaText}</span>
        `;

        lista.appendChild(div);
    });

    // Actualizar el contador en la cabecera
    const contador = document.getElementById("citasContador");
    if (contador) {
        contador.innerText = `Completadas: ${completadasCount} / 100`;
    }
}

function toggleCita(index) {
    citasGuardadas[index] = !citasGuardadas[index];
    localStorage.setItem("citas_completadas", JSON.stringify(citasGuardadas));
    renderizarCitas();
}