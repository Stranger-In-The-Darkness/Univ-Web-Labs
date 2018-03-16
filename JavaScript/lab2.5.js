function OK() {
    var r = 0;
    var a = document.getElementById('a').value;
    if (a !== "") {
        a = parseInt(a);
    }
    else {
        alert("Incorrect a!");
        cancel();
        return null;
    }

    var b = document.getElementById('b').value;
    if (b !== "") {
        b = parseInt(b);
    }
    else {
        alert("Incorrect b!");
        cancel();
        return null;
    }

    var x = document.getElementById('x').value;
    if (x !== "") {
        x = parseInt(x);
    }
    else {
        alert("Incorrect x!");
        cancel();
        return null;
    }

    r = 1 / (Math.pow(a, 3));
    r *= (Math.log(x) + (2 * b) / x - Math.pow(b, 2) / (2 * Math.pow(x, 2)));

    document.getElementById('res').value = Number.isNaN(r) ? "Функция в точке не отпределена" : r.toString();
}

function cancel() {
    document.getElementById('a').value = "";
    document.getElementById('b').value = "";
    document.getElementById('x').value = "";
    document.getElementById('res').value = "";
}