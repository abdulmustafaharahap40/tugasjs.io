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


// // buat array rudi sama ani
// let rudi = [8, 7, 6, 9];
// let ani = [8, 8, 9, 6];
// // buat variable hasil nilai rudi
// let resultRudi = 0;
// // buat variable hasil nilai ani
// let resultAni = 0;
// // bandingkan nilai kedua siswa
// for(let k = 0; k < rudi.length; k++){
//     // console.log(rudi[k], ani[k]);
//     // validasi mana yang lebih tinggi
//     if (rudi[k] > ani[k]) {
//         resultRudi++
//     }else if (rudi[k] == ani[k]) {
        
//     }else {
//         resultAni++
//     }
// }
// console.log([resultRudi, resultAni])

var Mustafa = [8,7,6,9];
var Harahap = [8,8,9,6];

var resultMustafa = 0;
var resultHarahap = 0;

for (let o = 0; o < Mustafa.length; o++) {
    // console.log(Mustafa[o], Harahap[o])
    if (Mustafa[o] > Harahap[o]) {
        resultMustafa++
        // resultMustafa = resultMustafa + 1
        // resultMustafa += 1
        // resultMustafa+1
    }else if(Mustafa[o] == Harahap[o]){

    }else{
        resultHarahap++
    }
}
console.log(resultMustafa,resultHarahap);