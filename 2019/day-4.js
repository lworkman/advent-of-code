console.log("------");

function testPassword(password = 0, min = 0, max = 0) {
  let hasDouble = false;
  let isSixDigitNumber = password.toString().length === 6;
  let isWithinRange = password > min && password < max;
  let allDigitsIncrease = true;

  if (!isSixDigitNumber || !isWithinRange) {
    return false;
  }

  const splitPassword = password
    .toString()
    .split("")
    .map((digit) => parseInt(digit, 10));

  for (let i = 1; i < splitPassword.length; i++) {
    const current = splitPassword[i];
    const previous = splitPassword[i - 1];
    if (current < previous) {
      allDigitsIncrease = false;
      break;
    }
    if (current === previous) {
      hasDouble = true;
    }
  }

  return hasDouble && allDigitsIncrease;
}

function testAndGeneratePasswords(min = 0, max = 0) {
  let possible = 0;

  for (let i = min; i < max; i++) {
    if (testPassword(i, min, max)) {
      possible++;
    }
  }

  return possible;
}

function stricterTest(password = 0, min = 0, max = 0) {
  let hasOnlyDouble = (password.toString().match(/([1-9])\1+/g) || [])
    .map((group) => group.length)
    .includes(2);
  let isSixDigitNumber = password.toString().length === 6;
  let isWithinRange = password > min && password < max;
  let allDigitsIncrease = true;

  if (!isSixDigitNumber || !isWithinRange || !hasOnlyDouble) {
    return false;
  }

  const splitPassword = password
    .toString()
    .split("")
    .map((digit) => parseInt(digit, 10));

  for (let i = 1; i < splitPassword.length; i++) {
    const current = splitPassword[i];
    const previous = splitPassword[i - 1];
    if (current < previous) {
      allDigitsIncrease = false;
      break;
    }
  }

  return allDigitsIncrease;
}

function testAndGenerateStrictPasswords(min = 0, max = 0) {
  let possible = 0;

  for (let i = min; i < max; i++) {
    if (stricterTest(i, min, max)) {
      possible++;
    }
  }

  return possible;
}

const result = testAndGenerateStrictPasswords(172851, 675869)
console.log("result:", result);
