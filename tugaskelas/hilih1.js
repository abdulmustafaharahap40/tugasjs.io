// case 1 (string)
// hilih converter
// perintah: jika input yang dimasukkan "jika input yang dimasukkan" semua huruf vocal di ganti "i"
// output: "jiki inpit ying dimisikkin"

// string
let string = 'aku seorang anak yang tangguh';
// hitung jumlah string
// bikin variable vocal
let vocal = ['a', 'i', 'u', 'e', 'o'];
// string dijadikan array
let stringToArray = string.split('');
// tampung hasil array yang sudah di convert
let result = [];
// bikin perulangan untuk menyamakan string dan vocal
let i = 0;
while (i < string.length) {
    // masukkin char ke array result per [i]
    result.push(stringToArray[i]);
    let a = 0;
    while (a < vocal.length) {
        // cari char string yang sama dengan char vocal
        if (vocal[a] == stringToArray[i]) {
            // hapus huruf asli yang sekarang
            result.splice(i)
            // ketika sudah mendapatkan char yang sama, masukkin huruf "i" ke array result
            result.push("i");
        }
        a++;
    }
    i++
}
// gabung hasil array yang sudah sesuai tujuan
console.log(result.join(""));


