function reverse(string) {
    let arr = string.split('');
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr.join('');
}

module.exports = reverse;