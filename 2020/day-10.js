console.log("------");

const test = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
const test2 = [
  28,
  33,
  18,
  42,
  31,
  14,
  46,
  20,
  48,
  47,
  24,
  23,
  49,
  45,
  19,
  38,
  39,
  11,
  1,
  32,
  25,
  35,
  8,
  17,
  7,
  9,
  4,
  2,
  34,
  10,
  3,
];
const input = [
  105,
  78,
  37,
  153,
  10,
  175,
  62,
  163,
  87,
  22,
  24,
  92,
  46,
  5,
  115,
  61,
  124,
  128,
  8,
  60,
  17,
  93,
  166,
  29,
  90,
  148,
  113,
  55,
  141,
  134,
  79,
  101,
  49,
  133,
  38,
  53,
  33,
  30,
  66,
  159,
  23,
  132,
  145,
  147,
  121,
  94,
  146,
  21,
  135,
  56,
  176,
  118,
  44,
  138,
  85,
  169,
  111,
  9,
  1,
  83,
  36,
  59,
  140,
  149,
  160,
  43,
  131,
  69,
  2,
  25,
  84,
  39,
  28,
  171,
  172,
  100,
  18,
  15,
  114,
  70,
  86,
  97,
  155,
  152,
  40,
  122,
  77,
  16,
  11,
  170,
  52,
  45,
  139,
  76,
  102,
  63,
  54,
  142,
  14,
  158,
  80,
  154,
  112,
  91,
  108,
  73,
  127,
  123,
];

function findNearestAdapter(currentVoltage = 0, adapters = [0]) {
  const differences = [1, 2, 3];
  let result = 0;

  differences.some((difference) => {
    result = adapters.indexOf(currentVoltage + difference);

    if (result !== -1) {
      return true;
    }
  });

  return result;
}

function createAdapterChain(adapters = [0]) {
  let currentVoltage = 0;
  let trimmedAdapters = adapters.slice();
  let oneJoltCount = 0;
  let threeJoltCount = 0;

  while (true) {
    const adapterIndex = findNearestAdapter(currentVoltage, trimmedAdapters);

    if (adapterIndex === -1) {
      break;
    } else {
      const difference = trimmedAdapters[adapterIndex] - currentVoltage;

      switch (difference) {
        case 1:
          oneJoltCount++;
          break;
        case 3:
          threeJoltCount++;
          break;
      }

      currentVoltage = currentVoltage + difference;

      trimmedAdapters = [
        ...trimmedAdapters.slice(0, adapterIndex),
        ...trimmedAdapters.slice(adapterIndex + 1),
      ];
    }
  }

  threeJoltCount++;

  return oneJoltCount * threeJoltCount;
}

function routeThroughAdapters(adapters = [0]) {
  const largestAdapter = adapters
    .slice()
    .sort((a, b) => a - b)
    .reverse()[0];

  let timeout = setInterval(() => {
    console.log("Still thinking...");
  }, 1000);

  console.log("hello!");

  const output = findAllPossibleChildren(
    largestAdapter,
    adapters.filter((adapter) => adapter !== largestAdapter)
  );

  clearInterval(timeout);

  return output;
}

const recordedPaths = {};

function findAllPossibleChildren(target = 0, adapters = [0]) {
  const differences = [1, 2, 3];

  if (recordedPaths[target]) {
    return recordedPaths[target];
  }

  const paths = differences.reduce((sum, difference) => {
    const adapterNeeded = target - difference;
    const adapterIndex = adapters.indexOf(adapterNeeded);

    if (adapterNeeded === 0) {
      return sum + 1;
    }

    if (adapterIndex !== -1) {
      const childPath = findAllPossibleChildren(
        adapters[adapterIndex],
        adapters.filter((item) => item !== adapters[adapterIndex])
      );
      return sum + childPath;
    } else {
      return sum;
    }
  }, 0);

  recordedPaths[target] = paths;
  return paths;
}

const result = routeThroughAdapters(input);
console.log(result);
