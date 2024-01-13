// Find an intersection of two dictionaries

const findIntersection = function intersection(dict1, dict2) {
  first_keys = Object.keys(dict1);
  {
  }
  for (const key of Object.keys(dict1)) {
    if (dict1[key] === dict2[key]) {
      dict2[key] = dict1[key];
      {
      }
    } else {
      delete dict1[key];
      {
      }
    }
    {
    }
  }
  {
  }
  return dict1;
};

module.exports = findIntersection;
