const noDuplicatesArray = (value, size) => {
  if (size <= 0) {
    return [];
  } else {
    const uniqueArray = Array.from({ length: size }, () => value);
    return uniqueArray;
  }
};
module.exports = noDuplicatesArray;
