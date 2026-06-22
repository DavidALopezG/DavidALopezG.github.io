// CONFIGURACIÓN DE LAS CREDENCIALES FIJAS
const USUARIO_VALIDO = "miaumor"; // Cambia este valor por el nombre de usuario que quieras (en minúsculas, sin espacios
const CLAVE_VALIDA = "2310"; // Cambia este valor por su fecha de aniversario (ej: DDMM) o la clave que gustes

document.addEventListener("DOMContentLoaded", function() {
    // Comprobar si ya ingresó correctamente con anterioridad
    if (localStorage.getItem("sesionAmorActiva") === "true") {
        mostrarTableroPrincipal();
    }
});

function verificarAcceso(event) {
    event.preventDefault(); // Detiene la recarga por defecto del formulario

    const usuarioIngresado = document.getElementById("inputUsuario").value.toLowerCase().trim();
    const claveIngresada = document.getElementById("inputClave").value.trim();
    const mensajeError = document.getElementById("errorLogin");

    if (usuarioIngresado === USUARIO_VALIDO && claveIngresada === CLAVE_VALIDA) {
        // Guardar sesión activa localmente
        localStorage.setItem("sesionAmorActiva", "true");
        mensajeError.classList.add("d-none");
        mostrarTableroPrincipal();
    } else {
        // Mostrar alerta sutil de error
        mensajeError.classList.remove("d-none");
        document.getElementById("inputClave").value = ""; // Limpiar campo contraseña
    }
}

function mostrarTableroPrincipal() {
    document.getElementById("pantallaLogin").classList.add("d-none");
    const tablero = document.getElementById("contenidoPrincipal");
    tablero.classList.remove("d-none");
    
    // Ejecutar el contador una vez cargada la interfaz principal
    if (typeof inicializarContador === "function") {
        inicializarContador();
    }
}

function cerrarSesion() {
    localStorage.removeItem("sesionAmorActiva");
    window.location.reload(); // Recarga para volver a bloquear el acceso
}