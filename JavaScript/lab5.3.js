function onChecked(sender) {
    var res = document.getElementById('sum');
    if (sender.checked) {
        res.value = (parseFloat(res.value) + parseFloat(sender.value));
    }
    else {
        res.value = (parseFloat(res.value) - parseFloat(sender.value));
    }
}