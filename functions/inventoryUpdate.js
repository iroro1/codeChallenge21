module.exports.updateInv = (oldArr, newArr) => {
  const res = [];
  for (let i = 0; i < newArr.length; i++) {
    let update;
    const new_element = newArr[i];
    update = checkForPrescence(new_element, oldArr);
    if (update.length > 1) {
      res.push(update);
    } else if (update.length === 0) {
      res.push(new_element);
    }
  }
  for (let i = 0; i < oldArr.length; i++) {
    const element = oldArr[i];
    update = checkForPrescence(element, res);
    if (update.length === 0) {
      res.push(element);
    }
  }

  res.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });

  return res;
};

const checkForPrescence = (new_el, oldArr) => {
  let ans = [];
  oldArr.forEach((i) => {
    if (i[1] === new_el[1]) {
      ans.push(...[new_el[0] + i[0], i[1]]);
    }
  });
  return ans ? ans : new_el;
};
