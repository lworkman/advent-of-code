console.log("------");

const test = `.#..#
.....
#####
....#
...##`;

const test2 = `.#..##.###...#######
##.############..##.
.#.######.########.#
.###.#######.####.#.
#####.##.#.##.###.##
..#####..#.#########
####################
#.####....###.#.#.##
##.#################
#####.##.###..####..
..######..##.#######
####.##.####...##..#
.#####..#.######.###
##...#.##########...
#.##########.#######
.####.#.###.###.#.##
....##.##.###..#####
.#.#.###########.###
#.#.#.#####.####.###
###.##.####.##.#..##`;

const test3 = `.#....#####...#..
##...##.#####..##
##...#...#.#####.
..#.....#...###..
..#.#.....#....##`;

const input = `##.#..#..###.####...######
#..#####...###.###..#.###.
..#.#####....####.#.#...##
.##..#.#....##..##.#.#....
#.####...#.###..#.##.#..#.
..#..#.#######.####...#.##
#...####.#...#.#####..#.#.
.#..#.##.#....########..##
......##.####.#.##....####
.##.#....#####.####.#.####
..#.#.#.#....#....##.#....
....#######..#.##.#.##.###
###.#######.#..#########..
###.#.#..#....#..#.##..##.
#####.#..#.#..###.#.##.###
.#####.#####....#..###...#
##.#.......###.##.#.##....
...#.#.#.###.#.#..##..####
#....#####.##.###...####.#
#.##.#.######.##..#####.##
#.###.##..##.##.#.###..###
#.####..######...#...#####
#..#..########.#.#...#..##
.##..#.####....#..#..#....
.###.##..#####...###.#.#.#
.##..######...###..#####.#`;

function buildMap(raw = "") {
  return raw.split("\n").map((row) => row.split(""));
}

function reduceSteps([x, y] = [0, 0]) {
  let factor = 1;
  let target = x;

  if ((Math.abs(x) > Math.abs(y) && y !== 0) || x === 0) {
    target = y;
  }

  for (let i = Math.abs(target); i > 0; i--) {
    if (y % i === 0 && x % i === 0) {
      factor = i;
      break;
    }
  }

  return [x / factor, y / factor];
}

function deduceAsteroidPaths([originX, originY] = [0, 0], map = [[""]]) {
  const plotted = {};

  map.forEach((row, y) => {
    row.forEach((space, x) => {
      if (space === "#" && (x !== originX || y !== originY)) {
        const distance = createManhattenDistance([originX, originY], [x, y]);
        const direction = reduceSteps(distance).join(",");
        if (!plotted[direction]) {
          plotted[direction] = [];
        }
        plotted[direction].push({
          coordinate: [x, y],
          absoluteDistance: Math.abs(distance[0]) + Math.abs(distance[1]),
        });
      }
    });
  });

  Object.keys(plotted).forEach(key => {
    plotted[key] = plotted[key].sort((a, b) => a.absoluteDistance - b.absoluteDistance);
  })

  return plotted;
}

function createManhattenDistance(
  [originX, originY] = [0, 0],
  [targetX, targetY] = [0, 0]
) {
  return [targetX - originX, targetY - originY];
}

function findBestView(raw = "") {
  const map = buildMap(raw);
  const points = map.reduce((holder, row, y) => {
    row.forEach((item, x) => {
      if (item === "#") {
        holder.push([x, y]);
      }
    });
    return holder;
  }, []);

  const scoredPoints = points
    .map((point) => {
      return {
        coordinate: point,
        score: Object.keys(deduceAsteroidPaths(point, map)).length,
      };
    })
    .sort((a, b) => b.score - a.score);

  return scoredPoints[0];
}

function find200thDestroyedAsteroid(raw = "") {
  const map = buildMap(raw);
  const points = map.reduce((holder, row, y) => {
    row.forEach((item, x) => {
      if (item === "#") {
        holder.push([x, y]);
      }
    });
    return holder;
  }, []);

  const scoredPoints = points
    .map((point) => {
      const asteroids = deduceAsteroidPaths(point, map);
      return {
        coordinate: point,
        score: Object.keys(asteroids).length,
        asteroids,
      };
    })
    .sort((a, b) => b.score - a.score);

  const twoHundo = vaproizeAsteroids(scoredPoints[0])[199].coordinate;

  return twoHundo[0] * 100 + twoHundo[1];
}

function vaproizeAsteroids(
  vantage = {
    coordinate: [0, 0],
    score: 0,
    asteroids: {
      "0,0": [
        {
          coordinate: [0, 0],
          absoluteDistance: 0,
        },
      ],
    },
  }
) {
  const destroyed = [];
  const destroyOrder = sortCoordinates(
    Object.keys(vantage.asteroids).map((key) =>
      key.split(",").map((num) => parseInt(num, 10))
    )
  ).map(coor => coor.join(","));


  while(destroyOrder.some(key => vantage.asteroids[key].length > 0)) {
    destroyOrder.forEach(key => {
      const asteroid = vantage.asteroids[key].splice(0,1)[0];
      if (asteroid) {
        destroyed.push(asteroid);
      }
    });
  }

  return destroyed;;
}

function sortCoordinates(coor = [[0, 0]]) {
  const results = coor.sort(([aX, aY], [bX, bY]) => {
    // [1,4] , [0,2]
    //  quad 4 | quad 1
    //  ---------------
    //  quad 3 | quad 2
    //
    let aQuad = determineQuadrant([aX, aY]);
    let bQuad = determineQuadrant([bX, bY]);

    // ALMOST!

    if (aQuad === bQuad) {
      switch (aQuad) {
        case 1:
        case 3:
          // closer to 0
          if (Math.abs(aX / aY) < Math.abs(bX / bY)) {
            return -1;
          } else {
            return 1;
          }
        case 2:
        case 4:
          // 2, 1
          // further from 0
          if (Math.abs(aX / aY) < Math.abs(bX / bY)) {
            return 1;
          } else {
            return -1;
          }
      }
    } else {
      return aQuad - bQuad;
    }
  }, []);

  return results;
}

function determineQuadrant([x, y] = [0, 0]) {
  if (x >= 0) {
    if (y <= 0) {
      return 1;
    } else {
      return 2;
    }
  } else {
    if (y <= 0) {
      return 4;
    } else {
      return 3;
    }
  }
}

const result = find200thDestroyedAsteroid(input);
// const result = deduceAsteroidPaths([4, 0], buildMap(test));
console.log("result:", result);
