setInterval(() => {
    let today = new Date();

    let month = today.getMonth() + 1;
    
    let year = today.getFullYear();

    document.getElementById("today").innerHTML = 'Today ' + month + '/' + year;

});
