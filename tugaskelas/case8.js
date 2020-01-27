// bungkus while biar bisa ngulang
var tanya = true;
while ( tanya ) {

//menangkap pilihan player
var p = prompt('pilih : batu, kertas, gunting');

//menangkap pilihan computer

//membangkitkan bilangan random
var comp = Math.random();

if( comp < 0.34) {
    comp = 'batu';
} else if( comp >= 0.34 && comp < 0.67) {
    comp = 'gunting';
} else {
    comp = 'kertas';
}

var hasil = '';
//menentukan rules
if( p == comp) {
    hasil = 'SERI!';
} else if( p == 'batu') {
    // if( comp == 'gunting') {
    //     hasil = 'MENANG';
    // } else {
    //     hasil = 'KALAH!';
    // }
    hasil = ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
} else if ( p == 'gunting') {
    // if( comp == 'batu') {
    //     hasil = 'KALAH';
    // } else {
    //     hasil = 'MENANG!';
    // }
    hasil = ( comp == 'batu') ? 'KALAH!' : 'MENANG!';
} else if (p == 'kertas') {
    hasil = ( comp == 'gunting') ? 'KALAH!' : 'MENANG:';
} else {
    hasil = 'Tidak memasukan pilihan yang tepat'
}

//tampilan hasilnya
alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);

tanya = confirm ('apa kamu ingin main lagi?');

}

alert('Terimakasih anda sudah bermain berasama komputer.')
