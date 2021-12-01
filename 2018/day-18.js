console.log("------");
console.time("run");

const test = `.#.#...|#.
.....#|##|
.|..|...#.
..|#.....#
#.#|||#|#|
...#.||...
.|....|...
||...#|.#|
|.||||..|.
...#.|..|.`;

const input = `.|...|..|##.#.|##...#.|........|..|...#..|##.|....
..#....#.|..........|#.....##..|...|#||...|#|..|..
#|...|.|.#..||...#|||..#|#..#..|...#.##.|##.......
##.....#..|#.....#.....#.|....#..|.|#|....|...#|..
#....|..........|...||#.#..###..#..##..#.||...#|#.
.||..|...||..#......#.#......|.#....|.#..|.|..|#..
.|.....#||.....|#.###....#..##..#|#...|##....#|.#.
.|#......||....|#...##.#...|....|.#......|.....#..
##..||..#...#........|..|.......|.#..|.......#|.|.
...|.|#..|....|....#..||#.|.#..|.....|..#.....#...
.|..|#....#....#.|||...#.........|||#....#...|.|..
....||...|..#...|..||.......|.|....#.#.|#.#..|##.|
..#....|.#.#|....#...#.....###|.#.|..#.#......#...
||..|...#..|...||||.#|.||.....#....###..|##|.....|
......||.||##||...#..||...||.||#.#.......||#||#||.
.|.#...|.....|#..##|#|#.##|..|##...#...|..#|##..|.
...|.|#..........|.|..|..|.....|.#|..#|...|...|..#
..#...|...#.#||...#..|..#|#....##..#......####..|.
........|.##|.||..#||.|#|...#..#|#|.#.|.#........#
#.|.||..||.#...||..##..|#....#|.....|..#.|.####...
......|.|.||.||.###.#.###..........#...|||...###..
.##.|...#|..#....|.#...#...#|.##.|#.||..#.|..|.|#.
||....#|#|.#|||.|...||..|.##|...#..##..#.|##.||##|
..|||......#|......|..|#.||.|#.|#..#...#.|.|......
.|.|..#.#.###..#..#..|#..#..|...|..#|...#.|..#.#|.
|.....#...##.....|..|...#|#.#....|#..|#...|....|..
|..|....|...##.|.....#|.#|.||.....|#..|.#....#..#.
|#..#..##.....#|#|...#.....#....|.|.|..|..#.|..#|.
.#.#|#..#|..|.#..|..|#||||..##.#|..|..#.|##.|.|...
.||....#..|||.|#..#......|||....|...#..#.||..|....
#.||.|....|..........|.|...##|#|..|#....|.#...|..#
|.........#.||.....#......#|..|||......##...|#|...
.|.||..#...|..|......#.......|...|.|#|....#.|....#
.#......#.....||.|.......|#||.##......|#.#..#..|.#
|.|......|.|#....##||#..|..#|....||||.||..#....#.|
.|..#|#..|..##||#.#.|.#.#|..|##|.##....#.##|....|.
.||...||.|..#....||..|#...|###..#....#.#.......|#.
.||#.|....#|###||.||###|..|..#.|#....|#....|.#.|..
.||..|#....###.||#..#.|........###..|.#...#..||...
...||#|...|.#..|.#.....#.....#.#.#.##..#....|..#|.
#.##|....|.||.|..|..#......#....||.#..##...#.|...#
|......|...###.|..#.|##..|.......|.|.#...|..|.#.##
|......#.....#..#||...###..#..|.|..#.....|#..|||..
#....#.|...||#...|.#.#..#|.......#...|....#..#.#|.
|.#..#.||...|..........#.#|...##.#.||.|#|.........
..#.##|##..|.#|.##.|.....#....#...|.|##....|......
||..#.#|..|.|#..|...##...........#.||.|..##..#.|..
.......|.|.|...|...#.#|#..||.||....|.|...#..#.||..
|.##..#..|...||.|..#....|.|.#|..#.||..#..####.#...
.||..|.|...|#|#.|||#......|......#.|.....||.......`;

function makeForest(raw = "") {
  return raw.split("\n").map((row) => row.split(""));
}

function runRound(map = [[]]) {
  const newMap = [];

  map.forEach((row, y) => {
    newMap[y] = [];
    row.forEach((unit, x) => {
      const neighbours = getNeighbours(x, y, map);
      let newChar = unit;
      switch (unit) {
        case ".":
          if (neighbours.filter((elem) => elem === "|").length >= 3) {
            newChar = "|";
          }
          break;
        case "|":
          if (neighbours.filter((elem) => elem === "#").length >= 3) {
            newChar = "#";
          }
          break;
        case "#":
          if (
            !(
              neighbours.filter((elem) => elem === "#").length >= 1 &&
              neighbours.filter((elem) => elem === "|").length >= 1
            )
          ) {
            newChar = ".";
          }
          break;
      }
      newMap[y][x] = newChar;
    });
  });

  return newMap;
}

function getNeighbours(x, y, map = [[]]) {
  return [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
  ]
    .map(([xAdd, yAdd]) => {
      if (!map[y + yAdd] || !map[y + yAdd][x + xAdd]) {
        return undefined;
      }

      return map[y + yAdd][x + xAdd];
    })
    .filter((elem) => elem);
}

function print(map = [[]]) {
  map.forEach((row) => console.log(row.join("")));
}

function playGame(raw = "", rounds = 0) {
  let map = makeForest(raw);

  for (let i = 0; i < rounds; i++) {
    map = runRound(map);
  }
  const treeCount = map.reduce((sum, row) => {
    return sum + row.filter((cell) => cell === "|").length;
  }, 0);
  const yards = map.reduce((sum, row) => {
    return sum + row.filter((cell) => cell === "#").length;
  }, 0);

  return yards * treeCount;
}

function playGameForLongTime(raw = "", rounds = 0) {
  let map = makeForest(raw);
  let states = {};
  let potentialGap;
  let lastReset;
  let newBase;

  for (let i = 0; i < 2000; i++) {
    map = runRound(map);
    const treeCount = map.reduce((sum, row) => {
      return sum + row.filter((cell) => cell === "|").length;
    }, 0);
    const yards = map.reduce((sum, row) => {
      return sum + row.filter((cell) => cell === "#").length;
    }, 0);
    const newSum = yards * treeCount;

    if (!states[newSum]) {
      states[newSum] = [];
    } else if (states[newSum]) {
      const difference = i - states[newSum][states[newSum].length - 1];
      if (difference !== potentialGap) {
        potentialGap = difference;
        lastReset = i;
        newBase = i;
      }
    }

    states[newSum].push(i);
  }

  console.log(newBase, potentialGap);

  const adjustment = (rounds - newBase) % potentialGap;

  const newAmount = Number(
    Object.keys(states).find((key) =>
      states[key].includes(newBase + adjustment - 1)
    )
  );

  const actual = states[178560];

  console.log(actual, newBase + adjustment - 1);

  return newAmount;
}

const result = playGameForLongTime(input, 1000000000);
const otherResult = playGame(input, 2000);

// 202860 too high

console.log("result:", result, otherResult);
console.timeEnd("run");
