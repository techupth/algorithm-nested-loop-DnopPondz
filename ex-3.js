// เริ่มเขียนโค้ดตรงนี้ 
function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j) + "\t";
        }
        console.log(row);
    }
}


multiplicationTable(5);