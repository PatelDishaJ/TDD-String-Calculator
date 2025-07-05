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
test('return number itself for single input',()=>{
    expect(add("5")).toBe(5);
});

test('return number itself for single input with trailing space',()=>{
    expect(add("5 ")).toBe(5);
});

test('return number itself for single input with leading space',()=>{
    expect(add(" 5")).toBe(5);
});

test('return number itself for single input with trailing and leading space',()=>{
    expect(add(" 5 ")).toBe(5);
});

test('return number itself for input with newline before', () => {
  expect(add("\n5")).toBe(5);
});

test('return number itself for input with newline after', () => {
  expect(add("5\n")).toBe(5);
});