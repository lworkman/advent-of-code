console.log("------");
console.time("run");

const test = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

const input = `Step G must be finished before step T can begin.
Step L must be finished before step V can begin.
Step D must be finished before step P can begin.
Step J must be finished before step K can begin.
Step N must be finished before step B can begin.
Step K must be finished before step W can begin.
Step T must be finished before step I can begin.
Step F must be finished before step E can begin.
Step P must be finished before step O can begin.
Step X must be finished before step I can begin.
Step M must be finished before step S can begin.
Step Y must be finished before step O can begin.
Step I must be finished before step Z can begin.
Step V must be finished before step Z can begin.
Step Q must be finished before step Z can begin.
Step H must be finished before step C can begin.
Step R must be finished before step Z can begin.
Step U must be finished before step S can begin.
Step E must be finished before step Z can begin.
Step O must be finished before step W can begin.
Step Z must be finished before step S can begin.
Step S must be finished before step C can begin.
Step W must be finished before step B can begin.
Step A must be finished before step B can begin.
Step C must be finished before step B can begin.
Step L must be finished before step P can begin.
Step J must be finished before step V can begin.
Step E must be finished before step W can begin.
Step Z must be finished before step W can begin.
Step W must be finished before step C can begin.
Step S must be finished before step W can begin.
Step Q must be finished before step S can begin.
Step O must be finished before step B can begin.
Step R must be finished before step W can begin.
Step D must be finished before step H can begin.
Step E must be finished before step O can begin.
Step Y must be finished before step H can begin.
Step V must be finished before step O can begin.
Step O must be finished before step S can begin.
Step X must be finished before step V can begin.
Step R must be finished before step E can begin.
Step S must be finished before step A can begin.
Step K must be finished before step Y can begin.
Step V must be finished before step W can begin.
Step U must be finished before step W can begin.
Step H must be finished before step R can begin.
Step P must be finished before step I can begin.
Step E must be finished before step C can begin.
Step H must be finished before step Z can begin.
Step N must be finished before step V can begin.
Step N must be finished before step W can begin.
Step A must be finished before step C can begin.
Step V must be finished before step E can begin.
Step N must be finished before step Q can begin.
Step Y must be finished before step V can begin.
Step R must be finished before step O can begin.
Step R must be finished before step C can begin.
Step L must be finished before step S can begin.
Step V must be finished before step R can begin.
Step X must be finished before step R can begin.
Step Z must be finished before step A can begin.
Step O must be finished before step Z can begin.
Step U must be finished before step C can begin.
Step X must be finished before step W can begin.
Step K must be finished before step O can begin.
Step O must be finished before step A can begin.
Step K must be finished before step T can begin.
Step N must be finished before step O can begin.
Step X must be finished before step C can begin.
Step Z must be finished before step C can begin.
Step N must be finished before step X can begin.
Step T must be finished before step A can begin.
Step D must be finished before step O can begin.
Step M must be finished before step Q can begin.
Step D must be finished before step C can begin.
Step U must be finished before step E can begin.
Step N must be finished before step H can begin.
Step I must be finished before step U can begin.
Step N must be finished before step A can begin.
Step M must be finished before step E can begin.
Step M must be finished before step V can begin.
Step P must be finished before step B can begin.
Step K must be finished before step X can begin.
Step N must be finished before step S can begin.
Step S must be finished before step B can begin.
Step Y must be finished before step W can begin.
Step K must be finished before step Q can begin.
Step V must be finished before step S can begin.
Step E must be finished before step S can begin.
Step N must be finished before step Z can begin.
Step P must be finished before step A can begin.
Step T must be finished before step V can begin.
Step L must be finished before step D can begin.
Step I must be finished before step C can begin.
Step Q must be finished before step E can begin.
Step Y must be finished before step U can begin.
Step J must be finished before step I can begin.
Step P must be finished before step H can begin.
Step T must be finished before step M can begin.
Step T must be finished before step E can begin.
Step D must be finished before step F can begin.`;

function readInstructions(raw = "") {
  const output = raw.split("\n").reduce((holder, action) => {
    const regexResult = /Step (\w) must be finished before step (\w) can begin/g.exec(
      action
    );
    const requirement = regexResult[1];
    const outcome = regexResult[2];
    if (!holder[requirement]) {
      holder[requirement] = {
        key: requirement,
        before: [],
      };
    }
    if (!holder[outcome]) {
      holder[outcome] = {
        key: outcome,
        before: [],
      };
    }
    holder[outcome].before.push(requirement);
    return holder;
  }, {});

  return Object.keys(output).map((key) => output[key]);
}

function runRound(
  doneSteps = [],
  recipies = [
    {
      key: "",
      before: "",
    },
  ]
) {
  return recipies
    .filter(({ key, before }) => {
      return (
        !doneSteps.includes(key) &&
        before.filter((action) => !doneSteps.includes(action)).length === 0
      );
    })
    .map((action) => action.key)
    .sort()[0];
}

function figureOutInstructionString(raw = "") {
  const recipies = readInstructions(raw);
  let doneSteps = [];

  while (true) {
    const result = runRound(doneSteps, recipies);

    if (!result) {
      break;
    }
    doneSteps.push(result);
  }

  return doneSteps.join("");
}

function runRoundWithTiming(
  doneSteps = [],
  inProgressSteps = [],
  workers = [
    {
      free: true,
      target: "",
      endTime: 0,
    },
  ],
  recipies = [
    {
      key: "",
      before: "",
    },
  ],
  currentTime = 0,
  scoreModifier = 0
) {
  const scores = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const newDone = [...doneSteps];
  const newDoing = [];
  const possible = recipies
    .filter(({ key, before }) => {
      return (
        !newDone.includes(key) &&
        !inProgressSteps.includes(key) &&
        before.filter((action) => !doneSteps.includes(action)).length === 0
      );
    })
    .map((action) => action.key)
    .sort();

  workers.forEach((worker) => {
    if (possible.length === 0) {
      return;
    }
    if (worker.free) {
      worker.free = false;
      worker.target = possible.shift();
      worker.endTime = currentTime + scoreModifier + scores[worker.target.toLowerCase()];
    }
  });

  workers.forEach((worker) => {
    if (worker.endTime === currentTime) {
      newDone.push(worker.target);
      worker.free = true;
      worker.target = undefined;
      worker.endTime = undefined;
    } else if (!worker.free) {
      newDoing.push(worker.target);
    }
  });

  return {
    doing: newDoing,
    done: newDone,
    workers,
  };
}

function figureOutInstructionStringWithWorkers(raw = "") {
  const recipies = readInstructions(raw);
  const base = 60;

  let workers = [
    {
      free: true,
      target: "",
      endTime: 0,
    },
    {
      free: true,
      target: "",
      endTime: 0,
    },
    {
      free: true,
      target: "",
      endTime: 0,
    },
    {
      free: true,
      target: "",
      endTime: 0,
    },
    {
      free: true,
      target: "",
      endTime: 0,
    },
  ];
  let second = 0;
  let done = [];
  let doing = [];
  const limit = Object.keys(recipies).length;

  while (done.length < limit + 1) {
    const result = runRoundWithTiming(
      done,
      doing,
      workers,
      recipies,
      second,
      base
    );

    workers = result.workers;
    done = result.done;
    doing = result.doing;
    second++;
  }

  return second;
}

const result = figureOutInstructionStringWithWorkers(input);

console.log("result:", result);
console.timeEnd("run");
