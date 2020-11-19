function caesarCipher(string, index) {
    string = string.toLowerCase();
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        let charCode = arr[i].charCodeAt(0);
        if ((charCode + index) < 123) {
            charCode += index;
            arr[i] = String.fromCharCode(charCode);
        }
        else {
            charCode -= index;
            arr[i] = String.fromCharCode(charCode);
        }
    }
    return arr.join('');
}

caesarCipher('abc', 1);
module.exports = caesarCipher;