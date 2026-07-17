// Registrar el Service Worker para hacer la app instalable en móviles
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Apuntamos a la raíz (./sw.js) que es donde creamos el archivo en el paso anterior
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('¡Service Worker registrado con éxito! 🎀', reg))
            .catch(err => console.warn('Error al registrar el Service Worker:', err));
    });
}
