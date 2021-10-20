let sum = 0;
let prod = 1;

for (let i = 5; i <= 25; i += 4) {
    sum += i;
        prod *= i;
}
document.getElementById("sum").innerHTML = `<h2>Sum of 5 + 9 + 13 + 17 + 21 + 25 is : ${sum} </h2>`
    document.getElementById("prod").innerHTML = `<h2>Product of 5 * 9 * 13 * 17 * 21 * 25 is : ${prod.toLocaleString()} </h2>`

let sumW = 0;
    let prodW = 1;
        let add = 3
while (add <= 18) {
    sumW += add;
        prodW *= add;
            add += 3;
}
document.getElementById("sumW").innerHTML = `<h2>Sum of 3 + 6 + 9 + 12 + 15 + 18 is : ${sumW} </h2>`
    document.getElementById("prodW").innerHTML = `<h2>Product of 3 * 6 * 9 * 12 * 15 * 18 is : ${prodW.toLocaleString()} </h2>`