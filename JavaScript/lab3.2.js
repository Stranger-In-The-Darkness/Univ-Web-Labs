var alph = "aeouiyàåó¿³îºÿèþ";

function leftMostLetter(str) {
    if (typeof (str) === typeof (String)) {
        var index = -1;
        for (var c in alph) {
            if (index === -1) {
                if (str.indexOf(c) !== -1) {
                    index = str.indexOf(c);
                }
            }
            else {
                if (str.indexOf(c) !== -1 && str.indexOf(c) <= index) {
                    index = str.indexOf(c);
                }
            }
        }
        return index;
    }
    else {
        return -1;
    }
}