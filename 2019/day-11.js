console.log("------");

const input = `3,8,1005,8,302,1106,0,11,0,0,0,104,1,104,0,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,101,0,8,29,1006,0,78,2,1007,9,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,1002,8,1,58,1006,0,7,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,0,10,4,10,1002,8,1,83,2,1009,4,10,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,0,10,4,10,1002,8,1,109,1,106,11,10,1006,0,16,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,102,1,8,138,2,108,0,10,1,101,14,10,1,1109,1,10,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,0,10,4,10,102,1,8,172,2,3,10,10,1006,0,49,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,1,10,4,10,1001,8,0,201,1006,0,28,2,3,15,10,2,109,12,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,0,8,10,4,10,1001,8,0,233,3,8,102,-1,8,10,1001,10,1,10,4,10,108,1,8,10,4,10,101,0,8,255,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,1,8,10,4,10,102,1,8,277,2,1107,9,10,101,1,9,9,1007,9,946,10,1005,10,15,99,109,624,104,0,104,1,21101,0,932856042280,1,21101,0,319,0,1105,1,423,21101,0,387512640296,1,21101,330,0,0,1106,0,423,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21101,0,46266346499,1,21102,1,377,0,1105,1,423,21102,1,46211836967,1,21102,1,388,0,1105,1,423,3,10,104,0,104,0,3,10,104,0,104,0,21102,1,825460941588,1,21102,411,1,0,1106,0,423,21101,709475738388,0,1,21102,1,422,0,1105,1,423,99,109,2,21201,-1,0,1,21101,0,40,2,21102,454,1,3,21101,0,444,0,1106,0,487,109,-2,2106,0,0,0,1,0,0,1,109,2,3,10,204,-1,1001,449,450,465,4,0,1001,449,1,449,108,4,449,10,1006,10,481,1102,1,0,449,109,-2,2106,0,0,0,109,4,2102,1,-1,486,1207,-3,0,10,1006,10,504,21101,0,0,-3,22101,0,-3,1,21201,-2,0,2,21102,1,1,3,21102,1,523,0,1105,1,528,109,-4,2105,1,0,109,5,1207,-3,1,10,1006,10,551,2207,-4,-2,10,1006,10,551,22101,0,-4,-4,1105,1,619,22102,1,-4,1,21201,-3,-1,2,21202,-2,2,3,21101,570,0,0,1106,0,528,22102,1,1,-4,21102,1,1,-1,2207,-4,-2,10,1006,10,589,21101,0,0,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,611,21201,-1,0,1,21101,611,0,0,106,0,486,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2105,1,0`;

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

function rotateRobit(facing = 0, rotate = 0) {
  let output;
  switch (rotate) {
    case 0:
      output = Math.abs(facing - 1 + 4) % 4;
      break;
    case 1:
      output = Math.abs(facing + 1) % 4;
      break;
  }

  return output;
}

function robit(rawInstructions = "") {
  const computer = new LiamComputer(rawInstructions);
  const grid = [[true]];
  const paintedPanels = [];
  let x = 0;
  let y = 0;
  const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
  let facingDirection = 0;

  let computerOut = computer.run();

  while (computerOut.exitCode === undefined) {
    if (!grid[y]) {
      grid[y] = [];
    }
    // true if white
    const currentSquare = grid[y][x];
    const isWhite = !!currentSquare;
    const result = computerOut.input(isWhite ? 1 : 0);


    if (result.exitCode === undefined) {
      paintedPanels.push([x,y].join(","));
      const [shouldPaintWhite, directionToTurn] = result.output;
      grid[y][x] = !!shouldPaintWhite;
      facingDirection = rotateRobit(facingDirection, directionToTurn);

      switch (directions[facingDirection]) {
        case "NORTH":
          y -= 1;
          break;
        case "EAST":
          x += 1;
          break;
        case "SOUTH":
          y += 1;
          break;
        case "WEST":
          x -= 1;
          break;
      }
    }
    computerOut = result;
  }

  const height = grid.length;
  let width = 0;

  grid.forEach(row => {
    if (row.length > width) {
      width = row.length;
    }
  });

  const alignedRows = [];

  for (let i = 0; i < height; i++) {
    alignedRows[i] = [];
    for (let i2 = 0; i2 < width; i2++) {
      alignedRows[i][i2] = grid[i][i2] ? "#" : ".";
    }
  }

  alignedRows.forEach(row => {
    console.log(row.join(""));
  });
}

const result = robit(input);
console.log("result:", result);
