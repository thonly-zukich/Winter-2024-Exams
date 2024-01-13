const filterByType = (array, typeName) => {
  const indexesToRemove = [];
  for (C of array) {
    x = array.indexOf(C);
    if (typeof array[x] !== typeName) {
      remove.unshift(x);
    }
  }
  for (x of remove) array.splice(x, 1);
  return array;
};

module.exports = filterByType;
