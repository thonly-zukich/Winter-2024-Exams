const noDuplicatesArray = (value, size) => {
  if (size <= 0) return [];
  else {
    res = [];
    for (let i = 0; i < size; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = noDuplicatesArray;
