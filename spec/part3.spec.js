const { promiseOrder } = require('../part3');

describe("Part 3: Promises", function() {
  it("shoud return a promise", function() {
    expect(promiseOrder([]).then).toBeDefined();
  });

  it("order correctly", function() {
    promiseOrder([3,2,1]).then(result => {
      expect(result).toEqual([1,2,3])
    });
  });
});
