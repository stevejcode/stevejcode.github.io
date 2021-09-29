const celciusToFarenheit = () => {
    let numberInput = document.getElementById("number-input").value;

    let input = parseInt(numberInput)

    if (Number.isNaN(input)) {
        handleError();
    } else {

        let conversion = (9 / 5 * numberInput) + 32;

        document.getElementById("conversion").value = (`${numberInput}C is ${parseInt(conversion)}F`);
        document.getElementById("error").innerHTML = ""
    }

}

const farenheitToCelcius = () => {
    let numberInput = document.getElementById("number-input").value;

    let input = parseInt(numberInput)

    if (Number.isNaN(input)) {
        handleError();
    } else {

        let conversion = 5 / 9 * (numberInput - 32);

        document.getElementById("conversion").value = `${numberInput}F is ${parseInt(conversion)}C`;
        document.getElementById("error").innerHTML = ""
    }
}

const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p>Enter valid number values.</p>`;
    document.getElementById("conversion").value = ""
}