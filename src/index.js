module.exports = function toReadable(number) {
    let a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    for (i = 2; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            a[i * 10 + j] = b[i] + " " + a[j];
            a[i * 10 + j] = a[i * 10 + j].trim();
        }
    }

    for (h = 1; h < 10; h++) {
        for (i = 0; i < 100; i++) {
            a[h * 100 + i] = a[h] + " " + "hundred" + " " + a[i];
            a[h * 100 + i] = a[h * 100 + i].trim();
        }
    }

    return a[number];
};
