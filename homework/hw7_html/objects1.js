const backgColor = () => {
    let backColor = document.getElementById('backg');

    if (backColor.selectedIndex === 1) {
        document.getElementById('background').className = "night"
    }
    else if (backColor.selectedIndex === 2) {
        document.getElementById('background').className = "coral"
    }
    else {
        document.getElementById('background').className = ""
    }
}

const fontColor = () => {

    let orangeFont = document.getElementById('orangecolor').checked;
    let coralFont = document.getElementById('coralcolor').checked;
    let brownFont = document.getElementById('browncolor').checked;

    if (orangeFont) {
        document.getElementById('part1').className = "orangecss"
    } else {
        document.getElementById('part1').className = ""
    }
    if (coralFont) {
        document.getElementById('part2').className = "coralcss"
    } else {
        document.getElementById('part2').className = ""
    }
    if (brownFont) {
        document.getElementById('part3').className = "browncss"
    } else {
        document.getElementById('part3').className = ""
    }
}

const changeFontStyle = () => {
    let big = document.getElementById('style').checked;
    if (big) {
        document.getElementById('title').className = "attri"
        document.getElementById('title2').className = "attri"
    } else {
        document.getElementById('title').className = ""
        document.getElementById('title2').className = ""
    }

}