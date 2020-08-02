var total1 = 0;
var jml = 0;
var namabrg = "";
var belanja = new Array();
var totalblabla = 0;
var notatotalhabisdiskon = 0;
function input(idelement) {
    var inp = document.getElementById(idelement);
    var data = parseInt(inp.value);
    return data;
}
function hitungAwal() {
    var hrgcantuk = 0;
    var hrgcuek = 0;
    var hrgpanci = 0;
    var hrgdandang = 0;
    var satuan = input('qty');
    var hrgbarang = input('barang');
    switch (hrgbarang) {
        case 5000:
            hrgcantuk = input('cantuk');
            total1 = hrgcantuk * satuan;
            namabrg = "cantuk";
            jml = satuan;
            totalblabla += total1;
            document.getElementById('hrg').value = hrgcantuk.toString();
            break;
        case 10000:
            hrgcuek = input('cuek');
            total1 = hrgcuek * satuan;
            namabrg = "cuek";
            jml = satuan;
            totalblabla += total1;
            document.getElementById('hrg').value = hrgcuek.toString();
            break;
        case 18000:
            hrgpanci = input('panci');
            total1 = hrgpanci * satuan;
            namabrg = "panci";
            jml = satuan;
            totalblabla += total1;
            document.getElementById('hrg').value = hrgpanci.toString();
            break;
        case 20000:
            hrgdandang = input('dandang');
            total1 = hrgdandang * satuan;
            namabrg = "dandang";
            jml = satuan;
            totalblabla += total1;
            document.getElementById('hrg').value = hrgdandang.toString();
            break;
    }
}
function lanjut1() {
    belanja.push({
        barang: namabrg,
        jumlah: jml,
        total: total1
    });
    document.getElementById('isi').innerHTML = "";
    for (var i = 0; i < belanja.length; i++) {
        document.getElementById('isi').innerHTML += "<tr><td>" + belanja[i].barang + "</td><td>" + belanja[i].jumlah + "</td><td>" + belanja[i].total + "</td></tr>";
        diskonku();
    }
}
function diskonku() {
    var totalbelanja = 0;
    var diskon = 0;
    totalbelanja = totalblabla;
    if (totalbelanja >= 50000) {
        diskon = totalbelanja * 5 / 100;
        document.getElementById('diskon').innerHTML = diskon.toString();
    }
    notatotalhabisdiskon = (totalbelanja - diskon);
    document.getElementById('totalbelanja').innerHTML = notatotalhabisdiskon.toString();
}
function nota() {
    var uang = input('uang');
    var kembalian = uang - notatotalhabisdiskon;
    var output = "";
    document.getElementById('nota').innerHTML = "";
    for (var i = 0; i < belanja.length; i++) {
        output += "<tr><td>" + belanja[i].barang + "</td><td>" + belanja[i].jumlah + "</td></tr>";
    }
    document.getElementById('nota').innerHTML = output;
    document.getElementById('nota_duit').innerHTML = "<tr><td>" + "Rp." + uang + "</td><td>" + "Rp." + kembalian + "</td></tr>";
    if (uang < notatotalhabisdiskon) {
        alert("Uang Anda Kurang BRO !!");
    }
}
function reset() {
    document.getElementById('qty').value = "";
    document.getElementById('hrg').value = "";
    document.getElementById('isi').innerHTML = "";
    document.getElementById('diskon').innerHTML = "-";
    document.getElementById('totalbelanja').innerHTML = "-";
    document.getElementById('uang').value = "";
    document.getElementById('nota').innerHTML = "";
    document.getElementById('nota_duit').innerHTML = "";
}
