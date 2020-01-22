// case 4 (array & integer)
// menghapus nilai yang sama
// data: [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
// perintah: jika kita menemukan nilai yang sama maka hapus nilai tersebut dan sisakan satu nilai yang tersisa
// output yang diharapkan:
// [23, 45, 67, 90, 1, 6, 12, 43]


// buat data arraynya
let arrayDuplicate = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
// bikin data arraynya 
let array = arrayDuplicate.length;
// buat result
let result = [];
// bkin let nya lagi ....
let i = 0;
// bikin while untuk kondisi dengan memasukkan let i dengan let array
while (i < array) {
    // masukkan let baru lalu + 1
    let a = i + 1;
        // bikin while lagi untuk masukkan kondisi let a 
            while (a < array) {
            // kondisi untuk ngechek index i apakah sama dengan perbandingan array
            if (arrayDuplicate[i] == arrayDuplicate[a]) {
                // hapus arrayDuplicate let a menggunakan delete 
                delete arrayDuplicate[a];
            }
            // tambahkan a++ untuk menambah satu
           a++;
        }
        // tambahkan i++ untuk nambah satu
       i++
}

// masukkan let result = dan masukkan arrayDuplicate.filter() untuk menciptakan sebuah array baru  
// result = arrayDuplicate.filter(() => { return true }) 
// let ril = result.length;
// // lalu console log hasilnya 
// console.log(result);


// buat data arraynya
// let arrayDuplicate = [1, 34, 6, 1, 1]
// // buat variable baru untuk nampung
// let result = [];
// let i = 0;
// let checkArray = (needle, hasytack) => {
//     for (var i = 0; i < hasytack.length; i++) {
//         if (hasytack[i] == needle) return true;
//     }
//     return false
// }
// while (i < arrayDuplicate.length) {
//     for(let a = 0; a < arrayDuplicate.length; a++){
//         // nggak boleh ngecheck diririnya sendiri
//         if (i != a) {
//             // kondisi untuk ngechek index i apakah sama dengan a
//             if (arrayDuplicate[i] == arrayDuplicate[a]) {
//                 let checkarray = checkArray(arrayDuplicate[i], result)
//                 if (!checkarray) {
//                     result.push(arrayDuplicate[i])
//                 }
//             }else {
//                 let checkarray = checkArray(arrayDuplicate[i], result)
//                 if (!checkarray) {
//                     result.push(arrayDuplicate[i])
//                 }
//             }
//         }
//     }
//     i++
// }
// console.log(result)
