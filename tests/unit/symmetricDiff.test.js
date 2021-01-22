const lib = require("../../functions/symmetricDiff");

describe("Algorithms 1: Symmetric Difference", () => {
  it("should return an array with no intersects on the original input", () => {
    const res = lib.symDiff([1, 2, 3], [3, 4, 5, 7]);
    const res1 = lib.symDiff([1, 2, 3], [5, 2, 1, 4]);
    const res2 = lib.symDiff([1, 2, 3, 3], [5, 2, 1, 4]);
    const res3 = lib.symDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]);
    const res4 = lib.symDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
    const res5 = lib.symDiff(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    );

    expect(res).toEqual([1, 2, 4, 5, 7]);
    expect(res1).toEqual([3, 4, 5]);
    expect(res2).toEqual([3, 4, 5]);
    expect(res3).toEqual([1, 4, 5]);
    expect(res4).toEqual([1, 4, 5]);
    expect(res5).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });
});
