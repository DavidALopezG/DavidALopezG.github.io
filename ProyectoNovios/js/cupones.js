const LISTA_CUPONES = [
    { titulo: "Cena Romántica", desc: "Válido para que yo cocine tu platillo favorito o te lleve a tu restaurante preferido." },
    { titulo: "Tarde de Películas", desc: "Tú eliges las películas y los snacks, yo pongo los abrazos sin interrupciones." },
    { titulo: "Masaje Relajante", desc: "Válido por una sesión de spa en casa de 30 minutos con música tranquila." },
    { titulo: "Vale por un Sí", desc: "Tienes el derecho de ganar cualquier discusión o elegir el plan sin objeciones hoy." },
    { titulo: "Día de flojera", desc: "Nos quedamos acostados todo el día descansando sin hacer absolutamente nada de pendientes." },
    { titulo: "Desayuno Sorpresa", desc: "Te despierto con tu desayuno favorito servido en la cama." },
    { titulo: "Vale por un Abrazo Eterno", desc: "Canjeable por un abrazo de duración ilimitada, cuando tú lo pidas." },
    { titulo: "Cita a Ciegas", desc: "Yo organizo un plan sorpresa completo y tú solo te dejas llevar." },
    { titulo: "Noche de Juegos", desc: "Elige tu juego de mesa o videojuego favorito y jugamos hasta que tú digas basta." },
    { titulo: "Selfie Date", desc: "Válido por una sesión de fotos juntos, con los mejores ángulos y mucha risa." },
    { titulo: "Vale por un Karaoke Privado", desc: "Cantamos tus canciones favoritas sin vergüenza ni jueces." },
    { titulo: "Paseo al Atardecer", desc: "Salimos a caminar o manejar para ver juntos el atardecer, sin prisa." },
    { titulo: "Vale por Cero Reclamos", desc: "Un día libre de quejas de mi parte, pase lo que pase." },
    { titulo: "Postre Sorpresa", desc: "Te preparo o te compro tu postre favorito sin que lo pidas." },
    { titulo: "Sesión de Manicure", desc: "Válido por una tarde dedicada a consentir tus manos, como tú prefieras." },
    { titulo: "Playlist Personalizada", desc: "Te armo una playlist especial con canciones que me recuerdan a ti." },
    { titulo: "Vale por Elegir la Música", desc: "Tú controlas el aux todo el día, sin quejas de mi parte." },
    { titulo: "Carta de Amor", desc: "Canjeable por una carta escrita a mano contándote por qué te amo." },
    { titulo: "Tarde de Compras", desc: "Te acompaño de compras sin apuros ni caras largas, con paciencia total." },
    { titulo: "Vale por un Baile Lento", desc: "Ponemos nuestra canción y bailamos juntos, aunque sea en la sala." },
    { titulo: "Noche de Estrellas", desc: "Salimos a buscar un lugar tranquilo para ver las estrellas juntos." },
    { titulo: "Vale por Servicio de Chofer", desc: "Te llevo a donde necesites, cuando quieras, sin preguntas." },
    { titulo: "Picnic Sorpresa", desc: "Preparo un picnic con tus snacks favoritos para disfrutar al aire libre." },
    { titulo: "Vale por un Día sin Celular", desc: "Ponemos los teléfonos a un lado y estamos solo el uno para el otro." },
    { titulo: "Regalo Sorpresa", desc: "Canjeable por un pequeño detalle sorpresa elegido especialmente para ti." },
    { titulo: "Vale por Escuchar sin Interrumpir", desc: "Un espacio completo para que me cuentes lo que quieras, sin juicios." },
    { titulo: "Aventura Nueva", desc: "Probamos juntos algo que nunca hayamos hecho antes." },
    { titulo: "Vale por Fotos Antiguas", desc: "Vemos juntos fotos y recuerdos de nuestra relación con calma." },
    { titulo: "Spa Day Doble", desc: "Nos consentimos los dos juntos con mascarillas, velas y relajación." },
    { titulo: "Vale por un Deseo", desc: "Puedes pedirme lo que quieras dentro de lo posible, y yo lo cumplo." }
];

const TIEMPO_SEMANA_MS = 7 * 24 * 60 * 60 * 1000; // 7 días exactos
let relojIntervalo;

