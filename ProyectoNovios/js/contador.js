// CONFIGURACIÓN DE TU FECHA DE ANIVERSARIO
// Formato: Date(Año, Mes, Día, Hora, Minuto)
// IMPORTANTE: Los meses en JavaScript van de 0 a 11 (Enero=0, Febrero=1, Marzo=2... Mayo=4, Diciembre=11)
const FECHA_ANIVERSARIO = new Date(2025, 9, 23, 19, 25, 0); // Reemplaza con su fecha real

let intervaloContador;

function inicializarContador() {
    actualizarTiempo(); 
    intervaloContador = setInterval(actualizarTiempo, 1000); // Se refresca vivo cada 1 segundo
}

function actualizarTiempo() {
    const ahora = new Date();
    let diferenciaMs = ahora - FECHA_ANIVERSARIO;

    if (diferenciaMs < 0) return; // Por seguridad si la fecha es futura

    // Cálculo absoluto de meses calendario acumulados
    let aniosDif = ahora.getFullYear() - FECHA_ANIVERSARIO.getFullYear();
    let mesesDif = ahora.getMonth() - FECHA_ANIVERSARIO.getMonth();
    let totalMeses = (aniosDif * 12) + mesesDif;
    
    if (ahora.getDate() < FECHA_ANIVERSARIO.getDate()) {
        totalMeses--;
    }
    if (totalMeses < 0) totalMeses = 0;

    // Constantes de conversión temporal
    const unSegundo = 1000;
    const unMinuto = unSegundo * 60;
    const unaHora = unMinuto * 60;
    const unDia = unaHora * 24;
    const unaSemana = unDia * 7;

    // Cálculo de remanentes para dar una visualización fluida de reloj digital
    let diasTotales = Math.floor(diferenciaMs / unDia);
    let remSemanas = Math.floor((diasTotales % 30.43) / 7); // Semanas aproximadas restantes del mes actual
    let remDias = Math.floor((diferenciaMs % unaSemana) / unDia);
    let remHoras = Math.floor((diferenciaMs % unDia) / unaHora);
    let remMinutos = Math.floor((diferenciaMs % unaHora) / unMinuto);
    let remSegundos = Math.floor((diferenciaMs % unMinuto) / unSegundo);

    // Inserción en las cajas del HTML añadiendo un cero al inicio si el número es menor a 10
    document.getElementById("meses").innerText = paddingCero(totalMeses);
    document.getElementById("semanas").innerText = paddingCero(remSemanas);
    document.getElementById("dias").innerText = paddingCero(remDias);
    document.getElementById("horas").innerText = paddingCero(remHoras);
    document.getElementById("minutos").innerText = paddingCero(remMinutos);
    document.getElementById("segundos").innerText = paddingCero(remSegundos);
}

function paddingCero(numero) {
    return numero < 10 ? "0" + numero : numero;
}