// case 5 (array & integer)
// mengurutkan dari nilai kecil ke nilai yang lebih besar dan menghapus nilai yang sama
// data: [4, 5, 8, 9, 0, 2, 8, 2, 11, 15, 2, 9, 0]
// perintah: jika kita menemukan nilai yang lebih kecil maka taruh nilai tersebut 
// di depan dan jika menemukan nilai yang sama hapus nilai tersebut
// output yang diharapkan:
// [0, 2, 4, 5, 8, 9, 11, 15]


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
                console.log(arrayDuplicate[a] + 'menghapus');
                arrayDuplicate.splice(a, 1)
            }
            // tambahkan a++ untuk menambah satu
           a++; 
        }
        // tambahkan i++ untuk nambah satu
       i++
}

console.log (arrayDuplicate.join(' '));
let siapa = arrayDuplicate.length;
let result2 = [];   

let z = 0;
while (z < siapa) {
    let x = Math.min( ... arrayDuplicate)
    let y = arrayDuplicate.indexOf(x)

    result2.push(arrayDuplicate[y])
    arrayDuplicate.splice(y, 1)
    z++
}

console.log(result2.join(' '));

// const buah = ['jeruk', 'nanas'];
// const newBuah = ['biji jeruk', ...buah]
// console.log(newBuah)