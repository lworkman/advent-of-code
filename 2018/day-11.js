console.log("------");
console.time("run");

function buildGrid(size = 300, serial = 8) {
  const grid = [[]];

  for (let y = 1; y <= size; y++) {
    grid.push([]);
    for (let x = 1; x <= size; x++) {
      const power =
        Number((((x + 10) * y + serial) * (x + 10)).toString().slice(-3, -2)) -
        5;
      grid[y][x] = power;
    }
  }

  return grid;
}

function calculatePower(x = 0, y = 0, grid = [], points = []) {
  let highestPower = 0;
  let highestSize;
  let previous = 0;

  points.some(([xChange, yChange], index) => {
    if (x + xChange >= grid[1].length || y + yChange >= grid.length) {
      return true;
    }
    let newPower = previous + grid[y + yChange][x + xChange];
    const iToCheck = index + 1;

    if (iToCheck === 1 || (iToCheck > 1 && Math.sqrt(iToCheck) % 1 === 0)) {
      if (newPower > highestPower) {
        highestPower = newPower;
        highestSize = Math.sqrt(iToCheck);
      }
    }
    previous = newPower;
  });

  return [highestPower, highestSize];
}

function findBestSet(serial, limit = 2) {
  const grid = buildGrid(300, serial);
  let highestPower = 0;
  let highestPoint = [];
  let highestSize = 0;

  let possiblePoints = [];

  for (let i = 0; i <= limit; i++) {
    possiblePoints = buildSquareAddition(i, possiblePoints);
  }

  for (let y = 1; y < 300; y++) {
    for (let x = 1; x < 300; x++) {
      const [power, size] = calculatePower(x, y, grid, possiblePoints);

      if (power > highestPower) {
        highestPower = power;
        highestPoint = [x, y];
        highestSize = size;
      }
    }
  }

  return [highestPoint, highestSize, highestPower];
}

function buildSquareAddition(limit = 0, holder = []) {
  for (let i = 0; i <= limit; i++) {
    holder.push([limit, i]);
    if (limit !== i) {
      holder.push([i, limit]);
    }
  }

  return holder;
}

const result = findBestSet(6392, 300);

console.log("result:", result);
console.timeEnd("run");
