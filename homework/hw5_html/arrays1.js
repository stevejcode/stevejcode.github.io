const formChecker = () => {
    let dogName = document.getElementById("name").value;
    let gsdDog = document.getElementById("gsd").checked;
    let pitDog = document.getElementById("pit").checked;
    let labDog = document.getElementById("lab").checked;
    let short = document.getElementById("short").checked;
    let medium = document.getElementById("medium").checked;
    let long = document.getElementById("long").checked;
    let pickOption = document.getElementById("age");

    if ((gsdDog || labDog || pitDog) && (short || medium || long) && (pickOption.selectedIndex !== 0) && (dogName !== "")) {
        allGood()
    } else {
        formError();
    }
}
const formError = () => {
    document.getElementById("error").innerHTML = `<p>Fill all the fields!</p> `;
    document.getElementById("allgood").innerHTML = "";
}
const allGood = () => {
    document.getElementById("allgood").innerHTML = `<p>Data successfully submitted!</p> `;
    //errors
    document.getElementById("error").innerHTML = ""
    //Name of dog
    document.getElementById("name").value = "";
    //Hair Types
    document.getElementById("short").checked = false;
    document.getElementById("medium").checked = false;
    document.getElementById("long").checked = false;
    //Dog box
    document.getElementById("gsd").checked = false;
    document.getElementById("pit").checked = false;
    document.getElementById("lab").checked = false;
    document.getElementById("age").selectedIndex = 0;
}