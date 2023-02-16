let startTimer = Number(document.getElementById('timer').innerText);
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
}

/* Реализация таймера с объектом window.location

1.1 Перезагрузка страницы по истечении таймера */

/* let startTimer = Number(document.getElementById('timer').innerText);
let timer; //объявим переменную для остановки setInterval, т.к. он работает бесконечно
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
}

timer = setInterval(CountdownTimer, 1000); */


/* Реализация таймера с объектом window.location

1.2 Открытие другой страницы по истечении таймера */

/* let startTimer = Number(document.getElementById('timer').innerText);
let timer; //объявим переменную для остановки setInterval, т.к. он работает бесконечно
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
}

timer = setInterval(CountdownTimer, 1000); */


/* Реализация таймера с объектом window.location
1.3 Скачивание файла по ссылке */

/* let startTimer = Number(document.getElementById('timer').innerText);
const a = document.getElementById('myAnchor')
let timer; //объявим переменную для остановки setInterval, т.к. он работает бесконечно
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
}

timer = setInterval(CountdownTimer, 1000); */

// Реализация счетчика формата HH:MM:SS - не сделано!

/* let timer;
let hr = Number(document.getElementById('hours').innerText);
let min = Number(document.getElementById('min').innerText);
let sec = Number(document.getElementById('sec').innerText);  

function CountdownTimer() {  
    
    --sec;

    if (sec == 0) {
        //clearInterval(timer)
        sec = '00';        
        --min;
    }

    if (min == 0) {
        min = '00'        
        --hr;
    }

    document.getElementById('hours').innerText = hr;
    document.getElementById('min').innerText = min;
    document.getElementById('sec').innerText = sec;    
    
}

timer = setInterval(CountdownTimer, 1000) */