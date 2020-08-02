harga = new Array()
qty = new Array()
subTotal = new Array()

function Input(idElement){
    return document.getElementById(idElement).value
}

function IsiHarga(){
    data = parseInt((Input('txtData')))
    i = parseInt((Input('txtIndeks')))
    harga[i] = data
    console.log(harga[i])
}
function IsiQty(){
    data = parseInt((Input('txtData')))
    i = parseInt((Input('txtIndeks')))
    qty[i] = data
    console.log(qty[i])
}
function HitungSubTotal(){
    teks = ""
    for(i=0 ; i < harga.length; i++){
        subTotal[i] = harga[i] * qty[i];
        teks = teks + harga[i] + '*' + qty[i] + '=' + subTotal[i] + '<br>'
    }
    document.getElementById('hasil').innerHTML = teks
    total = 0
    for(i = 0; i<harga.length; i++){
        total = total + subTotal[i]
    }
    document.getElementById('total').innerHTML = total
}