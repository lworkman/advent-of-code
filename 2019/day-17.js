console.log("------");
console.time("run");

const input =
  "1,330,331,332,109,3652,1102,1182,1,16,1101,0,1447,24,102,1,0,570,1006,570,36,1001,571,0,0,1001,570,-1,570,1001,24,1,24,1105,1,18,1008,571,0,571,1001,16,1,16,1008,16,1447,570,1006,570,14,21101,58,0,0,1106,0,786,1006,332,62,99,21101,333,0,1,21101,0,73,0,1106,0,579,1102,0,1,572,1102,0,1,573,3,574,101,1,573,573,1007,574,65,570,1005,570,151,107,67,574,570,1005,570,151,1001,574,-64,574,1002,574,-1,574,1001,572,1,572,1007,572,11,570,1006,570,165,101,1182,572,127,1002,574,1,0,3,574,101,1,573,573,1008,574,10,570,1005,570,189,1008,574,44,570,1006,570,158,1105,1,81,21102,1,340,1,1106,0,177,21102,477,1,1,1106,0,177,21101,514,0,1,21101,176,0,0,1105,1,579,99,21101,184,0,0,1106,0,579,4,574,104,10,99,1007,573,22,570,1006,570,165,101,0,572,1182,21101,0,375,1,21102,1,211,0,1105,1,579,21101,1182,11,1,21101,222,0,0,1105,1,979,21101,388,0,1,21101,0,233,0,1105,1,579,21101,1182,22,1,21102,244,1,0,1106,0,979,21101,0,401,1,21101,255,0,0,1105,1,579,21101,1182,33,1,21101,266,0,0,1106,0,979,21101,414,0,1,21101,277,0,0,1106,0,579,3,575,1008,575,89,570,1008,575,121,575,1,575,570,575,3,574,1008,574,10,570,1006,570,291,104,10,21102,1182,1,1,21101,0,313,0,1106,0,622,1005,575,327,1101,1,0,575,21102,1,327,0,1105,1,786,4,438,99,0,1,1,6,77,97,105,110,58,10,33,10,69,120,112,101,99,116,101,100,32,102,117,110,99,116,105,111,110,32,110,97,109,101,32,98,117,116,32,103,111,116,58,32,0,12,70,117,110,99,116,105,111,110,32,65,58,10,12,70,117,110,99,116,105,111,110,32,66,58,10,12,70,117,110,99,116,105,111,110,32,67,58,10,23,67,111,110,116,105,110,117,111,117,115,32,118,105,100,101,111,32,102,101,101,100,63,10,0,37,10,69,120,112,101,99,116,101,100,32,82,44,32,76,44,32,111,114,32,100,105,115,116,97,110,99,101,32,98,117,116,32,103,111,116,58,32,36,10,69,120,112,101,99,116,101,100,32,99,111,109,109,97,32,111,114,32,110,101,119,108,105,110,101,32,98,117,116,32,103,111,116,58,32,43,10,68,101,102,105,110,105,116,105,111,110,115,32,109,97,121,32,98,101,32,97,116,32,109,111,115,116,32,50,48,32,99,104,97,114,97,99,116,101,114,115,33,10,94,62,118,60,0,1,0,-1,-1,0,1,0,0,0,0,0,0,1,18,40,0,109,4,2102,1,-3,587,20101,0,0,-1,22101,1,-3,-3,21102,1,0,-2,2208,-2,-1,570,1005,570,617,2201,-3,-2,609,4,0,21201,-2,1,-2,1105,1,597,109,-4,2105,1,0,109,5,2101,0,-4,630,20102,1,0,-2,22101,1,-4,-4,21102,1,0,-3,2208,-3,-2,570,1005,570,781,2201,-4,-3,653,20102,1,0,-1,1208,-1,-4,570,1005,570,709,1208,-1,-5,570,1005,570,734,1207,-1,0,570,1005,570,759,1206,-1,774,1001,578,562,684,1,0,576,576,1001,578,566,692,1,0,577,577,21102,702,1,0,1106,0,786,21201,-1,-1,-1,1105,1,676,1001,578,1,578,1008,578,4,570,1006,570,724,1001,578,-4,578,21101,731,0,0,1105,1,786,1105,1,774,1001,578,-1,578,1008,578,-1,570,1006,570,749,1001,578,4,578,21101,0,756,0,1105,1,786,1105,1,774,21202,-1,-11,1,22101,1182,1,1,21102,1,774,0,1106,0,622,21201,-3,1,-3,1106,0,640,109,-5,2105,1,0,109,7,1005,575,802,20102,1,576,-6,20102,1,577,-5,1106,0,814,21101,0,0,-1,21102,0,1,-5,21102,1,0,-6,20208,-6,576,-2,208,-5,577,570,22002,570,-2,-2,21202,-5,49,-3,22201,-6,-3,-3,22101,1447,-3,-3,1202,-3,1,843,1005,0,863,21202,-2,42,-4,22101,46,-4,-4,1206,-2,924,21102,1,1,-1,1106,0,924,1205,-2,873,21102,35,1,-4,1106,0,924,1201,-3,0,878,1008,0,1,570,1006,570,916,1001,374,1,374,2101,0,-3,895,1101,2,0,0,2102,1,-3,902,1001,438,0,438,2202,-6,-5,570,1,570,374,570,1,570,438,438,1001,578,558,921,21001,0,0,-4,1006,575,959,204,-4,22101,1,-6,-6,1208,-6,49,570,1006,570,814,104,10,22101,1,-5,-5,1208,-5,45,570,1006,570,810,104,10,1206,-1,974,99,1206,-1,974,1102,1,1,575,21101,0,973,0,1106,0,786,99,109,-7,2105,1,0,109,6,21102,1,0,-4,21101,0,0,-3,203,-2,22101,1,-3,-3,21208,-2,82,-1,1205,-1,1030,21208,-2,76,-1,1205,-1,1037,21207,-2,48,-1,1205,-1,1124,22107,57,-2,-1,1205,-1,1124,21201,-2,-48,-2,1106,0,1041,21101,0,-4,-2,1105,1,1041,21102,1,-5,-2,21201,-4,1,-4,21207,-4,11,-1,1206,-1,1138,2201,-5,-4,1059,1202,-2,1,0,203,-2,22101,1,-3,-3,21207,-2,48,-1,1205,-1,1107,22107,57,-2,-1,1205,-1,1107,21201,-2,-48,-2,2201,-5,-4,1090,20102,10,0,-1,22201,-2,-1,-2,2201,-5,-4,1103,2101,0,-2,0,1105,1,1060,21208,-2,10,-1,1205,-1,1162,21208,-2,44,-1,1206,-1,1131,1105,1,989,21102,439,1,1,1106,0,1150,21102,477,1,1,1105,1,1150,21101,0,514,1,21101,0,1149,0,1105,1,579,99,21101,1157,0,0,1106,0,579,204,-2,104,10,99,21207,-3,22,-1,1206,-1,1138,1201,-5,0,1176,2101,0,-4,0,109,-6,2106,0,0,18,5,44,1,3,1,36,11,1,1,36,1,7,1,1,1,1,1,36,1,7,9,32,1,9,1,1,1,3,1,32,13,3,1,42,1,5,1,42,1,5,1,42,1,5,1,42,1,5,1,15,5,22,1,5,1,15,1,3,1,22,1,5,1,15,1,3,1,22,1,5,1,15,1,3,1,16,7,5,9,7,1,3,1,16,1,19,1,7,1,3,1,16,1,19,1,7,1,3,1,16,1,19,1,7,1,3,1,16,1,19,1,7,1,1,5,14,1,19,1,7,1,1,1,1,1,1,1,14,1,19,13,1,1,14,1,27,1,1,1,3,1,4,11,27,7,4,1,39,1,8,1,21,11,7,1,8,1,21,1,9,1,7,1,4,7,19,1,5,13,4,1,3,1,21,1,5,1,3,1,12,1,3,1,21,1,5,1,3,1,12,1,3,1,21,1,5,1,3,1,12,5,21,1,5,1,3,1,38,1,5,1,3,1,32,7,5,1,3,1,32,1,11,1,3,1,32,1,11,1,3,1,32,1,11,1,3,1,32,1,11,5,32,1,48,1,48,1,46,13,38,1,9,1,38,1,9,1,38,1,9,1,38,11,18";

