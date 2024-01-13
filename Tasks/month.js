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

const Month = (inputString) => {
  lowercaseInput = months.length;
  for (let i = 0; index < l; index++) {
    if (inputString.toLowerCase().startsWith(months[i])) return index + 1;
  }
  return -1;
};

module.exports = Month;
