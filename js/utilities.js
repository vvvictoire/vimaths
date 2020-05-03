/**
 * Returns a string contaning the decimal number with a comma instead of the point
 * @param {number} decimal 
 */
function decimalWithComma(decimal)
{
    let decimalString = decimal.toString();
    return decimalString.replace('.', ',');
}

/**
 * Returns an integer between [min; max] inclusive
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} min 
 * @param {number} max 
 */
function getRandomIntInclusive(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffles a string in place
 * @see https://stackoverflow.com/a/3943985
 */
String.prototype.shuffle = function () {
    let a = this.split(""),
        n = a.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

/**
 * Returns a rounded number, to a precision of 10^-precision
 * @param {number} num 
 * @param {number} precision 
 */
function roundDecimal(num, precision)
{
  return +(Math.round(num + "e+" + precision)  + "e-" + precision);
}