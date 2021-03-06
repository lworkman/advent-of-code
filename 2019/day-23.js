console.log("------");
console.time("run");

const input = `3,62,1001,62,11,10,109,2219,105,1,0,1256,893,1470,1771,1967,732,608,1633,860,1996,1367,1060,1439,1596,2062,1872,672,1812,2126,955,823,1408,924,1501,1126,990,765,1186,1530,1027,1903,2190,641,1936,1563,1674,571,1219,1332,701,1297,794,2095,1738,2031,2161,1091,1707,1155,1841,0,0,0,0,0,0,0,0,0,0,0,0,3,64,1008,64,-1,62,1006,62,88,1006,61,170,1106,0,73,3,65,20102,1,64,1,20102,1,66,2,21102,1,105,0,1106,0,436,1201,1,-1,64,1007,64,0,62,1005,62,73,7,64,67,62,1006,62,73,1002,64,2,133,1,133,68,133,101,0,0,62,1001,133,1,140,8,0,65,63,2,63,62,62,1005,62,73,1002,64,2,161,1,161,68,161,1101,1,0,0,1001,161,1,169,1002,65,1,0,1102,1,1,61,1102,1,0,63,7,63,67,62,1006,62,203,1002,63,2,194,1,68,194,194,1006,0,73,1001,63,1,63,1106,0,178,21102,210,1,0,105,1,69,2101,0,1,70,1101,0,0,63,7,63,71,62,1006,62,250,1002,63,2,234,1,72,234,234,4,0,101,1,234,240,4,0,4,70,1001,63,1,63,1105,1,218,1106,0,73,109,4,21102,0,1,-3,21101,0,0,-2,20207,-2,67,-1,1206,-1,293,1202,-2,2,283,101,1,283,283,1,68,283,283,22001,0,-3,-3,21201,-2,1,-2,1106,0,263,22101,0,-3,-3,109,-4,2105,1,0,109,4,21101,0,1,-3,21101,0,0,-2,20207,-2,67,-1,1206,-1,342,1202,-2,2,332,101,1,332,332,1,68,332,332,22002,0,-3,-3,21201,-2,1,-2,1105,1,312,21201,-3,0,-3,109,-4,2105,1,0,109,1,101,1,68,359,20102,1,0,1,101,3,68,366,21001,0,0,2,21101,0,376,0,1105,1,436,22101,0,1,0,109,-1,2106,0,0,1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,4294967296,8589934592,17179869184,34359738368,68719476736,137438953472,274877906944,549755813888,1099511627776,2199023255552,4398046511104,8796093022208,17592186044416,35184372088832,70368744177664,140737488355328,281474976710656,562949953421312,1125899906842624,109,8,21202,-6,10,-5,22207,-7,-5,-5,1205,-5,521,21101,0,0,-4,21101,0,0,-3,21102,51,1,-2,21201,-2,-1,-2,1201,-2,385,471,20101,0,0,-1,21202,-3,2,-3,22207,-7,-1,-5,1205,-5,496,21201,-3,1,-3,22102,-1,-1,-5,22201,-7,-5,-7,22207,-3,-6,-5,1205,-5,515,22102,-1,-6,-5,22201,-3,-5,-3,22201,-1,-4,-4,1205,-2,461,1106,0,547,21101,0,-1,-4,21202,-6,-1,-6,21207,-7,0,-5,1205,-5,547,22201,-7,-6,-7,21201,-4,1,-4,1106,0,529,21202,-4,1,-7,109,-8,2106,0,0,109,1,101,1,68,563,21001,0,0,0,109,-1,2106,0,0,1102,1,76561,66,1101,0,4,67,1102,598,1,68,1101,253,0,69,1101,0,1,71,1101,606,0,72,1106,0,73,0,0,0,0,0,0,0,0,43,100493,1101,0,18493,66,1102,2,1,67,1102,635,1,68,1102,1,302,69,1102,1,1,71,1102,1,639,72,1105,1,73,0,0,0,0,13,260979,1102,1,12479,66,1102,1,1,67,1101,0,668,68,1101,556,0,69,1102,1,1,71,1101,670,0,72,1106,0,73,1,29,25,109924,1102,96979,1,66,1101,0,1,67,1102,1,699,68,1102,556,1,69,1102,1,0,71,1101,0,701,72,1106,0,73,1,1860,1102,1,82793,66,1102,1,1,67,1101,0,728,68,1101,556,0,69,1102,1,1,71,1101,730,0,72,1106,0,73,1,926,37,40178,1102,1,32887,66,1101,0,2,67,1101,759,0,68,1101,0,302,69,1101,1,0,71,1102,1,763,72,1106,0,73,0,0,0,0,35,10459,1102,21067,1,66,1101,1,0,67,1102,1,792,68,1101,0,556,69,1102,1,0,71,1102,794,1,72,1105,1,73,1,1515,1102,1,97871,66,1101,1,0,67,1102,821,1,68,1102,556,1,69,1101,0,0,71,1101,823,0,72,1105,1,73,1,1087,1102,63473,1,66,1102,4,1,67,1101,0,850,68,1101,302,0,69,1102,1,1,71,1101,0,858,72,1106,0,73,0,0,0,0,0,0,0,0,7,49559,1102,1,13577,66,1101,0,2,67,1102,887,1,68,1101,0,302,69,1102,1,1,71,1102,1,891,72,1106,0,73,0,0,0,0,29,147794,1102,1,98473,66,1102,1,1,67,1102,920,1,68,1101,0,556,69,1102,1,1,71,1102,922,1,72,1106,0,73,1,389,25,54962,1101,0,593,66,1102,1,1,67,1102,951,1,68,1102,1,556,69,1101,1,0,71,1101,953,0,72,1105,1,73,1,9723,25,82443,1102,33199,1,66,1101,3,0,67,1101,0,982,68,1101,302,0,69,1101,1,0,71,1101,988,0,72,1105,1,73,0,0,0,0,0,0,36,229683,1102,27481,1,66,1102,4,1,67,1102,1,1017,68,1101,302,0,69,1102,1,1,71,1101,1025,0,72,1106,0,73,0,0,0,0,0,0,0,0,36,153122,1102,1,73897,66,1101,0,2,67,1101,0,1054,68,1102,1,302,69,1102,1,1,71,1102,1058,1,72,1106,0,73,0,0,0,0,36,306244,1102,84787,1,66,1102,1,1,67,1102,1087,1,68,1102,556,1,69,1101,0,1,71,1102,1,1089,72,1106,0,73,1,463,40,181586,1101,0,91453,66,1101,0,3,67,1102,1118,1,68,1102,302,1,69,1101,0,1,71,1101,1124,0,72,1105,1,73,0,0,0,0,0,0,13,173986,1102,90199,1,66,1102,1,1,67,1102,1153,1,68,1102,1,556,69,1102,0,1,71,1101,1155,0,72,1105,1,73,1,1477,1102,73583,1,66,1101,0,1,67,1102,1,1182,68,1101,0,556,69,1101,1,0,71,1101,0,1184,72,1105,1,73,1,1021,18,88702,1102,1,41959,66,1102,1,2,67,1102,1,1213,68,1102,351,1,69,1102,1,1,71,1101,1217,0,72,1106,0,73,0,0,0,0,255,29753,1101,20089,0,66,1101,4,0,67,1101,0,1246,68,1101,302,0,69,1101,1,0,71,1101,1254,0,72,1105,1,73,0,0,0,0,0,0,0,0,13,347972,1101,0,29753,66,1101,1,0,67,1102,1283,1,68,1102,1,556,69,1101,0,6,71,1102,1285,1,72,1105,1,73,1,25252,6,36986,9,47714,9,71571,46,91453,46,182906,46,274359,1102,90793,1,66,1101,3,0,67,1102,1,1324,68,1101,302,0,69,1102,1,1,71,1101,1330,0,72,1106,0,73,0,0,0,0,0,0,9,23857,1102,87257,1,66,1101,0,1,67,1101,1359,0,68,1101,556,0,69,1101,3,0,71,1102,1,1361,72,1105,1,73,1,5,20,63473,20,190419,7,297354,1102,1,32371,66,1102,1,1,67,1101,0,1394,68,1101,0,556,69,1101,6,0,71,1102,1,1396,72,1106,0,73,1,1,18,44351,37,20089,25,27481,30,60689,19,33199,40,272379,1102,17891,1,66,1101,1,0,67,1102,1435,1,68,1101,0,556,69,1102,1,1,71,1101,1437,0,72,1106,0,73,1,983,37,60267,1102,1,11093,66,1101,0,1,67,1101,1466,0,68,1101,556,0,69,1101,0,1,71,1101,0,1468,72,1106,0,73,1,-102,40,90793,1102,36373,1,66,1102,1,1,67,1102,1,1497,68,1102,556,1,69,1101,1,0,71,1101,1499,0,72,1106,0,73,1,15877,30,121378,1101,0,44263,66,1102,1,1,67,1102,1528,1,68,1101,0,556,69,1101,0,0,71,1101,1530,0,72,1105,1,73,1,1554,1102,23873,1,66,1101,1,0,67,1102,1,1557,68,1101,556,0,69,1102,1,2,71,1101,0,1559,72,1105,1,73,1,3,8,27154,29,73897,1102,1,83777,66,1102,2,1,67,1101,1590,0,68,1102,1,302,69,1101,0,1,71,1102,1594,1,72,1106,0,73,0,0,0,0,6,18493,1102,1,86993,66,1102,1,4,67,1102,1,1623,68,1101,0,253,69,1101,1,0,71,1102,1,1631,72,1105,1,73,0,0,0,0,0,0,0,0,27,41959,1101,0,49559,66,1102,1,6,67,1102,1660,1,68,1101,302,0,69,1102,1,1,71,1101,0,1672,72,1105,1,73,0,0,0,0,0,0,0,0,0,0,0,0,27,83918,1101,0,10459,66,1102,2,1,67,1101,0,1701,68,1101,302,0,69,1101,0,1,71,1102,1,1705,72,1106,0,73,0,0,0,0,36,76561,1101,0,40471,66,1102,1,1,67,1101,1734,0,68,1102,1,556,69,1101,1,0,71,1102,1,1736,72,1106,0,73,1,160,7,198236,1101,100493,0,66,1101,2,0,67,1101,1765,0,68,1101,302,0,69,1102,1,1,71,1101,1769,0,72,1106,0,73,0,0,0,0,34,167554,1101,18287,0,66,1101,0,1,67,1102,1,1798,68,1101,0,556,69,1102,1,6,71,1101,0,1800,72,1105,1,73,1,2,5,65774,35,20918,43,200986,34,83777,7,99118,7,247795,1102,32057,1,66,1102,1,1,67,1101,1839,0,68,1101,556,0,69,1101,0,0,71,1102,1841,1,72,1105,1,73,1,1477,1102,1,2357,66,1102,1,1,67,1102,1,1868,68,1102,1,556,69,1101,1,0,71,1102,1,1870,72,1106,0,73,1,86530252,5,32887,1102,34469,1,66,1102,1,1,67,1101,1899,0,68,1102,1,556,69,1102,1,1,71,1101,0,1901,72,1105,1,73,1,410617,8,13577,1102,60689,1,66,1102,1,2,67,1102,1930,1,68,1102,1,302,69,1101,1,0,71,1102,1934,1,72,1105,1,73,0,0,0,0,19,99597,1102,1,38281,66,1101,0,1,67,1101,0,1963,68,1101,0,556,69,1102,1,1,71,1102,1,1965,72,1105,1,73,1,-6213,19,66398,1101,0,36791,66,1102,1,1,67,1102,1,1994,68,1101,0,556,69,1102,0,1,71,1101,0,1996,72,1105,1,73,1,1986,1101,23857,0,66,1102,1,3,67,1101,2023,0,68,1101,302,0,69,1102,1,1,71,1101,2029,0,72,1105,1,73,0,0,0,0,0,0,13,86993,1101,68281,0,66,1101,0,1,67,1101,0,2058,68,1102,556,1,69,1101,0,1,71,1101,0,2060,72,1105,1,73,1,884,18,133053,1101,62873,0,66,1101,1,0,67,1101,2089,0,68,1101,0,556,69,1101,0,2,71,1102,1,2091,72,1105,1,73,1,10,20,253892,7,148677,1102,1,74561,66,1102,1,1,67,1102,1,2122,68,1102,1,556,69,1102,1,1,71,1102,1,2124,72,1105,1,73,1,125,20,126946,1101,0,44351,66,1102,3,1,67,1101,2153,0,68,1102,302,1,69,1101,1,0,71,1102,1,2159,72,1105,1,73,0,0,0,0,0,0,37,80356,1102,45481,1,66,1101,0,1,67,1102,1,2188,68,1101,0,556,69,1102,0,1,71,1102,1,2190,72,1105,1,73,1,1414,1101,90379,0,66,1102,1,1,67,1102,1,2217,68,1101,0,556,69,1102,0,1,71,1101,2219,0,72,1105,1,73,1,1733`;

