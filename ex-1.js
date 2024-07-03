// เริ่มเขียนโค้ดตรงนี้ 
function printPattern(n) {
   let result = "";
   for (let i = 1; i <= n; i++) {
    let row = "";
    for (let o = 1; o <= i; o++) {
        row += o + "\t";
    }
    result+= row + "\n"
   }
   return result
}

console.log(printPattern(5))