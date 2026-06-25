const LISTA_CUPONES = [
    { titulo: "Cena Romántica", desc: "Válido para que yo cocine tu platillo favorito o te lleve a tu restaurante preferido." },
    { titulo: "Tarde de Películas", desc: "Tú eliges las películas y los snacks, yo pongo los abrazos sin interrupciones." },
    { titulo: "Masaje Relajante", desc: "Válido por una sesión de spa en casa de 30 minutos con música tranquila." },
    { titulo: "Vale por un Sí", desc: "Tienes el derecho de ganar cualquier discusión o elegir el plan sin objeciones hoy." },
    { titulo: "Día de flojera", desc: "Nos quedamos acostados todo el día descansando sin hacer absolutamente nada de pendientes." },
    { titulo: "Pase de Desayuno", desc: "Me levanto temprano y te llevo el desayuno a la cama con tu café o té favorito." },
    { titulo: "Esclavo por 1 Hora", desc: "Durante 60 minutos haré todo lo que me pidas: traerte agua, rascarte la espalda, limpiar algo, etc." },
    { titulo: "Paseo Nocturno", desc: "Válido para salir a caminar por la noche a platicar, ver las estrellas o comprar un antojo simple." },
    { titulo: "Pase de Besos", desc: "Válido por una lluvia de besos interminable en el momento del día que tú decidas." },
    { titulo: "Tu Playlist Ideal", desc: "Crearé una lista de canciones en Spotify que me recuerden a ti para que la escuches cuando quieras." },
    { titulo: "Sesión de Fotos", desc: "Seré tu fotógrafo personal durante 20 minutos para que tengas tus fotos perfectas de Instagram." },
    { titulo: "Canción Dedicada", desc: "Elegiré una canción especial y te la cantaré al oído (prometo hacer mi mejor esfuerzo sin dar pena)." },
    { titulo: "Clon de Abrazos", desc: "Un abrazo fuerte y apretado que durará un minuto entero (o hasta que tú decidas soltarme)." },
    { titulo: "Noche de Juegos", desc: "Jugamos a tu videojuego favorito, juego de mesa o cartas, y prometo dejarte ganar... tal vez." },
    { titulo: "Peinado VIP", desc: "Válido para que juegues con mi cabello, me hagas trenzas, me peines o me hagas piojito hasta que te canses." },
    { titulo: "Carta de Amor Express", desc: "Te escribiré una notita a mano diciéndote las 5 cosas que más me enamoraron de ti esta semana." },
    { titulo: "Pase de Antojo", desc: "Iré corriendo a la tiendita a comprarte ese dulce, papitas o chocolate que tanto se te antojó de la nada." },
    { titulo: "Baile en la Sala", desc: "Ponemos nuestra canción favorita a todo volumen y bailamos abrazados a mitad de la casa." },
    { titulo: "Chef de Postres", desc: "Prepararé un postre rápido y casero (como fresas con crema o hot cakes) con la forma que tú quieras." },
    { titulo: "Noche de Historias", desc: "Nos acostamos a recordar cómo nos conocimos, nuestras primeras citas y nuestros momentos más graciosos juntos." }
];

const TIEMPO_SEMANA_MS = 5 * 24 * 60 * 60 * 1000; // 7 días exactos
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
        }, 16000);
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
