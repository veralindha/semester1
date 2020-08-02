function input(idElement : string){
    let txtData : HTMLInputElement = <HTMLInputElement>document.getElementById(idElement)
    let bil : number = parseInt(txtData.value)
    console.log(bil)
    return bil 
}
// function prosesArrayHarga(hargaIn : number){
//     arrayHarga.push(hargaIn)
// }
// function prosesArrayQty(qtyIn : number){
//     arrayQty.push(qtyIn)
// }
function hitungSubTotal(){
    let harga : number
    harga = input('txtHarga')
    let qty : number
    qty = input('txtQty')
    let arraySubTotal : Array<number>
    let teks : string
    teks = ''
    let arrayHarga : Array<number>
    arrayHarga = new Array()
    let arrayQty : Array<number>
    arrayQty = new Array()
    arrayHarga.push(harga)
    arrayQty.push(qty)
    // arraySubTotal = new Array()
    // let teksHarga : string = ''
    // for(let i = 0; i < arrayHarga.length; i++){
    //     arraySubTotal[i] = arrayHarga[i] + arrayQty[i]
    //     teks = teks + arrayHarga[i] + "*" + arrayQty[i] + "=" + arraySubTotal[i]
    // }
    // arrayHarga.push(harga)
    // arrayQty.push(qty)
    // document.getElementById('arrayHarga').innerHTML = teksHarga
    document.getElementById('hasil').innerHTML = teks
    console.log(arrayHarga)
    console.log(arrayQty)
    console.log(arraySubTotal)
}