console.log("------");

const input = `3,225,1,225,6,6,1100,1,238,225,104,0,2,218,57,224,101,-3828,224,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1102,26,25,224,1001,224,-650,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1102,44,37,225,1102,51,26,225,1102,70,94,225,1002,188,7,224,1001,224,-70,224,4,224,1002,223,8,223,1001,224,1,224,1,223,224,223,1101,86,70,225,1101,80,25,224,101,-105,224,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,101,6,91,224,1001,224,-92,224,4,224,102,8,223,223,101,6,224,224,1,224,223,223,1102,61,60,225,1001,139,81,224,101,-142,224,224,4,224,102,8,223,223,101,1,224,224,1,223,224,223,102,40,65,224,1001,224,-2800,224,4,224,1002,223,8,223,1001,224,3,224,1,224,223,223,1102,72,10,225,1101,71,21,225,1,62,192,224,1001,224,-47,224,4,224,1002,223,8,223,101,7,224,224,1,224,223,223,1101,76,87,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,108,226,677,224,102,2,223,223,1005,224,329,1001,223,1,223,1107,677,226,224,102,2,223,223,1006,224,344,1001,223,1,223,7,226,677,224,1002,223,2,223,1005,224,359,101,1,223,223,1007,226,226,224,102,2,223,223,1005,224,374,101,1,223,223,108,677,677,224,102,2,223,223,1006,224,389,1001,223,1,223,107,677,226,224,102,2,223,223,1006,224,404,101,1,223,223,1108,677,226,224,102,2,223,223,1006,224,419,1001,223,1,223,1107,677,677,224,1002,223,2,223,1006,224,434,101,1,223,223,1007,677,677,224,102,2,223,223,1006,224,449,1001,223,1,223,1108,226,677,224,1002,223,2,223,1006,224,464,101,1,223,223,7,677,226,224,102,2,223,223,1006,224,479,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,494,101,1,223,223,1008,226,677,224,1002,223,2,223,1005,224,509,1001,223,1,223,1007,677,226,224,102,2,223,223,1005,224,524,1001,223,1,223,8,226,226,224,102,2,223,223,1006,224,539,101,1,223,223,1108,226,226,224,1002,223,2,223,1006,224,554,101,1,223,223,107,226,226,224,1002,223,2,223,1005,224,569,1001,223,1,223,7,226,226,224,102,2,223,223,1005,224,584,101,1,223,223,1008,677,677,224,1002,223,2,223,1006,224,599,1001,223,1,223,8,226,677,224,1002,223,2,223,1006,224,614,1001,223,1,223,108,226,226,224,1002,223,2,223,1006,224,629,101,1,223,223,107,677,677,224,102,2,223,223,1005,224,644,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,659,1001,223,1,223,1107,226,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226`;

class LiamComputer {
  _version = "2.0";
  _instructions = [];
  _head = 0;

  constructor(rawInstructions = "") {
    this._instructions = rawInstructions
      .split(",")
      .map((num) => parseInt(num, 10));
  }

  run() {
    let isDone = false;

    while (this._head < this._instructions.length && !isDone) {
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
      const pointer = this._instructions[this._head + 3];
      switch (codes.instruction) {
        case 1:
          this.add(value1, value2, pointer);
          break;
        case 2:
          this.multiply(value1, value2, pointer);
          break;
        case 3:
          this.input(value1);
          break;
        case 4:
          this.output(value1);
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
        case 99:
          isDone = true;
          break;
      }
    }

    return;
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
    pointer = 0
  ) {
    const value1 =
      arg1.mode === 1 ? arg1.value : this._instructions[arg1.value];
    const value2 =
      arg2.mode === 1 ? arg2.value : this._instructions[arg2.value];
    this._instructions[pointer] = value1 + value2;
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
    pointer = 0
  ) {
    const value1 = this._determineValue(arg1);
    const value2 = this._determineValue(arg2);
    this._instructions[pointer] = value1 * value2;
    this.incrementHead(4);
  }

  input(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    this._instructions[arg1.value] = 5;
    this.incrementHead(2);
  }

  output(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    console.log(this._instructions[arg1.value]);
    this.incrementHead(2);
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
    pointer = 0
  ) {
    if (this._determineValue(arg1) < this._determineValue(arg2)) {
      this._instructions[pointer] = 1;
    } else {
      this._instructions[pointer] = 0;
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
    pointer = 0
  ) {
    if (this._determineValue(arg1) === this._determineValue(arg2)) {
      this._instructions[pointer] = 1;
    } else {
      this._instructions[pointer] = 0;
    }
    this.incrementHead(4);
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
    } else {
      return this._instructions[value];
    }
  }
}

const computer = new LiamComputer(input);
computer.run();

const result = "";
console.log("result:", result);