document.addEventListener("DOMContentLoaded", function() {
    const ultimaFechaRasca = localStorage.getItem("cuponUltimoRasca");
    
    if (ultimaFechaRasca && (Date.now() - parseInt(ultimaFechaRasca) < TIEMPO_SEMANA_MS)) {
        mostrarPantallaBloqueo(parseInt(ultimaFechaRasca));
    } else {
        prepararRascaYGana();
    }
});

function prepararRascaYGana() {
    // Escoger premio de la lista de manera aleatoria
    const cuponHoy = LISTA_CUPONES[Math.floor(Math.random() * LISTA_CUPONES.length)];
    document.getElementById("cuponTitulo").innerText = cuponHoy.titulo;
    document.getElementById("cuponDescripcion").innerText = cuponHoy.desc;

    const canvas = document.getElementById("capaRasca");
    const ctx = canvas.getContext("2d");

    // Pintar la capa superior (color rosa pastel estético con textura)
    ctx.fillStyle = "#f2dad6"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Texto sutil decorativo sobre la pintura rascable
    ctx.fillStyle = "#8a766a";
    ctx.font = "bold 14px Quicksand";
    ctx.textAlign = "center";
    ctx.fillText("RASPA AQUÍ CON TU DEDO", canvas.width / 2, canvas.height / 2 + 5);

    let raspando = false;

    // Funciones para borrar el lienzo
    function raspar(x, y) {
        ctx.globalCompositeOperation = 'destination-out'; // Hace que el trazo borre en vez de pintar
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2); // Grosor del raspado (radio 20)
        ctx.fill();
        
        verificarPorcentajeRaspado(canvas, ctx);
    }

    // Eventos de Mouse
    canvas.addEventListener("mousedown", (e) => { raspando = true; var rect = canvas.getBoundingClientRect(); raspar(e.clientX - rect.left, e.clientY - rect.top); });
    canvas.addEventListener("mousemove", (e) => { if (!raspando) return; var rect = canvas.getBoundingClientRect(); raspar(e.clientX - rect.left, e.clientY - rect.top); });
    window.addEventListener("mouseup", () => { raspando = false; });

    // Eventos de Pantallas Táctiles (Móviles)
    canvas.addEventListener("touchstart", (e) => { raspando = true; var rect = canvas.getBoundingClientRect(); var touch = e.touches[0]; raspar(touch.clientX - rect.left, touch.clientY - rect.top); });
    canvas.addEventListener("touchmove", (e) => { if (!raspando) return; var rect = canvas.getBoundingClientRect(); var touch = e.touches[0]; raspar(touch.clientX - rect.left, touch.clientY - rect.top); });
    canvas.addEventListener("touchend", () => { raspando = false; });
}

function verificarPorcentajeRaspado(canvas, ctx) {
    // Si ha borrado lo suficiente (ej. más de la mitad), guarda el tiempo de bloqueo
    if (!localStorage.getItem("cuponUltimoRasca")) {
        const ahora = Date.now();
        localStorage.setItem("cuponUltimoRasca", ahora.toString());
        
        // Le damos 5 segundos para disfrutar ver su cupón antes de bloquearlo por la semana
        setTimeout(() => {
            mostrarPantallaBloqueo(ahora);
        }, 6000);
    }
}

function mostrarPantallaBloqueo(tiempoOriginal) {
    document.getElementById("contenedorRasca").classList.add("d-none");
    document.getElementById("instruccionCupon").classList.add("d-none");
    document.getElementById("bloqueoSemanal").classList.remove("d-none");

    actualizarRelojSemanal(tiempoOriginal);
    relojIntervalo = setInterval(() => {
        actualizarRelojSemanal(tiempoOriginal);
    }, 1000);
}

function actualizarRelojSemanal(tiempoOriginal) {
    const ahora = Date.now();
    const meta = tiempoOriginal + TIEMPO_SEMANA_MS;
    const restante = meta - ahora;

    if (restante <= 0) {
        clearInterval(relojIntervalo);
        localStorage.removeItem("cuponUltimoRasca");
        window.location.reload();
        return;
    }

    const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((restante % (1000 * 60)) / 1000);

    document.getElementById("relojSemanal").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}