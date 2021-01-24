module.exports.bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Using ES6 array destructuring to swap
    }
  }
  return array;
};

// function swap(a, b, arr) {
//     let tmp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = tmp;
//   }
//   function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - 1 - i; j++) {
//         // -i because the largest element will be bubbled at the end so we don't have to compare.
//         if (array[j] > array[j + 1]) {
//           swap(j, j + 1, array);
//         }
//       }
//     }
//     return array;
//   }

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - 1 - i; j++) {
//         if (array[j] > array[j + 1])
//           [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Using ES6 array destructuring to swap
//       }
//     }
//     return array;
//   }
