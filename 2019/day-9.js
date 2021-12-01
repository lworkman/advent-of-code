console.log("------");

const input = `1102,34463338,34463338,63,1007,63,34463338,63,1005,63,53,1102,3,1,1000,109,988,209,12,9,1000,209,6,209,3,203,0,1008,1000,1,63,1005,63,65,1008,1000,2,63,1005,63,902,1008,1000,0,63,1005,63,58,4,25,104,0,99,4,0,104,0,99,4,17,104,0,99,0,0,1101,309,0,1024,1101,0,24,1002,1102,388,1,1029,1102,1,21,1019,1101,0,33,1015,1102,1,304,1025,1101,344,0,1027,1101,25,0,1003,1102,1,1,1021,1101,29,0,1012,1101,0,23,1005,1102,1,32,1007,1102,38,1,1000,1101,30,0,1016,1102,1,347,1026,1101,0,26,1010,1101,0,39,1004,1102,1,36,1011,1101,0,393,1028,1101,0,37,1013,1101,0,35,1008,1101,34,0,1001,1101,0,495,1022,1102,1,28,1018,1101,0,0,1020,1102,1,22,1006,1101,488,0,1023,1102,31,1,1009,1102,1,20,1017,1101,0,27,1014,109,10,21102,40,1,4,1008,1014,37,63,1005,63,205,1001,64,1,64,1106,0,207,4,187,1002,64,2,64,109,-18,1207,8,37,63,1005,63,227,1001,64,1,64,1106,0,229,4,213,1002,64,2,64,109,17,1207,-7,25,63,1005,63,247,4,235,1106,0,251,1001,64,1,64,1002,64,2,64,109,-8,1202,6,1,63,1008,63,29,63,1005,63,275,1001,64,1,64,1106,0,277,4,257,1002,64,2,64,109,25,1205,-6,293,1001,64,1,64,1105,1,295,4,283,1002,64,2,64,109,-4,2105,1,2,4,301,1106,0,313,1001,64,1,64,1002,64,2,64,109,-9,1208,-4,31,63,1005,63,335,4,319,1001,64,1,64,1105,1,335,1002,64,2,64,109,16,2106,0,-2,1106,0,353,4,341,1001,64,1,64,1002,64,2,64,109,-13,2102,1,-8,63,1008,63,38,63,1005,63,373,1105,1,379,4,359,1001,64,1,64,1002,64,2,64,109,9,2106,0,3,4,385,1105,1,397,1001,64,1,64,1002,64,2,64,109,-11,21107,41,42,0,1005,1014,415,4,403,1106,0,419,1001,64,1,64,1002,64,2,64,109,14,1206,-7,431,1106,0,437,4,425,1001,64,1,64,1002,64,2,64,109,-23,2107,37,-5,63,1005,63,455,4,443,1105,1,459,1001,64,1,64,1002,64,2,64,109,10,21107,42,41,-2,1005,1013,475,1105,1,481,4,465,1001,64,1,64,1002,64,2,64,2105,1,8,1001,64,1,64,1106,0,497,4,485,1002,64,2,64,109,-6,21108,43,41,8,1005,1017,517,1001,64,1,64,1106,0,519,4,503,1002,64,2,64,109,5,2101,0,-9,63,1008,63,23,63,1005,63,541,4,525,1106,0,545,1001,64,1,64,1002,64,2,64,109,-13,1201,5,0,63,1008,63,20,63,1005,63,565,1105,1,571,4,551,1001,64,1,64,1002,64,2,64,109,16,1205,4,589,4,577,1001,64,1,64,1106,0,589,1002,64,2,64,109,-16,1202,4,1,63,1008,63,23,63,1005,63,615,4,595,1001,64,1,64,1106,0,615,1002,64,2,64,109,1,2101,0,6,63,1008,63,33,63,1005,63,639,1001,64,1,64,1105,1,641,4,621,1002,64,2,64,109,8,21101,44,0,8,1008,1018,44,63,1005,63,667,4,647,1001,64,1,64,1105,1,667,1002,64,2,64,109,-7,1201,1,0,63,1008,63,39,63,1005,63,689,4,673,1106,0,693,1001,64,1,64,1002,64,2,64,109,7,2102,1,-8,63,1008,63,24,63,1005,63,715,4,699,1105,1,719,1001,64,1,64,1002,64,2,64,109,5,2108,34,-7,63,1005,63,739,1001,64,1,64,1105,1,741,4,725,1002,64,2,64,109,-22,2108,25,10,63,1005,63,763,4,747,1001,64,1,64,1106,0,763,1002,64,2,64,109,31,1206,-4,781,4,769,1001,64,1,64,1105,1,781,1002,64,2,64,109,-10,21101,45,0,5,1008,1019,47,63,1005,63,805,1001,64,1,64,1105,1,807,4,787,1002,64,2,64,109,2,21108,46,46,-3,1005,1013,825,4,813,1106,0,829,1001,64,1,64,1002,64,2,64,109,-22,2107,40,10,63,1005,63,845,1105,1,851,4,835,1001,64,1,64,1002,64,2,64,109,17,1208,-7,36,63,1005,63,871,1001,64,1,64,1105,1,873,4,857,1002,64,2,64,109,16,21102,47,1,-9,1008,1018,47,63,1005,63,899,4,879,1001,64,1,64,1106,0,899,4,64,99,21102,1,27,1,21101,0,913,0,1105,1,920,21201,1,39657,1,204,1,99,109,3,1207,-2,3,63,1005,63,962,21201,-2,-1,1,21102,1,940,0,1105,1,920,21201,1,0,-1,21201,-2,-3,1,21101,955,0,0,1105,1,920,22201,1,-1,-2,1106,0,966,21202,-2,1,-2,109,-3,2105,1,0`;

class LiamComputer {
  _version = "2.1";
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

    if (getInputFunction) {
      return getInputFunction;
    } else {
      return this._output;
    }
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
      return (this._instructions[this._relativeBase + value] || 0);
    } else {
      return (this._instructions[value] || 0);
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

const computer = new LiamComputer(input, [2]);
// const computer = new LiamComputer("1102,34915192,34915192,7,4,7,99,0");

const result = computer.run();
// Not 203
// Not 4235070875
// is 4234906522
console.log("result:", result);
