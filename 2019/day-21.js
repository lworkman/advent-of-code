console.log("------");
console.time("run");

const program =
  "109,2050,21101,0,966,1,21101,13,0,0,1106,0,1378,21101,20,0,0,1105,1,1337,21101,0,27,0,1105,1,1279,1208,1,65,748,1005,748,73,1208,1,79,748,1005,748,110,1208,1,78,748,1005,748,132,1208,1,87,748,1005,748,169,1208,1,82,748,1005,748,239,21101,0,1041,1,21102,1,73,0,1105,1,1421,21101,0,78,1,21101,1041,0,2,21102,88,1,0,1106,0,1301,21101,0,68,1,21102,1041,1,2,21102,1,103,0,1106,0,1301,1101,0,1,750,1105,1,298,21102,1,82,1,21102,1,1041,2,21102,1,125,0,1106,0,1301,1102,1,2,750,1106,0,298,21101,0,79,1,21102,1041,1,2,21102,147,1,0,1105,1,1301,21102,84,1,1,21102,1,1041,2,21101,162,0,0,1106,0,1301,1101,0,3,750,1105,1,298,21102,1,65,1,21101,1041,0,2,21101,184,0,0,1106,0,1301,21102,76,1,1,21102,1041,1,2,21101,199,0,0,1106,0,1301,21101,75,0,1,21102,1,1041,2,21101,0,214,0,1105,1,1301,21102,221,1,0,1106,0,1337,21101,10,0,1,21101,0,1041,2,21101,236,0,0,1106,0,1301,1106,0,553,21102,1,85,1,21101,1041,0,2,21101,254,0,0,1106,0,1301,21102,1,78,1,21101,0,1041,2,21102,269,1,0,1106,0,1301,21102,276,1,0,1105,1,1337,21102,1,10,1,21101,1041,0,2,21102,291,1,0,1106,0,1301,1102,1,1,755,1105,1,553,21102,32,1,1,21102,1041,1,2,21101,313,0,0,1105,1,1301,21102,320,1,0,1105,1,1337,21102,1,327,0,1106,0,1279,1202,1,1,749,21102,1,65,2,21102,1,73,3,21101,0,346,0,1105,1,1889,1206,1,367,1007,749,69,748,1005,748,360,1102,1,1,756,1001,749,-64,751,1106,0,406,1008,749,74,748,1006,748,381,1101,-1,0,751,1105,1,406,1008,749,84,748,1006,748,395,1101,0,-2,751,1105,1,406,21102,1100,1,1,21102,1,406,0,1105,1,1421,21102,32,1,1,21101,0,1100,2,21101,421,0,0,1105,1,1301,21101,0,428,0,1106,0,1337,21101,435,0,0,1105,1,1279,2102,1,1,749,1008,749,74,748,1006,748,453,1102,-1,1,752,1105,1,478,1008,749,84,748,1006,748,467,1101,-2,0,752,1105,1,478,21101,1168,0,1,21101,0,478,0,1105,1,1421,21102,485,1,0,1105,1,1337,21101,0,10,1,21101,0,1168,2,21102,500,1,0,1105,1,1301,1007,920,15,748,1005,748,518,21102,1,1209,1,21101,0,518,0,1105,1,1421,1002,920,3,529,1001,529,921,529,101,0,750,0,1001,529,1,537,1002,751,1,0,1001,537,1,545,1001,752,0,0,1001,920,1,920,1105,1,13,1005,755,577,1006,756,570,21102,1,1100,1,21102,1,570,0,1106,0,1421,21101,987,0,1,1105,1,581,21101,1001,0,1,21101,0,588,0,1105,1,1378,1101,758,0,594,101,0,0,753,1006,753,654,21001,753,0,1,21102,610,1,0,1105,1,667,21102,0,1,1,21101,621,0,0,1106,0,1463,1205,1,647,21101,0,1015,1,21102,1,635,0,1106,0,1378,21102,1,1,1,21101,646,0,0,1106,0,1463,99,1001,594,1,594,1105,1,592,1006,755,664,1101,0,0,755,1106,0,647,4,754,99,109,2,1102,726,1,757,22102,1,-1,1,21102,9,1,2,21102,1,697,3,21101,692,0,0,1106,0,1913,109,-2,2105,1,0,109,2,101,0,757,706,2101,0,-1,0,1001,757,1,757,109,-2,2105,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,255,63,191,159,95,127,223,0,163,166,217,200,238,34,117,94,155,62,55,60,69,46,103,172,98,186,252,79,107,56,171,214,241,220,175,87,61,70,53,113,232,250,246,245,249,174,86,253,78,108,236,137,244,102,162,84,243,213,126,111,77,212,156,158,222,219,35,239,116,120,190,47,100,221,198,118,205,136,185,187,227,123,119,110,121,43,189,143,188,109,138,177,233,57,226,170,202,248,237,152,196,92,114,167,168,229,234,125,157,169,242,59,182,247,99,216,142,42,183,173,106,39,215,207,201,49,115,54,204,76,71,124,178,181,199,38,179,231,228,85,122,154,50,197,139,218,140,58,153,235,206,251,254,184,203,101,68,93,51,230,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,73,110,112,117,116,32,105,110,115,116,114,117,99,116,105,111,110,115,58,10,13,10,87,97,108,107,105,110,103,46,46,46,10,10,13,10,82,117,110,110,105,110,103,46,46,46,10,10,25,10,68,105,100,110,39,116,32,109,97,107,101,32,105,116,32,97,99,114,111,115,115,58,10,10,58,73,110,118,97,108,105,100,32,111,112,101,114,97,116,105,111,110,59,32,101,120,112,101,99,116,101,100,32,115,111,109,101,116,104,105,110,103,32,108,105,107,101,32,65,78,68,44,32,79,82,44,32,111,114,32,78,79,84,67,73,110,118,97,108,105,100,32,102,105,114,115,116,32,97,114,103,117,109,101,110,116,59,32,101,120,112,101,99,116,101,100,32,115,111,109,101,116,104,105,110,103,32,108,105,107,101,32,65,44,32,66,44,32,67,44,32,68,44,32,74,44,32,111,114,32,84,40,73,110,118,97,108,105,100,32,115,101,99,111,110,100,32,97,114,103,117,109,101,110,116,59,32,101,120,112,101,99,116,101,100,32,74,32,111,114,32,84,52,79,117,116,32,111,102,32,109,101,109,111,114,121,59,32,97,116,32,109,111,115,116,32,49,53,32,105,110,115,116,114,117,99,116,105,111,110,115,32,99,97,110,32,98,101,32,115,116,111,114,101,100,0,109,1,1005,1262,1270,3,1262,20101,0,1262,0,109,-1,2105,1,0,109,1,21102,1288,1,0,1106,0,1263,21002,1262,1,0,1102,1,0,1262,109,-1,2106,0,0,109,5,21101,0,1310,0,1106,0,1279,22102,1,1,-2,22208,-2,-4,-1,1205,-1,1332,21201,-3,0,1,21102,1332,1,0,1106,0,1421,109,-5,2105,1,0,109,2,21102,1,1346,0,1106,0,1263,21208,1,32,-1,1205,-1,1363,21208,1,9,-1,1205,-1,1363,1106,0,1373,21102,1370,1,0,1106,0,1279,1106,0,1339,109,-2,2106,0,0,109,5,2102,1,-4,1386,20101,0,0,-2,22101,1,-4,-4,21102,1,0,-3,22208,-3,-2,-1,1205,-1,1416,2201,-4,-3,1408,4,0,21201,-3,1,-3,1105,1,1396,109,-5,2105,1,0,109,2,104,10,21201,-1,0,1,21102,1436,1,0,1105,1,1378,104,10,99,109,-2,2106,0,0,109,3,20002,594,753,-1,22202,-1,-2,-1,201,-1,754,754,109,-3,2105,1,0,109,10,21101,5,0,-5,21101,1,0,-4,21102,1,0,-3,1206,-9,1555,21101,3,0,-6,21101,0,5,-7,22208,-7,-5,-8,1206,-8,1507,22208,-6,-4,-8,1206,-8,1507,104,64,1105,1,1529,1205,-6,1527,1201,-7,716,1515,21002,0,-11,-8,21201,-8,46,-8,204,-8,1105,1,1529,104,46,21201,-7,1,-7,21207,-7,22,-8,1205,-8,1488,104,10,21201,-6,-1,-6,21207,-6,0,-8,1206,-8,1484,104,10,21207,-4,1,-8,1206,-8,1569,21102,0,1,-9,1105,1,1689,21208,-5,21,-8,1206,-8,1583,21101,1,0,-9,1106,0,1689,1201,-5,716,1588,21001,0,0,-2,21208,-4,1,-1,22202,-2,-1,-1,1205,-2,1613,21201,-5,0,1,21101,1613,0,0,1105,1,1444,1206,-1,1634,22101,0,-5,1,21102,1,1627,0,1106,0,1694,1206,1,1634,21101,0,2,-3,22107,1,-4,-8,22201,-1,-8,-8,1206,-8,1649,21201,-5,1,-5,1206,-3,1663,21201,-3,-1,-3,21201,-4,1,-4,1106,0,1667,21201,-4,-1,-4,21208,-4,0,-1,1201,-5,716,1676,22002,0,-1,-1,1206,-1,1686,21101,0,1,-4,1106,0,1477,109,-10,2106,0,0,109,11,21102,1,0,-6,21102,1,0,-8,21102,0,1,-7,20208,-6,920,-9,1205,-9,1880,21202,-6,3,-9,1201,-9,921,1725,20101,0,0,-5,1001,1725,1,1733,20102,1,0,-4,22101,0,-4,1,21102,1,1,2,21101,9,0,3,21102,1,1754,0,1106,0,1889,1206,1,1772,2201,-10,-4,1766,1001,1766,716,1766,21002,0,1,-3,1105,1,1790,21208,-4,-1,-9,1206,-9,1786,21201,-8,0,-3,1105,1,1790,21202,-7,1,-3,1001,1733,1,1795,21001,0,0,-2,21208,-2,-1,-9,1206,-9,1812,21201,-8,0,-1,1105,1,1816,22101,0,-7,-1,21208,-5,1,-9,1205,-9,1837,21208,-5,2,-9,1205,-9,1844,21208,-3,0,-1,1106,0,1855,22202,-3,-1,-1,1105,1,1855,22201,-3,-1,-1,22107,0,-1,-1,1106,0,1855,21208,-2,-1,-9,1206,-9,1869,22102,1,-1,-8,1105,1,1873,22102,1,-1,-7,21201,-6,1,-6,1105,1,1708,21202,-8,1,-10,109,-11,2105,1,0,109,7,22207,-6,-5,-3,22207,-4,-6,-2,22201,-3,-2,-1,21208,-1,0,-6,109,-7,2106,0,0,0,109,5,1202,-2,1,1912,21207,-4,0,-1,1206,-1,1930,21101,0,0,-4,21202,-4,1,1,22101,0,-3,2,21102,1,1,3,21102,1949,1,0,1106,0,1954,109,-5,2106,0,0,109,6,21207,-4,1,-1,1206,-1,1977,22207,-5,-3,-1,1206,-1,1977,22102,1,-5,-5,1105,1,2045,21201,-5,0,1,21201,-4,-1,2,21202,-3,2,3,21101,1996,0,0,1105,1,1954,21201,1,0,-5,21102,1,1,-2,22207,-5,-3,-1,1206,-1,2015,21101,0,0,-2,22202,-3,-2,-3,22107,0,-4,-1,1206,-1,2037,21202,-2,1,1,21102,1,2037,0,106,0,1912,21202,-3,-1,-3,22201,-5,-3,-5,109,-6,2105,1,0";

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

