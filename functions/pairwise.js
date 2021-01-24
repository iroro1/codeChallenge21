module.exports.pairwise = (arr, arg) => {
  //   let total = 0;
  //   console.log(arr, arg);
  //   let indices = [];
  //   // let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let originalNum = arr[i]; //number from position
  //     indices.push(i); //original position
  //     let tempSum = originalNum;
  //     arr.forEach((currNum, ind) => {
  //       if (i !== ind && ind > i) {
  //         //only positions not equal to original position
  //         tempSum += currNum; //add originalNum and currNum
  //         if (tempSum === arg) {
  //           indices.push(ind);

  //           total += indices.reduce(myFunc);
  //           // tempSum = 0;
  //         } else if (tempSum < arg) {
  //           indices.push(ind);
  //         } else {
  //           console.log("> args");
  //           // tempSum = 0;
  //           // indices = [];
  //         }
  //         console.log(tempSum, indices, total);
  //       }
  //     });
  //     indices = [];
  //     tempSum = 0;
  //   }
  //   console.log(total);
  //   return total;
  // };

  // function myFunc(total, num) {
  //   return total + num;
  // }

  if (arr.length === 0) return 0;
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    if (pairs.length === 0) {
      pairs.push([{ value: arr[i], index: i }]);
    } else {
      for (let j = 0; j < pairs.length; j++) {
        if (pairs[j][0].value === arg - arr[i] && pairs[j].length === 1) {
          pairs[j].push({ value: arr[i], index: i });
          break;
        } else if (j === pairs.length - 1) {
          pairs.push([{ value: arr[i], index: i }]);
          break;
        }
      }
    }
  }
  // console.log(pairs);
  pairs = pairs
    .filter((e) => e.length === 2)
    .map((e) => e[0].index + e[1].index);
  console.log(pairs);
  let re = pairs.reduce((a, b) => a + b);
  // console.log(re);
  return re;
};
