const { TestScheduler } = require('jest');
const cipher = require('./caesarCipher');

test('abc to be bcd', () => {
    expect(cipher('abc', 1)).toBe('bcd');
})