class LiamComputer {
  _version = "3.1";
  _instructions = [];
  _head = 0;
  _initialInputs = [];
  _relativeBase = 0;
  _output = [];

  constructor(rawInstructions = "", initialInputs = [], relativeBase = 0) {
    this._instructions = rawInstructions
      .split(",")
      .map((num) => parseInt(num, 10));

    this._initialInputs = initialInputs;
    this._relativeBase = relativeBase;
  }

  run() {
    let isDone = false;
    let getInputFunction;

    while (!isDone && !getInputFunction) {
      getInputFunction = undefined;
      const codes = this._turnInstructionIntoCodes(
        this._instructions[this._head]
      );
      const value1 = {
        mode: codes.p1,
        value: this._instructions[this._head + 1],
      };
      const value2 = {
        mode: codes.p2,
        value: this._instructions[this._head + 2],
      };
      const pointer = {
        mode: codes.p3,
        value: this._instructions[this._head + 3],
      };
      switch (codes.instruction) {
        case 1:
          this.add(value1, value2, pointer);
          break;
        case 2:
          this.multiply(value1, value2, pointer);
          break;
        case 3:
          getInputFunction = this.input(value1);
          break;
        case 4:
          const temp = this.output(value1);
          if (temp === undefined) {
            isDone = true;
          } else {
            this._output.push(temp);
          }
          break;
        case 5:
          this.jumpIfTrue(value1, value2);
          break;
        case 6:
          this.jumpIfFalse(value1, value2);
          break;
        case 7:
          this.lessThan(value1, value2, pointer);
          break;
        case 8:
          this.equals(value1, value2, pointer);
          break;
        case 9:
          this.adjustRelativeBase(value1);
          break;
        case 99:
          this._output.push(0);
          isDone = true;
          break;
      }
    }

    const outputCopy = [...this._output];
    this._output = [];
    return {
      output: outputCopy,
      exitCode: isDone ? 0 : undefined,
      input: getInputFunction,
    };
  }

