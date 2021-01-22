module.exports.symDiff = function (...args) {
  let res = [];
  const count = args.length;
  for (let i = 0; i < count; i++) {
    args[i] = setArr(args[i]);
    args[i + 1] = setArr(args[i + 1]);
    if (i === 0) {
      res = [
        ...arrDiff(args[i], args[i + 1]),
        ...arrDiff(args[i + 1], args[i]),
      ];
    } else if (i != 0 && i + 1 != count) {
      const ar = [...res];
      res = [...arrDiff(ar, args[i + 1]), ...arrDiff(args[i + 1], ar)];
    }
  }
  return res.sort();
};

const arrDiff = (a1, a2) => {
  const res = [];
  let check = false;
  a1.forEach((el) => {
    a2.forEach((el2) => {
      if (el === el2) check = true;
    });
    !check ? res.push(el) : (check = false);
  });
  return res;
};

const setArr = (arr) => {
  const res = [];
  let ar = new Set(arr);
  return Array.from(ar);
};
