module.exports.updateInv = (oldArr, newArr) => {
  const res = [];
  newArr.forEach((e) => {
    let update = checkForPrescence(e, oldArr);
    update.length > 1 ? res.push(update) : res.push(e);
  });
  oldArr.forEach((e) => {
    update = checkForPrescence(e, res);
    update.length === 0 ? res.push(e) : null;
  });

  res.sort((a, b) => {
    a[1] < b[1] ? -1 : 1;
    return 0;
  });

  return res;
};

const checkForPrescence = (new_el, oldArr) => {
  let ans = [];
  oldArr.forEach((i) => {
    i[1] === new_el[1] ? ans.push(...[new_el[0] + i[0], i[1]]) : null;
  });
  return ans ? ans : new_el;
};
