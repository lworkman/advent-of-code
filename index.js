console.log("------");
console.time("run");

const test = `#ip 0
seti 5 0 1
seti 6 0 2
addi 0 1 0
addr 1 2 3
setr 1 0 0
seti 8 0 4
seti 9 0 5`;

// 3,4,5,6,8,9,10,11

const input = `#ip 1
addi 1 16 1
seti 1 4 5
seti 1 4 2
mulr 5 2 4
eqrr 4 3 4
addr 4 1 1
addi 1 1 1
addr 5 0 0
addi 2 1 2
gtrr 2 3 4
addr 1 4 1
seti 2 6 1
addi 5 1 5
gtrr 5 3 4
addr 4 1 1
seti 1 7 1
mulr 1 1 1
addi 3 2 3
mulr 3 3 3
mulr 1 3 3
muli 3 11 3
addi 4 3 4
mulr 4 1 4
addi 4 18 4
addr 3 4 3
addr 1 0 1
seti 0 7 1
setr 1 4 4
mulr 4 1 4
addr 1 4 4
mulr 1 4 4
muli 4 14 4
mulr 4 1 4
addr 3 4 3
seti 0 0 0
seti 0 1 1`;

const codes = {
  addr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] + reg[nums[1]];
      return reg;
    },
  },
  addi: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] + nums[1];
      return reg;
    },
  },
  mulr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] * reg[nums[1]];
      return reg;
    },
  },
  muli: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] * nums[1];
      return reg;
    },
  },
  banr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] & reg[nums[1]];
      return reg;
    },
  },
  bani: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] & nums[1];
      return reg;
    },
  },
  borr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] | reg[nums[1]];
      return reg;
    },
  },
  bori: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] | nums[1];
      return reg;
    },
  },
  setr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]];
      return reg;
    },
  },
  seti: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = nums[0];
      return reg;
    },
  },
  gtir: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = nums[0] > reg[nums[1]] ? 1 : 0;
      return reg;
    },
  },
  gtri: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] > nums[1] ? 1 : 0;
      return reg;
    },
  },
  gtrr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] > reg[nums[1]] ? 1 : 0;
      return reg;
    },
  },
  eqir: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = nums[0] === reg[nums[1]] ? 1 : 0;
      return reg;
    },
  },
  eqri: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] === nums[1] ? 1 : 0;
      return reg;
    },
  },
  eqrr: {
    method: (nums = [], reg = []) => {
      reg[nums[2]] = reg[nums[0]] === reg[nums[1]] ? 1 : 0;
      return reg;
    },
  },
};

function readInstructions(raw = "") {
  const [pointerBase, ...instructionBase] = raw.split("\n");

  return {
    pointer: {
      value: 0,
      register: Number(/\d+/.exec(pointerBase)[0]),
    },
    instructions: instructionBase.map((instruction) => {
      const [_, key, numString] = /(.+) (\d+ \d+ \d+)/.exec(instruction);

      return {
        key,
        nums: numString.split(" ").map((num) => Number(num)),
      };
    }),
  };
}

function followInstruction(
  register = [0],
  instructions = [
    {
      key: "",
      nums: [],
    },
  ],
  pointer = {
    value: 0,
    register: 0,
  }
) {
  register[pointer.register] = pointer.value;
  const instruction = instructions[pointer.value];
  const result = codes[instruction.key].method(instruction.nums, register);

  pointer.value = result[pointer.register] + 1;
}

function followCode(raw = "") {
  let register = [0, 0, 0, 0, 0];
  let { pointer, instructions } = readInstructions(raw);

  while (pointer.value < instructions.length) {
    followInstruction(register, instructions, pointer);
  }

  return register;
}

function startingWithOne(raw = "") {
  let register = [1, 0, 0, 0, 0];
  let { pointer, instructions } = readInstructions(raw);
  let i = 0;

  while (pointer.value < instructions.length) {
    switch (pointer.value) {
      case 3:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
      case 11:
        break;
      default:
        console.log(i, register);
    }
    // if (register[3] === 10551320 && register[2] !== 10551321) {
    //   register[1] = 11;
    //   register[2] = 10551321
    //   console.log("skipping!");
    // }
    followInstruction(register, instructions, pointer);
    i++;
  }

  return register;
}

// const result = startingWithOne(input);
// const result = followCode(input);

console.log("result:", result);
console.timeEnd("run");
