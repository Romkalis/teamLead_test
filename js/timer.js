// function formatTime(minutes, seconds) {
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// // Функция для запуска таймера
// function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         display.textContent = formatTime(minutes, seconds);

//         if (--timer < 0) {
//             timer = 0;
//             // Действия при истечении времени (можно добавить здесь)
//         }
//     }, 1000);
// }

// // Запускаем таймер при загрузке страницы
// document.addEventListener('DOMContentLoaded', function () {
//     const display = document.getElementById('timer');
//     const duration = 30 * 60; // 30 минут в секундах

//     startTimer(duration, display);

// })


const TIME = 30; //сколько работать таймеру в минутах

const timerElement = document.getElementById('timer')
let time = TIME * 60 // оставшееся время в секундах
let updateTimer;

const setTime = () => {
    time --
    timerElement.textContent = Math.floor(time / 60).toString().padStart(2, '0') + ':' +Math.floor(time % 60).toString().padStart(2, '0')

    if (time <= 0) {
        timerElement.textContent = '00:00'
        clearInterval(updateTimer)
        document.removeEventListener('DOMContetntLoaded', onLoaded)
    }
}


const onLoaded = () => {
    updateTimer = setInterval(setTime, 1000);
}

document.addEventListener('DOMContentLoaded', onLoaded)


