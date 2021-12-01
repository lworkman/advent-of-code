// INCOMPLETE// const input = `cut 3334
// deal into new stack
// deal with increment 4
// cut -342
// deal with increment 30
// cut -980
// deal into new stack
// cut -8829
// deal with increment 10
// cut -7351
// deal with increment 60
// cut -3766
// deal with increment 52
// cut 8530
// deal with increment 35
// cut -6979
// deal with increment 52
// cut -8287
// deal with increment 34
// cut -6400
// deal with increment 24
// deal into new stack
// deal with increment 28
// cut 7385
// deal with increment 32
// cut -1655
// deal with increment 66
// cut -2235
// deal with increment 40
// cut 8121
// deal with increment 71
// cut -2061
// deal with increment 73
// cut 7267
// deal with increment 19
// cut 2821
// deal with increment 16
// cut 7143
// deal into new stack
// deal with increment 31
// cut 695
// deal with increment 26
// cut 9140
// deal with increment 73
// cut -4459
// deal with increment 17
// cut 9476
// deal with increment 70
// cut -9832
// deal with increment 46
// deal into new stack
// deal with increment 62
// cut 6490
// deal with increment 29
// cut 3276
// deal into new stack
// cut 6212
// deal with increment 9
// cut -2826
// deal into new stack
// cut -1018
// deal into new stack
// cut -9257
// deal with increment 39
// cut 4023
// deal with increment 69
// cut -8818
// deal with increment 74
// cut -373
// deal with increment 51
// cut 3274
// deal with increment 38
// cut 1940
// deal into new stack
// cut -3921
// deal with increment 3
// cut -8033
// deal with increment 38
// cut 6568
// deal into new stack
// deal with increment 68
// deal into new stack
// deal with increment 70
// cut -9
// deal with increment 32
// cut -9688
// deal with increment 4
// deal into new stack
// cut -1197
// deal with increment 54
// cut -582
// deal into new stack
// cut -404
// deal into new stack
// cut -8556
// deal with increment 47
// cut 7318
// deal with increment 38
// cut -8758
// deal with increment 48`;

// setTimeout(() => {
//   const commands = input
//     .split("\n")
//     .map((x) => x.trim().split(" "))
//     .map((row) => {
//       if (row[0] === "cut") {
//         return {
//           command: "cut",
//           count: BigInt(row[1]),
//         };
//       }
//       if (row[1] === "with") {
//         return {
//           command: "increment",
//           count: BigInt(row[3]),
//         };
//       }

//       return {
//         command: "new",
//       };
//     });

//   let deckSize = 119315717514047n;
//   const forw = new OppositeStack(0n, deckSize);
//   const forw2 = new OppositeStack(1n, deckSize);
//   const revCommands = commands.reverse();
//   execute(forw, revCommands, deckSize);
//   execute(forw2, revCommands, deckSize);
//   const diff = forw2.currentPosition - (forw.currentPosition % deckSize);
//   console.log(`function is:${forw.currentPosition}+x*${diff} mod ${deckSize}`);
//   const func = new Func(forw.currentPosition, diff, deckSize);
//   const times = 101741582076661n;
//   const bitRep = times.toString(2);
//   let map = new Map();
//   let allFunc = func;
//   map.set(0, allFunc);
//   for (let i = 1; i < bitRep.length; i++) {
//     allFunc = allFunc.composeSelf();
//     map.set(i, allFunc.clone());
//   }
//   var bitRepArr = bitRep.split("").reverse();
//   let full = undefined;
//   for (let i = 0; i < bitRep.length; i++) {
//     if (bitRepArr[i] === "1") {
//       if (full === undefined) {
//         full = map.get(i).clone();
//       } else {
//         full = full.compose(map.get(i));
//       }
//     }
//   }
//   console.log((full.compute(2020n) + deckSize) % deckSize);
// }, 0);

// class Func {
//   constructor(init, diff, mod) {
//     this.init = BigInt(init) % BigInt(mod);
//     this.diff = BigInt(diff) % BigInt(mod);
//     this.mod = BigInt(mod);
//   }