  add(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    this._instructions[this._determinePointer(pointer)] =
      this._determineValue(arg1) + this._determineValue(arg2);
    this.incrementHead(4);
  }

  multiply(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    const value1 = this._determineValue(arg1);
    const value2 = this._determineValue(arg2);
    this._instructions[this._determinePointer(pointer)] = value1 * value2;
    this.incrementHead(4);
  }

  input(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    const pointer = this._determinePointer(arg1);

    const handleInput = (value = 0) => {
      this._instructions[pointer] = value;
      this.incrementHead(2);
      return this.run();
    };

    if (this._initialInputs.length > 0) {
      const input = this._initialInputs.splice(0, 1)[0];
      this._instructions[pointer] = input;
      this.incrementHead(2);
    } else {
      return handleInput;
    }
  }

  output(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    const output = this._determineValue(arg1);
    this.incrementHead(2);
    return output;
  }

  jumpIfTrue(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    }
  ) {
    const value = this._determineValue(arg1);
    if (value !== 0) {
      this._head = this._determineValue(arg2);
    } else {
      this.incrementHead(3);
    }
  }

  jumpIfFalse(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    }
  ) {
    const value = this._determineValue(arg1);
    if (value === 0) {
      this._head = this._determineValue(arg2);
    } else {
      this.incrementHead(3);
    }
  }

  lessThan(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    if (this._determineValue(arg1) < this._determineValue(arg2)) {
      this._instructions[this._determinePointer(pointer)] = 1;
    } else {
      this._instructions[this._determinePointer(pointer)] = 0;
    }
    this.incrementHead(4);
  }

  equals(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    if (this._determineValue(arg1) === this._determineValue(arg2)) {
      this._instructions[this._determinePointer(pointer)] = 1;
    } else {
      this._instructions[this._determinePointer(pointer)] = 0;
    }
    this.incrementHead(4);
  }

  adjustRelativeBase(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    this._relativeBase += this._determineValue(arg1);
    this.incrementHead(2);
  }

  incrementHead(value = 0) {
    this._head += value;
  }

  _turnInstructionIntoCodes(value = 0) {
    let stringValue = value.toString();
    if (value < 10) {
      stringValue = "0" + stringValue;
    }
    if (value < 100) {
      stringValue = "0" + stringValue;
    }
    if (value < 1000) {
      stringValue = "0" + stringValue;
    }
    if (value < 10000) {
      stringValue = "0" + stringValue;
    }
    return {
      instruction: parseInt(stringValue.slice(-2), 10),
      p1: parseInt(stringValue[2], 10),
      p2: parseInt(stringValue[1], 10),
      p3: parseInt(stringValue[0], 10),
    };
  }

  _determineValue({ mode, value } = { mode: 0, value: 0 }) {
    if (mode === 1) {
      return value;
    } else if (mode === 2) {
      return this._instructions[this._relativeBase + value] || 0;
    } else {
      return this._instructions[value] || 0;
    }
  }

  _determinePointer({ mode, value } = { mode: 0, value: 0 }) {
    // a bit unsure of how this works

    if (mode === 2) {
      return this._relativeBase + value;
    } else {
      return value;
    }
  }
}

