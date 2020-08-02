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

CekStatus = (hasil) =>
{
    var status;    
    if(hasil > 75)
    {
        status = "Lulus"
    }
    else
    {
        status = "Tidak Lulus"
    }
    return status;
}

function Output(hasil, idElement) 
{
    document.getElementById(idElement).innerHTML = hasil;
}
function Penjumlahan() {
    var bil1, bil2, hasil;
    bil1 = Input("txtBil1");
    bil2 = Input("txtBil2");
    hasil = Jumlah(bil1, bil2);
    var status = CekStatus(hasil);
    Output(hasil, "hasilPenjumlahan");
    Output(status, "hasilStatus");
}
