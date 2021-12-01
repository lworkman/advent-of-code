console.log("------");
console.time("run");

const input = `109,424,203,1,21101,11,0,0,1105,1,282,21102,18,1,0,1105,1,259,1201,1,0,221,203,1,21102,1,31,0,1105,1,282,21101,38,0,0,1105,1,259,20102,1,23,2,21202,1,1,3,21102,1,1,1,21101,0,57,0,1106,0,303,1201,1,0,222,21001,221,0,3,21002,221,1,2,21101,0,259,1,21102,80,1,0,1106,0,225,21102,1,93,2,21101,0,91,0,1105,1,303,2102,1,1,223,21002,222,1,4,21101,0,259,3,21102,225,1,2,21101,0,225,1,21102,1,118,0,1105,1,225,21001,222,0,3,21101,0,73,2,21101,133,0,0,1105,1,303,21202,1,-1,1,22001,223,1,1,21101,148,0,0,1106,0,259,2102,1,1,223,20101,0,221,4,21001,222,0,3,21102,1,11,2,1001,132,-2,224,1002,224,2,224,1001,224,3,224,1002,132,-1,132,1,224,132,224,21001,224,1,1,21102,195,1,0,105,1,109,20207,1,223,2,21002,23,1,1,21101,-1,0,3,21101,214,0,0,1105,1,303,22101,1,1,1,204,1,99,0,0,0,0,109,5,2101,0,-4,249,22101,0,-3,1,22101,0,-2,2,21201,-1,0,3,21101,250,0,0,1106,0,225,22101,0,1,-4,109,-5,2106,0,0,109,3,22107,0,-2,-1,21202,-1,2,-1,21201,-1,-1,-1,22202,-1,-2,-2,109,-3,2105,1,0,109,3,21207,-2,0,-1,1206,-1,294,104,0,99,22101,0,-2,-2,109,-3,2105,1,0,109,5,22207,-3,-4,-1,1206,-1,346,22201,-4,-3,-4,21202,-3,-1,-1,22201,-4,-1,2,21202,2,-1,-1,22201,-4,-1,1,21202,-2,1,3,21102,1,343,0,1106,0,303,1106,0,415,22207,-2,-3,-1,1206,-1,387,22201,-3,-2,-3,21202,-2,-1,-1,22201,-3,-1,3,21202,3,-1,-1,22201,-3,-1,2,22101,0,-4,1,21102,1,384,0,1105,1,303,1105,1,415,21202,-4,-1,-4,22201,-4,-3,-4,22202,-3,-2,-2,22202,-2,-4,-4,22202,-3,-2,-3,21202,-4,-1,-2,22201,-3,-2,1,21202,1,1,-4,109,-5,2105,1,0`;

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

function checkTractorBeam(raw = "") {
  let spaceCount = 0;
  const coordinateLimit = 98;

  const map = [];

  for (let x = 0; x < coordinateLimit; x++) {
    map[x] = [];
    for (let y = 0; y < coordinateLimit; y++) {
      let computerOutput = new LiamComputer(raw).run();
      computerOutput = computerOutput.input(x);
      computerOutput = computerOutput.input(y);
      if (computerOutput.output[0] === 1) {
        spaceCount++;
      }
      map[x].push(computerOutput.output[0]);
    }
  }

  map.forEach((row, i) => console.log(i, row.join("")));
}

