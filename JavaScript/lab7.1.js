function build() {
    var d1 = parseInt(document.getElementById('t1').value);
    var d2 = parseInt(document.getElementById('t2').value);
    var d3 = parseInt(document.getElementById('t3').value);
    var d4 = parseInt(document.getElementById('t4').value);
    var d5 = parseInt(document.getElementById('t5').value);
    var max = Math.max(d1, d2, d3, d4, d5);

    var sum = d1 + d2 + d3 + d4 + d5;

    $('#container').slideDown();

    $('#d1').css('height', String((d1 / sum) * 100) + "%");
    $('#d2').css('height', String((d2 / sum) * 100) + "%");
    $('#d3').css('height', String((d3 / sum) * 100) + "%");
    $('#d4').css('height', String((d4 / sum) * 100) + "%");
    $('#d5').css('height', String((d5 / sum) * 100) + "%");

    $('#d1').show(500);
    $('#d2').show(500);
    $('#d3').show(500);
    $('#d4').show(500);
    $('#d5').show(500);
}