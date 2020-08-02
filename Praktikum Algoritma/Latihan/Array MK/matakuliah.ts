//Deklarasi Array
let namaMK : string[] = Array()
let nilaiMK : number[] = Array()

function tambahMK(){
    let txtNamaMK : HTMLInputElement = <HTMLInputElement>document.getElementById('namaMK')
    let txtNilaiMK : HTMLInputElement = <HTMLInputElement>document.getElementById('nilaiMK')
    let namaMKIn : string = (txtNamaMK.value)
    let nilaiMKIn : number = parseInt(txtNilaiMK.value)
    namaMK.push(namaMKIn)
    nilaiMK.push(nilaiMKIn)
    let teks : string = " "
    for(let i=0; i < namaMK.length; i++){
        teks = teks + namaMK[i] + '-' + nilaiMK[i] + "<br>"
    }
    document.getElementById('paraHasil').innerHTML = teks
}
function rataMK(){
    let total : number
    let rata : number
    total = 0
    for(let i = 0; i < namaMK.length; i++){
        total = total + nilaiMK[i]
    }
    rata = total / nilaiMK.length
    document.getElementById('lblRataMK').innerHTML = rata.toString()
}