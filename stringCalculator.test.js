const {add} = require('./stringCalculator');

//Test for empty string
test('returns 0 for empty string',()=>{
    expect(add("")).toBe(0);
});

test('returns 0 for when string contain only space',()=>{
    expect(add(" ")).toBe(0);
});

test('returns 0 for newline only',()=>{
    expect(add("\n")).toBe(0);
});

//Test for single number
test('return number itself for single number',()=>{
    expect(add("5")).toBe(5);
});

test('return number itself for single number with trailing space',()=>{
    expect(add("5 ")).toBe(5);
});

test('return number itself for single number with leading space',()=>{
    expect(add(" 5")).toBe(5);
});

test('return number itself for single number with trailing and leading space',()=>{
    expect(add(" 5 ")).toBe(5);
});

test('return number itself for single number with newline before', () => {
  expect(add("\n5")).toBe(5);
});

test('return number itself for single number with newline after', () => {
  expect(add("5\n")).toBe(5);
});

test('return number itself for single number with comma after',()=>{
    expect(add("5,")).toBe(5);
});

test('return number itself for single number with comma and space after',()=>{
    expect(add("5, ")).toBe(5);
});

//Test for two number
test('return sum of two number',()=>{
    expect(add("1,2")).toBe(3);
});

test('return sum of two large numer',()=>{
    expect(add("100000000,199999999")).toBe(299999999);
});