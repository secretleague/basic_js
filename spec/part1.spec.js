const { square } = require('../part1');

describe("Part 1: Square function", function() {

  it("should return a square of a number", function() {
    expect(square(2)).toBe(4);
    expect(square(4)).toBe(16);
  });

  it("should return zero if number is zero", function() {
    expect(square(0)).toBe(0);
  })

  it("should return zero if no value is given", function() {
    expect(square()).toBe(0);
  });
});