//   compute(x) {
//     return (this.init + this.diff * BigInt(x)) % this.mod;
//   }

//   composeSelf() {
//     return this.compose(this);
//   }

//   compose(other) {
//     if (other.mod !== this.mod) {
//       throw new Error("same mod only");
//     }
//     let newInit = (this.init + other.init * this.diff) % this.mod;
//     let newDiff = (this.diff * other.diff) % this.mod;
//     return new Func(newInit, newDiff, this.mod);
//   }

//   toString() {
//     return `${this.init} + ${this.diff}*x mod ${this.mod}`;
//   }

//   clone() {
//     return new Func(this.init, this.diff, this.mod);
//   }
// }

// function execute(stack, commands) {
//   for (const command of commands) {
//     if (command.command === "cut") {
//       stack.cut(command.count);
//     }
//     if (command.command === "increment") {
//       stack.increment(command.count);
//     }
//     if (command.command === "new") {
//       stack.newStack();
//     }
//   }
//   return stack;
// }

// class OppositeStack {
//   constructor(toFollow, total) {
//     this.toFollow = toFollow;
//     this.currentPosition = toFollow;
//     this.total = total;
//   }

//   newStack() {
//     this.currentPosition = this.total - this.currentPosition - 1n;
//   }

//   cut(val) {
//     val = this.total - val;
//     val = val < 0n ? this.total + val : val;
//     const move = val % this.total;
//     if (this.currentPosition < move) {
//       const staying = this.total - move;
//       this.currentPosition = staying + this.currentPosition;
//     } else {
//       this.currentPosition = this.currentPosition - move;
//     }
//   }

//   increment(delta) {
//     let pos = 0n;
//     let i = 0n;
//     const ceil = this.total % delta === 0 ? 0n : 1n;
//     const toMul = this.total / delta + ceil;
//     while (pos !== this.currentPosition) {
//       const diff = this.currentPosition - pos;
//       if (diff % delta === 0n) {
//         const stepDelta = diff / delta;
//         this.currentPosition = i + stepDelta;
//         return;
//       }
//       pos = (pos + delta * toMul) % this.total;
//       i += toMul;
//     }
//     return;
//   }
// }

console.log("------");
console.time("run");

const test = `deal with increment 7
deal into new stack
deal into new stack`;

const test2 = `deal into new stack
cut -2
deal with increment 7
cut 8
cut -4
deal with increment 7
cut 3
deal with increment 9
deal with increment 3
cut -1`;

const input = `cut 3334
deal into new stack
deal with increment 4
cut -342
deal with increment 30
cut -980
deal into new stack
cut -8829
deal with increment 10
cut -7351
deal with increment 60
cut -3766
deal with increment 52
cut 8530
deal with increment 35
cut -6979
deal with increment 52
cut -8287
deal with increment 34
cut -6400
deal with increment 24
deal into new stack
deal with increment 28
cut 7385
deal with increment 32
cut -1655
deal with increment 66
cut -2235
deal with increment 40
cut 8121
deal with increment 71
cut -2061
deal with increment 73
cut 7267
deal with increment 19
cut 2821
deal with increment 16
cut 7143
deal into new stack
deal with increment 31
cut 695
deal with increment 26
cut 9140
deal with increment 73
cut -4459
deal with increment 17
cut 9476
deal with increment 70
cut -9832
deal with increment 46
deal into new stack
deal with increment 62
cut 6490
deal with increment 29
cut 3276
deal into new stack
cut 6212
deal with increment 9
cut -2826
deal into new stack
cut -1018
deal into new stack
cut -9257
deal with increment 39
cut 4023
deal with increment 69
cut -8818
deal with increment 74
cut -373
deal with increment 51
cut 3274
deal with increment 38
cut 1940
deal into new stack
cut -3921
deal with increment 3
cut -8033
deal with increment 38
cut 6568
deal into new stack
deal with increment 68
deal into new stack
deal with increment 70
cut -9
deal with increment 32
cut -9688
deal with increment 4
deal into new stack
cut -1197
deal with increment 54
cut -582
deal into new stack
cut -404
deal into new stack
cut -8556
deal with increment 47
cut 7318
deal with increment 38
cut -8758
deal with increment 48`;

