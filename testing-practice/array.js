function analyze(arr) {
    function getAverage() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }

    function getMin() {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    function getMax() {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    function getLength() {
        return arr.length;
    }

    return {
        average: getAverage(),
        min: getMin(),
        max: getMax(),
        length: getLength()
    }
}

module.exports = analyze;