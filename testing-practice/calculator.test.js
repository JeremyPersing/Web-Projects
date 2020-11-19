const { TestScheduler } = require("jest");
const calc = require('./calculator');

test('adding 2 + 2 is 4', () => {
    const ti89 = calc(2, 2);
    expect(ti89.add).toEqual(4);
});

test('subtracting 5 - 2 is 3', () => {
    const ti89 = calc(5, 2);
    expect(ti89.sub).toEqual(3);
})

test('multiplying 41 * 2 is 82', () => {
    const ti89 = calc(41, 2);
    expect(ti89.multiply).toEqual(82);
})

test('dividing 8 / 4 is 2', () => {
    const ti89 = calc(8, 4);
    expect(ti89.divide).toEqual(2);
})