class CardDeck {
  _deckLength;
  _cards;
  _currentDeck;

  constructor(length = 0) {
    this._deckLength = length;
    const newDeck = new Array(this._deckLength);
    const currentDeck = new Array(this._deckLength);
    for (let i = 0; i < length; i++) {
      newDeck[i] = i;
      currentDeck[i] = i;
    }
    this._cards = newDeck;
    this._currentDeck = currentDeck;
  }

  getDeck() {
    return this._currentDeck.map((i) => this._cards[i]);
  }

  dealIntoNewStack() {
    const newDeck = new Array(this._deckLength);
    for (let i = this._deckLength - 1; i >= 0; i--) {
      newDeck[i] = this._currentDeck[this._deckLength - 1 - i];
    }
    this._currentDeck = newDeck;
  }

  cutCards(count = 0) {
    let newDeck = [];

    const firstBatch = this._currentDeck.slice(count);
    const secondBatch = this._currentDeck.slice(0, count);
    newDeck = [...firstBatch, ...secondBatch];

    this._currentDeck = newDeck;
  }

  dealWithIncrement(increment = 0) {
    let newDeck = new Array(this._deckLength);

    for (let i = 0; i < this._deckLength; i++) {
      newDeck[(i * increment) % this._deckLength] = this._currentDeck[i];
    }

    this._currentDeck = newDeck;
  }
}

function dealIntoNewStack(pointer, length) {
  return length - 1 - pointer;
}

function cutCards(pointer = 0, length = 0, value = 0) {
  if (value >= 0) {
    if (value > pointer) {
      const space = value - pointer;
      return length - space;
    } else {
      return pointer - value;
    }
  } else {
    const positive = value * -1;
    // is it catachment area
    if (length - 1 - positive < pointer) {
      const space = length - pointer;
      return positive - space;
    } else {
      return pointer + positive;
    }
  }
}

function dealWithIncrement(pointer = 0, length = 0, value = 0) {
  return (pointer * value + length) % length;
}

function parseInstructions(raw = "") {
  return raw.split("\n").map((row) => {
    if (/deal with increment/.test(row)) {
      return {
        action: "increment",
        value: Number(/\d+/.exec(row)[0]),
      };
    } else if (/deal into new stack/.test(row)) {
      return {
        action: "deal",
      };
    } else if (/cut/.test(row)) {
      let value = Number(/\d+/.exec(row)[0]);
      if (/-/.test(row)) {
        value *= -1;
      }
      return {
        action: "cut",
        value,
      };
    }
  });
}

function shuffleDeck(raw = "", length = 0, target = 0, loop = 1) {
  const instructions = parseInstructions(raw);

  const start = target;

  function trans(value) {
    return instructions.reduce((card, { action, value }) => {
      switch (action) {
        case "increment":
          return dealWithIncrement(card, length, value);
        case "deal":
          return dealIntoNewStack(card, length);
        case "cut":
          return cutCards(card, length, value);
      }
    }, value);
  }

  const first = trans(start);

  const second = trans(first);

  return first;
}

// Stolen from https://www.reddit.com/r/adventofcode/comments/ee0rqi/2019_day_22_solutions/fbnifwk/
// I don't do math

