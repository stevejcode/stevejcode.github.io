function integers() {
    //vars 
    var number1, number2, number3, sum, average, product, total;

    //using parseint for forms
    number1 = parseInt(document.form.fnumber1.value);

    number2 = parseInt(document.form.fnumber2.value);

    number3 = parseInt(document.form.fnumber3.value);

    //adding total of 3 numbers
    sum = number1 + number2 + number3;

    //getting the average
    average = (number1 + number2 + number3) / 3;

    //multiplying the three numbers
    product = number1 * number2 * number3;

    //getting lowest number of the three
    min = Math.min(number1, number2, number3);

    //getting highest numbers of the three
    max = Math.max(number1, number2, number3);

    //display sum total
    document.form.total1.value = sum;
    //display average total
    document.form.total2.value = average;
    //display product total
    document.form.total3.value = product;
    //display highest number
    document.form.total4.value = max;
    //display lowest number
    document.form.total5.value = min;

}