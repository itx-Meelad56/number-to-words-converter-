
let numberInput = document.getElementById('number')
let convertBtn = document.getElementById('convertBtn');
let result = document.getElementById('result')

convertBtn.addEventListener('click', () => {
    let num = parseInt(numberInput.value);
    if (isNaN(num) || num < 0 || num > 1000000) {
        alert('Enter a number between 0 - 999999');
        return;
    }

    result.innerText = numToWordTillTenLakh(num);
});

function numToWordTillHundred(number) {
    let result = '';
    // if (number === 0) return "Zero"
    let arr1 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    let arr2 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"]

    let firstDigit = "";
    let secondDigit = "";

    if (number <= 19) {
        firstDigit = arr1[number]
        result = firstDigit
    }

    if (number >= 20 && number <= 100) {
        let firstDigit = number % 10
        let secondDigit = (number - firstDigit) / 10
        result = `${arr2[secondDigit]} ${arr1[firstDigit]}`
    }

    return result;
};

function numToWordTillThousand(number) {
    let numArr = number.toString().split("");
    let thirdDigit = numArr[0];
    let finalResult, resultTillHund, resultTillTen;
    let isGreaterThan = false;

    if (number > 100 && number < 1000) {
        isGreaterThan = true;
        numArr.shift();
        number = numArr.join('');
    }
    resultTillTen = numToWordTillHundred(parseInt(number));
    if (isGreaterThan) {
        resultTillHund = numToWordTillHundred(thirdDigit)
        finalResult = `${resultTillHund} Hundred ${resultTillTen}`
    } else {
        finalResult = resultTillTen;
    }
    return finalResult;
};


function numToWordTillTenThousand(number) {
    let numArr = number.toString().split("");
    let thirdDigit = numArr[0];
    let finalResult, resultTillHund, resultTillThousand;
    let isGreaterThan = false;

    if (number == 1000) return "One Thousand"
    if (number > 1000 && number < 10000) {
        isGreaterThan = true;
        numArr.shift();
        number = numArr.join('')
    }

    resultTillHund = numToWordTillThousand(parseInt(number));

    if (isGreaterThan) {
        resultTillThousand = numToWordTillHundred(thirdDigit);
        finalResult = `${resultTillThousand} Thousand ${resultTillHund}`
    } else {
        finalResult = resultTillHund;
    }

    return finalResult;
};


function numToWordTillLakh(number) {
    // let numArr = number.toString().split("");
    let isGreaterThan = false;
    let finalResult, resultTillThousand, resultIntenThousands;

    if (number === 10000) return "Ten Thousand";

    if (number > 10000 && number < 100000) {
        isGreaterThan = true;
        let tenThousands = Math.floor(number / 1000);
        let remaining = number % 1000;

        resultIntenThousands = numToWordTillHundred(tenThousands);
        resultTillThousand = numToWordTillThousand(remaining);

        finalResult = `${resultIntenThousands} Thousand ${resultTillThousand}`.trim();
    } else {
        finalResult = numToWordTillTenThousand(number);
    }

    return finalResult;
}


function numToWordTillTenLakh(number) {
    let finalResult, resultTillThousand, resultIntenThousands;

    if (number === 100000) return "One Lakh";

    if (number > 100000 && number < 1000000) {
        isGreaterThan = true;
        let tenThousands = Math.floor(number / 100000);
        let remaining = number % 100000;
        resultIntenThousands = numToWordTillHundred(tenThousands);
        resultTillThousand = numToWordTillLakh(remaining);

        finalResult = `${resultIntenThousands} Lakh ${resultTillThousand}`.trim();
    } else {
        finalResult = numToWordTillLakh(number);
    }

    return finalResult;
};


