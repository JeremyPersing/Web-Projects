function calculator(x, y) {
    function add() {
        return x + y;
    }

    function sub() {
        return x - y;
    }

    function multiply() {
        return x * y;
    }

    function divide() {
        return x / y;
    }

    return {
        add: add(),
        sub: sub(),
        multiply:  multiply(),
        divide: divide()
    }
}

module.exports = calculator;