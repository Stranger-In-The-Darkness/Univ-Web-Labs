function OK() {
        var i = document.getElementById('img');

        var x = document.getElementById('width-text').value.toString();
        if (x !== "") {
            i.width = x;
        }

        x = document.getElementById('height-text').value.toString();
        if (x !== "") {
            i.height = x;
        }

        x = document.getElementById('border-text').value.toString();
        if (x !== "") {
            i.style.borderWidth = x;
        }

        x = document.getElementById('color-text').value.toString();
        if (x !== "") {
            i.style.borderColor = x;
        }

        x = document.getElementById('alt-text').value.toString();
        if (x !== "") {
            i.alt = x;
        }
}

    function notOK() {
        var x = document.getElementById('width-text').value = "";
       
        x = document.getElementById('height-text').value = "";

        x = document.getElementById('border-text').value = "";
      
        x = document.getElementById('color-text').value = "";
       
        x = document.getElementById('alt-text').value = "";
    }