function counter_equal(array[]) {
    var res = "";
    for (i = 0; i < array.length - 1; i++) {
        for (i2 = 1; i2 < array.length; i2++) {
            if (array[i] === array[i2]) {
                res += String(i) + " - " + String(i2) + "\n";
            }
        }
    }
    alert(res === "" ? "No same numbers" : res);
}