const add = require('./add')

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});

test('should return the zero for empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the sum of two numbers separated by comma',()=>{
    expect(add('2,3')).toBe(5);
})

test('should return the sum of multiple numbers separated by comma',()=>{
    expect(add('2,3,4')).toBe(9);
})
