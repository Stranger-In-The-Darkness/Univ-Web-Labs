function onTick() {
    var clock = document.getElementById('clock');
    var date = new Date();
    clock.innerHTML = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    setTimeout(onTick, 500);
}