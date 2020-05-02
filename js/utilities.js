/**
 * Returns a string ready to be rendered by MathJax
 * @param {string} name 
 * @param {number} length 
 * @param {string} unit
 */
function renderLength(name, length, unit = '')
{
    return `\\( ${name} = ${length} \\text{ ${unit} } \\)`;
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

function roundDecimal(num, prec)
{
  return +(Math.round(num + "e+" + prec)  + "e-" + prec);
}