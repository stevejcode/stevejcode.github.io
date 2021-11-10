const short = 0;
const statename = 1;
const capital = 2;
const population = 3;
let states = [["AL", "AK", "AZ", "AR", "CA", "CO"], ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"], ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver"], ["4,903,185", "731,545", "7,278,717", "3,017,825", "39,512,223", "5,758,736"]]

const checker = () => {
    let dataFound = false;
    let entry = document.getElementById("search").value;
    for (let l = 0; l < states.length; l++) {
        for (let a = 0; a < 6; a++) {
            if (states[short][a].toLocaleLowerCase() === entry.toLowerCase() || states[statename][a].toLocaleLowerCase() === entry.toLowerCase()) {
                document.getElementById("data").innerHTML = `
                <p>Thanks for your inquiry, here is the information you requested:</p>
                <p>State abbr = ${states[short][a]}</p>
                <p>State Name = ${states[statename][a]}</p>
                <p>Capital = ${states[capital][a]}</p>
                <p>Population = ${states[population][a]}</p>`
                dataFound = true
            }
        }
    }
    console.log(dataFound);
    if (!dataFound) {
        document.getElementById("data").innerHTML = ""
        document.getElementById("error").innerHTML = "The database does not have information about this state, we only have information about AL, AK, AZ, AR, CA, and CO"
    }
}