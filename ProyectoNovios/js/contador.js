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

    // 1. Cálculo absoluto de meses calendario acumulados
    let aniosDif = ahora.getFullYear() - FECHA_ANIVERSARIO.getFullYear();
    let mesesDif = ahora.getMonth() - FECHA_ANIVERSARIO.getMonth();
    let totalMeses = (aniosDif * 12) + mesesDif;
    
    // Crear una fecha intermedia para ver cuánto tiempo pasó exactamente desde el último "cumple-mes"
    let fechaUltimoMes = new Date(FECHA_ANIVERSARIO.getTime());
    fechaUltimoMes.setMonth(fechaUltimoMes.getMonth() + totalMeses);

    // Si la hora de hoy aún no pasa la hora del aniversario, restamos un mes
    if (ahora < fechaUltimoMes) {
        totalMeses--;
        fechaUltimoMes = new Date(FECHA_ANIVERSARIO.getTime());
        fechaUltimoMes.setMonth(fechaUltimoMes.getMonth() + totalMeses);
    }
    if (totalMeses < 0) totalMeses = 0;

    // Constantes de conversión temporal
    const unSegundo = 1000;
    const unMinuto = unSegundo * 60;
    const unaHora = unMinuto * 60;
    const unDia = unaHora * 24;

    // 2. Cálculo de días totales sobrantes desde el último "día 23"
    let diferenciaDesdeUltimoMes = ahora - fechaUltimoMes;
    let diasTotalesSobrantes = Math.floor(diferenciaDesdeUltimoMes / unDia);

    // 3. Desglose exacto en Semanas y Días remanentes
    let remSemanas = Math.floor(diasTotalesSobrantes / 7);
    let remDias = diasTotalesSobrantes % 7;

    // 4. Cálculo de Horas, Minutos y Segundos remanentes
    let remHoras = Math.floor((diferenciaDesdeUltimoMes % unDia) / unaHora);
    let remMinutos = Math.floor((diferenciaDesdeUltimoMes % unaHora) / unMinuto);
    let remSegundos = Math.floor((diferenciaDesdeUltimoMes % unMinuto) / unSegundo);

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
