// // var hari="senin";
// // document.write(hari);

// var hari=["senin","selasa","rabu"];
// document.write(hari);

//membuat array
//cara ke1
// var hewan=["kucing","kelinci","monyet","panda","koala","sapi"];
//cara ke2
// var hewan=[];
// hewan=["kucing","kelinci","monyet","panda","koala","sapi",1];
// var MyArr=["senin",1,false]
var MyArr=function(){
    alert('aku adalkah kamu');
}
var myyy=[1,'4',false,MyArr(),[4,5,6]];
// console.log(hewan[5]);
// console.log(typeof(hewan))
// console.log(hewan.length);
//memanggil pada index ke 4 yang tipe data nya array ..menampilkan angka 5 yang terdapat pada index ke 1
console.log(myyy[4][1]);

