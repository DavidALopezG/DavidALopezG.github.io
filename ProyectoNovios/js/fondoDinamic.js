document.addEventListener("DOMContentLoaded", function() {
    crearFondoDinamico();
});

function crearFondoDinamico() {
    const contenedor = document.getElementById("sanrioBackground");
    if (!contenedor) return;

    // Tipos de iconos bonitos que simulan a Hello Kitty (Gatitos y Moños icónicos)
    const iconosSanrio = ["fa-cat", "fa-paw", "fa-heart", "fa-bow","fa-sparkles", "fa-gift"];	
    const colores = [
        '#FF007F', // Rosa brillante
        '#FF69B4', // Hot Pink (Rosa fuerte)
        '#FFB6C1', // Rosa claro
        '#FF1493', // Rosa profundo
        '#FF4D4D', // Rojo claro / Coral
        '#FF0000', // Rojo puro
        '#E60000', // Rojo intenso
        '#C8102E', // Rojo cereza oscuro
        '#FF8DA1'  // Rosa pastel
      ];

    // Generar un elemento nuevo cada 1.5 segundos
    setInterval(() => {
        const elemento = document.createElement("i");
        
        // Seleccionar icono, color, tamaño y posición horizontal al azar
        const iconoRandom = iconosSanrio[Math.floor(Math.random() * iconosSanrio.length)];
        const colorRandom = colores[Math.floor(Math.random() * colores.length)];
        const posicionX = Math.random() * 100; // Porcentaje de la pantalla
        const tamano = Math.random() * (30 - 15) + 15; // Tamaño entre 15px y 30px
        const duracion = Math.random() * (15 - 8) + 8; // Velocidad de subida entre 8s y 15s

        // Aplicar clases de FontAwesome y estilos CSS directos
        elemento.className = `fa-solid ${iconoRandom} kitty-flotante`;
        elemento.style.left = `${posicionX}vw`;
        elemento.style.fontSize = `${tamano}px`;
        elemento.style.color = colorRandom;
        elemento.style.animationDuration = `${duracion}s`;

        contenedor.appendChild(elemento);

        // Eliminar el elemento del código una vez termine de subir para no saturar el navegador
        setTimeout(() => {
            elemento.remove();
        }, duracion * 1000);

    }, 1500); 
}