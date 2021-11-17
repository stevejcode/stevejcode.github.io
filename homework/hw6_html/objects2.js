const search = () => {

    let countNumber = 0;
    let userentry = document.getElementById("text").value;
    let userEntryLower = userentry.toLowerCase();
    let searchChar = document.getElementById("char").value;
    let searchCharLower = searchChar.toLowerCase().charAt(0);

    if (userentry.length === 0) {
        document.getElementById("error").innerHTML = "Please fill the above textarea out.";
        document.getElementById("result").innerHTML = "";
        document.getElementById("original").value = "";
        document.getElementById("char").value = "";

    } else {

        if (searchChar.length === 0) {
            document.getElementById("error").innerHTML = "";
            document.getElementById("error2").innerHTML = "Please fill the above textarea out."
            document.getElementById("result").innerHTML = ""
        } else {
            document.getElementById("error").innerHTML = "";
            document.getElementById("error2").innerHTML = "";

            for (let i = 0; i < userEntryLower.length; i++) {

                if (userEntryLower.charAt(i) === searchCharLower) {
                    countNumber++;
                }
            }

            document.getElementById("original").value = userentry;
            document.getElementById("result").innerHTML = `The letter ${searchChar} was found ${countNumber} times`;

            if ((countNumber++ === 0)) {
                var popup = window.open("", "MsgWindow", "width=300, height=100");
                popup.document.write(`Search character ${searchChar} not found in text string!`);
                //clear result if 0 text string found?
                document.getElementById("result").innerHTML = "";

            }
        }
    }

}

const clearField = () => {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("text").value = "";
    document.getElementById("char").value = "";
    document.getElementById("original").value = "";
}
