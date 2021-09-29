const userInput = () => {
    let one = document.getElementById("item1").value;
    let two = document.getElementById("item2").value;
    let three = document.getElementById("item3").value;
    let four = document.getElementById("item4").value;

    let ione = parseInt(one);
    let itwo = parseInt(two);
    let ithree = parseInt(three);
    let ifour = parseInt(four);

    //check negatives
    if ((ione >= 0) && (itwo >= 0) && (ithree >= 0) && (ifour >= 0)) {
        checkIsNotNumber(ione, itwo, ithree, ifour);
    } else {
        handleError();
    }

}

const numberSold = (item1, item2, item3, item4) => {

    let one = document.getElementById("item-one").value = item1;
    let two = document.getElementById("item-two").value = item2;
    let three = document.getElementById("item-three").value = item3;
    let four = document.getElementById("item-four").value = item4;

    total(one, two, three, four);

}

const checkIsNotNumber = (one, two, three, four) => {

    let check = one + two + three + four;

    if ((Number.isNaN(check)) && (one < 0) && (two < 0) && (three < 0) && (four < 0)) {
        handleError();
    } else {
        numberSold(one, two, three, four);
        cleanError();
    }
}

const total = (item1, item2, item3, item4) => {

    let ione = document.getElementById("item-one-result").value = (item1 * 239.99).toFixed(2);
    let itwo = document.getElementById("item-two-result").value = (item2 * 129.75).toFixed(2);
    let ithree = document.getElementById("item-three-result").value = (item3 * 99.95).toFixed(2);
    let ifour = document.getElementById("item-four-result").value = (item4 * 350.89).toFixed(2);

    totalAmountSold(ione, itwo, ithree, ifour);
}

const totalAmountSold = (item1, item2, item3, item4) => {
    let total = parseFloat(item1) + parseFloat(item2) + parseFloat(item3) + parseFloat(item4);
    let grossTotal = document.getElementById("total-sold").value = total.toFixed(2);

    weeklyEarnings(grossTotal);
}

const weeklyEarnings = (total) => {
    let salaryPerWeek = 250;
    let percentOfGrossSales = 0.09;

    let totalEarns = (percentOfGrossSales * parseFloat(total)) + salaryPerWeek;
    document.getElementById("weekly-earnings").value = totalEarns.toFixed(2);
}

const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p>Enter valid number values and fill all the item inputs above.</p>`;
    document.getElementById("item-one").value = "";
    document.getElementById("item-two").value = "";
    document.getElementById("item-three").value = "";
    document.getElementById("item-four").value = "";

    document.getElementById("item-one-result").value = "";
    document.getElementById("item-two-result").value = "";
    document.getElementById("item-three-result").value = "";
    document.getElementById("item-four-result").value = "";

    document.getElementById("total-sold").value = "";
    document.getElementById("weekly-earnings").value = "";
}

const cleanError = () => {
    document.getElementById("error").innerHTML = "";
}