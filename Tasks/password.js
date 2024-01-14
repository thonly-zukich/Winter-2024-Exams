const generatePassword = (alphabet, length) => {
  const alphabetLength = alphabet.length;

  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * alphabetLength);

    password += alphabet[index];
  }

  return password;
};

module.exports = generatePassword;
