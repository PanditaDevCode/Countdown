// Cuenta regresiva

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '04/17/2028 00:00:00'; // Fecha de fin

let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // Cálculo de días, horas, minutos y segundos
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el tiempo en los elementos correspondientes
    days.innerHTML = d + "<br><span>Dias</span>";
    hours.innerHTML = h + "<br><span>Horas</span>";
    minutes.innerHTML = m + "<br><span>Minutos</span>";
    seconds.innerHTML = s + "<br><span>Segundos</span>";

    // Animar las líneas de la cuenta regresiva (barras circulares)
    dd.style.strokeDashoffset = 440 - (440 * d) / 365; // 365 días al año
    hh.style.strokeDashoffset = 440 - (440 * h) / 24; // 24 horas al día
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60 minutos por hora
    ss.style.strokeDashoffset = 440 - (440 * s) / 60; // 60 segundos por minuto

    // Animar los dots (puntos circulares)
    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`; // 360° / 365 días = 0.986° por día
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360° / 24 horas = 15° por hora
    min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360° / 60 minutos = 6° por minuto
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360° / 60 segundos = 6° por segundo

    // Si el tiempo ha terminado
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
    }
}, 1000); // Intervalo de 1 segundo
