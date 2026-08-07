// CONFIGURACIÓN DEL CONTENIDO (Aquí es donde editas todo)
// Crea una lista de 31 objetos. 
// Si no hay foto para un día, puedes usar una por defecto.
const CONTENIDO_DIARIO = {
    1: { frase: "Ayer pensé en ti como tres veces sin razón aparente. Ya perdí la cuenta, la verdad.", tarea: "Cuéntame qué fue lo primero que se te vino a la mente al despertar hoy.", imagen: "imagenes/fotos/1.png" },
    2: { frase: "Tienes una forma de decir las cosas que me deja pensando el resto del día.", tarea: "Hoy comamos algo que nos guste a los dos, aunque sea comida chatarra.", imagen: "imagenes/fotos/2.png" },
    3: { frase: "A veces me pregunto cómo hice para acostumbrarme tan rápido a algo tan bueno como tú.", tarea: "Busca esa foto nuestra que más te gusta y ponla de fondo un rato.", imagen: "imagenes/fotos/3.png" },
    4: { frase: "Tu risa tiene ese efecto raro de arreglarme el humor sin que yo se lo pida.", tarea: "Mándame una selfie con la cara más chistosa que tengas guardada.", imagen: "imagenes/fotos/4.png" },
    5: { frase: "Hay gestos tuyos que ni tú notas y que a mí se me quedan grabados.", tarea: "Dime 3 canciones que últimamente te recuerdan a mí, sin pensarlo mucho.", imagen: "imagenes/fotos/5.png" },
    6: { frase: "Me gustas en todas tus versiones, incluso en la que está de mal genio.", tarea: "Hoy te toca cobrar un abrazo largo, de esos que no se cortan rápido.", imagen: "imagenes/fotos/6.png" },
    7: { frase: "Contigo hasta los días normales terminan siendo de los que uno recuerda.", tarea: "Cuéntame qué fue lo que más te hizo reír esta semana.", imagen: "imagenes/fotos/7.png" },
    8: { frase: "No sé si fue suerte o destino, pero me alegra que hayamos coincidido.", tarea: "Jugamos a las 20 preguntas por chat: tú preguntas, yo respondo sin filtro.", imagen: "imagenes/fotos/8.png" },
    9: { frase: "Verte cumplir lo que te propones me hace quererte todavía más.", tarea: "Reclama tu masaje de manos o tu piojito la próxima vez que nos veamos.", imagen: "imagenes/fotos/9.png" },
    10: { frase: "Un abrazo tuyo arregla más cosas de las que debería.", tarea: "Armemos juntos una playlist: 5 canciones que sientas que nos representan.", imagen: "imagenes/fotos/10.png" },
    11: { frase: "Contigo hasta lo aburrido se vuelve entretenido, no sé cómo lo haces.", tarea: "Un piedra, papel o tijera rápido por chat. Quien pierda le debe un favor al otro.", imagen: "imagenes/fotos/11.png" },
    12: { frase: "Tu voz sigue siendo de mis sonidos favoritos, así hablemos de cualquier cosa.", tarea: "Veamos el atardecer hoy, aunque sea mandándonos una foto cada uno.", imagen: "imagenes/fotos/12.png" },
    13: { frase: "Hay algo en lo simple que se vuelve especial cuando lo compartimos.", tarea: "Mándame un sticker que represente exactamente cómo te sientes hoy.", imagen: "imagenes/fotos/13.png" },
    14: { frase: "Somos buen equipo hasta para las cosas más tontas, y eso me encanta.", tarea: "Cocinemos algo juntos, aunque sea armar unos sándwiches raros.", imagen: "imagenes/fotos/14.png" },
    15: { frase: "Sigues siendo, por mucho, lo mejor que me ha pasado en bastante tiempo.", tarea: "Recuérdame cuál fue nuestro primer chiste interno o apodo random.", imagen: "imagenes/fotos/15.png" },
    16: { frase: "Tus abrazos por la espalda tienen un efecto que todavía no logro explicar.", tarea: "Hoy eliges tú qué vemos más tarde, película o video random de YouTube.", imagen: "imagenes/fotos/16.png" },
    17: { frase: "Sigues siendo mi persona favorita, incluso en tus días de mal genio.", tarea: "Tómale foto a algo bonito que veas hoy y mándamela sin explicación.", imagen: "imagenes/fotos/17.png" },
    18: { frase: "Me gusta cómo siempre terminas enseñándome algo sin proponértelo.", tarea: "Cuéntame algo curioso o un chisme que hayas escuchado últimamente.", imagen: "imagenes/fotos/18.png" },
    19: { frase: "Contigo puedo ser exactamente como soy, sin editar nada.", tarea: "Cámbiame el apodo del chat por uno nuevo, el más ridículo que se te ocurra.", imagen: "imagenes/fotos/19.png" },
    20: { frase: "Siempre encuentras las palabras justas cuando más las necesito, ni sé cómo.", tarea: "Cuéntame qué fue lo primero que pensaste cuando me viste esa primera vez.", imagen: "imagenes/fotos/20.png" },
    21: { frase: "Hasta en mis días más dispersos, de algún modo apareces en mis pensamientos.", tarea: "Te ganaste un vale por postre. Elige cuál y yo me encargo pronto.", imagen: "imagenes/fotos/21.png" },
    22: { frase: "Tu tranquilidad me contagia más de lo que te imaginas.", tarea: "Dime en una sola palabra qué sientes cuando estamos juntos.", imagen: "imagenes/fotos/22.png" },
    23: { frase: "Otro mes juntos y sigo pensando que fue de las mejores decisiones que he tomado.", tarea: "Hoy la cita la planeo yo, prepárate para algo distinto.", imagen: "imagenes/fotos/aniversario.png" },
    24: { frase: "Con solo tomarme la mano ya se me baja la ansiedad del día, es raro pero cierto.", tarea: "Tómate cinco minutos hoy solo para estirarte y escuchar tu canción favorita sin hacer nada más.", imagen: "imagenes/fotos/24.png" },
    25: { frase: "Tu risa, sea bajita o escandalosa, sigue siendo de mis sonidos favoritos.", tarea: "Busquemos un test random en internet tipo '¿qué personaje de Sanrio eres?' y comparemos resultados.", imagen: "imagenes/fotos/25.png" },
    26: { frase: "Tienes esa mezcla rara de ternura y locura que me encanta.", tarea: "Recomiéndame algo para ver, escuchar o leer, lo que se te ocurra.", imagen: "imagenes/fotos/26.png" },
    27: { frase: "De todas las personas que pude conocer, me alegra que hayas sido tú.", tarea: "Hagamos una llamada corta antes de dormir para contarnos lo mejor del día.", imagen: "imagenes/fotos/27.png" },
    28: { frase: "Contigo cerca siento ganas de ser mejor, sin que me lo pidas.", tarea: "Hazme un cumplido random que no me esperaba hoy.", imagen: "imagenes/fotos/28.png" },
    29: { frase: "Cuido lo nuestro más de lo que a veces logro poner en palabras.", tarea: "Noche de juegos de mesa o cartas. El que pierda prepara la merienda.", imagen: "imagenes/fotos/29.png" },
    30: { frase: "Pensar en el futuro contigo hace que todo se vea menos complicado.", tarea: "Dime un lugar al que te gustaría que viajemos este año.", imagen: "imagenes/fotos/30.png" },
    31: { frase: "Cada mes que cumplimos me confirma que esto que armamos vale cada esfuerzo.", tarea: "Nos merecemos un abrazo largo hoy y la selfie del recuerdo de este mes.", imagen: "imagenes/fotos/31.png" }
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