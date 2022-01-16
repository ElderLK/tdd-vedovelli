const { sum } = require('./calculator');

it('should sum 2 and 2 and the result must be 4 ', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum two number even if one of them is a string', () => {
  expect(sum(2, '2')).toBe(4);
});

it('should throw a error if at least one of the parameter passed to the function are not numbers', () => {
  expect(() => {
    sum('', '2');
  }).toThrowError();
  expect(() => {
    sum([1, 2]);
  }).toThrowError();
  expect(() => {
    sum({});
  }).toThrowError();
  expect(() => {
    sum();
  }).toThrowError();
});
