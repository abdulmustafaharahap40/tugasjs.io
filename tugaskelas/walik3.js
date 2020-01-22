// case 3 (string)
// Mengembalikan kata benar ketika membaca kata dari belakang maupun depan hasilnya sama
// ex case:
// kodok: dibaca dari depan kodok dibaca dari belakang kodok = benar
// kaca: dibaca dari depan kaca dibaca dari belakang acak = salah
// output yang diharapkan:
// input kodok output benar
// input kaca output salah


// buat string
let string = 'acak';
let c = string.split('');
// kita balik hasil dari variable string
// 1. buat vairable untuk nampung hasil balik string
let stringReverse = [];
// proses balik
let i = string.split('').length;
while (i > 0) {
    i--
    stringReverse.push(c[i])
}
console.log('------------------------')
// buat variable stringBalik
let stringBalik = stringReverse.join("");
if (stringBalik == string) {
    console.log(true)
}else {
    console.log(false)
}
