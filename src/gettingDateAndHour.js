/* Arrays of the days of the week and months */
const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


/* Getting the date and hour */
const $hour = document.getElementById('current-hour');

setInterval( () => {
    
    let today = new Date()

    $hour.innerText = timeAndDateConvert(today.getHours()) + ':' + timeAndDateConvert(today.getMinutes());

    document.querySelector('.day-of-the-week').innerHTML = weekDays[today.getDay()];

    document.getElementById('today').innerHTML = today.getDate() + ' de ' + months[today.getMonth()] + ', ' + today.getFullYear();
    

}, 500)