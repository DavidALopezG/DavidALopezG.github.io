const NOMBRE_CACHE = 'kitties-v1';
const RECURSOS = [
  './index.html',
  './css/estilos.css',
  './imagenes/icono-app.png'
];

// Instalar el Service Worker y guardar recursos básicos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(NOMBRE_CACHE).then((cache) => {
      return cache.addAll(RECURSOS).catch(err => console.log("Fallo al guardar en caché:", err));
    })
  );
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker activo 🎀');
});

// Responder a las peticiones (Obligatorio para que Chrome permita instalar la App)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      return respuesta || fetch(event.request);
    })
  );
});
