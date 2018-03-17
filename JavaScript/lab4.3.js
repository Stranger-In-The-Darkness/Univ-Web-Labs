function show(sender) {
    document.getElementById(sender).classList = "";
    document.getElementById(sender).classList = 'drop-down-visible';
}

function hide(sender) {
    document.getElementById(sender).classList = "";
    document.getElementById(sender).classList = 'drop-down-hidden';
}