console.log("------");
const test = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;
const input = `Player 1:
50
14
10
17
38
40
3
46
39
25
18
2
41
45
7
47
36
1
30
32
8
31
12
5
28

Player 2:
9
6
37
42
22
4
21
15
44
16
29
43
19
11
13
24
48
35
26
23
27
33
20
49
34`;

function playRound(deck1 = [0], deck2 = [0]) {
  const card1 = deck1[0];
  const card2 = deck2[0];
  let player1Win;

  if (card1 > card2) {
    player1Win = true;
  } else if (card1 < card2) {
    player1Win = false;
  } else {
    console.log("Weird!");
  }

  if (player1Win) {
    return [[...deck1.slice(1), card1, card2], [...deck2.slice(1)]];
  } else {
    return [[...deck1.slice(1)], [...deck2.slice(1), card2, card1]];
  }
}

function playWar(deck1 = [0], deck2 = [0]) {
  let player1 = deck1;
  let player2 = deck2;
  let i = 0;

  while (i < 10000 && player1.length > 0 && player2.length > 0) {
    const [new1, new2] = playRound(player1, player2);
    player1 = new1;
    player2 = new2;
    i++;
  }

  console.log(player1);
  console.log(player2);

  if (player1.length === 0) {
    player2.reverse();
    return player2.reduce((sum, card, index) => {
      return sum + card * (index + 1);
    }, 0);
  } else {
    player1.reverse();
    return player1.reduce((sum, card, index) => {
      return sum + card * (index + 1);
    }, 0);
  }
}

function readDeck(raw = "") {
  return raw.split("\n\n").map((line) =>
    /Player \d:\n([0-9\n]+)(\n\n|$)/g
      .exec(line)[1]
      .split("\n")
      .filter((item) => item)
      .map((num) => parseInt(num, 10))
  );
}

function playGame(raw = "") {
  const [player1, player2] = readDeck(raw);
  return playWar(player1, player2);
}

function recursiveCombat(player1Initial = [0], player2Initial = [0], depth = 0) {
  const rounds = [];
  let player1Deck = player1Initial.slice();
  let player2Deck = player2Initial.slice();
  let i = 0;
  let hasRecursionRuleHappened = false;

  while (
    i < 100000 &&
    player1Deck.length > 0 &&
    player2Deck.length > 0 &&
    !hasRecursionRuleHappened
  ) {
    i++;

    if (i % 10000 === 0) {
      console.log(i, depth);
    }

    let didPlayer1Win = false;

    if (
      rounds.some((round) => {
        const round1 = round[0];
        const round2 = round[1];
        return (
          round1.every((card, index) => player1Deck[index] === card) &&
          round2.every((card, index) => player2Deck[index] === card)
        );
      })
    ) {
      hasRecursionRuleHappened = true;
      break;
    }
    rounds.push([player1Deck.slice(), player2Deck.slice()]);

    const player1Card = player1Deck.splice(0, 1)[0];
    const player2Card = player2Deck.splice(0, 1)[0];

    if (
      player1Deck.length >= player1Card &&
      player2Deck.length >= player2Card
    ) {
      const result = recursiveCombat(
        player1Deck.slice(0, player1Card),
        player2Deck.slice(0, player2Card),
        depth + 1
      );
      didPlayer1Win = result[0].length > result[1].length;
    } else if (player1Card > player2Card) {
      didPlayer1Win = true;
    } else if (player2Card === player1Card) {
      console.log("something weird!");
    }

    if (didPlayer1Win) {
      player1Deck = [...player1Deck, player1Card, player2Card];
    } else {
      player2Deck = [...player2Deck, player2Card, player1Card];
    }
  }

  if (hasRecursionRuleHappened) {
    return [player1Deck, []]; // true means player 1 won
  } else {
    return [player1Deck, player2Deck];
  }
}

function playRecursiveGame(raw = "") {
  const [player1, player2] = readDeck(raw);
  const result = recursiveCombat(player1, player2);
  console.log(result);
  const winner = result
  .filter((element) => element.length > 0)[0];

  winner.reverse();

  console.log(winner);

  return winner
    .reduce((sum, card, index) => {
      return sum + (card * (index + 1));
    }, 0);
}

// 8453 too low
// 30485 too low
// 33266
// 3450 too high

const result = playRecursiveGame(input);
console.log(result);
