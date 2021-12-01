console.log("------");

console.time("start");

const input =
  "59717238168580010599012527510943149347930742822899638247083005855483867484356055489419913512721095561655265107745972739464268846374728393507509840854109803718802780543298141398644955506149914796775885246602123746866223528356493012136152974218720542297275145465188153752865061822191530129420866198952553101979463026278788735726652297857883278524565751999458902550203666358043355816162788135488915722989560163456057551268306318085020948544474108340969874943659788076333934419729831896081431886621996610143785624166789772013707177940150230042563041915624525900826097730790562543352690091653041839771125119162154625459654861922989186784414455453132011498";

const test = `03036732577212944063491565474664`;

function buildPattern(basePattern = [0], length = 0, round = 0) {
  const output = [];
  let loopCount = 0;

  while (output.length < length + 1) {
    const num = basePattern[loopCount % basePattern.length];
    for (let i = loopCount === 0 ? 1 : 0; i <= round; i++) {
      output.push(num);
    }
    loopCount++;
  }

  return output;
}

function phaseRound(input = [0]) {
  const inputDigits = input;
  const output = [];
  const basePattern = [0, 1, 0, -1];
  const patternLength = input.length;

  inputDigits.forEach((_, index) => {
    const pattern = buildPattern(basePattern, patternLength, index);
    let result =
      Math.abs(
        inputDigits.reduce((sum, digit, index) => {
          return sum + digit * pattern[index];
        }, 0)
      ) % 10;

    output.push(result);
  });

  return output;
}

function runThroughRounds(input = "", limit = 0) {
  let current = input.split("").map((num) => parseInt(num, 10));

  for (let i = 0; i < limit; i++) {
    current = phaseRound(current);
  }

  return current.slice(0, 8).join("");
}

function part2(raw = "", limit = 0, duplicate = 0) {
  let num = [];
  const rawNums = raw.split("").map((num) => parseInt(num, 10));

  for (let i = 0; i < duplicate; i++) {
    for (let n = 0; n < rawNums.length; n++) {
      num.push(rawNums[n]);
    }
  }

  /**
   * Due to how the phasing repeats, if a number is in the later
   * half it follows two rules:
   * 
   * 1. All the numbers before it are 0
   * 2. All the numbers after it are multiplied by 1 (so they don't change)
   * 
   * Because of this, you can actually calculate the numbers backwards
   * and use the resulting sum in the next equation. For instance, with
   * the array [1, 2, 3, 4, 5, 6, 7, 8], skipping the first four digits (so 
   * using [5,6,7,8]), the result is:
   * 
   * [5 + 6 + 7 + 8 % 10, 6 + 7 + 8 % 10, 7 + 8 % 10, 8]
   * [26 % 10, 21 % 10, 15 % 10, 8]
   * [6, 1, 5, 8]
   * 
   * WHICH IS THE SAME AS
   * 
   * [8 % 10]
   * [7 + 8 % 10, 8] = [5, 8]
   * [6 + 5 % 10, 5, 8] = [1, 5, 8]
   * [5 + 1 % 10, 1, 5, 8] = [6, 1, 5, 8]
   * 
   * DON'T ASK ME WHY THIS MATH WORKS
   */

  const offset = Number(num.slice(0, 7).join(""));
  let numsState = num.slice(offset);

  for (let i = 0; i < limit; i++) {
    const nextState = []
    for (let x = numsState.length - 1; x >= 0; x--) {
      nextState[x] = ((nextState[x + 1] || 0) + numsState[x]) % 10;
    }
    numsState = nextState;
  }

  return numsState.slice(0, 8).join("");
}

const result = part2(input, 100, 10000);
console.log("result:", result);

// 58672132

console.timeEnd("start");
