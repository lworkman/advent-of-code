console.log("------");

const input = [12, 20, 0, 6, 1, 17, 7];

// function elfGame(starting = [0]) {
//   const history = [];

//   starting.forEach((num) => history.unshift(num));

//   const limit = 100 - starting.length;
//   let i = 0;

//   while (i < limit) {
//     i++;

//     const latest = history[0];
//     const preHistory = history.slice(1);
//     if (preHistory.includes(latest)) {
//       history.unshift(
//         Math.abs(
//           history.length - (preHistory.indexOf(latest) + 1) - history.length
//         )
//       );
//     } else {
//       history.unshift(0);
//     }
//   }

//   return history[0];
// }

function elfGame(starting = [0]) {
  const limit = 30000000;
  const cache = new Array(limit);

  starting.forEach((num, index) => {
    cache[num] = [index + 1];
  });

  let i = starting.length;
  let lastSaid = starting[starting.length - 1];

  while (i < limit) {
    i++;

    if (i % 1000000 === 0) {
      console.log(i);
    }

    const latest = lastSaid;

    if (cache[latest] !== undefined && cache[latest].length > 1) {
      const info = cache[latest];
      const result = info[1] - info[0];
      const resultInfo = cache[result];
      if (!resultInfo) {
        cache[result] = [i];
      } else if (resultInfo[1]) {
        cache[result] = [cache[result][1], i];
      } else  {
        cache[result] = [cache[result][0], i];
      }

      lastSaid = result;
    } else {
      if (!cache[0]) {
        cache[0] = [i];
      } else {
        cache[0] = [cache[0].pop(), i];
      }
      lastSaid = 0;
    }
  }

  return lastSaid;
}

const result = elfGame(input);
// 23
console.log(result);