function runNetwork(raw = "", computerCount = 50) {
  const computers = [];
  const messages = [];

  for (let i = 0; i < computerCount; i++) {
    let computer = new LiamComputer(raw).run();
    computer = computer.input(i);
    computers.push(computer);
  }

  function runRound() {
    let output;
    computers.forEach((computer, index) => {
      let newComputer = computer;
      if (messages[index] && messages[index].length > 0) {
        const [x, y] = messages[index].shift();
        newComputer = newComputer.input(x);
        newComputer = newComputer.input(y);
      } else {
        newComputer = newComputer.input(-1);
      }
      computers[index] = newComputer;
    });

    computers.forEach((computer, index) => {
      let newComputer = computer;
      const newInstructions = newComputer.output.reduce(
        (container, instruction, i) => {
          const holder = Math.floor(i / 3);
          if (!container[holder]) {
            container[holder] = [];
          }
          container[holder].push(instruction);
          return container;
        },
        []
      );
      newInstructions.forEach(([a, x, y]) => {
        if (a === 255) {
          output = y;
        }
        if (!messages[a]) {
          messages[a] = [];
        }
        messages[a].push([x, y]);
      });
      computers[index] = newComputer;
    });

    return output;
  }

  let i = 0;
  let result;

  while (i < 1000 && !result) {
    result = runRound();
    i++;
  }

  return result;
}

