// BANCO DE FRASES INTERNAS (Personaliza todas las que quieras)
const FRASES_GALLETA = [
    "Eres el motivo detrás de mi primera y más sincera sonrisa del día. Te amo.",
    "Hoy es un gran día para recordarte que me encantas exactamente tal y como eres.",
    "Si el día se pone gris o pesado, recuerda que en mi pecho siempre tienes un refugio.",
    "Tu risa es, por mucho, mi banda sonora favorita en todo el universo.",
    "Gracias por hacer de los momentos más simples de la vida una memoria inolvidable.",
    "Hoy te toca dejarte consentir. Envía este mensaje al chat para reclamar un mimo.",
    "Me haces sentir la persona más afortunada del mundo por compartir tu camino conmigo.",
    "Eres mi casualidad más bonita y el acierto más grande de mi vida entera.",
    "Recuerda respirar hondo hoy. Confío plenamente en todo lo que eres capaz de lograr.",
    "Cada día a tu lado me confirma que tomar tu mano fue la mejor decisión que he tomado.",
    "Concéntrate en lo que quieres lograr y ganarás. No lo olvides.",
    "El cielo será tu límite, pues grandes acontecimientos te sucederán.",
    "Te sentirás feliz como un niño y verás al mundo con sus ojos.",
    "Vivirás tu vejez con comodidades y riquezas materiales.",
    "Confía en tu suerte, que es mucha y te rodeará de prosperidad.",
    "No todo el mundo puede recibir las mismas cosas. Sé práctico.",
    "Te aguarda una larga y feliz vida.",
    "Hoy es el momento de explorar: no temas.",
    "Muy pronto serás incluido en muchas reuniones, fiestas y tertulias.",
    "Cuando busques lo que más deseas, recuerda hacer tu mejor esfuerzo.",
    "Tienes por delante un maravilloso día para triunfar; disfrútalo y compártelo.",
    "Hoy serás reconocido por tus dones especiales y lograrás ser feliz por muchas horas.",
    "Tu corazón estallará de alegría con la llegada de buenas noticias.",
    "Mañana puede ser muy tarde para disfrutar lo que tienes hoy.",
    "Serás promovido en tu trabajo debido a tus logros y capacidades.",
    "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo.",
    "Nunca tendrás que preocuparte por un ingreso estable.",
    "Hoy tendrás un día de increíble alegría y brillará tu sentido del humor.",
    "Hoy compartirás las horas más tiernas de tu vida con alguien muy amado.",
    "La rueda de la fortuna te favorecerá y estarás rodeado de profesperidad.",
    "Tendrás entera satisfacción al final de esta temporada. Prepárate.",
    "Muchos se alegrarán por tus logros y a ti te mejorará la vida.",
    "Eres una persona a la que le gusta triunfar en la vida.",
    "Confía en tu buen juicio y verás que este te lleva al triunfo.",
    "Se te cumplirá un hermoso sueño y verás cómo otros sueños se hacen realidad.",
    "No olvides que un amigo es un regalo que te das a ti mismo.",
    "Sabes qué es exactamente lo que quieres. Trabaja en ello y hazlo materializarse.",
    "Siente la felicidad que espera por ti y no olvides atraparla para mantenerla contigo.",
    "Si dudas entre dos caminos, elige el que te haga respirar más tranquila.",
    "La respuesta que buscas ya la sabes; solo necesitas el valor de aceptarla.",
    "Antes de decidir, pregúntate qué elegirías si no tuvieras miedo.",
    "No toda prisa merece una respuesta rápida. Date el tiempo que necesitas.",
    "Lo que hoy parece confuso, mañana se verá claro como el agua.",
    "Escucha primero a tu calma y después a tu ansiedad. La calma sabe más.",
    "Si algo te quita la paz, esa es tu señal para soltarlo.",
    "Una decisión tomada con amor propio rara vez se convierte en arrepentimiento.",
    "No necesitas tener todo resuelto hoy; solo el siguiente paso.",
    "Cuando compares opciones, elige la que te permita seguir siendo tú.",
    "Tu intuición ha sido más sabia que tus dudas más veces de las que recuerdas.",
    "Antes de decir que no puedes, pregúntate si en realidad no quieres.",
    "El orden en tu cabeza empieza por escribir lo que sientes en voz alta.",
    "Si algo te cuesta decidir, imagina cómo te sentirás con esa decisión en un año.",
    "A veces aclarar una idea solo requiere alejarse un poco de ella.",
    "No es indecisión, es que tu corazón está pidiendo más información. Dale tiempo.",
    "Elige lo que te sume paz, no lo que te sume aprobación.",
    "Hoy es un buen día para soltar la opción que ya no te representa.",
    "Confía: no necesitas la certeza total para dar el primer paso.",
    "Si dos caminos te asustan por igual, elige el que más te enseñe.",
    "Habla contigo con la misma paciencia con la que le hablarías a quien amas.",
    "Lo urgente rara vez es tan importante como parece a primera vista.",
    "Cuando algo pese demasiado en tu mente, ponlo en papel. Ahí pesa menos.",
    "Tu mejor decisión hoy puede ser simplemente descansar antes de decidir.",
    "Pregúntate qué versión de ti quiere tomar esta decisión: la del miedo o la de la calma.",
    "No busques la opción perfecta, busca la que puedas sostener con constancia.",
    "Aclarar una idea también es permitirte no tener la respuesta todavía.",
    "El silencio también responde: escúchalo antes de forzar una decisión.",
    "Si dudas si hablar o callar, casi siempre vale más la honestidad amable.",
    "Confía en que puedes cambiar de opinión sin que eso te haga menos capaz.",
    "Hoy, antes de decidir por otros, decide primero cómo te sientes tú.",
    "Una buena decisión no siempre se siente cómoda al inicio, y está bien.",
    "Si algo te genera dudas constantes, tal vez la respuesta ya es un no.",
    "Simplifica: de todas las opciones, ¿cuál te hace sentir más en paz al imaginarla?",
    "No necesitas resolverlo todo hoy, solo dar un paso más claro que ayer.",
    "Cuando la mente esté ruidosa, vuelve a lo simple: respira, ordena, decide.",
    "Confía en que equivocarte también es parte de aprender a decidir mejor.",
    "Hoy tu claridad vendrá de hacer una sola pregunta a la vez, no todas juntas.",
    "Si tu cuerpo dice que no aunque tu mente diga que sí, hazle caso al cuerpo.",
    "La duda de hoy será la lección que agradecerás mañana.",
    "Piensa menos en lo que 'deberías' hacer y más en lo que realmente quieres.",
    "A veces la mejor decisión es simplemente esperar un poco más.",
    "Confía en tus tiempos: no todo florece a la misma velocidad.",
    "Elige la opción que puedas explicarle a tu yo del futuro con orgullo.",
    "Hoy tu mente pide orden: empieza por lo pequeño y lo demás se acomodará.",
    "No dejes que el miedo escriba la respuesta que le toca escribir a tu corazón.",
    "Confía: cada decisión, buena o no, te acerca más a conocerte a ti misma.",
    "Si necesitas una señal para seguir adelante, aquí la tienes: sigue."
];

