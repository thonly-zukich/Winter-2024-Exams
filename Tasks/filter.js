const filterByType = (array, typeName) => {
  const indexesToRemove = [];

  for (const [index, element] of array.entries()) {
    if (typeof element !== typeName) {
      indexesToRemove.unshift(index);
    }
  }

  for (const index of indexesToRemove) {
    array.splice(index, 1);
  }

  return array;
};

module.exports = filterByType;
