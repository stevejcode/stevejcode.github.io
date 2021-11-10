const onChange = () => {
    let changeEvent = document.getElementById('onchange').value;
    if (changeEvent !== "none") {
        window.open(changeEvent);
    } else {
        console.log("Error");
    }
}
const onClick = () => {
    let dropList = document.getElementById('onclick').value;
    if (dropList !== "none") {
        window.open(dropList);
        allgood()
    } else {
        Errors();
    }
}
const Errors = () => {
    document.getElementById("error").innerHTML = `<p>Select an option to continue!</p> `;
}
const allgood = () => {
    document.getElementById("error").innerHTML = "";
}