class LiamComputer {
  _version = "3.0";
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
    const value1 =
      arg1.mode === 1 ? arg1.value : this._instructions[arg1.value];
    const value2 =
      arg2.mode === 1 ? arg2.value : this._instructions[arg2.value];
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

function outputToScaffold(output = []) {
  const map = [];
  let rowNum = 0;
  output.forEach((num) => {
    if (!map[rowNum]) {
      map[rowNum] = [];
    }

    switch (num) {
      case 35:
        map[rowNum].push("#");
        break;
      case 46:
        map[rowNum].push(".");
        break;
      case 60:
        map[rowNum].push("<");
        break;
      case 62:
        map[rowNum].push(">");
        break;
      case 94:
        map[rowNum].push("^");
        break;
      case 118:
        map[rowNum].push("v");
        break;
      case 88:
        map[rowNum].push("x");
        break;
      case 10:
        rowNum++;
        break;
      default:
        console.log("Unknown:", num);
        break;
    }
  });

  return map;
}

function buildScaffold(raw = "") {
  const computer = new LiamComputer(raw);
  const map = [];
  const { output } = computer.run();
  let rowNum = 0;
  output.forEach((num) => {
    if (!map[rowNum]) {
      map[rowNum] = [];
    }

    switch (num) {
      case 35:
        map[rowNum].push("#");
        break;
      case 46:
        map[rowNum].push(".");
        break;
      case 60:
        map[rowNum].push("<");
        break;
      case 62:
        map[rowNum].push(">");
        break;
      case 94:
        map[rowNum].push("^");
        break;
      case 10:
        rowNum++;
        break;
      default:
        console.log("Unknown:", num);
        break;
    }
  });

  // map.forEach((row) => console.log(row.join("")));

  return map;
}

function findIntersections(scaffold = [[""]]) {
  const output = [];

  scaffold.forEach((row, y) => {
    if (y !== 0 && y !== scaffold.length - 1) {
      row.forEach((spot, x) => {
        if (x !== 0 && x !== row.length && spot === "#") {
          if (
            [
              scaffold[y - 1][x],
              scaffold[y + 1][x],
              scaffold[y][x - 1],
              scaffold[y][x + 1],
            ].every((char) => char === "#")
          ) {
            output.push([x, y]);
          }
        }
      });
    }
  });

  output.forEach(([x, y]) => {
    scaffold[y][x] = "O";
  });

  scaffold.forEach((row) => console.log(row.join("")));

  return output.reduce((sum, [x, y]) => {
    return sum + x * y;
  }, 0);
}


function runComputer(raw = "") {
  let input = "2" + raw.slice(1);
  let computer = new LiamComputer(input).run();

  // Did it by hand!
  const A = "R,12,R,4,R,10,R,12";
  const B = "R,6,L,8,R,10";
  const C = "L,8,R,4,R,4,R,6";
  const instruction = `A,B,A,C,A,B,C,A,B,C|${A}|${B}|${C}`;

  instruction.split("").forEach((char) => {
    switch (char) {
      case "|":
        computer = computer.input(10);
        break;
      default:
        computer = computer.input(char.charCodeAt(0));
        break;
    }
  });

  computer = computer.input(10);
  computer = computer.input("N".charCodeAt(0));
  computer = computer.input(10);

  // const scaffold = outputToScaffold(computer.output);
  // scaffold.forEach((row) => console.log(row.join("")));

  console.log(computer.output.slice(-2));

  return "done!";
}

const result = runComputer(input);
console.log("result:", result);
console.timeEnd("run");
