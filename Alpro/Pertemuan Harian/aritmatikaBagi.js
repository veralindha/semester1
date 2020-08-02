function Input(idElemen) {
    var data;
    data = parseInt(document.getElementById(idElemen).value);
    return data;
}
function Jumlah(bil1, bil2) {
    var hasil;
    hasil = bil1 + bil2;
    return hasil;
}
function Output(hasil) {
    document.getElementById("hasilPenjumlahan").innerHTML = hasil.toString();
}
function Bagi(bil1, bil2) {
    var hasil;
    hasil = bil1 / bil2;
    return hasil;
}
function Penjumlahan() {
    var bil1, bil2, hasil;
    bil1 = Input("txtBil1");
    bil2 = Input("txtBil2");
    hasil = Jumlah(bil1, bil2);
    Output(hasil);
}
function Pembagian() {
    var bil1, bil2, hasil;
    bil1 = Input("txtBil1");
    bil2 = Input("txtBil2");
    hasil = Bagi(bil1, bil2);
    Output(hasil);
}
