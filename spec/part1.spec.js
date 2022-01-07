const { square } = require('../part1');

describe("Part 1: Square function", function() {

  it("should return a square of a number", function() {
    expect(square(2)).toBe(4);
    expect(square(4)).toBe(16);
  });
});