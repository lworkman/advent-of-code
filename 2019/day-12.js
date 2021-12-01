console.log("------");

const test = `<x=-1, y=0, z=2>
<x=2, y=-10, z=-7>
<x=4, y=-8, z=8>
<x=3, y=5, z=-1>`;

const test2 = `<x=-8, y=-10, z=0>
<x=5, y=5, z=10>
<x=2, y=-7, z=3>
<x=9, y=-8, z=-3>`;

const input = `<x=5, y=4, z=4>
<x=-11, y=-11, z=-3>
<x=0, y=7, z=0>
<x=-13, y=2, z=10>`;

const positions = ["x", "y", "z"];
const moons = [0,1,2,3];

function buildMoons(raw = "") {
  return raw
    .split("\n")
    .map((line) => {
      const [_, x, y, z] = /x=(.+), y=(.+), z=(.+)>/.exec(line);

      return {
        x: parseInt(x, 10),
        y: parseInt(y, 10),
        z: parseInt(z, 10),
      };
    })
    .reduce((holder, value, index) => {
      holder[index] = {
        position: value,
        velocity: {
          x: 0,
          y: 0,
          z: 0,
        },
      };
      return holder;
    }, {});
}

function runRound(
  state = {
    "": {
      velocity: {
        x: 0,
        y: 0,
        z: 0,
      },
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  }
) {
  const newState = state;
  const pairs = [
    ["0", "1"],
    ["0", "2"],
    ["0", "3"],
    ["1", "2"],
    ["1", "3"],
    ["2", "3"],
  ];
  const velocityChanges = {
    0: {
      x: 0,
      y: 0,
      z: 0,
    },
    1: {
      x: 0,
      y: 0,
      z: 0,
    },
    2: {
      x: 0,
      y: 0,
      z: 0,
    },
    3: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  pairs.forEach(([a, b]) => {
    const aPosition = state[a].position;
    const bPosition = state[b].position;
    positions.forEach((key) => {
      if (aPosition[key] > bPosition[key]) {
        velocityChanges[a][key]--;
        velocityChanges[b][key]++;
      } else if (aPosition[key] < bPosition[key]) {
        velocityChanges[a][key]++;
        velocityChanges[b][key]--;
      }
    });
  });

  [0, 1, 2, 3].forEach((key) => {
    const moon = newState[key];
    const velocityChange = velocityChanges[key];

    moon.velocity.x += velocityChange.x;
    moon.velocity.y += velocityChange.y;
    moon.velocity.z += velocityChange.z;

    moon.position.x += moon.velocity.x;
    moon.position.y += moon.velocity.y;
    moon.position.z += moon.velocity.z;
  });

  return newState;
}

function simulateMoons(raw = "", steps = 1) {
  let state = buildMoons(raw);

  for (let i = 0; i < steps; i++) {
    state = runRound(state);
  }

  return Object.keys(state).reduce((sum, key) => {
    const moon = state[key];
    return (
      sum +
      (Math.abs(moon.velocity.x) +
        Math.abs(moon.velocity.y) +
        Math.abs(moon.velocity.z)) *
        (Math.abs(moon.position.x) +
          Math.abs(moon.position.y) +
          Math.abs(moon.position.z))
    );
  }, 0);
}

function findRepeat(raw = "") {

  let state = buildMoons(raw);
  let i = 0;
  const initialX = returnKeyState(state, "x");
  const initialY = returnKeyState(state, "y");
  const initialZ = returnKeyState(state, "z");
  let xPeriod;
  let yPeriod;
  let zPeriod;

  while (!xPeriod || !yPeriod || !zPeriod) {
    i++;
    if (i % 1000 === 0) {
      console.log(i);
    }

    state = runRound(state);

    if (!xPeriod) {
      const xCoor = returnKeyState(state, "x");
      if (xCoor === initialX) {
        console.log("x period");
        xPeriod = i;
      }
    }
    if (!yPeriod) {
      const yCoor = returnKeyState(state, "y");
      if (yCoor === initialY) {
        console.log("y period");
        yPeriod = i;
      }
    } 
    if (!zPeriod) {
      const zCoor = returnKeyState(state, "z");
      if (zCoor === initialZ) {
        console.log("z period");
        zPeriod = i;
      }
    }
  }

  // Now need to find LCD
  console.log(xPeriod, zPeriod, yPeriod);

  return range_lcm([xPeriod, zPeriod, yPeriod])
}

function returnKeyState(state = {
  0: {position: {
    "": 0
  },
  velocity: {
    "": 0
  }}
}, coor = "") {
  const output = [];
  
  moons.forEach(key => {
    output.push(state[key].position[coor]);
    output.push(state[key].velocity[coor]);
  });

  return output.join(",");
}

// Euclid algorithm for Greates Common Divisor
function gcd(a, b)
{ 
	return !b ? a : gcd(b, a % b);
} 

// Least Common Multiple function
function lcm(a, b) 
{
	return a * (b / gcd(a,b));
}

// LCM of all numbers in arr=[a, b] 
function range_lcm(arr)
{
  let result = arr[0];

	for(x = 0; x < arr.length; x++) {
		result = lcm(arr[x], result);
	}
	
	return result; 
}

const result = findRepeat(input);
console.log("result:", result);
