const { test, expect } = require('@jest/globals');
const capitalize = require('./capitalize');



// Capitalize the first letter
test('lower to Lower, first letter gets capitalized', () => {
    expect(capitalize('lower')).toBe('Lower');
});


