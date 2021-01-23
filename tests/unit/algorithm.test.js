const lib = require("../../functions/symmetricDiff");
const inventory = require("../../functions/inventoryUpdate");
const noRep = require("../../functions/noRepeatsPlease");
const { pairwise } = require("../../functions/pairwise");

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

describe("Algorithms 2: Update Inventory", () => {
  it("should return an updated array from two arrays", () => {
    const res = inventory.updateInv(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
      ]
    );

    const res1 = inventory.updateInv(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
      ]
    );
    const res2 = inventory.updateInv(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      []
    );

    const res3 = inventory.updateInv(
      [],
      [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
      ]
    );

    const res4 = inventory.updateInv(
      [
        [0, "Bowling Ball"],
        [0, "Dirty Sock"],
        [0, "Hair Pin"],
        [0, "Microphone"],
      ],
      [
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [1, "Bowling Ball"],
        [1, "Toothpaste"],
      ]
    );

    expect(res.length).toBe(6);

    expect(res1).toEqual(
      expect.arrayContaining([
        [88, "Bowling Ball"],
        [2, "Dirty Sock"],
        [3, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [5, "Microphone"],
        [7, "Toothpaste"],
      ])
    );

    expect(res2).toEqual(
      expect.arrayContaining([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ])
    );

    expect(res3).toEqual(
      expect.arrayContaining([
        [67, "Bowling Ball"],
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [7, "Toothpaste"],
      ])
    );

    expect(res4).toEqual(
      expect.arrayContaining([
        [1, "Bowling Ball"],
        [0, "Dirty Sock"],
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [0, "Microphone"],
        [1, "Toothpaste"],
      ])
    );
  });
});

describe("Algorithm 3: No repeat Please", () => {
  it("should return a number", () => {
    const res = noRep.permAlone("aab");
    const res1 = noRep.permAlone("aaa");
    const res2 = noRep.permAlone("aabb");
    const res3 = noRep.permAlone("abcdefa");
    const res4 = noRep.permAlone("a");

    expect(!isNaN(res)).toBe(true);
    expect(res).toBe(2);

    expect(res1).toBe(0);
    expect(res2).toBe(8);
    expect(res3).toBe(3600);
    expect(res4).toBe(1);
  });
});

describe("Algoritm 4: Pairwise", () => {
  it("should return the sum of the indices that make up the argument parsed", () => {
    //
  });
});
