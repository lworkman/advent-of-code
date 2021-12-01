console.log("------");

const test = `.#.
..#
###`;

const input = `#.......
.#..#..#
....#.#.
.##..#.#
#######.
#...####
###.##..
.##.#.#.`;

function getSurroundingCoordinates(coordinate = [0, 0, 0]) {
  function generateChildCoordinates(
    spot = 0,
    distance = 1,
    origin = [0, 0, 0]
  ) {
    let output = [];

    for (let i = distance * -1; i <= distance; i++) {
      const value = i + origin[spot];
      let round = [[value]];
      if (spot > 0) {
        const children = generateChildCoordinates(spot - 1, distance, origin);
        round = children.reduce((holder, child) => {
          holder.push([value, ...child]);
          return holder;
        }, []);
      }
      output = [...output, ...round];
    }

    return output;
  }

  const test = generateChildCoordinates(coordinate.length - 1, 1, coordinate);

  test.forEach((spot) => spot.reverse());

  return test.filter((c) => {
    if (c.join("") === coordinate.join("")) {
      return false;
    } else {
      return true;
    }
  });
}

function performRound(activeSpots = [""]) {
  const coordinates = activeSpots.map((spot) =>
    spot.split(",").map((coordinate) => parseInt(coordinate))
  );
  const output = [];
  let allNeighbouringSpots = [];
  coordinates.map((coord) => {
    const surrounding = getSurroundingCoordinates(coord).map((spot) =>
      spot.join(",")
    );
    allNeighbouringSpots = [...allNeighbouringSpots, ...surrounding];

    const activeNeighbours = surrounding.filter((spot) =>
      activeSpots.includes(spot)
    );

    if (activeNeighbours.length === 2 || activeNeighbours.length === 3) {
      output.push(coord.join(","));
    }
  });

  const countedNeighbourOccurences = allNeighbouringSpots
    .filter((spot) => !activeSpots.includes(spot))
    .reduce((holder, spot) => {
      if (!holder[spot]) {
        holder[spot] = 0;
      }
      holder[spot] += 1;
      return holder;
    }, {});

  Object.keys(countedNeighbourOccurences)
    .filter((key) => countedNeighbourOccurences[key] === 3)
    .forEach((key) => {
      output.push(key);
    });

  return output;
}

function parseInput(raw = "", fourthDimension = false) {
  const output = [];

  raw.split("\n").forEach((column, y) =>
    column.split("").forEach((row, x) => {
      if (row === "#") {
        output.push(`${x},${y},0${fourthDimension ? ",0" : ""}`);
      }
    })
  );

  return output;
}

function runSimulation(raw = "", limit = 0, fourthDimension = false) {
  let state = parseInput(raw, fourthDimension);

  for (let i = 0; i < limit; i++) {
    state = performRound(state);
  }

  return state.length;
}

const result = runSimulation(input, 6, true);

// 1: 29

// const result = getSurroundingCoordinates([2, 1, 0]);
// 1: 11
// 2: 21
// 3: 38
// 6: 112
console.log(result);
