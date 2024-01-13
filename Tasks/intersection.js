const findIntersection = (dict1, dict2) => {
  for (const key of Object.keys(dict1)) {
    if (dict1[key] !== dict2[key]) {
      delete dict1[key];
    }
  }

  return dict1;
};

module.exports = findIntersection;
