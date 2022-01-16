const { queryString } = require('./queryString');

describe('Object to query string', () => {
  test('should create a valid query string when a object is provided', () => {
    const obj = {
      name: 'Elder',
      profession: 'Developer',
    };
    expect(queryString(obj)).toBe('name=Elder&profession=Developer');
  });
});
