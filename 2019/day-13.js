console.log("------");

const input = `1,380,379,385,1008,2799,144351,381,1005,381,12,99,109,2800,1102,0,1,383,1101,0,0,382,21001,382,0,1,21001,383,0,2,21102,37,1,0,1106,0,578,4,382,4,383,204,1,1001,382,1,382,1007,382,45,381,1005,381,22,1001,383,1,383,1007,383,24,381,1005,381,18,1006,385,69,99,104,-1,104,0,4,386,3,384,1007,384,0,381,1005,381,94,107,0,384,381,1005,381,108,1105,1,161,107,1,392,381,1006,381,161,1102,1,-1,384,1105,1,119,1007,392,43,381,1006,381,161,1101,0,1,384,20102,1,392,1,21102,1,22,2,21102,0,1,3,21101,0,138,0,1106,0,549,1,392,384,392,20102,1,392,1,21102,1,22,2,21102,3,1,3,21102,161,1,0,1105,1,549,1102,1,0,384,20001,388,390,1,20102,1,389,2,21102,180,1,0,1105,1,578,1206,1,213,1208,1,2,381,1006,381,205,20001,388,390,1,20101,0,389,2,21102,205,1,0,1105,1,393,1002,390,-1,390,1101,1,0,384,21002,388,1,1,20001,389,391,2,21101,228,0,0,1106,0,578,1206,1,261,1208,1,2,381,1006,381,253,20101,0,388,1,20001,389,391,2,21101,253,0,0,1105,1,393,1002,391,-1,391,1102,1,1,384,1005,384,161,20001,388,390,1,20001,389,391,2,21102,1,279,0,1106,0,578,1206,1,316,1208,1,2,381,1006,381,304,20001,388,390,1,20001,389,391,2,21101,304,0,0,1106,0,393,1002,390,-1,390,1002,391,-1,391,1102,1,1,384,1005,384,161,20101,0,388,1,20101,0,389,2,21102,1,0,3,21101,0,338,0,1106,0,549,1,388,390,388,1,389,391,389,20101,0,388,1,21002,389,1,2,21101,4,0,3,21101,365,0,0,1105,1,549,1007,389,23,381,1005,381,75,104,-1,104,0,104,0,99,0,1,0,0,0,0,0,0,462,20,19,1,1,22,109,3,21202,-2,1,1,21201,-1,0,2,21102,0,1,3,21101,414,0,0,1106,0,549,22102,1,-2,1,21201,-1,0,2,21102,1,429,0,1105,1,601,2101,0,1,435,1,386,0,386,104,-1,104,0,4,386,1001,387,-1,387,1005,387,451,99,109,-3,2105,1,0,109,8,22202,-7,-6,-3,22201,-3,-5,-3,21202,-4,64,-2,2207,-3,-2,381,1005,381,492,21202,-2,-1,-1,22201,-3,-1,-3,2207,-3,-2,381,1006,381,481,21202,-4,8,-2,2207,-3,-2,381,1005,381,518,21202,-2,-1,-1,22201,-3,-1,-3,2207,-3,-2,381,1006,381,507,2207,-3,-4,381,1005,381,540,21202,-4,-1,-1,22201,-3,-1,-3,2207,-3,-4,381,1006,381,529,21202,-3,1,-7,109,-8,2105,1,0,109,4,1202,-2,45,566,201,-3,566,566,101,639,566,566,1202,-1,1,0,204,-3,204,-2,204,-1,109,-4,2106,0,0,109,3,1202,-1,45,594,201,-2,594,594,101,639,594,594,20101,0,0,-2,109,-3,2105,1,0,109,3,22102,24,-2,1,22201,1,-1,1,21102,1,547,2,21102,1,67,3,21101,1080,0,4,21102,1,630,0,1105,1,456,21201,1,1719,-2,109,-3,2106,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2,2,0,2,2,2,2,2,0,2,0,0,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,0,2,0,0,2,2,2,0,0,1,1,0,2,0,2,2,2,2,0,0,2,2,0,0,2,2,0,2,2,2,2,0,2,2,2,2,0,0,0,2,2,2,0,2,0,2,2,2,2,2,2,2,0,0,1,1,0,0,0,2,2,2,2,0,0,0,2,0,0,2,2,2,2,2,2,2,2,0,0,2,0,0,0,2,2,2,2,2,0,2,2,0,0,2,2,0,2,2,0,1,1,0,2,2,0,2,2,0,0,0,2,0,2,2,0,2,0,2,2,2,2,2,0,0,2,2,2,0,2,0,0,2,2,0,2,0,2,0,2,2,2,2,2,0,1,1,0,2,0,0,2,2,2,0,0,2,2,0,0,2,2,2,2,2,2,0,2,2,2,2,2,0,2,2,0,2,0,0,2,2,2,2,2,2,2,0,0,2,0,1,1,0,2,0,2,2,2,2,2,2,0,0,2,0,2,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,0,2,0,2,2,2,0,2,2,0,1,1,0,2,2,2,2,2,2,0,2,2,2,2,0,0,2,0,2,0,2,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,0,2,0,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2,0,0,0,2,2,0,0,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,0,1,1,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,2,2,2,0,0,2,2,2,2,0,2,2,2,2,0,1,1,0,2,2,0,2,2,0,0,2,2,2,2,2,2,2,2,2,0,2,2,0,2,0,2,2,0,2,2,2,2,2,2,0,0,2,2,2,2,2,0,2,0,0,1,1,0,0,2,2,0,2,0,2,2,2,2,2,0,0,0,2,2,2,0,0,2,2,2,2,2,2,0,2,2,2,0,2,2,0,0,2,2,2,2,0,2,0,0,1,1,0,0,2,2,2,0,2,2,0,2,2,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,0,2,2,2,0,2,2,2,0,1,1,0,2,2,2,0,2,2,2,2,2,2,2,0,2,0,2,0,2,2,2,2,2,2,2,0,0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,1,1,0,2,2,0,0,0,0,2,2,2,2,2,0,2,2,2,0,0,0,2,2,0,2,2,0,0,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,1,1,0,0,2,2,2,0,0,2,2,0,2,0,2,2,2,0,0,2,2,0,2,0,0,0,2,0,0,2,0,2,2,2,0,0,2,2,0,2,2,2,2,2,0,1,1,0,0,2,2,2,0,0,2,2,0,0,0,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,0,2,2,2,2,2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,39,41,83,13,97,81,2,94,70,54,80,64,53,86,83,73,14,8,90,38,79,87,81,5,14,43,32,46,39,20,18,47,85,63,71,38,16,83,50,21,69,67,20,94,57,26,11,65,31,41,24,60,79,15,34,87,60,81,76,46,90,47,31,33,98,10,70,60,94,50,41,27,24,34,12,17,91,45,97,40,89,36,47,94,47,40,58,44,50,27,57,4,86,45,93,75,55,57,34,98,58,60,31,26,62,92,50,47,71,31,14,19,31,11,11,61,60,41,32,43,3,74,88,14,60,47,98,11,71,76,79,60,14,49,69,5,1,64,43,63,23,59,81,55,96,43,36,80,1,2,94,56,79,66,1,41,27,35,22,64,89,41,77,1,98,13,85,48,55,73,70,56,13,50,73,95,19,15,82,27,74,18,11,90,44,11,25,57,76,15,94,90,85,97,21,67,21,82,17,64,40,11,46,82,73,62,46,82,80,90,1,91,4,3,93,31,3,65,57,14,66,30,25,9,66,69,56,71,25,50,19,57,44,16,34,81,61,95,71,33,97,60,59,43,75,6,30,55,90,69,70,45,37,89,5,9,81,51,28,4,84,21,73,75,53,82,67,36,26,45,82,93,16,17,89,55,20,62,37,39,38,55,71,44,80,28,95,18,83,40,82,46,70,74,70,53,8,92,38,9,29,66,95,24,75,85,20,23,88,71,66,2,39,58,78,44,15,74,52,77,87,2,4,17,18,45,2,71,2,17,86,68,24,6,19,36,12,40,40,79,58,52,53,14,79,48,62,94,9,4,86,8,33,76,62,8,80,81,51,74,49,26,56,12,40,3,32,48,51,74,12,77,73,53,58,82,92,92,9,53,53,11,92,33,73,80,68,93,85,51,95,69,83,74,66,90,90,98,6,96,83,51,16,46,41,87,4,86,90,28,52,54,70,98,26,26,1,74,49,64,56,16,67,50,60,45,61,32,66,19,23,73,20,12,27,71,29,52,61,24,24,92,3,97,84,48,40,23,64,50,25,12,76,25,3,88,31,8,29,87,24,3,2,77,95,8,90,31,71,5,76,41,54,51,2,17,85,23,79,62,80,8,64,31,31,14,83,88,90,29,53,74,80,63,15,61,68,86,17,3,83,87,10,63,9,37,92,23,16,64,66,45,28,92,15,61,34,4,27,72,10,19,96,49,29,87,62,46,97,80,81,52,31,11,5,51,10,75,52,16,97,89,96,21,26,98,14,11,92,66,69,30,60,71,76,38,70,74,88,78,42,42,60,6,69,9,23,59,92,9,72,27,90,55,10,36,56,74,61,95,28,69,57,6,96,36,21,88,22,54,65,13,13,91,64,52,43,45,49,37,80,13,55,78,57,63,88,51,46,13,58,44,23,5,15,14,84,39,94,25,63,93,82,2,90,36,62,1,68,2,54,66,79,34,94,55,44,4,53,39,65,40,41,42,40,89,69,23,43,80,73,7,5,71,14,54,38,46,46,58,89,61,6,49,56,40,35,76,8,69,95,31,34,36,14,91,83,98,76,5,7,68,79,87,85,85,61,79,44,6,20,26,4,27,15,80,62,27,85,3,76,10,48,28,12,48,93,44,36,41,92,67,36,76,58,26,80,40,19,98,68,53,28,19,96,20,39,19,13,60,64,18,12,91,50,7,11,32,31,69,92,39,70,50,42,66,12,38,92,1,27,47,52,59,12,76,2,90,65,80,50,40,54,29,97,87,73,39,80,94,70,81,97,4,98,16,51,31,77,77,34,74,62,30,41,37,40,5,62,74,51,47,58,65,37,60,77,35,32,83,35,36,77,70,17,74,19,97,16,39,58,56,75,3,1,69,4,73,39,52,65,33,62,22,70,25,88,97,76,34,43,80,29,14,89,39,81,12,6,79,90,85,14,31,59,64,59,51,89,34,66,90,95,92,31,16,37,23,7,85,83,91,64,41,89,3,12,32,72,92,94,93,66,59,51,52,69,78,73,45,38,62,20,64,8,21,61,5,62,98,23,46,77,4,73,74,43,2,77,94,75,42,76,91,67,82,40,54,58,86,92,3,51,28,69,78,39,35,7,63,14,2,96,17,53,44,75,20,66,92,67,42,44,58,54,15,40,65,61,75,85,92,74,57,74,11,6,20,33,21,36,7,20,28,89,15,28,15,11,97,9,48,70,94,7,10,72,86,64,23,36,93,55,91,36,44,35,43,10,53,4,34,70,96,41,70,98,7,28,30,9,97,36,89,25,21,77,51,4,19,26,65,56,76,51,56,73,88,56,4,52,89,6,10,26,36,73,32,54,57,92,72,48,74,76,14,19,33,56,70,6,38,20,6,11,55,61,60,52,58,61,88,30,7,86,60,73,72,46,56,73,78,50,58,3,32,45,87,78,64,86,72,73,83,36,56,1,70,98,80,62,38,45,90,13,70,9,28,72,144351`;

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

