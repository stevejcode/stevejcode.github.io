//-----5%
// p = amount borrowed
// r = percentage
// n = years
// total = is the amount of money accumulated after n years, including interest.
let p = 1000;
let r = 0.05;
let n = 1 + r;
document.write("<h2>5% Interest</h2>")
    document.write('<table border="1">')
        document.write("<tr>")
            document.write("<th>Year</th>")
                document.write("<th>Amount on deposit</th>")
                    document.write("<th>Interest Rate</th>")
                        document.write("</tr>")
for (row = 1; row <= 10; row++) {
let total = p * n ** row;

    document.write("<tr>")
        document.write(`<td>${row}</td>`)
            document.write(`<td>${total.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</td>`)
                document.write(`<td>${r}</td>`)
                    document.write("</tr>")
} document.write("</table>")

//------6%------

let p6 = 1000;
let r6 = .06;
let n6 = 1 + r6;
document.write("<h2>6% Interest</h2>")
document.write('<table border="1">')
        document.write("<tr>")
            document.write("<th>Year</th>")
                document.write("<th>Amount on deposit</th>")
                    document.write("<th>Interest Rate</th>")
                        document.write("</tr>")
for (row = 1; row <= 10; row++) {
let total6 = p6 * n6 ** row;

    document.write("<tr>")
        document.write(`<td>${row}</td>`)
            document.write(`<td>${total6.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</td>`)
                document.write(`<td>${r6}</td>`)
                    document.write("</tr>")
} document.write("</table>")

//------7%------

let p7 = 1000;
let r7 = .07;
let n7 = 1 + r7;
document.write("<h2>7% Interest</h2>")
document.write('<table border="1">')
        document.write("<tr>")
            document.write("<th>Year</th>")
                document.write("<th>Amount on deposit</th>")
                    document.write("<th>Interest Rate</th>")
                        document.write("</tr>")
for (row = 1; row <= 10; row++) {
let total7 = p7 * n7 ** row;

    document.write("<tr>")
        document.write(`<td>${row}</td>`)
            document.write(`<td>${total7.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</td>`)
                document.write(`<td>${r7}</td>`)
                    document.write("</tr>")
} document.write("</table>")
