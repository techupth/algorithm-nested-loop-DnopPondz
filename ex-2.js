// เริ่มเขียนโค้ดตรงนี้ 
function printStar(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
     let row = "";
     for (let o = 1; o <= i; o++) {
         row += "*" + "\t";
     }
     result+= row + "\n"
    }
    return result
 }

 console.log(printStar(5));

