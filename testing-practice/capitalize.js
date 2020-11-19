function capitalize(string) {
    let arr = string.split('');
    let firstLetter = string[0].toUpperCase();
    arr[0] = firstLetter;
    string = arr.join('');
    return string;
}


module.exports = capitalize;