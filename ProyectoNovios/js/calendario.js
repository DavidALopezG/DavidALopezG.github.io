// CONFIGURACIÓN DEL CONTENIDO (Aquí es donde editas todo)
// Crea una lista de 31 objetos. 
// Si no hay foto para un día, puedes usar una por defecto.
const CONTENIDO_DIARIO = {
    1: { frase: "Eres mi primer pensamiento al despertar.", tarea: "Mándame un mensaje de audio diciendo qué soñaste.", imagen: "imagenes/fotos/1.png" },
    2: { frase: "Me encanta cómo suena mi nombre cuando lo dices tú.", tarea: "Hoy nos toca comer algo que nos guste mucho a ambos.", imagen: "imagenes/fotos/2.png" },
    3: { frase: "Cada día a tu lado es una nueva aventura que guardo en el corazón.", tarea: "Elige tu foto favorita de nosotros dos y ponla de fondo de pantalla hoy.", imagen: "imagenes/fotos/3.png" },
    4: { frase: "Tu sonrisa tiene el superpoder de arreglar cualquier día pesado.", tarea: "Hoy te toca enviarme una selfie haciendo tu mejor mueca divertida.", imagen: "imagenes/fotos/4.png" },
    5: { frase: "Me fascina la forma en la que me miras cuando crees que no me doy cuenta.", tarea: "Escríbeme una lista de 3 canciones que te recuerden a mí.", imagen: "imagenes/fotos/5.png" },
    6: { frase: "Amo todos tus lados, desde el más alegre hasta el más consentido.", tarea: "Hoy el derecho a un abrazo de oso de más de un minuto es completamente tuyo.", imagen: "imagenes/fotos/6.png" },
    7: { frase: "Eres mi lugar seguro en todo el universo.", tarea: "Mándame un mensaje contándome qué es lo que más te ha hecho reír esta semana.", imagen: "imagenes/fotos/7.png" },
    8: { frase: "Coincidir contigo ha sido el acierto más bonito de mi vida.", tarea: "Hoy vamos a jugar a las 20 preguntas por chat: tú preguntas y yo respondo con total honestidad.", imagen: "imagenes/fotos/8.png" },
    9: { frase: "Me encanta ver cómo logras todo lo que te propones. Admiro tu esfuerzo.", tarea: "¡Día de mimos! Reclama un masaje de manos o piojito la próxima vez que nos veamos.", imagen: "imagenes/fotos/9.png" },
    10: { frase: "Si pudiese congelar el tiempo, lo haría en cualquiera de tus abrazos.", tarea: "Hoy nos toca armar una playlist juntos. Elige 5 canciones que definan nuestra historia.", imagen: "imagenes/fotos/10.png" },
    11: { frase: "Haces que las cosas más simples se vuelvan mágicas si estás tú.", tarea: "Hoy te reto a un juego rápido (Piedra, papel o tijera por chat, o una partida de algún juego móvil). ¡El que pierda le debe un favor al otro!", imagen: "imagenes/fotos/11.png" },
    12: { frase: "Tu voz es mi sonido favorito del mundo entero.", tarea: "Hoy nos toca ver juntos el atardecer, ya sea en persona o mandándonos una foto si estamos lejos.", imagen: "imagenes/fotos/12.png" },
    13: { frase: "Contigo el amor se siente fácil, bonito y real.", tarea: "Mándame un sticker de Hello Kitty o de tu personaje favorito que describa cómo te sientes hoy.", imagen: "imagenes/fotos/13.png" },
    14: { frase: "Amo la complicidad que tenemos, somos el mejor equipo.", tarea: "Hoy cocinemos algo juntos en casa (así sea armar unos sándwiches temáticos o picar fruta).", imagen: "imagenes/fotos/14.png" },
    15: { frase: "Tu existencia hace que mi mundo sea mil veces más lindo.", tarea: "Recuérdame hoy cuál fue nuestro primer chiste local o apodo gracioso.", imagen: "imagenes/fotos/15.png" },
    16: { frase: "Adoro tus abrazos por la espalda, me hacen sentir en casa.", tarea: "Hoy te toca elegir la película o el video de YouTube que veremos más tarde.", imagen: "imagenes/fotos/16.png" },
    17: { frase: "Eres mi persona favorita hoy, mañana y el resto de mis días.", tarea: "Tómale una foto a algo bonito que veas en tu camino hoy y compártemela.", imagen: "imagenes/fotos/17.png" },
    18: { frase: "Me encanta aprender cosas nuevas contigo y de ti.", tarea: "Hoy cuéntame un dato curioso, un chisme o algo nuevo que hayas aprendido recientemente.", imagen: "imagenes/fotos/18.png" },
    19: { frase: "Amo cómo eres libre de ser tú cuando estás conmigo.", tarea: "Hoy cámbiame el apodo en nuestro chat por uno nuevo que sea muy tierno o divertido.", imagen: "imagenes/fotos/19.png" },
    20: { frase: "Gracias por tener siempre las palabras exactas cuando más lo necesito.", tarea: "Hoy nos toca recordar nuestra primera cita. Cuéntame qué fue lo primero que pensaste al verme.", imagen: "imagenes/fotos/20.png" },
    21: { frase: "Incluso en mis días más distraídos, estás presente en mi mente.", tarea: "Hoy te ganaste un 'Vale por un postre'. Elige tu favorito y yo te lo llevo pronto.", imagen: "imagenes/fotos/21.png" },
    22: { frase: "Tu felicidad siempre va a ser mi prioridad número uno.", tarea: "Escríbeme una sola palabra que describa lo que sientes cuando estamos juntos.", imagen: "imagenes/fotos/22.png" },
    23: { frase: "¡Feliz nuevo mes a mi lado! Cada día te amo más.", tarea: "Hoy tenemos una visita a los mochis para soplar otra velita, no te olvides!!.", imagen: "imagenes/fotos/23.png" },
    24: { frase: "Amo la paz que me transmites con solo tomar mi mano.", tarea: "Hoy tómate cinco minutos para estirarte, relajarte y escuchar tu canción favorita sin hacer nada más.", imagen: "imagenes/fotos/24.png" },
    25: { frase: "Tu risa escandalosa o bajita es el mejor premio que puedo recibir.", tarea: "Hoy busquemos un test divertido en internet (tipo '¿Qué personaje de Sanrio eres?') y compartamos los resultados.", imagen: "imagenes/fotos/25.png" },
    26: { frase: "Eres la combinación perfecta de ternura y diversión.", tarea: "Hoy te toca enviarme una recomendación de algo que deba escuchar, ver o leer.", imagen: "imagenes/fotos/26.png" },
    27: { frase: "Qué fortuna la mía haber coincidido en este gran tablero de la vida contigo.", tarea: "Organiza una videollamada corta o una llamada antes de dormir para contarnos lo mejor del día.", imagen: "imagenes/fotos/27.png" },
    28: { frase: "Haces que quiera ser una mejor versión de mí mismo todos los días.", tarea: "Hoy hazme un cumplido totalmente inesperado por mensaje.", imagen: "imagenes/fotos/28.png" },
    29: { frase: "Tu corazoncito es el tesoro más grande que cuido.", tarea: "Noche de juegos de mesa o cartas en casa. El perdedor prepara la merienda.", imagen: "imagenes/fotos/29.png" },
    30: { frase: "Amo planear el futuro contigo, todo se ve más brillante.", tarea: "Dime un lugar al que te gustaría que viajemos o visitemos juntos este año.", imagen: "imagenes/fotos/30.png" },
    31: { frase: "Porque todo en mi vida a tu lado parece posible, espero que estos seamos un dia", tarea: "Hoy nos toca darnos un abrazo infinito y tomar la selfie del recuerdo de este mes.", imagen: "imagenes/fotos/31.png" }
};

