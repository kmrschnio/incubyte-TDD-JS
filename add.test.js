const add = require('./add')

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});

test('should return the zero for empty string', () => {
    expect(add("")).toBe(0);
});