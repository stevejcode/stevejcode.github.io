function integers()
{
    var number1, number2, number3, sum, average, product, total;

    number1 = parseInt(document.form.fnumber1.value);
    number2 = parseInt(document.form.fnumber2.value);
    number3 = parseInt(document.form.fnumber3.value);

    sum = number1 + number2 + number3;
    average = (number1 + number2 + number3)/3;
    product = number1 * number2 * number3;
    min = Math.min(number1, number2, number3);
    max = Math.max(number1, number2, number3);

    
    document.form.total1.value = sum;
    document.form.total2.value = average;
    document.form.total3.value = product;
    document.form.total4.value = max;
    document.form.total5.value = min;
                                   
}