function buildGameRound(instructions = [0], initialScreen = [[""]]) {
  const screen = JSON.parse(JSON.stringify(initialScreen));
  let score = 0;

  const scoreIndex = instructions.indexOf(-1);
  if (scoreIndex !== -1) {
    console.log(instructions.slice(scoreIndex, scoreIndex + 3))
  }

  for (let i = 0; i < Math.floor(instructions.length / 3); i++) {
    const pointer = i * 3;
    const x = instructions[pointer];
    const y = instructions[pointer + 1];
    const tile = instructions[pointer + 2];

    if (x === -1 && y === 0) {
      console.log(tile);
      score = tile;
    } else {
      if (!screen[y]) {
        screen[y] = [];
      }

      switch (tile) {
        case 0:
          screen[y][x] = ".";
          break;
        case 1:
          screen[y][x] = "|";
          break;
        case 2:
          screen[y][x] = "8";
          break;
        case 3:
          screen[y][x] = "_";
          break;
        case 4:
          screen[y][x] = "*";
          break;
      }
    }
  }

  return { screen, score };
}

function countBlocks(screen = [[""]]) {
  return screen.reduce((sum, row) => {
    return sum + row.filter((item) => item === "8").length;
  }, 0);
}

function runGameAndCountBlocks(raw = "") {
  const computer = new LiamComputer(raw);
  const instructions = computer.run().output;
  const { screen } = buildGameRound(instructions);

  return countBlocks(screen);
}