function springBoard(raw = "") {
  let computerResult = new LiamComputer(raw).run();

  // If there's a space 3 away
  // and a space 4 away, jump

  const instructions = `NOT C T
OR D J
AND T J
NOT A T
OR T J
WALK
`;

  instructions
    .split("")
    .forEach(
      (char) => (computerResult = computerResult.input(char.codePointAt(0)))
    );

  const result = computerResult.output;

  let temp = [];
  let score;

  result.forEach((num) => {
    if (num === 10) {
      console.log(temp.join(""));
      temp = [];
    } else if (num > 1000) {
      score = num;
    } else {
      temp.push(String.fromCharCode(num));
    }
  });

  if (score) {
    return score;
  }
}

function runSpringBoard(raw = "") {
  let computerResult = new LiamComputer(raw).run();

/**
 * Check if A, B, C, D exists
 * if they do, don't jump
 * If they don't, reverse T using not
 * then check if D, H exist
 * if they do, jump
 * Finally, jump if A doesn't exist always
 */

  const instructions = `OR A T
AND B T
AND C T
AND D T
NOT T T
AND D T
AND H T
OR T J
NOT A T
OR T J
RUN
`;

  instructions
    .split("")
    .forEach(
      (char) => (computerResult = computerResult.input(char.codePointAt(0)))
    );

  const result = computerResult.output;

  let temp = [];
  let score;

  result.forEach((num) => {
    if (num === 10) {
      console.log(temp.join(""));
      temp = [];
    } else if (num > 1000) {
      score = num;
    } else {
      temp.push(String.fromCharCode(num));
    }
  });

  if (score) {
    return score;
  }
}

const result = runSpringBoard(program);

console.log("result:", result);
console.timeEnd("run");
