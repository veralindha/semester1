function input(idElement) {
    var txtData = document.getElementById(idElement);
    var bil = parseInt(txtData.value);
    console.log(bil);
    return bil;
}
// function prosesArrayHarga(hargaIn : number){
//     arrayHarga.push(hargaIn)
// }
// function prosesArrayQty(qtyIn : number){
//     arrayQty.push(qtyIn)
// }
function hitungSubTotal() {
    var harga;
    harga = input('txtHarga');
    var qty;
    qty = input('txtQty');
    var arraySubTotal;
    var teks;
    teks = '';
    var arrayHarga;
    arrayHarga = new Array();
    var arrayQty;
    arrayQty = new Array();
    arrayHarga.push(harga);
    arrayQty.push(qty);
    // arraySubTotal = new Array()
    // let teksHarga : string = ''
    // for(let i = 0; i < arrayHarga.length; i++){
    //     arraySubTotal[i] = arrayHarga[i] + arrayQty[i]
    //     teks = teks + arrayHarga[i] + "*" + arrayQty[i] + "=" + arraySubTotal[i]
    // }
    // arrayHarga.push(harga)
    // arrayQty.push(qty)
    // document.getElementById('arrayHarga').innerHTML = teksHarga
    document.getElementById('hasil').innerHTML = teks;
    console.log(arrayHarga);
    console.log(arrayQty);
    console.log(arraySubTotal);
}