function runNetworkWithIdle(raw = "", computerCount = 50) {
  const computers = [];
  const messages = [];
  let nat;
  let previousValues = [];

  for (let i = 0; i < computerCount; i++) {
    let computer = new LiamComputer(raw).run();
    computer = computer.input(i);
    computers.push(computer);
  }

  function runRound() {
    let noAction = 0;
    computers.forEach((computer, index) => {
      let newComputer = computer;
      if (messages[index] && messages[index].length > 0) {
        const [x, y] = messages[index].shift();
        newComputer = newComputer.input(x);
        newComputer = newComputer.input(y);
      } else {
        noAction++;
        newComputer = newComputer.input(-1);
      }
      computers[index] = newComputer;
    });

    computers.forEach((computer, index) => {
      let newComputer = computer;
      if (newComputer.output.length === 0) {
        noAction++;
      }
      const newInstructions = newComputer.output.reduce(
        (container, instruction, i) => {
          const holder = Math.floor(i / 3);
          if (!container[holder]) {
            container[holder] = [];
          }
          container[holder].push(instruction);
          return container;
        },
        []
      );
      newInstructions.forEach(([a, x, y]) => {
        if (a === 255) {
          nat = [x, y];
        } else {
          if (!messages[a]) {
            messages[a] = [];
          }
          messages[a].push([x, y]);
        }
      });
      computers[index] = newComputer;
    });

    if (noAction === 100) {
      computers[0] = computers[0].input(nat[0]);
      computers[0] = computers[0].input(nat[1]);
      const newInstructions = computers[0].output.reduce(
        (container, instruction, i) => {
          const holder = Math.floor(i / 3);
          if (!container[holder]) {
            container[holder] = [];
          }
          container[holder].push(instruction);
          return container;
        },
        []
      );
      newInstructions.forEach(([a, x, y]) => {
        if (a === 255) {
          nat = [x, y];
        } else {
          if (!messages[a]) {
            messages[a] = [];
          }
          messages[a].push([x, y]);
        }
      });
      if (!previousValues[nat[1]]) {
        previousValues[nat[1]] = 1;
      } else {
        previousValues[nat[1]]++;
      }

      if (previousValues[nat[1]] >= 2) {
        return nat[1];
      }
      console.log(previousValues[nat[1]]);
    }
  }

  let i = 0;
  let output;

  while (i < 10000 && !output) {
    output = runRound();
    i++;
  }

  return output;
}

const result = runNetworkWithIdle(input);

console.log("result:", result);
console.timeEnd("run");
