
function getDisplayElement() {
    return document.getElementById("display");
}


function appendToDisplay(value) {
    getDisplayElement().value += value;
}


function clearDisplay() {
    getDisplayElement().value = "";
}

function calculateResult() {
    var display = getDisplayElement();

    try {
       
        display.value = eval(display.value);
    } catch (error) {
      
        display.value = "Error";
    }
}


function addClickListener(buttonId, callback) {
    document.getElementById(buttonId).addEventListener("click", callback);
}


addClickListener("percentageBtn", () => appendToDisplay('%'));
addClickListener("ceBtn", () => appendToDisplay('CE'));
addClickListener("clearBtn", clearDisplay);
addClickListener("backspaceBtn", () => getDisplayElement().value = getDisplayElement().value.slice(0, -1));
addClickListener("reciprocalBtn", () => appendToDisplay('1/x'));
addClickListener("squareBtn", () => appendToDisplay('**2'));
addClickListener("sqrtBtn", () => appendToDisplay('Math.sqrt('));
addClickListener("divideBtn", () => appendToDisplay('/'));
addClickListener("sevenBtn", () => appendToDisplay('7'));
addClickListener("eightBtn", () => appendToDisplay('8'));
addClickListener("nineBtn", () => appendToDisplay('9'));
addClickListener("multiplyBtn", () => appendToDisplay('*'));
addClickListener("fourBtn", () => appendToDisplay('4'));
addClickListener("fiveBtn", () => appendToDisplay('5'));
addClickListener("sixBtn", () => appendToDisplay('6'));
addClickListener("subtractBtn", () => appendToDisplay('-'));
addClickListener("oneBtn", () => appendToDisplay('1'));
addClickListener("twoBtn", () => appendToDisplay('2'));
addClickListener("threeBtn", () => appendToDisplay('3'));
addClickListener("addBtn", () => appendToDisplay('+'));
addClickListener("plusMinusBtn", () => getDisplayElement().value = -1 * parseFloat(getDisplayElement().value));
addClickListener("zeroBtn", () => appendToDisplay('0'));
addClickListener("decimalBtn", () => appendToDisplay('.'));
addClickListener("equalsBtn", calculateResult);
