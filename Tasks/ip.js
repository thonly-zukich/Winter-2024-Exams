const parseIP = (ipString) => {
  const ipArray = [];

  if (ipString === '') {
    return;
  } else {
    const arrOfIpElements = ipString.split('.');

    if (arrOfIpElements.length !== 4) {
      return;
    }

    let index = 0;
    for (const ipElement of arrOfIpElements) {
      ipArray[index] = parseInt(ipElement);

      if (isNaN(ipArray[index])) {
        return;
      }

      index++;
    }
  }

  return ipArray;
};

module.exports = parseIP;
