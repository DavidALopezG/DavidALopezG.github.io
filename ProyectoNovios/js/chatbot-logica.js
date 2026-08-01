function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// Aplanamos la base para que Fuse busque sobre cada keyword individual
const indiceFuse = BASE_CONOCIMIENTO.flatMap(item =>
    item.keywords.map(kw => ({ keyword: normalizarTexto(kw), ref: item }))
);

let fuse = null;
if (typeof Fuse !== "undefined") {
    fuse = new Fuse(indiceFuse, {
        keys: ["keyword"],
        threshold: 0.35,   // tolerancia a errores (0 = exacto, 1 = todo coincide)
        distance: 100
    });
}

function buscarRespuesta(mensajeUsuario) {
    const texto = normalizarTexto(mensajeUsuario);

    // 1) Coincidencia directa (rápida y precisa)
    for (const item of BASE_CONOCIMIENTO) {
        for (const kw of item.keywords) {
            if (texto.includes(normalizarTexto(kw))) {
                return elegirRespuesta(item);
            }
        }
    }

    // 2) Búsqueda difusa con Fuse.js (si está disponible)
    if (fuse) {
        const resultados = fuse.search(texto);
        if (resultados.length > 0 && resultados[0].score < 0.4) {
            return elegirRespuesta(resultados[0].item.ref);
        }
    }

    // 3) Sin coincidencias
    return RESPUESTAS_DEFECTO[Math.floor(Math.random() * RESPUESTAS_DEFECTO.length)];
}

function elegirRespuesta(item) {
    const opciones = item.respuestas;
    return opciones[Math.floor(Math.random() * opciones.length)];
}

/* ======================================================
   INTERFAZ / EVENTOS
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const openChatBtn = document.getElementById("openChatBtn");
    const closeChatBtn = document.getElementById("closeChatBtn");
    const chatModal = document.getElementById("chatModal");
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const chatSuggestions = document.getElementById("chatSuggestions");

    openChatBtn.addEventListener("click", () => {
        chatModal.classList.add("active");
        chatInput.focus();
    });
    closeChatBtn.addEventListener("click", () => chatModal.classList.remove("active"));
    chatModal.addEventListener("click", (e) => {
        if (e.target === chatModal) chatModal.classList.remove("active");
    });

    cargarSugerencias();
    sendBtn.addEventListener("click", enviarMensaje);
    chatInput.addEventListener("keypress", (e) => { if (e.key === "Enter") enviarMensaje(); });

    function enviarMensaje() {
        const texto = chatInput.value.trim();
        if (!texto) return;

        agregarMensajeHTML(texto, "user-message");
        chatInput.value = "";

        const typingEl = mostrarEscribiendo();
        setTimeout(() => {
            typingEl.remove();
            const respuesta = buscarRespuesta(texto);
            agregarMensajeHTML(respuesta, "bot-message");
        }, 500 + Math.random() * 400);
    }

    function mostrarEscribiendo() {
        const div = document.createElement("div");
        div.className = "typing";
        div.innerText = "KittyBot está escribiendo...";
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return div;
    }

    function agregarMensajeHTML(texto, clase) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", clase);
        msgDiv.innerText = texto;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function cargarSugerencias() {
        chatSuggestions.innerHTML = "";
        BASE_CONOCIMIENTO.forEach(item => {
            if (item.sugerencia) {
                const btn = document.createElement("button");
                btn.classList.add("chip");
                btn.innerText = item.sugerencia;
                btn.onclick = () => {
                    chatInput.value = item.sugerencia;
                    enviarMensaje();
                };
                chatSuggestions.appendChild(btn);
            }
        });
    }
});
