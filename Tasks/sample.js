const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomElement = arr[randomIndex];

  return randomElement;
};

module.exports = getRandomElement;
