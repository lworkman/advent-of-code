console.log("------");

const input = `3,8,1001,8,10,8,105,1,0,0,21,42,51,76,93,110,191,272,353,434,99999,3,9,1002,9,2,9,1001,9,3,9,1002,9,3,9,1001,9,2,9,4,9,99,3,9,1002,9,3,9,4,9,99,3,9,1002,9,4,9,101,5,9,9,1002,9,3,9,1001,9,4,9,1002,9,5,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,102,5,9,9,4,9,99,3,9,1002,9,5,9,101,5,9,9,1002,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,99`;

class LiamComputer {
  _version = "2.1";
  _instructions = [];
  _head = 0;
  _initialInputs = [];

  constructor(rawInstructions = "", initialInputs = []) {
    this._instructions = rawInstructions
      .split(",")
      .map((num) => parseInt(num, 10));

    this._initialInputs = initialInputs;
  }

  run() {
    let output;

    while (this._head < this._instructions.length && output === undefined) {
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
          output = this.input(value1);
          break;
        case 4:
          output = this.output(value1);
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
          output = 0;
          break;
      }
    }

    return output;
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
    const handleInput = (value = 0) => {
      this._instructions[arg1.value] = value;
      this.incrementHead(2);
      return this.run();
    };

    if (this._initialInputs.length > 0) {
      const input = this._initialInputs.splice(0, 1)[0];
      this._instructions[arg1.value] = input;
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
    const output = this._instructions[arg1.value];
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

function runAmplifiers(rawInstructions = "", phaseOrder = [0]) {
  const inputs = [0];

  phaseOrder.forEach((phase, index) => {
    const computer = new LiamComputer(rawInstructions, [phase]);

    let output = computer.run();

    while (typeof output === "function") {
      output = output(inputs[index]);
    }

    inputs.push(output);
  });

  return inputs[inputs.length - 1];
}

function createPermutations(nums = [0]) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(nums);

  return result;
}

function part1(rawInstructions = "", phaseSignals = [0]) {
  const output = createPermutations(phaseSignals)
    .map((signal) => runAmplifiers(rawInstructions, signal))
    .sort((a, b) => b - a);
  return output[0];
}

function loopAmplifiers(instructions = "", phaseSignals = [0]) {
  const computers = [
    new LiamComputer(instructions, [phaseSignals[0]]),
    new LiamComputer(instructions, [phaseSignals[1]]),
    new LiamComputer(instructions, [phaseSignals[2]]),
    new LiamComputer(instructions, [phaseSignals[3]]),
    new LiamComputer(instructions, [phaseSignals[4]]),
  ];

  const inputs = [0];
  let loop = 0;

  while (loop < inputs.length) {
    const computer = computers[loop % computers.length];
    let currentOutput = computer.run();

    while (typeof currentOutput === "function") {
      currentOutput = currentOutput(inputs[loop]);
    }
    loop++;
    if (currentOutput !== 0) {
      inputs.push(currentOutput);
    } else {
      break;
    }
  }

  return inputs[inputs.length - 1];
}

function part2(rawInstructions = "", phaseSignals = [0]) {
  const output = createPermutations(phaseSignals)
    .map((signal) => loopAmplifiers(rawInstructions, signal))
    .sort((a, b) => b - a);
  return output[0];
}

const result = part2(input, [9, 8, 7, 6, 5]);
console.log("result:", result);
