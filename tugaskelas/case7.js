//  [23.01.20 07:27]
// misal kamu punya 100000, berati kan uangnya 1 100000

// [23.01.20 07:28]
// kalo misal 17500, berarti pecahannya 10000, 5000, 2000, 200, 200, 100

var duit = [17500]; 
var pecahan = [10000, 5000, 2000, 500, 200, 200, 100];
var qadr = [];
var ss = pecahan.length;
var a;
for (let a = 0; a < ss; a++) { 
    if (duit > pecahan[a]) {
        qadr.push(pecahan[a]);
        var y = duit - pecahan[a];
        pecahan.splice(a, 1, y);
    }
}

console.log("ini uangnya" + "=>" + duit);
console.log(qadr.join("=>"));       
// console.log(ss.join("=>"));
