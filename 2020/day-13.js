console.log("------");

const test = `939
7,13,x,x,59,x,31,19`;

const test2 = `939
1789,37,47,1889`;

const input = `1014511
17,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,643,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,433,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19`;

function timeTillBus(currentTime = 0, busId = 0) {
  return Math.abs((currentTime % busId) - busId);
}

function findNextBus(instructions = "") {
  const [startingTimeString, busIdString] = instructions.split("\n");
  const startingTime = parseInt(startingTimeString, 10);
  const minutesTillNextBuses = busIdString
    .split(",")
    .filter((id) => id !== "x")
    .map((id) => parseInt(id, 10))
    .map((id) => {
      return {
        id,
        time: timeTillBus(startingTime, id),
        score: id * timeTillBus(startingTime, id),
      };
    })
    .sort((a, b) => a.time - b.time);

  return minutesTillNextBuses[0].score;
}

function findBusOffsets(instructions = "") {
  const [startingTimeString, busIdString] = instructions.split("\n");
  const buses = busIdString
    .split(",")
    .map((id, index) => {
      return {
        id: parseInt(id),
        offset: index,
      };
    })
    .filter((bus) => bus.id > 0);

  const largestOffsetBus = buses.sort((a, b) => b.id - a.id)[0];

  let target = largestOffsetBus.id;
  const baseOffset = largestOffsetBus.offset;
  let limit = 1000000000;
  let i = 0;

  while (i < limit) {
    i++;

    if (
      buses.every((bus) => {
        return (target + (bus.offset - baseOffset)) % bus.id === 0;
      })
    ) {
      break;
    }

    target += largestOffsetBus.id;
  }

  return largestOffsetBus;
}

function chineseTheorem(instructions) {
  const [startingTimeString, busIdString] = instructions.split("\n");
  const buses = busIdString
    .split(",")
    .map((id, index) => {
      if (id === "x") {
        return false;
      }
      return {
        mod: BigInt(parseInt(id, 10)),
        remainder: BigInt((parseInt(id, 10) - index) % parseInt(id, 10)),
        n: 0,
      };
    })
    .filter((bus) => bus);

  const Nproduct = buses.reduce(
    (product, bus) => BigInt(BigInt(product) * BigInt(bus.mod)),
    BigInt(1)
  );

  buses.map((bus) => {
    const n = BigInt(Nproduct / bus.mod);
    if (bus.remainder === 0) {
      bus.n = BigInt(n * bus.mod);
    } else {
      bus.n = BigInt(n * findInverse(n, bus.mod) * bus.remainder);
    }
  });

  console.log(buses);
  const largeX = BigInt(buses.reduce((sum, bus) => BigInt(sum + bus.n), BigInt(0)));
  const final = largeX - (largeX / Nproduct) * Nproduct;
  return final;
}

function findInverse(value, mod) {
  const current = BigInt(value % mod);

  for (let i = 0; i < mod; i++) {
    if ((current * BigInt(i)) % mod == 1) {
      return BigInt(i);
    }
  }
}

const result = chineseTheorem(input);
// 760171380521344 too low
console.log(result);
