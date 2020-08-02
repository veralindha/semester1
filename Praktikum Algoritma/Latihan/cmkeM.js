function hello() {
    var txtCM;
    txtCM = document.getElementById('txtCM');
    hitungPersamaan(parseInt(txtCM.value));
}
function hitungPersamaan(cm) {
    var hasil;
    hasil = cm / 100;
    outputMeter(hasil);
}
function outputMeter(hasil) {
    var lblHasil;
    lblHasil = document.getElementById('txtOutput');
    lblHasil.innerHTML = hasil.toString();
}
// function inputData(idElement: string)
// {
//     let data = parseInt(document.getElementById(idElement).nodeValue);
//     return data;
// }
// function prosesKonversi(cm : number) :number
// {
//     let hasil : number
//     hasil = cm / 100
//     return hasil;
// }
// function output(hasil : number, idElement : string)
// {
//     document.getElementById(idElement).nodeValue = hasil.toString()
// }
// function HitungMeter()
// {
//     let cm : number;
//     cm = inputData("txtCM")
//     let hasilMeter : number;
//     hasilMeter = prosesKonversi(cm);
//     output(hasilMeter, "txtOutput");
// }
