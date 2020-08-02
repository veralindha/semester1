function Input(idElement : string){
    let dataNomor : number
    let data : HTMLInputElement
    data = <HTMLInputElement>document.getElementById(idElement)
    dataNomor = parseInt(data.value)
    return dataNomor 
}

let harga : Array<number>
let qty : Array<number>
let subTotal : Array<number>
harga = new Array();
qty = new Array();
subTotal = new Array();

function IsiHarga()
{
    harga = new Array();
    let data : number
    let i : number
    data = Input('txtData');
    i = Input('txtIndeks')
    harga[i] = data
    document.getElementById('hasil').innerHTML = harga[i].toString()
    console.log(harga)
    
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