function playGame(raw = "") {
  const computer = new LiamComputer("2" + raw.slice(1));
  let output = computer.run();
  let state = {
    screen: [],
    score: 0,
  };

  let i = 0;
  let limit = 10000;

  while (output.exitCode === undefined && i < limit) {
    // console.log("ROUND:", i);
    i++;
    const nextState = buildGameRound(output.output, state.screen);

    let nextMove = 0;
    let oldBall;
    let padel;
    let newBall;

    state.screen.some((row, y) => {
      if (oldBall) {
        return;
      }
      const ballIndex = row.indexOf("*");
      if (ballIndex !== -1) {
        oldBall = [ballIndex, y];
      }
    });

    nextState.screen.some((row, y) => {
      if (newBall && padel) {
        return;
      }
      const ballIndex = row.indexOf("*");
      const padelIndex = row.indexOf("_");
      if (ballIndex !== -1) {
        newBall = [ballIndex, y];
      }
      if (padelIndex !== -1) {
        padel = [padelIndex, y];
      }
    });

    if (oldBall && newBall && padel && !(newBall[0] === padel[0] && newBall[1] + 1 === padel[1])) {
      if (oldBall[0] === newBall[0] || newBall[1] < oldBall[1]) {
        if (padel[0] < newBall[0]) {
          nextMove = 1;
        } else if (padel[0] > newBall[0]) {
          nextMove = -1;
        }
      } else if (newBall[1] > oldBall[1]) {
        const predictedX =
          (newBall[0] - oldBall[0]) * (padel[1] - newBall[1]) + newBall[0];
        // negative for left, positive for right
        if (predictedX < padel[0]) {
          nextMove = -1;
        } else if (predictedX > padel[0]) {
          nextMove = 1;
        }
      }
    }

    // printScreen(nextState.screen);
    output = output.input(nextMove);
    state = nextState;
  }

  state = buildGameRound(output.output, state);

  // 23969

  return state.score;
}

function printScreen(screen = [[""]]) {
  screen.forEach((row) => {
    console.log(row.join(","));
  });
}

const result = playGame(input);
console.log("result:", result);
