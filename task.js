/* let startTimer = Number(document.getElementById('timer').innerText);
let timer = setInterval(CountdownTimer, 1000); //объявим переменную для остановки setInterval, т.к. он работает бесконечно

function CountdownTimer() {        
        --startTimer        
        if (startTimer === 0) {
            alert("Вы победили в конкурсе");                    
        }
        document.getElementById('timer').innerText = startTimer
        //останавливаем счетчик: 
        if (startTimer === 0) { 
            clearInterval(timer);
            return
        }      
} */

/* Реализация таймера с объектом window.location

1.1 Перезагрузка страницы по истечении таймера */

/* let startTimer = Number(document.getElementById('timer').innerText);
let timer = setInterval(CountdownTimer, 1000); //объявим переменную для остановки setInterval, т.к. он работает бесконечно
function CountdownTimer() {        
        --startTimer        
        if (startTimer === 0) {
            location.reload(true);                    
        }
        document.getElementById('timer').innerText = startTimer
        //останавливаем счетчик: 
        if (startTimer === 0) { 
            clearInterval(timer);
            return
        }      
} */


/* Реализация таймера с объектом window.location

1.2 Открытие другой страницы по истечении таймера */

/* let startTimer = Number(document.getElementById('timer').innerText);
let timer = setInterval(CountdownTimer, 1000); //объявим переменную для остановки setInterval, т.к. он работает бесконечно
function CountdownTimer() {        
        --startTimer        
        if (startTimer === 0) {
            location = "http://www.mozilla.org";                    
        }
        document.getElementById('timer').innerText = startTimer
        //останавливаем счетчик: 
        if (startTimer === 0) { 
            clearInterval(timer);
            return
        }      
} */


/* Реализация таймера с объектом window.location
1.3 Скачивание файла по ссылке */

/* let startTimer = Number(document.getElementById('timer').innerText);
const a = document.getElementById('myAnchor')
let timer = setInterval(CountdownTimer, 1000); //объявим переменную для остановки setInterval, т.к. он работает бесконечно
function CountdownTimer() {        
        --startTimer        
        if (startTimer === 0) {
            a.click(); //скачивание документа                    
        }
        document.getElementById('timer').innerText = startTimer
        //останавливаем счетчик: 
        if (startTimer === 0) { 
            clearInterval(timer);
            return
        }      
} */

// Реализация счетчика формата HH:MM:SS с указанием времени на странице сайта

/* let timer = setInterval(CountdownTimer, 1000);
let hr = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');   */

 /* function CountdownTimer() {  
    
    sec.textContent = Number(sec.textContent) - 1;    
     
    if (Number(sec.textContent) === 0) {        
        min.textContent = Number(min.textContent) - 1;
        sec.textContent = 59;
    }

    if (Number(min.textContent) === 0) {        
        hr.textContent = Number(hr.textContent) - 1;
        min.textContent = 59;
    }

/*     if (Number(sec.textContent) < 10) {
        sec.textContent = "0" + Number(sec.textContent);
    } */



/*     if (Number(min.textContent) < 10) {
        min.textContent = "0" + Number(min.textContent);
    } */

/*     if (Number(hr.textContent) < 10) {
        hr.textContent = "0" + Number(hr.textContent);
    } */

    /*sec.textContent = (Number(sec.textContent) < 10) ? "0" + Number(sec.textContent) : sec.textContent;
    min.textContent = (Number(min.textContent) < 10) ? "0" + Number(min.textContent) : min.textContent;
    hr.textContent = (Number(hr.textContent) < 10) ? "0" + Number(hr.textContent) : hr.textContent;



    if (hr === 0) { 
        clearInterval(timer);
        return
    }      
} */

// Реализация счетчика формата HH:MM:SS с указанием времени в скрипте

let timer = setInterval(CountdownTimer, 1000);
let hr = 23;
let min = 59;
let sec = 59; 



function CountdownTimer() {
    
    document.getElementById('status-clock').innerHTML = 'До окончания конкурса осталось: ' + hr + ":" + min + ":" + sec;     
    
    sec--;    
     
    if (sec === 0) {        
        min--;
        sec = 59;
    }

    if (min === 0) {        
        hr--;
        min = 59;
    }

    sec = (sec < 10) ? "0" + sec : sec;
    min = (min < 10) ? "0" + min : min;
    hr = (hr < 10) ? "0" + hr : hr;

    if (hr === 0) { 
        clearInterval(timer);
        return
    };    
}