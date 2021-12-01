console.log("------");
console.time("run");

class RotatingArray {
  _arr;
  _pointer = 0;

  constructor(length = 0) {
    this._arr = new Array(length);
    this._arr[0] = {
      value: 0,
      next: 0,
      previous: 0,
    };
  }

  rotate(amount = 0) {
    let current = this._arr[this._pointer];
    if (amount > 0) {
      for (let i = 0; i < amount; i++) {
        current = this._arr[current.next];
        this._pointer = current.value;
      }
    } else if (amount < 0) {
      for (let i = 0; i > amount; i--) {
        current = this._arr[current.previous];
        this._pointer = current.value;
      }
    }
  }

  insert(value = 0) {
    const current = this._arr[this._pointer];
    const next = this._arr[current.next];
    this._arr[value] = {
      value,
      next: next.value,
      previous: current.value,
    };
    current.next = value;
    next.previous = value;
    this._pointer = value;
  }

  remove() {
    const current = this._arr[this._pointer];
    const next = this._arr[current.next];
    const previous = this._arr[current.previous];

    next.previous = previous.value;
    previous.next = next.value;
    current.next = undefined;
    current.previous = undefined;
    this._pointer = next.value;

    return current.value;
  }
}

function marbleGame(playerCount = 9, marbleCount = 25) {
  let marbles = new RotatingArray(marbleCount);
  let elves = new Array(playerCount)
    .fill(undefined, 0, playerCount)
    .map(() => ({
      score: 0,
      marbles: [],
    }));
  let currentElf = 1;

  for (let i = 0; i < marbleCount; i++) {
    const marbleToPlace = i + 1;
    if (marbleToPlace % 23 === 0) {
      const elf = elves[currentElf];
      elf.score += marbleToPlace;
      elf.marbles.push(marbleToPlace);
      marbles.rotate(-7);
      const removedMarble = marbles.remove();
      elf.score += removedMarble;
      elf.marbles.push(removedMarble);
    } else {
      marbles.rotate(1);
      marbles.insert(marbleToPlace);
    }
    currentElf = i % playerCount;
  }

  // console.log(elves);

  // const sorted = [];
  // let current = marbles._arr[0];

  // while(sorted.length <= marbleCount) {
  //   sorted.push(current.value);
  //   current = marbles._arr[current.next];
  // }

  // console.log(sorted);

  return elves.sort((a, b) => b.score - a.score)[0].score;
}

const result = marbleGame(493, 7186300);

// 32 : 0.732
// 367802 : 233
// 367802 : 21
console.log("result:", result);
console.timeEnd("run");