// Configuración de tiempo de espera (24 horas en milisegundos)
const TIEMPO_ESPERA_MS = 24 * 60 * 60 * 1000; 

let intervaloRelojBloqueo;

document.addEventListener("DOMContentLoaded", function() {
    // Comprobar si ya existe una galleta abierta previamente guardada
    const ultimaApertura = localStorage.getItem("galletaUltimaApertura");
    
    if (ultimaApertura) {
        const tiempoTranscurrido = Date.now() - parseInt(ultimaApertura);
        
        if (tiempoTranscurrido < TIEMPO_ESPERA_MS) {
            // Aún no pasan las 24 horas, bloquear galleta directamente
            mostrarBloqueoEspera(parseInt(ultimaApertura));
        } else {
            // El tiempo expiró, preparar nueva frase aleatoria limpia
            prepararNuevaFrase();
        }
    } else {
        prepararNuevaFrase();
    }
});

function prepararNuevaFrase() {
    // Escoge una frase basada de forma aleatoria del banco disponible
    // Si quieres que cambie matemáticamente por día del año exacto, me avisas
    const indiceRandom = Math.floor(Math.random() * FRASES_GALLETA.length);
    document.getElementById("textoDelMensaje").innerText = FRASES_GALLETA[indiceRandom];
}

function partirGalleta() {
    const galleta = document.getElementById("galletaInteractiva");
    
    // Evitar romperla si ya está en estado abierta
    if (galleta.classList.contains("abierta")) return;

    // Ejecutar animación visual
    galleta.classList.add("abierta");
    document.getElementById("instruccionAccion").innerText = "¡Tu mensaje ha sido revelado!";

    // Registrar marca de tiempo exacta del momento del clic en el navegador
    const ahora = Date.now();
    localStorage.setItem("galletaUltimaApertura", ahora.toString());

    // Activar el bloqueo visual suave tras unos segundos para que pueda leer la frase tranquilamente
    setTimeout(function() {
        mostrarBloqueoEspera(ahora);
    }, 30500); // 4.5 segundos de gracia para ver la animación y leer con calma antes del cambio de estado
}

function mostrarBloqueoEspera(tiempoOriginalApertura) {
    // Ocultar la galleta y sus instrucciones paso a paso
    document.getElementById("galletaInteractiva").classList.add("d-none");
    document.getElementById("instruccionAccion").classList.add("d-none");
    
    // Mostrar la interfaz del temporizador de reversa
    const bloqueEspera = document.getElementById("bloqueEspera");
    bloqueEspera.classList.remove("d-none");

    // Iniciar temporizador en tiempo real
    calcularTiempoRestante(tiempoOriginalApertura);
    intervaloRelojBloqueo = setInterval(function() {
        calcularTiempoRestante(tiempoOriginalApertura);
    }, 1000);
}

function calcularTiempoRestante(tiempoOriginalApertura) {
    const ahora = Date.now();
    const tiempoDestino = tiempoOriginalApertura + TIEMPO_ESPERA_MS;
    const faltanteMs = tiempoDestino - ahora;

    if (faltanteMs <= 0) {
        // El tiempo de bloqueo terminó
        clearInterval(intervaloRelojBloqueo);
        localStorage.removeItem("galletaUltimaApertura");
        window.location.reload(); // Recargar para permitir abrir una nueva
        return;
    }

    // Desglose de unidades
    const totalSegundos = Math.floor(faltanteMs / 1000);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    // Renderizado formateado de dos dígitos
    document.getElementById("tiempoRestante").innerText = 
        (horas < 10 ? "0" + horas : horas) + ":" + 
        (minutos < 10 ? "0" + minutos : minutos) + ":" + 
        (segundos < 10 ? "0" + segundos : segundos);
}