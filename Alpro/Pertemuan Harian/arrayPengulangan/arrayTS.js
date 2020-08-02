function Input(idElement) {
    var dataNomor;
    var data;
    data = document.getElementById(idElement);
    dataNomor = parseInt(data.value);
    return dataNomor;
}
var harga;
var qty;
var subTotal;
harga = new Array();
qty = new Array();
subTotal = new Array();
function IsiHarga() {
    harga = new Array();
    var data;
    var i;
    data = Input('txtData');
    i = Input('txtIndeks');
    harga[i] = data;
    document.getElementById('hasil').innerHTML = harga[i].toString();
    console.log(harga);
}
// function IsiQty()
// {
//     let data
//     data = Input('txtData');
//     indeks = Input('txtIndeks');
//     qty[indeks] = data;
// }
// function HitungSubTotal()
// {
//     teks = ""
//     for(i = 0; i < harga.length; i++){
//         subTotal[i] = harga[i] * qty[i]
//         teks = teks + harga[i] + ' * ' + qty[i] + ' = ' + subTotal[i];
//     }
//     document.getElementById('hasil').innerHTML = teks;
// }
