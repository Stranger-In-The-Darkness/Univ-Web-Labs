function onChecked(sender) {
    var res = document.getElementById('sum');
    if (sender.checked) {
        res.value = (parseFloat(res.value) + parseFloat(sender.value));
    }
    else {
        res.value = (parseFloat(res.value) - parseFloat(sender.value));
    }
}

function changeColor() {
    $(".numeric").css("background-color", "red").css("font-style", "italic").css("color", "black").css("font-weight", "semi-bold");
}