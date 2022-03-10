var a = 5;
let b = "kampus merdeka";
var nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];
let asal = "indonesia";

function perkenalan() {
    return console.log(
        "perkenalkan nama saya " +
        lengkap_arr[2] +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}
terdaftar = true;
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
nama = b;

console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();