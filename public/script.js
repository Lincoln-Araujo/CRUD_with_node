const plusButton = document.getElementById('plus-button');

const editButton = document.getElementById('edit-button');

const deleteButton = document.getElementById('delete-button');

const note = document.getElementsByClassName('note');

const task = document.getElementById('task');

// Form functions
function openForm() {
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("form-background").style.display = "flex";
    task.placeholder = "Qual sua tarefa pra hoje?"
    task.value = '';  
}

function editForm() {
    document.getElementById("myForm").style.display = "flex";

    document.getElementById("form-background").style.display = "flex"; 
}

function clearPlaceholder() {
    task.placeholder = '';
}

task.addEventListener("click", clearPlaceholder);
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("form-background").style.display = "none";
}

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
