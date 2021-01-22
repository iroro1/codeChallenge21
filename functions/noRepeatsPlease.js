// No Repeats Please
module.exports.permAlone = (str) => {
  const stArr = Array.from(str);
  let temp = stArr;
  const permutations = [];
  for (let i = 0; i < stArr.length; i++) {
    const posibbleArrs = getPerm(stArr[i], temp);
    permutations.push(posibbleArrs);
  }
  let chk = false;
  count = 0;
  permutations.forEach((p) => {
    p.forEach((el) => {
      for (let i = 0; i < el.length; i++) {
        const e = el[i];
        const e2 = el[i + 1];
        if (e === e2) chk = true;
        else chk = false;
      }
      if (!chk) count++;
    });
  });
  console.log(permutations, count);
  return 2;
};

const getPerm = (a, arr) => {
  const res = [];
  arr.forEach((e) => {
    const d = arr.shift();
    arr.push(d);
    res.push(arr);
  });
  return res;
};
