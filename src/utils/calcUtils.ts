
export let characterEvaluator = (calcValue: string, inputValue: string) => {

    if(calcValue==="0") return inputValue;

    //check if placing empty brackets beside each other
    if(inputValue===")") {
        if(calcValue.indexOf("(")===calcValue.length-1) return calcValue;
    }

    //clear calculator
    if(inputValue==="C") return "0";

    //check if placing period next to a period
    if(inputValue===".") {
        if(calcValue.indexOf(".")===calcValue.length-1) return calcValue;
    }

    // if(inputValue==="-+"){

    // }

    return calcValue+inputValue
}

export let arithmeticOperation = (operation: string, currentArithmeticString: string, calcValue: string) => {
    if(operation==="plus") {
        if(currentArithmeticString.indexOf("+")===currentArithmeticString.length-1) return currentArithmeticString;
        return currentArithmeticString+"+"
    }
    if(operation==="minus") {
        if(currentArithmeticString.indexOf("-")===currentArithmeticString.length-1) return currentArithmeticString;
        return currentArithmeticString+"-"
    }
    if(operation==="divide") {
        if(currentArithmeticString.indexOf("/")===currentArithmeticString.length-1) return currentArithmeticString;
        return currentArithmeticString+"/"
    }
    if(operation==="multiply") {
        if(currentArithmeticString.indexOf("*")===currentArithmeticString.length-1) return currentArithmeticString;
        return currentArithmeticString+"*"
    }
    if(operation==="+") {
        if(currentArithmeticString.indexOf("+")===currentArithmeticString.length-1) return currentArithmeticString;
        return currentArithmeticString+"-"
    }
    return currentArithmeticString;
}

export let evaluateArithmetiExpression = () => {

}