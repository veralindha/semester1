function Input(idElemen : string)
{
    let data : number;
    data = parseInt(document.getElementById(idElemen).nodeValue);
    return data;
}
function Jumlah(bil1 : number, bil2 : number)
{
    let hasil : number;
    hasil = bil1 + bil2;
    return hasil;
}
function Output(hasil : number)
{
    document.getElementById("hasilPenjumlahan").innerHTML = hasil.toString();
}

function Bagi(bil1 : number, bil2 : number)
{
    let hasil : number;
    hasil = bil1 / bil2;
    return hasil;
}
function Penjumlahan()
{
    let bil1,bil2,hasil : number;
    bil1 = Input("txtBil1");
    bil2 = Input("txtBil2");
    hasil = Jumlah(bil1, bil2);
    Output(hasil);
}

function Pembagian()
{
    let bil1,bil2,hasil : number;
    bil1 = Input("txtBil1");
    bil2 = Input("txtBil2");
    hasil = Bagi(bil1, bil2);
    Output(hasil);
}