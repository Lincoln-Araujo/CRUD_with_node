/* Arrays of the days of the week and months */
const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


/* Getting the date and hour */

const $date = document.querySelector('#today');

const $dayWeek = document.querySelector('#day-of-the-week');

const $currentHour = document.querySelector('#current-hour');

function timeConvert(element) {
    if (element < 10) {
        element = '0' + element
    }

    return element
}

setInterval( () => {

    const today = new Date();

    $date.innerHTML = today.getDate() + ' de ' + months[today.getMonth()] + ', ' + today.getFullYear();

    $dayWeek.innerHTML = weekDays[today.getDay()];    

    $currentHour.innerText = today.getHours() + ':' + timeConvert(today.getMinutes());    

}, 500);

// close function
const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none";
}, 3000);

// form function

function closeForm () {
    document.getElementById("form-notes").style.display = "none";
    
}

function openForm () {
    document.getElementById("form-notes").style.display = "flex";
    document.getElementById("task").value ='';
    console.log("eu fui clicado")
}

// edit Form
function closeEditForm () {
    document.getElementById("form-edition").style.display = "none";
    console.log("display alterado")
}