function fitSantasShip(raw = "") {
  let i = 0;
  const limit = 10000;
  const size = 100;
  let topRightCoor;

  let lastX = 0;

  while (i < limit) {
    if (i % 100 === 0) {
      console.log("Round", i);
    }

    let y = i;

    let startX = lastX - 5;
    if (startX < 0) {
      startX = 0;
    }

    let endX = startX + 30;
    let found = false;
    let topRight;

    for (let x = startX; x < endX; x++) {
      if (checkCoordinate(raw, x, y)) {
        // found start of new row
        found = true;
        lastX = x;
        break;
      }
    }

    if (found) {
      // need to find right corner
      let edge;
      let gap = size;
      let pointToCheck = lastX;

      while (!edge) {
        const thisPoint = pointToCheck + gap;
        const hasPoint = checkCoordinate(raw, thisPoint, y);

        if (!hasPoint) {
          if (gap <= 1) {
            edge = pointToCheck;
            break;
          } else {
            gap = Math.ceil(gap / 2);
          }
        } else {
          pointToCheck = thisPoint;
        }
      }

      if (edge - lastX >= size) {
        topRight = [edge, y];
      }
    }

    // Write method to check coordinate and slowly shift cube left until it can't be shifted

    if (topRight) {
      const origin = [topRight[0] - size, topRight[1]];
      if (checkForCube(origin, size, raw)) {
        let editedOrigin = [...origin];
        let lastGoodOrigin = [...origin];

        while (true) {
          let xFail = true;
          let yFail = true;
          while (true) {
            if (
              checkForCube(
                [lastGoodOrigin[0] - 1, lastGoodOrigin[1]],
                size,
                raw
              )
            ) {
              console.log("Move Left");
              xFail = false;
              lastGoodOrigin = [lastGoodOrigin[0] - 1, lastGoodOrigin[1]];
            } else {
              break;
            }
          }

          while (true) {
            if (
              checkForCube(
                [lastGoodOrigin[0], lastGoodOrigin[1] - 1],
                size,
                raw
              )
            ) {
              console.log("Move up");
              yFail = false;
              lastGoodOrigin = [lastGoodOrigin[0], lastGoodOrigin[1] - 1];
            } else {
              break;
            }
          }

          if (xFail && yFail) {

            if (checkForCube([lastGoodOrigin[0] - 1, lastGoodOrigin[1] - 1], size, raw)) {
              console.log("Diaganol");
              lastGoodOrigin = [lastGoodOrigin[0] - 1, lastGoodOrigin[1] - 1];
            } else {
              break;
            }
          }
        }
        console.log("Found!", lastGoodOrigin);
        console.log("Size:", size);
        topRightCoor = lastGoodOrigin;
        break;
      }
    }

    i++;
  }

  // if (topRightCoor) {
  //   const map = [];
  //   const gap = 20;

  //   let mapX = topRightCoor[0] - gap;
  //   let mapY = topRightCoor[1] - gap;
  //   let i = 0;

  //   for (let y = mapY; y < topRightCoor[1] + size + gap; y++) {
  //     map.push([]);
  //     for (let x = mapX; x < topRightCoor[0] + size + gap; x++) {
  //       let char = ".";
  //       if (checkCoordinate(raw, x, y)) {
  //         if (
  //           x >= topRightCoor[0] &&
  //           x < topRightCoor[0] + size &&
  //           y >= topRightCoor[1] &&
  //           y < topRightCoor[1] + size
  //         ) {
  //           char = "O";
  //         } else {
  //           char = "#";
  //         }
  //       }
  //       map[i].push(char);
  //     }
  //     i++;
  //   }

  //   map.forEach((row) => console.log(row.join("")));
  // }

  return;
}

function checkForCube([originX, originY] = origin, size = 100, raw = "") {
  let isGood = true;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (!checkCoordinate(raw, originX + x, originY + y)) {
        isGood = false;
        break;
      }
    }
    if (!isGood) {
      break;
    }
  }

  return isGood;
}

function checkCoordinate(raw = "", x, y) {
  let computerOutput = new LiamComputer(raw).run();
  computerOutput = computerOutput.input(x);
  computerOutput = computerOutput.input(y);

  return computerOutput.output[0] === 1;
}

// 10 - [141, 160]
// 10 - [63, 71]
// 10 - [59, 67]

// [621, 749]
// 621749 too low
// 749621 too low
//
// [702,847]
// 7020847 wrong
// [1366, 1548]
// 13661548 wrong

// [1361, 1543]
// 13611543 wrong

// [1356, 1537]
// 13561537 HUZZAH!

const result = fitSantasShip(input);
console.log("result:", result);
console.timeEnd("run");
