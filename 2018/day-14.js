console.log("------");
console.time("run");

const input = 793061;

function runRound(elfOne = 0, elfTwo = 0, scores = []) {
  let newValue = scores[elfOne] + scores[elfTwo];

  newValue
    .toString()
    .split("")
    .forEach((char) => scores.push(Number(char)));

  const newElfOne = (elfOne + 1 + scores[elfOne]) % scores.length;
  const newElfTwo = (elfTwo + 1 + scores[elfTwo]) % scores.length;

  return [scores, newElfOne, newElfTwo];
}

function playGame(roundCount = 0) {
  let scores = [3, 7];
  let elfOne = 0;
  let elfTwo = 1;

  for (let i = 0; i < roundCount; i++) {
    [scores, elfOne, elfTwo] = runRound(elfOne, elfTwo, scores);
  }

  const targetScoreLength = scores.length + 10;

  while (scores.length < targetScoreLength) {
    [scores, elfOne, elfTwo] = runRound(elfOne, elfTwo, scores);
  }

  return scores.slice(roundCount, roundCount + 10).join("");
}

function runStringRound(elfOne = 0, elfTwo = 0, scores = "") {
  const elfOneNumber = Number(scores[elfOne]);
  const elfTwoNumber = Number(scores[elfTwo]);
  let newValue = (elfOneNumber + elfTwoNumber).toString();
  let newScore = scores;

  newScore = newScore.concat(newValue);

  const newElfOne = (elfOne + 1 + elfOneNumber) % newScore.length;
  const newElfTwo = (elfTwo + 1 + elfTwoNumber) % newScore.length;

  return [newScore, newElfOne, newElfTwo, newValue];
}

function runObjRound(elfOne = 0, elfTwo = 0, scores = {}) {
  const elfOneNumber = scores[elfOne];
  const elfTwoNumber = scores[elfTwo];
  let newValue = (elfOneNumber + elfTwoNumber).toString().split("");

  newValue.forEach((char) => {
    scores.length += 1;
    scores[scores.length - 1] = Number(char);
  });

  const newElfOne = (elfOne + 1 + elfOneNumber) % scores.length;
  const newElfTwo = (elfTwo + 1 + elfTwoNumber) % scores.length;

  return [scores, newElfOne, newElfTwo, newValue];
}

function runArrRound(elfOne = 0, elfTwo = 0, scores = [], pointer = 0) {
  const elfOneNumber = scores[elfOne];
  const elfTwoNumber = scores[elfTwo];
  let newValue = (elfOneNumber + elfTwoNumber).toString().split("");

  newValue.forEach((char) => {
    pointer += 1;
    scores[pointer] = Number(char);
  });

  const newElfOne = (elfOne + 1 + elfOneNumber) % (pointer + 1);
  const newElfTwo = (elfTwo + 1 + elfTwoNumber) % (pointer + 1);

  return [scores, newElfOne, newElfTwo, newValue, pointer];
}

function findMatchingRecipie(target = 0) {
  const targetAsString = target.toString();
  const limit = 70000000;
  let scores = new Array(limit);
  scores[0] = 3;
  scores[1] = 7;
  let addedCount = 1;
  let elfOne = 0;
  let elfTwo = 1;
  let added = "";
  let currentPlace = 0;
  let slicePlace = 0;

  let i = 0;

  while (i < limit) {
    i++;
    [scores, elfOne, elfTwo, added, addedCount] = runArrRound(
      elfOne,
      elfTwo,
      scores,
      addedCount
    );

    added.forEach((char, index) => {
      if (targetAsString[currentPlace] === char) {
        currentPlace++;
        if (currentPlace === targetAsString.length) {
          slicePlace = addedCount - (added.length - index - 1);
        }
      } else if (currentPlace === targetAsString.length) {
      } else {
        currentPlace = 0;
      }
    });

    if (currentPlace === targetAsString.length) {
      break;
    }
  }

  return scores.slice(0, slicePlace - targetAsString.length).length + 1;
}

// 10000 : 22ms
// 20276283 too low
// 20276284
// 20276285 too high

const result = findMatchingRecipie(51589);
console.log("result:", result);
console.timeEnd("run");
