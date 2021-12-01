console.log("------");

const input = `1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,9,23,27,2,27,6,31,1,5,31,35,2,9,35,39,2,6,39,43,2,43,13,47,2,13,47,51,1,10,51,55,1,9,55,59,1,6,59,63,2,63,9,67,1,67,6,71,1,71,13,75,1,6,75,79,1,9,79,83,2,9,83,87,1,87,6,91,1,91,13,95,2,6,95,99,1,10,99,103,2,103,9,107,1,6,107,111,1,10,111,115,2,6,115,119,1,5,119,123,1,123,13,127,1,127,5,131,1,6,131,135,2,135,13,139,1,139,2,143,1,143,10,0,99,2,0,14,0`;

class LiamComputer {
  _version = "1.0";
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
      const instruction = this._instructions[this._head];
      const value1 = this._instructions[this._head + 1];
      const value2 = this._instructions[this._head + 2];
      const address = this._instructions[this._head + 3];
      switch (instruction) {
        case 1:
          this.add(value1, value2, address);
          this.incrementHead();
          break;
        case 2:
          this.multiply(value1, value2, address);
          this.incrementHead();
          break;
        case 99:
          isDone = true;
          break;
      }
    }

    return;
  }

  add(value1 = 0, value2 = 0, address = 0) {
    this._instructions[address] =
      this._instructions[value1] + this._instructions[value2];
  }

  multiply(value1 = 0, value2 = 0, address = 0) {
    this._instructions[address] =
      this._instructions[value1] * this._instructions[value2];
  }

  incrementHead() {
    this._head += 4;
  }
}

function testComputer(raw = "") {
  const computer = new LiamComputer(raw);
  computer._instructions[1] = 12;
  computer._instructions[2] = 2;
  computer.run();
  return computer._instructions[0];
}

function findCombination(raw = "") {

  let noun;
  let verb;

  for (let n = 0; n < 99; n++) {
    for (let v = 0; v < 99; v++) {
      const computer = new LiamComputer(raw);
      computer._instructions[1] = n;
      computer._instructions[2] = v;
      computer.run();
      if (computer._instructions[0] === 19690720) {
        noun = n;
        verb = v;
        break;
      }
    }
    if (noun) {
      break;
    }
  }


  return 100 * noun + verb;
}

const result = findCombination(input);
console.log("result:", result);
