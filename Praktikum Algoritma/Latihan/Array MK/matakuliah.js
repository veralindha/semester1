//Deklarasi Array
var namaMK = Array();
var nilaiMK = Array();
function tambahMK() {
    var txtNamaMK = document.getElementById('namaMK');
    var txtNilaiMK = document.getElementById('nilaiMK');
    var namaMKIn = (txtNamaMK.value);
    var nilaiMKIn = parseInt(txtNilaiMK.value);
    namaMK.push(namaMKIn);
    nilaiMK.push(nilaiMKIn);
    var teks = " ";
    for (var i = 0; i < namaMK.length; i++) {
        teks = teks + namaMK[i] + '-' + nilaiMK[i] + "<br>";
    }
    document.getElementById('paraHasil').innerHTML = teks;
}
function rataMK() {
    var total;
    var rata;
    total = 0;
    for (var i = 0; i < namaMK.length; i++) {
        total = total + nilaiMK[i];
    }
    rata = total / nilaiMK.length;
    document.getElementById('lblRataMK').innerHTML = rata.toString();
}
