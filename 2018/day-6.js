console.log("------");
console.time("run");

const test = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;
const input = `158, 163
287, 68
76, 102
84, 244
162, 55
272, 335
345, 358
210, 211
343, 206
219, 323
260, 238
83, 94
137, 340
244, 172
335, 307
52, 135
312, 109
276, 93
288, 274
173, 211
125, 236
200, 217
339, 56
286, 134
310, 192
169, 192
313, 106
331, 186
40, 236
194, 122
244, 76
159, 282
161, 176
262, 279
184, 93
337, 284
346, 342
283, 90
279, 162
112, 244
49, 254
63, 176
268, 145
334, 336
278, 176
353, 135
282, 312
96, 85
90, 105
354, 312`;

function createGrid(raw = "") {
  return raw.split("\n").reduce(
    (grid, coor, index) => {
      const reg = /(\d+), (\d+)/.exec(coor);
      const x = Number(reg[1]);
      const y = Number(reg[2]);

      if (x > grid.width) {
        grid.width = x;
      }
      if (y > grid.height) {
        grid.height = y;
      }

      if (!grid.map[y]) {
        grid.map[y] = [];
      }

      grid.map[y][x] = index;
      grid.points[index] = [x, y];

      grid.pointsCollect.push([x, y]);

      return grid;
    },
    {
      map: [],
      height: 0,
      width: 0,
      points: {},
      pointsCollect: [],
    }
  );
}

function fillOutGrid(raw = "") {
  const grid = createGrid(raw);

  for (let y = 0; y <= grid.height; y++) {
    if (!grid.map[y]) {
      grid.map[y] = [];
    }
    for (let x = 0; x <= grid.width; x++) {
      if (grid.map[y][x]) {
        continue;
      }
      const pointDistances = Object.keys(grid.points)
        .map((key) => {
          const [pointX, pointY] = grid.points[key];
          const distance = Math.abs(x - pointX) + Math.abs(y - pointY);
          return { distance, key };
        })
        .sort((a, b) => a.distance - b.distance);

      let hasMultiple =
        pointDistances[0].distance === pointDistances[1].distance;

      if (hasMultiple) {
        grid.map[y][x] = ".";
      } else {
        grid.map[y][x] = pointDistances[0].key;
      }
    }
  }
  const countedSpaces = grid.map.reduce((holder, row, y) => {
    row.forEach((space, x) => {
      const value = grid.map[y][x];
      if (value !== ".") {
        if (!holder[value]) {
          holder[value] = {
            count: 0,
            onEdge: false,
          };
        }

        if (y === 0 || x === 0 || y === grid.height || x === grid.width) {
          holder[value].onEdge = true;
        }

        holder[value].count += 1;
      }
    });
    return holder;
  }, {});

  return Object.keys(countedSpaces)
    .map((key) => countedSpaces[key])
    .filter((space) => !space.onEdge)
    .sort((a, b) => b.count - a.count)[0].count;
}

function findSafeSpace(raw = "") {
  const grid = createGrid(raw);

  for (let y = 0; y <= grid.height; y++) {
    if (!grid.map[y]) {
      grid.map[y] = [];
    }
    for (let x = 0; x <= grid.width; x++) {
      const pointDistanceTotal = Object.keys(grid.points)
        .map((key) => {
          const [pointX, pointY] = grid.points[key];
          const distance = Math.abs(x - pointX) + Math.abs(y - pointY);
          return distance;
        })
        .reduce((sum, a) => sum + a);

      if (pointDistanceTotal < 10000) {
        grid.map[y][x] = "#";
      } else {
        grid.map[y][x] = ".";
      }
    }
  }

  return [...grid.map.map(row => row.join(",")).join(",").matchAll("#")].length;
}

const result = findSafeSpace(input);

console.log("result:", result);
console.timeEnd("run");
