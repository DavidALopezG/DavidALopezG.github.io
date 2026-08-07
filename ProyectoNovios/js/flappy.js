// CONFIGURACIÓN DEL JUEGO FLAPPY BIRD
const canvas = document.getElementById("flappyCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;

// Variables de estado
let juegoActivo = false;
let puntuacion = 0;
let mejorPuntuacion = 0;
let animacionId = null;

// ==========================================
// 🎨 CARGA DE IMÁGENES PERSONALIZADAS
// ==========================================
const imgFondo = new Image();
imgFondo.src = "./imagenes/fondos/fondo_juego.png"; // 👈 Cambia por la ruta de tu fondo

const imgTuberiaTop = new Image();
imgTuberiaTop.src = "../imagenes/fotos/todaviano.png"; // 👈 Cambia por la ruta de tu estructura superior

const imgTuberiaBottom = new Image();
imgTuberiaBottom.src = "./imagenes/fondos/columna_juego.png"; // 👈 Cambia por la ruta de tu estructura inferior

const kittyImg = new Image();
kittyImg.src = "./imagenes/fotos/sopita_juego.png"; // 👈 Cambia por la ruta de tu personaje


// ==========================================
// 🏃‍♂️ VARIABLES DE ANIMACIÓN Y SCROLL
// ==========================================
let fondoX = 0;             // Posición actual del fondo
let velocidadFondo = 0.8;   // Velocidad de desplazamiento del fondo (más lento que los obstáculos)

// Parámetros del personaje (Kitty)
let kitty = {
    x: 50,
    y: 200,
    radio: 18,
    gravedad: 0.38,
    velocidad: 0,
    salto: -6.5
};



// Parámetros de los obstáculos
let tuberias = [];
let anchoTuberia = 55; // Ajusta el ancho de tus estructuras según tus imágenes
let separacionTuberias = 135; // Espacio vertical libre para pasar
let velocidadTuberia = 2;
let contadorFrames = 0;

// Abrir y cerrar modal
function abrirJuegoFlappy() {
    document.getElementById("flappyModalOverlay").classList.add("active");
    document.body.classList.add("modal-open");
    prepararPantallaInicio();
}

function cerrarJuegoFlappy() {
    document.getElementById("flappyModalOverlay").classList.remove("active");
    document.body.classList.remove("modal-open");
    detenerJuego();
}

function prepararPantallaInicio() {
    detenerJuego();
    document.getElementById("flappyStartScreen").classList.remove("d-none");
    document.getElementById("flappyScreenTitle").innerText = "¡Flappy Kitty!";
    document.getElementById("flappyScreenSubtitle").innerText = "Toca la pantalla o presiona Espacio para volar y esquivar obstáculos.";
    document.getElementById("flappyScoreText").innerText = `Puntuación: 0 | Récord: ${mejorPuntuacion}`;
    dibujar();
}

function iniciarJuegoFlappy() {
    document.getElementById("flappyStartScreen").classList.add("d-none");
    
   // Reiniciar valores
   kitty.y = 200;
   kitty.velocidad = 0;
   tuberias = [];
   puntuacion = 0;
   contadorFrames = 0;
   fondoX = 0; // Reiniciar posición del fondo
   juegoActivo = true;

    document.getElementById("flappyScoreText").innerText = `Puntuación: 0`;

    if (animacionId) cancelAnimationFrame(animacionId);
    bucleJuego();
}

function detenerJuego() {
    juegoActivo = false;
    if (animacionId) cancelAnimationFrame(animacionId);
}

// Controladores de salto
function hacerSaltar() {
    if (!juegoActivo) return;
    kitty.velocidad = kitty.salto;
}

document.addEventListener("keydown", function(e) {
    if (e.code === "Space" && juegoActivo) {
        e.preventDefault();
        hacerSaltar();
    }
});

if (canvas) {
    canvas.addEventListener("touchstart", function(e) {
        e.preventDefault();
        hacerSaltar();
    }, { passive: false });

    canvas.addEventListener("mousedown", function(e) {
        hacerSaltar();
    });
}

// BUCLE PRINCIPAL DEL JUEGO
function bucleJuego() {
    if (!juegoActivo) return;

    actualizar();
    dibujar();

    animacionId = requestAnimationFrame(bucleJuego);
}

function actualizar() {
    // 🌌 1. Mover el fondo hacia la izquierda para simular avance
    fondoX -= velocidadFondo;
    if (fondoX <= -canvas.width) {
        fondoX = 0; // Se reinicia cuando avanza todo el ancho del lienzo
    }

    // 2. Gravedad del personaje
    kitty.velocidad += kitty.gravedad;
    kitty.y += kitty.velocidad;

    // Colisión con techo o suelo
    if (kitty.y + kitty.radio >= canvas.height || kitty.y - kitty.radio <= 0) {
        finalizarJuego();
        return;
    }

    // 3. Generar estructuras
    contadorFrames++;
    if (contadorFrames % 90 === 0) {
        let minAlt = 50;
        let maxAlt = canvas.height - separacionTuberias - minAlt;
        let altoTop = Math.floor(Math.random() * (maxAlt - minAlt + 1)) + minAlt;

        tuberias.push({
            x: canvas.width,
            topHeight: altoTop,
            bottomY: altoTop + separacionTuberias,
            pasado: false
        });
    }

    // Mover estructuras
    for (let i = 0; i < tuberias.length; i++) {
        let t = tuberias[i];
        t.x -= velocidadTuberia;

        // Detectar colisiones
        if (
            kitty.x + kitty.radio > t.x &&
            kitty.x - kitty.radio < t.x + anchoTuberia &&
            (kitty.y - kitty.radio < t.topHeight || kitty.y + kitty.radio > t.bottomY)
        ) {
            finalizarJuego();
            return;
        }

        // Puntaje
        if (t.x + anchoTuberia < kitty.x && !t.pasado) {
            t.pasado = true;
            puntuacion++;
            document.getElementById("flappyScoreText").innerText = `Puntuación: ${puntuacion}`;
        }
    }

    if (tuberias.length > 0 && tuberias[0].x < -anchoTuberia) {
        tuberias.shift();
    }
}

// ==========================================
// 🖌️ DIBUJO CON IMÁGENES PERSONALIZADAS
// ==========================================
function dibujar() {
    if (!ctx) return;

    // 1. DIBUJAR FONDO CON EFECTO DE AVANCE (Mapea la imagen 2 veces en bucle)
    if (imgFondo.complete && imgFondo.naturalWidth !== 0) {
        // Primera copia del fondo
        ctx.drawImage(imgFondo, fondoX, 0, canvas.width, canvas.height);
        // Segunda copia pegada justo al lado derecho para cubrir el espacio
        ctx.drawImage(imgFondo, fondoX + canvas.width, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = "#ffeef4";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 2. DIBUJAR ESTRUCTURAS / OBSTÁCULOS
    for (let t of tuberias) {
        ctx.fillStyle = "#ff8ebb"; // Rosa chicle
        ctx.strokeStyle = "#2a1e24"; // Borde oscuro
        ctx.lineWidth = 3;

        // Tuberia superior
        ctx.fillRect(t.x, 0, anchoTuberia, t.topHeight);
        ctx.strokeRect(t.x, 0, anchoTuberia, t.topHeight);

        // Tuberia inferior
        let altoBottom = canvas.height - t.bottomY;
        ctx.fillRect(t.x, t.bottomY, anchoTuberia, altoBottom);
        ctx.strokeRect(t.x, t.bottomY, anchoTuberia, altoBottom);
    }

    // 3. DIBUJAR PERSONAJE
    ctx.save();
    if (kittyImg.complete && kittyImg.naturalWidth !== 0) {
        ctx.beginPath();
        ctx.arc(kitty.x, kitty.y, kitty.radio, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(kittyImg, kitty.x - kitty.radio, kitty.y - kitty.radio, kitty.radio * 2, kitty.radio * 2);
        ctx.restore();

        // ❌ Se eliminó el ctx.stroke() para que ya no dibuje el borde exterior
    } else {
        ctx.fillStyle = "#ff4a85";
        ctx.beginPath();
        ctx.arc(kitty.x, kitty.y, kitty.radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function finalizarJuego() {
    detenerJuego();
    if (puntuacion > mejorPuntuacion) {
        mejorPuntuacion = puntuacion;
    }

    document.getElementById("flappyStartScreen").classList.remove("d-none");
    document.getElementById("flappyScreenTitle").innerText = "¡Game Over! 💔";
    document.getElementById("flappyScreenSubtitle").innerHTML = `Conseguiste <b>${puntuacion}</b> puntos.<br>Tu récord actual es: <b>${mejorPuntuacion}</b>`;
}