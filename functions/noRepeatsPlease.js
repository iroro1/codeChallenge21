// No Repeats Please
// module.exports.permAlone = (str) => {
//   const stArr = Array.from(str);
//   let temp = stArr.map((m) => m);
//   const permutations = [];
//   if (stArr.length === 1) return 1;
//   for (let i = 0; i < stArr.length - 1; i++) {
//     const posibbleArrs = getPerm(temp);
//     permutations.push(...posibbleArrs);
//     // const d = temp.shift();
//     // temp.push(d);
//   }
//   console.log(permutations);
//   const res = count(permutations);
//   return res;
// };

// const getPerm = (arr2) => {
//   let res = [];
//   arr2.forEach((e) => {
//     const arr5 = [];
//     arr2.forEach((el) => {
//       arr5.push(el);
//     });
//     res.push(arr5);
//     const d = arr2.shift();
//     arr2.push(d);
//   });
//   return res;
// };

// const count = (arr) => {
//   let count = 0;
//   let check = false;
//   arr.forEach((el) => {
//     for (let i = 0; i < el.length - 1; i++) {
//       const e1 = el[i];
//       const e2 = el[i + 1];
//       if (e1 === e2) {
//         check = true;
//       }
//     }
//     check === true ? null : count++;
//     check = false;
//   });
//   console.log(count);
//   return count;
// };

module.exports.permAlone = (str) => {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/;
  // Split the string into an array of characters.
  var arr = str.split("");
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function (string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
};
