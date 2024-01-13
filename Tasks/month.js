const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (inputString) => {
  const lowercaseInput = inputString.toLowerCase();
  
  for (const [index, month] of months.entries()) {
    if (lowercaseInput.startsWith(month)) {
      return index + 1;
    }
  }

  return -1;
};

module.exports = getMonthNumber;