function reverseShuffle(raw = "", D = 0, target = 0, n = 1) {
  const instructions = parseInstructions(raw).reverse();

  const reverseDeal = (i) => {
    return D - 1 - i;
  };

  const reverseCut = (i, N) => {
    return (i + N + D) % D;
  };

  const reverseIncrement = (i, N) => {
    return (modinv(N, D) * i) % D;
  };

  function f(value) {
    return instructions.reduce((card, { action, value }) => {
      switch (action) {
        case "increment":
          return reverseIncrement(card, value);
        case "deal":
          return reverseDeal(card);
        case "cut":
          return reverseCut(card, value);
      }
    }, value);
  }

  let X = target;
  let Y = f(X);
  let Z = f(Y);
  let A = ((Y - Z) * Number(modInv(X - Y + D, D))) % D;
  let B = (Y - A * X) % D;

  console.log(A, B);

  X = BigInt(X);
  Y = BigInt(Y);
  Z = BigInt(Z);
  A = BigInt(A);
  B = BigInt(B);

  const bigD = BigInt(D);
  return (
    (modPow(A, B, D) * X +
      (modPow(A, n, D) - BigInt(1)) * BigInt(modInv(A - BigInt(1), D)) * B) %
    bigD
  );
}

// const result = reverseShuffle(input, 119315717514047, 2020, 101741582076661);

// function dealInto(o, i) {
//   return o + (i * -1);
// }

// function cutN(o, i, n) {
//   return o + (i * n);
// }

// function dealN()

function modInv(a, n) {
  try {
    const egcd = eGcd(toZn(a, n), n);
    if (egcd.g !== 1n) {
      return NaN; // modular inverse does not exist
    } else {
      return toZn(egcd.x, n);
    }
  } catch (error) {
    return NaN;
  }
}
function eGcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if ((a <= 0n) | (b <= 0n)) throw new RangeError("a and b MUST be > 0"); // a and b MUST be positive

  let x = 0n;
  let y = 1n;
  let u = 1n;
  let v = 0n;

  while (a !== 0n) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a;
    a = r;
    x = u;
    y = v;
    u = m;
    v = n;
  }
  return {
    g: b,
    x: x,
    y: y,
  };
}

function toZn(a, n) {
  n = BigInt(n);
  if (n <= 0) {
    return NaN;
  }

  a = BigInt(a) % n;
  return a < 0 ? a + n : a;
}
function modPow(b, e, n) {
  n = BigInt(n);
  if (n === 0n) {
    return NaN;
  } else if (n === 1n) {
    return BigInt(0);
  }

  b = toZn(b, n);

  e = BigInt(e);
  if (e < 0n) {
    return modInv(modPow(b, abs(e), n), n);
  }

  let r = 1n;
  while (e > 0) {
    if (e % 2n === 1n) {
      r = (r * b) % n;
    }
    e = e / 2n;
    b = b ** 2n % n;
  }
  return r;
}

function abs(a) {
  a = BigInt(a);
  return a >= 0n ? a : -a;
}

const goB = (rawInput) => {
  const instructions = parseInstructions(rawInput);

  const times = 101741582076661n;
  const deckSize = 119315717514047n;
  const cardPosition = 2020n;

  let incMultiplier = 1n;
  let offsetDiff = 0n;

  instructions.forEach(({ action, value }) => {
    switch (action) {
      case "deal": {
        incMultiplier = -incMultiplier % deckSize;
        offsetDiff = (offsetDiff + incMultiplier) % deckSize;
        break;
      }
      case "cut": {
        offsetDiff = (offsetDiff + BigInt(value) * incMultiplier) % deckSize;
        break;
      }
      case "increment": {
        incMultiplier = (incMultiplier * modInv(BigInt(value), deckSize)) % deckSize;
        break;
      }
    }
  });

  const inc = modPow(incMultiplier, times, deckSize);

  let offset =
    (offsetDiff *
      (1n - inc) *
      modInv((1n - incMultiplier) % deckSize, deckSize)) %
    deckSize;

  return Number((offset + inc * cardPosition) % deckSize);
};

const result = goB(input);

console.log("result:", result);

// 92114545323655 too high
// 1334980072307 too low
// 48993359619478 NOPE
// 2525625767852 NOPE
// 107602940797653 NOPE
// 38027799646471 NOPE
// 37473938978694 NOPE
// 91404625067550 NOPE
// 107955850267438
// 63431875592821
// 63967243502561

console.timeEnd("run");
