let total1: number = 0
let jml: number = 0;
let namabrg: string = ""
let belanja: Array < any > = new Array()
let totalblabla: number = 0;
let notatotalhabisdiskon: number = 0;

function input(idelement: string) {
    let inp: HTMLInputElement = < HTMLInputElement > document.getElementById(idelement)
    let data: number = parseInt(inp.value)
    return data;
}

function hitungAwal() {
    let hrgcantuk: number = 0
    let hrgcuek: number = 0
    let hrgpanci: number = 0
    let hrgdandang: number = 0
    let satuan: number = input('qty')
    let hrgbarang: number = input('barang')
    switch (hrgbarang) {
        case 5000:
            hrgcantuk = input('cantuk')
            total1 = hrgcantuk * satuan;
            namabrg = "cantuk";
            jml = satuan;
            totalblabla += total1;
            ( < HTMLInputElement > document.getElementById('hrg')).value = hrgcantuk.toString();
            break;
        case 10000:
            hrgcuek = input('cuek')
            total1 = hrgcuek * satuan;
            namabrg = "cuek";
            jml = satuan;
            totalblabla += total1;
            ( < HTMLInputElement > document.getElementById('hrg')).value = hrgcuek.toString();
            break;
        case 18000:
            hrgpanci = input('panci')
            total1 = hrgpanci * satuan;
            namabrg = "panci";
            jml = satuan;
            totalblabla += total1;
            ( < HTMLInputElement > document.getElementById('hrg')).value = hrgpanci.toString();
            break;
        case 20000:
            hrgdandang = input('dandang')
            total1 = hrgdandang * satuan;
            namabrg = "dandang";
            jml = satuan;
            totalblabla += total1;
            ( < HTMLInputElement > document.getElementById('hrg')).value = hrgdandang.toString();
            break;
    }
}

function lanjut1() {
    belanja.push({
        barang: namabrg,
        jumlah: jml,
        total: total1
    });
    ( < HTMLElement > document.getElementById('isi')).innerHTML = "";
    for (let i = 0; i < belanja.length; i++) {
        ( < HTMLElement > document.getElementById('isi')).innerHTML += "<tr><td>" + belanja[i].barang + "</td><td>" + belanja[i].jumlah + "</td><td>" + belanja[i].total + "</td></tr>";

        diskonku();
    }
}

function diskonku() {
    let totalbelanja: number = 0;
    let diskon: number = 0;
    totalbelanja = totalblabla;
    if (totalbelanja >= 50000) {
        diskon = totalbelanja * 5 / 100;
        ( < HTMLElement > document.getElementById('diskon')).innerHTML = diskon.toString();
    }
    notatotalhabisdiskon = (totalbelanja - diskon);
    ( < HTMLElement > document.getElementById('totalbelanja')).innerHTML = notatotalhabisdiskon.toString();
}

function nota() {
    let uang: number = input('uang');
    let kembalian: number = uang - notatotalhabisdiskon;
    let output: string = "";

    (<HTMLElement>document.getElementById('nota')).innerHTML = "";
    for (let i = 0; i < belanja.length; i++) {
        output += "<tr><td>" + belanja[i].barang + "</td><td>" + belanja[i].jumlah + "</td></tr>";
    }

    (<HTMLElement>document.getElementById('nota')).innerHTML = output;
    (<HTMLElement>document.getElementById('nota_duit')).innerHTML = "<tr><td>" + "Rp." + uang + "</td><td>" + "Rp." + kembalian + "</td></tr>";
    if(uang < notatotalhabisdiskon){
        alert("Uang Anda Kurang BRO !!");
    }
}

function reset(){
    (<HTMLInputElement>document.getElementById('qty')).value = "";
    (<HTMLInputElement>document.getElementById('hrg')).value = "";
    (<HTMLElement>document.getElementById('isi')).innerHTML = "";
    (<HTMLElement>document.getElementById('diskon')).innerHTML = "-";
    (<HTMLElement>document.getElementById('totalbelanja')).innerHTML = "-";
    (<HTMLInputElement>document.getElementById('uang')).value = "";
    (<HTMLElement>document.getElementById('nota')).innerHTML = "";
    (<HTMLElement>document.getElementById('nota_duit')).innerHTML = "";
}