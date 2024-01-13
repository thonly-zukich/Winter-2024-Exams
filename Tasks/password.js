const generatePassword = (alphabet, length) => {
  const alphabetLength = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const Index = Math.floor(Math.random() * alphabetLength);
    password = password + alphabet[Index];
  }
  return password;
};

module.exports = generatePassword;
