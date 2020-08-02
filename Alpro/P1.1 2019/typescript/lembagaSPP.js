function Input(idElement) {
    var data;
    data = parseInt(document.getElementById(idElement).value);
    return data;
}
function HitungTotalPembayaran(banyakSiswa, spp) {
    var hasil;
    hasil = (banyakSiswa) * (spp);
    return hasil;
}
function Tampilkan(hasil) 
{
    document.getElementById("Output").innerHTML = hasil.toString + ",00"
    
}
function TotalPembayaran() {
    //Deklarasi letiabel
    var banyakSiswa;
    var spp;
    var totalPembayaran;
    //1. Input banyak siswa
    banyakSiswa = Input("banyakSiswa");
    //2. Input SPP
    spp = Input("spp");
    //3. Hitung Total Pembayaran
    totalPembayaran = HitungTotalPembayaran(banyakSiswa, spp);
    //4. Tampilkan Total Pembayaran
    Tampilkan(totalPembayaran);
    
}
