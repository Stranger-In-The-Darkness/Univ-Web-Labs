function checkData() {
    var x = document.getElementById('name');
    if (x.value.length > 0) {
        for (var c in x.value) {
            if (
                (
                    c.toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) ||
                    c.toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0)
                ) ||
                (
                    c.toLowerCase().charCodeAt(0) < 'à'.charCodeAt(0) ||
                    c.toLowerCase().charCodeAt(0) > 'ÿ'.charCodeAt(0)
                ) &&
                c.charCodeAt(0) !== '\''.charCodeAt(0)
            ) {
                alert('Incorrect name!');
                x.value = "";
                break;
            }
        }
    }
    else {
        alert("Empty name!");
    }

    x = document.getElementById('surname');
    if (x.value.length > 0) {
        for (var c in x.value) {
            if (
                (
                    c.toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) ||
                    c.toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0)
                ) ||
                (
                    c.toLowerCase().charCodeAt(0) < 'à'.charCodeAt(0) ||
                    c.toLowerCase().charCodeAt(0) > 'ÿ'.charCodeAt(0)
                ) &&
                c.charCodeAt(0) !== '\''.charCodeAt(0)
            ) {
                alert('Incorrect surname!');
                x.value = "";
                break;
            }
        }
    }
    else {
        alert("Empty surname!");
    }

    x = document.getElementById('e-mail');
    if (x.value.indexOf("@") === -1) {
        alert("Incorrect email!");
        x.value = "";
    }
    else {
        if (x.value.indexOf('.') === -1 || (x.value.indexOf('.') - x.value.indexOf('@')) <= 1) {
            alert("Incorrect email!");
        }
    }

    x = document.getElementById('postal-code');
    if (x.value.length === 5) {
        for (var c in x.value) {
            if (c.charCodeAt(0) < '0'.charCodeAt(0) || c.charCodeAt(0) > '9'.charCodeAt(0)) {
                alert("Incorrect postal code!");
                x.value = "";
                break;
            }
        }
    }
    else {
        alert("Incorrect postal code!");
        x.value = "";
    }
}