// case 1 (string)
// hilih converter
// perintah: jika input yang dimasukkan "jika input yang dimasukkan" semua huruf vocal di ganti "i"
// output: "jiki inpit ying dimisikkin"

// case 2 (array)
// Membandingkan nilai rudi dan ani
// rudi punya nilai:
// sejarah: 8
// matematika: 7
// sosiologi: 6
// kewarganegaran: 9

// ani punya nilai:
// sejarah: 5
// matematika: 8
// sosiologi: 9
// kewarganegaran: 6
// perintah: jika nilai salah satu murid lebih tinggi maka akan mendapatkan nilai 1
// output yang diharapkan:
// [rudi => 2, ani => 2];

// case 3 (string)
// Mengembalikan kata benar ketika membaca kata dari belakang maupun depan hasilnya sama
// ex case:
// kodok: dibaca dari depan kodok dibaca dari belakang kodok = benar
// kaca: dibaca dari depan kaca dibaca dari belakang acak = salah
// output yang diharapkan:
// input kodok output benar
// input kaca output salah

// case 4 (array & integer)
// menghapus nilai yang sama
// data: [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
// perintah: jika kita menemukan nilai yang sama maka hapus nilai tersebut dan sisakan satu nilai yang tersisa
// output yang diharapkan:
// [23, 45, 67, 90, 1, 6, 12, 43]

// case 5 (array & integer)
// mengurutkan dari nilai kecil ke nilai yang lebih besar dan menghapus nilai yang sama
// data: [4, 5, 8, 9, 0, 2, 8, 2, 11, 15, 2, 9, 0]
// perintah: jika kita menemukan nilai yang lebih kecil maka taruh nilai tersebut 
// di depan dan jika menemukan nilai yang sama hapus nilai tersebut
// output yang diharapkan:
// [0, 2, 4, 5, 8, 9, 11, 15]


// case 1
  //string
//   let string = 'Selamat Pagi';
//   // hitung jumlah string
//   // bikin variabel vocal
//   let vocal = ['a', 'i', 'u', 'e', 'o'];
//   // string di jadikan array
//   let stringToArray = string.split('');
//   // tampung hasil array yang sudah di convert
//   let result = [];
//   // bikin perulangan untuk menyamakan string dan vocal 
//   let i = 0;
//   while (i < string.length) {
//           // masukkan char ke array result per [i]
//           result.push(stringToArray[i]);
//           let a = 0;
//           while (a < vocal.length) {
//                   // cari char string yag sama dengan char vocal
                  
//                   if(vocal[a] == stringToArray[i]) {
//                           // Ketika sudah mendapatkan char yang sama , masukkan huruf "i" ke array result
//                           result.push("i");
//                           // hapus huruf asli yang sekarang 
//                           result.splice(i)
//                   }
//           }
//   } 
// // case 2
// let rudi = [8, 7, 6, 9];
// let ani = [5, 8, 9, 6];
// // buat array ani dan rudi

// // bandingkan nilai kedua siswa 
// for (let k = 0; k < rudi.length; k++) {
//     console.log(rudi[k], ani[k]);
//     // validasi mana yang lebih tinggi
//     if (rudi[k] > ani[k]) {
        
//     }
    
// }

// // case 3

// // buat string3
// let string = 'kaca';
// let stringToArray = string.split('');
// console.log(stringToArray)
// // kita balik hasil dari variabel string
// // 1.buar variabel untuk nampung variabel string
// let stringReverse = [];
// // proses balik
// let i = stringToArray.length;
// while (i > 0) {
//     i--
//     stringReverse.push(stringToArray[i])
// }
// // buat variabel stringBalik
// let stringBalik = stringReverse.join("");
// if (stringBalik = ) {
    
// }

// // case 4
// // buat data array 
// let arrayDuplicate = []
// // buat variable baru untuk nampung
// let result = [];
// let i = 0;
// while (i < arrayDuplicate.length) {
//     for(let a = 0; a < arrayDuplicate.length; a++){
//     // enggak boleh ngeheck dirinya sendiri
//     if (i == a) {
//     //    kondisi untuk mengecek index i apakah sama dengan a
//         if (arrayDuplicate[i] == arrayDuplicate[a]) {
//             result.push(arrayDuplicate[i]) {
                
//             }
//             }
//         }
//     }
//     i++
// }

// case 5