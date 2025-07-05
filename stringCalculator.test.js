//Test for empty string
const {add} = require('./stringCalculator');

test('returns 0 for empty string',()=>{
    expect(add("")).toBe(0);
});

test('returns 0 for when string contain only space',()=>{
    expect(add(" ")).toBe(0);
});

test('returns 0 for newline only',()=>{
    expect(add("\n")).toBe(0);
});