function calcDif() {
    var hours1 = parseInt(document.getElementById('hours1').value);
    var minutes1 = parseInt(document.getElementById('minutes1').value);
    var date1 = new Date(0, 0, 0, hours1, minutes1);

    var hours2 = parseInt(document.getElementById('hours2').value);
    var minutes2 = parseInt(document.getElementById('minutes2').value);
    var date2 = new Date(0, 0, 0, hours2, minutes2);

    alert((date2 - date1).toString() + " miliseconds");
}