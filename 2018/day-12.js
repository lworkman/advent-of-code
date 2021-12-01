console.log("------");
console.time("run");

const test = `initial state: #..#.#..##......###...###

...## => #
..#.. => #
.#... => #
.#.#. => #
.#.## => #
.##.. => #
.#### => #
#.#.# => #
#.### => #
##.#. => #
##.## => #
###.. => #
###.# => #
####. => #`;

const input = `initial state: #...####.##..####..#.##....##...###.##.#..######..#..#..###..##.#.###.#####.##.#.#.#.##....#..#..#..

...## => .
...#. => #
....# => .
###.# => #
..... => .
..#.. => .
#.#.# => .
#..#. => .
#...# => .
##... => .
.#.#. => #
.#..# => .
.###. => .
#..## => #
..#.# => #
.#### => #
##..# => #
##.#. => #
.#... => #
#.#.. => .
##### => .
###.. => #
.##.# => .
#.##. => .
..### => .
.#.## => #
..##. => #
#.### => .
.##.. => #
##.## => .
#.... => .
####. => #`;

function parseInstructions(raw = "") {
  let highestNumber = 0;
  const instructions = raw.split("\n");
  const initialState = instructions[0]
    .replace("initial state: ", "")
    .split("")
    .reduce((holder, char, index) => {
      holder[index] = { state: char, index };
      if (index > highestNumber) {
        highestNumber = index;
      }
      return holder;
    }, {});
  const rules = instructions.slice(2).map((rule) => {
    const outcome = rule.slice(-1);
    const currentState = rule.slice(2, 3);
    const rightOne = rule.slice(3, 4);
    const rightTwo = rule.slice(4, 5);
    const leftOne = rule.slice(1, 2);
    const leftTwo = rule.slice(0, 1);

    return {
      outcome,
      currentState,
      rightOne,
      rightTwo,
      leftOne,
      leftTwo,
      base: rule,
    };
  });

  initialState[-1] = {
    state: ".",
    index: -1,
  };
  initialState[-2] = {
    state: ".",
    index: -2,
  };
  initialState[highestNumber + 1] = {
    state: ".",
    index: highestNumber + 1,
  };
  initialState[highestNumber + 2] = {
    state: ".",
    index: highestNumber + 2,
  };

  return [initialState, rules];
}

function runRound(
  state = {
    state: "",
    index: "",
  },
  rules = [
    {
      outcome: "",
      currentState: "",
      rightOne: "",
      rightTwo: "",
      leftOne: "",
      leftTwo: "",
    },
  ]
) {
  const newState = {};

  Object.keys(state).forEach((key) => {
    const target = state[key];
    const index = target.index;

    function getNeighbour(targetIndex = 0) {
      let output = state[targetIndex];

      if (!output) {
        newState[targetIndex] = {
          state: ".",
          index: targetIndex,
        };

        return newState[targetIndex];
      }

      return output;
    }

    const leftOne = getNeighbour(index - 1).state;
    const leftTwo = getNeighbour(index - 2).state;
    const rightOne = getNeighbour(index + 1).state;
    const rightTwo = getNeighbour(index + 2).state;

    const hasChanged = rules.some((rule) => {
      if (
        target.state === rule.currentState &&
        leftOne === rule.leftOne &&
        leftTwo === rule.leftTwo &&
        rightOne === rule.rightOne &&
        rightTwo === rule.rightTwo
      ) {
        newState[index] = {
          state: rule.outcome,
          index,
        };
        return true;
      }
    });

    if (!hasChanged) {
      newState[index] = {
        state: ".",
        index,
      };
    }
  });

  return newState;
}

function calculatePlants(raw = "", rounds = 1) {
  let [state, rules] = parseInstructions(raw);
  let previous = 0;

  for (let i = 0; i < 113; i++) {
    state = runRound(state, rules);
    const next = Object.keys(state)
      .filter((key) => state[key].state === "#")
      .reduce((sum, key) => {
        return sum + state[key].index;
      }, 0);


    previous = next;
  }

  return BigInt(previous) + (BigInt(rounds) - BigInt(113)) * 80n;
}

const result = calculatePlants(input, 50000000000);

console.log("result:", result);
console.timeEnd("run");
