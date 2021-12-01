console.log("------");
console.time("run");

const test = `....#
#..#.
#..##
..#..
#....`;

const input = `#####
.....
....#
#####
.###.`;

const emptyTile = `.....
.....
.....
.....
.....`
  .split("\n")
  .map((row) => row.split(""));

function runBugRound(state = [[]]) {
  const output = [];

  state.forEach((row, y) => {
    output[y] = [];
    row.forEach((cell, x) => {
      const bugCount = getNeighbours(x, y, state).filter((n) => n === "#")
        .length;

      if (cell === "#" && bugCount !== 1) {
        output[y][x] = ".";
      } else if (cell === "." && (bugCount === 1 || bugCount === 2)) {
        output[y][x] = "#";
      } else {
        output[y][x] = cell;
      }
    });
  });

  return output;
}

function getNeighbours(x, y, state) {
  const output = [];
  if (x > 0) {
    output.push(state[y][x - 1]);
  }
  if (x < state.length - 1) {
    output.push(state[y][x + 1]);
  }
  if (y > 0) {
    output.push(state[y - 1][x]);
  }
  if (y < state.length - 1) {
    output.push(state[y + 1][x]);
  }

  return output;
}

function playBugGame(raw = "") {
  let state = raw.split("\n").map((row) => row.split(""));
  let history = [JSON.stringify(state)];
  let duplicateState;

  while (!duplicateState) {
    state = runBugRound(state);
    const hash = JSON.stringify(state);
    if (history.includes(hash)) {
      duplicateState = state;
      break;
    } else {
      history.push(hash);
    }
  }

  duplicateState.forEach((row) => {
    console.log(row.join(""));
  });

  let score = duplicateState.reduce((holder, row, y) => {
    holder += row.reduce((subHolder, cell, x) => {
      if (cell === "#") {
        subHolder += Math.pow(2, x + y * duplicateState.length);
      }
      return subHolder;
    }, 0);
    return holder;
  }, 0);

  return score;
}

function runBugRoundRecursive(state = { 0: [[]] }) {
  const output = {};

  Object.keys(state).forEach((key) => {
    const z = Number(key);
    const keyBefore = (z - 1).toString();
    const keyAfter = (z + 1).toString();
    if (!state[keyBefore]) {
      state[keyBefore] = emptyTile;
    }
    if (!state[keyAfter]) {
      state[keyAfter] = emptyTile;
    }
  });

  Object.keys(state).forEach((key) => {
    output[key] = [];
    const tile = state[key];
    const z = Number(key);

    tile.forEach((row, y) => {
      output[key][y] = [];
      row.forEach((cell, x) => {
        if (y === 2 && x === 2) {
          output[key][y][x] = "?";
          return;
        }
        const bugCount = getNeighboursRecursive(z, x, y, state).filter(
          (n) => n === "#"
        ).length;

        if (cell === "#" && bugCount !== 1) {
          output[key][y][x] = ".";
        } else if (cell === "." && (bugCount === 1 || bugCount === 2)) {
          output[key][y][x] = "#";
        } else {
          output[key][y][x] = cell;
        }
      });
    });
  });

  return output;
}

function playBugGameRecursive(raw = "", limit = 10) {
  let state = { 0: raw.split("\n").map((row) => row.split("")) };

  for (let i = 0; i < limit; i++) {
    state = runBugRoundRecursive(state);
  }

  const count = JSON.stringify(state).match(/#/g).length;

  return count;
}

function getNeighboursRecursive(z, x, y, state) {
  const output = [];
  const coordinates = [
    [y + 1, x],
    [y - 1, x],
    [y, x + 1],
    [y, x - 1],
  ];
  const aboveKey = (z - 1).toString();
  const belowKey = (z + 1).toString();

  const hasAbove = state[aboveKey];
  const hasBelow = state[belowKey];

  coordinates.forEach(([coorY, coorX]) => {
    if (coorY < 0) {
      if (!hasAbove) {
        return;
      }
      output.push(state[aboveKey][1][2]);
    } else if (coorY >= state[z].length) {
      if (!hasAbove) {
        return;
      }
      output.push(state[aboveKey][3][2]);
    } else if (coorX < 0) {
      if (!hasAbove) {
        return;
      }
      output.push(state[aboveKey][2][1]);
    } else if (coorX >= state[z][y].length) {
      if (!hasAbove) {
        return;
      }
      output.push(state[aboveKey][2][3]);
    } else if (coorX === 2 && coorY === 2) {
      if (!hasBelow) {
        return;
      }
      if (coorX < x) {
        output.push(state[belowKey][0][4]);
        output.push(state[belowKey][1][4]);
        output.push(state[belowKey][2][4]);
        output.push(state[belowKey][3][4]);
        output.push(state[belowKey][4][4]);
      } else if (coorX > x) {
        output.push(state[belowKey][0][0]);
        output.push(state[belowKey][1][0]);
        output.push(state[belowKey][2][0]);
        output.push(state[belowKey][3][0]);
        output.push(state[belowKey][4][0]);
      } else if (coorY < y) {
        output.push(state[belowKey][4][0]);
        output.push(state[belowKey][4][1]);
        output.push(state[belowKey][4][2]);
        output.push(state[belowKey][4][3]);
        output.push(state[belowKey][4][4]);
      } else if (coorY > y) {
        output.push(state[belowKey][0][0]);
        output.push(state[belowKey][0][1]);
        output.push(state[belowKey][0][2]);
        output.push(state[belowKey][0][3]);
        output.push(state[belowKey][0][4]);
      }
    } else {
      output.push(state[z][coorY][coorX]);
    }
  });

  return output;
}

const result = playBugGameRecursive(input, 200);
console.log("result:", result);
console.timeEnd("run");
