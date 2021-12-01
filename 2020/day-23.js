console.log("------");

const test = "389125467";
const input = "643719258";

class LinkedList {
  head = 1;
  items = {
    0: {
      next: 0,
      value: 0,
    },
  };
  skippedCups = [];
  length = 0;

  constructor(initial = [0]) {
    this.length = initial.length;
    this.items = initial.reduce((holder, num, index) => {
      let next;

      if (index === 0) {
        next = initial[index + 1];
      } else if (index === initial.length - 1) {
        next = initial[0];
      } else {
        next = initial[index + 1];
      }

      holder[num] = {
        value: num,
        next,
      };
      return holder;
    }, {});
  }

  removeItems() {
    const startingHead = this.head;
    this.skippedCups = [this.next(), this.next(), this.next()];
    const nextInLine = this.next();

    this.items[startingHead].next = nextInLine;

    this.head = startingHead;
  }

  addItems() {
    const previousNext = this.items[this.head].next;

    this.items[this.head].next = this.skippedCups[0];

    this.items[this.skippedCups[2]].next = previousNext;
    this.skippedCups = [];
  }

  setHeadToNextLowest(target = 0) {
    let targetToUse = target;
    while (true) {
      targetToUse--;
      if (targetToUse < 1) {
        targetToUse = this.length;
      }
      if (!this.skippedCups.includes(targetToUse)) {
        const result = this.items[targetToUse];

        if (result) {
          this.head = result.value;
          return;
        }
      }
    }
  }

  incrementHead() {
    this.head = this.items[this.head].next;
  }

  next() {
    let result;
    while (!result || this.skippedCups.includes(result)) {
      this.incrementHead();
      result = this.items[this.head];
    }
    return result.value;
  }
}

function cupRound(cups = new LinkedList(), currentCup = 0) {
  cups.removeItems();
  cups.setHeadToNextLowest(currentCup);
  cups.addItems();
  cups.head = currentCup;

  return [cups, cups.next()];
}

function runGame(raw = "", turnCount = 0) {
  let cups = new LinkedList([...raw.split("").map((elem) => parseInt(elem, 10))]);
  let target = parseInt(raw.slice(0,1), 10);

  cups.head = target;

  for (let i = 0; i < turnCount; i++) {
    [cups, target] = cupRound(cups, target);
  }

  cups.head = 1;

  const output = [];

  for (let i = 0; i < cups.length - 1; i++) {
    output.push(cups.next());
  }

  return output.join("");
}

function runMillionGame(raw = "", turnCount = 0) {
  let initialCups = raw.split("").map((elem) => parseInt(elem, 10));
  let target = initialCups[0];

  const highest = [...initialCups].sort()[initialCups.length - 1];

  for (let i = highest + 1; i <= 1000000; i++) {
    initialCups.push(i);
  }

  let cups = new LinkedList(initialCups);

  cups.head = target;
  for (let i = 0; i < turnCount; i++) {
    [cups, target] = cupRound(cups, target);
  }

  cups.head = 1;

  return [cups.next(), cups.next()];

}

// const start = new Date().getTime();
const result = runMillionGame(input, 10000000);
// const result = runGame(test, 100);
// console.log(new Date().getTime() - start);
console.log(result);
