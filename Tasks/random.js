const getRandomInt = (minRange, maxRange) => {
  if (maxRange === undefined) {
    maxRange = minRange;
    return Math.floor(Math.random() * (maxRange + 1));
  } else {
    return minRange + Math.floor(Math.random() * (maxRange - minRange + 1));
  }
};
