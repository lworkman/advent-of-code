console.log("------");

const test = [5764801, 17807724];
const input = [2084668, 3704642]

function runRound(value = 0, subject = 0) {
  return (value * subject) % 20201227;
}

function runLoop(subject = 0, loopSize = 0) {
  let value = 1;

  for (let i = 0; i < loopSize; i++) {
    value = runRound(value, subject);
  }

  return value;
}

function bruteForce(subject = 0, target = 0) {
  let loopCount = 0;
  let value = 1;

  while(loopCount < 100000000) {
    loopCount ++;
    value = runRound(value, subject);
    if (value === target) {
      break;
    }
  }

  return loopCount;
}

function part1([card, door] = [0,0]) {

  const cardLoopSize = bruteForce(7, card);
  const doorLoopSize = bruteForce(7, door)

  const doorResult = runLoop(door, cardLoopSize);
  const cardResult = runLoop(card, doorLoopSize);

  if (doorResult === cardResult) {
    return doorResult;
  } else {
    console.log("WRONG!");
  }
}

const result = part1(input);
console.log("result: ", result);