// Frase y tarea por defecto para días no configurados
const DEFAULT_CONTENIDO = {
    frase: "Cada día es una nueva oportunidad para ser felices juntos.",
    tarea: "Dame un beso de más de 10 segundos hoy.",
    imagen: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600"
};

document.addEventListener("DOMContentLoaded", function() {
    generarCalendario();
});

function generarCalendario() {
    const grid = document.getElementById("calendarioGrid");
    const hoy = new Date().getDate(); // Día actual del mes (1-31)
    
    // Generar 31 días
    for (let i = 1; i <= 31; i++) {
        const col = document.createElement("div");
        col.className = "col";
        
        const isBloqueado = i > hoy;
        const isEspecial = i === 23;
        
        col.innerHTML = `
            <div class="dia-caja ${isBloqueado ? 'bloqueado' : ''} ${isEspecial ? 'especial-23' : ''}" 
                 onclick="abrirDia(${i}, ${isBloqueado})">
                <div class="dia-interno">
                    <div class="dia-frente">
                        ${i}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    }
}

function abrirDia(dia, bloqueado) {
    const hoy = new Date().getDate(); // Obtener el día actual (1-31)
    const modalElement = new bootstrap.Modal(document.getElementById('modalSorpresa'));
    
    // CASO 1: El día es futuro (Bloqueado)
    if (bloqueado) {
        document.getElementById("modalDiaTitulo").innerText = "¡Aún no es tiempo!";
        document.getElementById("modalFrase").innerText = "Esta sorpresa se está horneando... Vuelve el día " + dia + ".";
        document.getElementById("modalTarea").innerText = "Paciencia, amor. Lo bueno se hace esperar.";
        // Imagen de Hello Kitty esperando
        document.getElementById("modalImagen").src = "imagenes/fotos/todaviano.png"; 
        
        modalElement.show();
        return;
    }

    // Obtener el contenido del día (o el por defecto)
    const contenido = CONTENIDO_DIARIO[dia] || DEFAULT_CONTENIDO;
    
    // CASO 2: El día YA PASÓ (Se bloquea la foto sorpresa para el próximo mes)
    if (dia < hoy) {
        document.getElementById("modalDiaTitulo").innerText = "Día " + dia + " (Completado)";
        document.getElementById("modalFrase").innerText = contenido.frase;
        document.getElementById("modalTarea").innerText = "¡Misión cumplida! Esta tarea ya fue superada.";
        
        // Colocamos una imagen fija e interactiva de Sanrio/Hello Kitty para proteger la foto real
        document.getElementById("modalImagen").src = "imagenes/fotos/yapaso.png"; 
        
        modalElement.show();
        return;
    }

    // CASO 3: Es el día de HOY (¡Acceso total!)
    document.getElementById("modalDiaTitulo").innerText = "¡Sorpresa de Hoy! - Día " + dia;
    document.getElementById("modalFrase").innerText = contenido.frase;
    document.getElementById("modalTarea").innerText = contenido.tarea;
    document.getElementById("modalImagen").src = contenido.imagen; // Muestra tu foto real (.png)

    modalElement.show();
}
