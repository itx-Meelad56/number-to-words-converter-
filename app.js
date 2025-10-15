// Assignment #10 
function numberToWordTillHundred(number) {
    let result = "";
    let arr1 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Siven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    if (number === 0) return "Zero"
    if (number <= 19) {
        result = arr1[number]
        return result
    }
    let firstDigit = "";
    let secondDigit = "";
    let thirdDigit = "";
    let arr2 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"];

    if (number >= 20 && number <= 100) {
        firstDigit = number % 10
        secondDigit = ((number - firstDigit) / 10)

        result = `${arr2[secondDigit]} ${arr1[firstDigit]}`
        return result;
    }

}

function numToWordTillThousand(number) {
    let numInArr = number.toString().split("")
    let thirdDigit = numInArr[0]
    let finalResult, resultTillHund, resultTillThousand;
    let isGreaterThanHund = false



    if (number > 100 && number < 1000) {
        isGreaterThanHund = true
        numInArr.shift()
        number = numInArr.join('')
    }
    resultTillHund = numberToWordTillHundred(parseInt(number))

    if (isGreaterThanHund) {
        resultTillThousand = numberToWordTillHundred(parseInt(thirdDigit))
        finalResult = `${resultTillThousand} Hundred and ${resultTillHund}`
    } else {
        finalResult = resultTillHund;
    }

    return finalResult;
};

function numToWordTillTenThousand(number) {
    let numInArr = number.toString().split("")
    let thousandsDigits = numInArr.length == 4 ? numInArr[0] : `${numInArr[0]}${numInArr[1]}`
    let finalResult, resultTillThousand, resultInThousands;
    let isGreaterThanThousand = false


    if(number == 1000) return "One Thousand"
    if (number > 1000 && number < 100000) {
        isGreaterThanThousand = true
        numInArr.shift()
        number = numInArr.join('')
    }
    resultTillThousand = numToWordTillThousand(parseInt(number))

    if (isGreaterThanThousand) {
        resultInThousands = numberToWordTillHundred(parseInt(thousandsDigits))
        finalResult = `${resultInThousands} Thousand and ${resultTillThousand}`
    } else {
        finalResult = resultTillThousand;
    }

    return finalResult

}

console.log(numToWordTillTenThousand(+prompt("Enter Number")));




// if (number >= 100 && number < 1000) {
    //     // firstDigit = number % 10
    //     // secondDigit = ((number - firstDigit) / 10) % 10
    //     // secondDigit = (number - firstDigit) / 10

    //     let numInArr = number.toString().split('');

    //     firstDigit = parseInt(numInArr[numInArr.length - 1])
    //     secondDigit = parseInt(numInArr[numInArr.length - 2])
    //     thirdDigit = parseInt(numInArr[numInArr.length - 3])

    //     if (number >= 110 && number < 120) {
    //         result = `${arr1[number.toString().charAt(0)]} Hundred ${arr1[secondDigit]} ${arr1[firstDigit]}`
    //         return result;
    //     }  


    //     result = `${arr1[number.toString().charAt(0)]} Hundred ${arr2[secondDigit]} ${arr1[firstDigit]}`
    //     return result; 
    // }