setInterval(() => {
    let today = new Date();

    let month = today.getMonth()
    
    let year = today.getFullYear();

    document.getElementById("today").innerHTML = 'Today ' + month + '/' + year;

});
