
const search = () => {

    const entry = document.getElementById('numbersearch').value;
    const entryDecimal = entry.split(".");

    if (entryDecimal[1] === undefined || entryDecimal[1].length < 4) {
        errorDecimal();
    } else {
        errors()
        final(entry);
    }
}

const clearFields = () => {
    document.getElementById('error').innerHTML = "";
    document.getElementById('answer').innerHTML = "";
    document.getElementById('numbersearch').value = "";
}

const errors = () => {
    document.getElementById('error').innerHTML = " ";
}

const errorDecimal = () => {
    document.getElementById('error').innerHTML = "Please make sure that the number typed has at least 4 decimal positions";
    document.getElementById('answer').innerHTML = "";
}

const final = (entry) => {

    let tenth = parseFloat(entry).toFixed(1);
    let hundredths = parseFloat(entry).toFixed(2);
    let thousandths = parseFloat(entry).toFixed(3);
    document.getElementById('answer').innerHTML = `
    
        Original Number: ${entry}
        A) Nearest integer: ${Math.round(entry)}
        B) Square root & round it to an integer: ${parseInt(Math.sqrt(entry))}
        C) Tenths position: ${tenth}
        D) Hundredths position: ${hundredths}
        E) Thousandths position: ${thousandths}
        
    `
    document.getElementById('numbersearch').value = "";
}