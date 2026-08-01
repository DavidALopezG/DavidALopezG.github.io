const BASE_CONOCIMIENTO = [
    {
        id: "saludo",
        categoria: "general",
        keywords: ["hola", "buenos dias", "buenas noches", "buenas tardes", "hey", "holaa", "que tal"],
        respuestas: [
            "¡Hola, David dijo que me creaste! 🎀 ¿Qué quieres recordar hoy sobre ustedes?",
            "¡Holaaa! 💖 Pregúntame lo que quieras de ustedes, por ejemplo David dijo que tu me creaste, Gracias!"
        ]
    },
    {
        id: "ayuda",
        categoria: "general",
        keywords: ["ayuda", "que sabes", "temas", "menu", "opciones", "que puedes contarme"],
        respuestas: [
            "Puedo contarte sobre: cómo se conocieron, el día que te pidió ser su novia, su viaje a la playa, sus colores favoritos, cumpleaños, sus mascotas y más. ¡Pregunta lo que quieras! "
        ]
    },
    {
        id: "como_conocimos",
        categoria: "historia",
        keywords: ["conocimos", "conocer", "como nos conocimos", "francisco", "hermano", "universidad"],
        respuestas: [
            "Se conocieron gracias a Francisco, el hermano menor de David, ¡eran compañeros de universidad! Un día salieron todos y ahí se vieron por primera vez, allá por septiembre de 2025. 💕"
        ],
        sugerencia: "¿Cómo nos conocimos?"
    },
    {
        id: "primeros_dias",
        categoria: "historia",
        keywords: ["primeros dias", "empezamos a salir", "septiembre", "al principio"],
        respuestas: [
            "Desde que se conocieron en septiembre de 2025 empezaron a salir casi todos los días. ¡No podían estar separados! 🥰"
        ]
    },
    {
        id: "noviazgo",
        categoria: "historia",
        keywords: ["novios", "novia", "pedida", "23 de octubre", "cuando empezamos a ser novios", "lloviendo", "aniversario"],
        respuestas: [
            "El 23 de octubre de 2025 te preguntó si querías ser su novia. Estaba lloviendo ese día, y desde ese momento son novios. 💖☔"
        ],
        sugerencia: "¿Cuándo empezamos a ser novios?"
    },
    {
        id: "playa",
        categoria: "historia",
        keywords: ["playa", "viaje", "marzo", "vacaciones"],
        respuestas: [
            "En marzo, fueron juntos a la playa. ¡Uno de los recuerdos favoritos de David! 🏖️💕, me contó un secreto, pero no me vuelvas a preguntar o escribir playa o vacaciones, guiño guiño",
            "No le digas que te dije pero, me contó que te había salvado de irte a nadar en la marea alta! 😱💖, espero no se lo digas, me dijo que era un secreto, dijo que se sintió como un superheroe"
        ],
        sugerencia: "Cuéntame de nuestro viaje a la playa"
    },
    {
        id: "colores",
        categoria: "gustos",
        keywords: ["color favorito", "colores", "que color te gusta"],
        respuestas: [
            "Tu color favorito depende del día, pero casi siempre es el rojo, el rosa o el negro. El de David es el verde. 💚❤️"
        ],
        sugerencia: "¿Cuáles son nuestros colores favoritos?"
    },
    {
        id: "nombre_ella",
        categoria: "datos",
        keywords: ["tu nombre", "nombre completo", "como te llamas", "alejandra" , "como me llamo"],
        respuestas: [
            "Te llamas Alejandra Oquendo, y tu me creaste!. 🎀"
        ]
    },
    {
        id: "nombre_el",
        categoria: "datos",
        keywords: ["mi novio", "como se llama", "david"],
        respuestas: [
            "Mi papá es David López. 💚"
        ]
    },
    {
        id: "cumple_ella",
        categoria: "datos",
        keywords: ["cuando es mi cumpleanos", "mi cumpleanos", "5 de octubre"],
        respuestas: [
            "Tu cumpleaños es el 5 de octubre. ¡David lo tiene marcado con corazones! 🎂💖"
        ],
        sugerencia: "¿Cuándo es mi cumpleaños?"
    },
    {
        id: "cumple_el",
        categoria: "datos",
        keywords: ["cuando es tu cumpleanos", "cumpleanos david", "30 de agosto"],
        respuestas: [
            "David cumple años el 30 de agosto. 🎂💚"
        ]
    },
    {
        id: "edad",
        categoria: "datos",
        keywords: ["edad", "cuantos anos tienes", "nacimos", "que edad"],
        respuestas: [
            "David nació en 2002 y tú en 2006. ¡Cada quien con su propio estilo! 😄"
        ]
    },
    {
        id: "mascotas",
        categoria: "gustos",
        keywords: ["mascota", "gato", "perro", "sopita", "jagger", "doberman"],
        respuestas: [
            "Tú tienes a Sopita, tu gatito naranja 🐱, y David tiene a Jagger, su perrito llorón Doberman Pinscher 🐕."
        ],
        sugerencia: "Cuéntame de nuestras mascotas"
    },
    {
        id: "estudios",
        categoria: "datos",
        keywords: ["estudias", "carrera", "diseno", "universidad estudias"],
        respuestas: [
            "Tú estudias diseño. ¡Se nota en tu buen gusto para todo! 🎨 No es por presumir pero, David ya me dijo que tu ganaste de reina de la carrera 🤩"
        ]
    },
    {
        id: "te_amo",
        categoria: "emocional",
        keywords: ["te amo", "te quiero", "te adoro", "love", "amor"],
        respuestas: [
            "¡Yo te amo muchísimo más! Más de lo que cualquier código pueda medir. David ni se diga, el me dió este espacio para que yo te lo diga siempre 💖🎀",
            "Y yo a ti, con todo mi corazón. Siempre. 💕 Att: David"
        ]
    },
    {
        id: "triste",
        categoria: "emocional",
        keywords: ["triste", "mal", "aburrida", "abrazo", "mal dia"],
        respuestas: [
            "Recuerda que estoy aquí para ti siempre. Te mando un abrazo llenos de 0 y 1, puede servirte si lo piensas. 🫂🎀",
            "Ánimo, mi vida. Ya quiero verte y darte un abrazo bien fuerte. 💕, algo que diría David, definitivamente"
        ]
    }
];

const RESPUESTAS_DEFECTO = [
    "Todavía no sé responder eso exactamente 🎀, pero puedes preguntarme por: cómo se conocieron, su pedida de novios, la playa, cumpleaños, mascotas o colores favoritos.",
    "Mmm, esa aún no la tengo guardada. Escribe 'ayuda' para ver todos los temas que conozco. 💖",
    "Eso es un secreto entre tú y yo 😉. Prueba con otra pregunta sobre tu relación con David, o escribe 'ayuda'."
];
