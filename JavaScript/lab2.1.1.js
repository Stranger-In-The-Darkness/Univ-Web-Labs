function today() {
    var today = new Date();
    window.status = ('������� ' + today.getDate + '/' + (today.getMonth + 1) + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes());
}