console.log("------");
console.time("run");

const test = `#######
#G..#E#
#E#E.E#
#G.##.#
#...#E#
#...E.#
#######`;

const test2 = `#######
#E..EG#
#.#G.E#
#E.##E#
#G..#.#
#..E#.#
#######`;

const test3 = `#######
#E.G#.#
#.#G..#
#G.#.G#
#G..#.#
#...E.#
####### `;

const test4 = `#########
#G......#
#.E.#...#
#..##..G#
#...##..#
#...#...#
#.G...G.#
#.....G.#
#########`;

const test5 = `#########
#G..G..G#
#.......#
#.......#
#G..E..G#
#.......#
#.......#
#G..G..G#
#########`;

const input = `################################
#######..##########.##.G.##.####
#######...#######........#..####
#######..G.######..#...##G..####
########..G###........G##...####
######....G###....G....###.#####
######....####..........##..####
#######...###...........##..E..#
#######.G..##...........#.#...##
######....#.#.....#..GG......###
#####..#..G...G........G.#....##
##########.G.......G........####
#########.G.G.#####EE..E...#####
#########....#######.......#####
#########...#########.......####
########....#########...G...####
#########...#########.#....#####
##########..#########.#E...E####
######....#.#########........#.#
######..G.#..#######...........#
#####.........#####.E......#####
####........................####
####.........G...####.....######
##................##......######
##..........##.##.........######
#............########....E######
####..........#######.E...######
####........#..######...########
########....#.E#######....######
#########...####################
########....####################
################################`;

function getAstar() {
  function pathTo(node) {
    var curr = node;
    var path = [];
    while (curr.parent) {
      path.unshift(curr);
      curr = curr.parent;
    }
    return path;
  }

  function getHeap() {
    return new BinaryHeap(function (node) {
      return node.f;
    });
  }

  var astar = {
    /**
    * Perform an A* Search on a graph given a start and end node.
    * @param {Graph} graph
    * @param {GridNode} start
    * @param {GridNode} end
    * @param {Object} [options]
    * @param {bool} [options.closest] Specifies whether to return the
               path to the closest node if the target is unreachable.
    * @param {Function} [options.heuristic] Heuristic function (see
    *          astar.heuristics).
    */
    search: function (graph, start, end, options) {
      graph.cleanDirty();
      options = options || {};
      var heuristic = options.heuristic || astar.heuristics.manhattan;
      var closest = options.closest || false;

      var openHeap = getHeap();
      var closestNode = start; // set the start node to be the closest if required

      start.h = heuristic(start, end);
      graph.markDirty(start);

      openHeap.push(start);

      while (openHeap.size() > 0) {
        // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
        var currentNode = openHeap.pop();

        // End case -- result has been found, return the traced path.
        if (currentNode === end) {
          return pathTo(currentNode);
        }

        // Normal case -- move currentNode from open to closed, process each of its neighbors.
        currentNode.closed = true;

        // Find all neighbors for the current node.
        var neighbors = graph.neighbors(currentNode);

        for (var i = 0, il = neighbors.length; i < il; ++i) {
          var neighbor = neighbors[i];

          if (neighbor.closed || neighbor.isWall()) {
            // Not a valid node to process, skip to next neighbor.
            continue;
          }

          // The g score is the shortest distance from start to current node.
          // We need to check if the path we have arrived at this neighbor is the shortest one we have seen yet.
          var gScore = currentNode.g + neighbor.getCost(currentNode);
          var beenVisited = neighbor.visited;

          if (!beenVisited || gScore < neighbor.g) {
            // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
            neighbor.visited = true;
            neighbor.parent = currentNode;
            neighbor.h = neighbor.h || heuristic(neighbor, end);
            neighbor.g = gScore;
            neighbor.f = neighbor.g + neighbor.h;
            graph.markDirty(neighbor);
            if (closest) {
              // If the neighbour is closer than the current closestNode or if it's equally close but has
              // a cheaper path than the current closest node then it becomes the closest node
              if (
                neighbor.h < closestNode.h ||
                (neighbor.h === closestNode.h && neighbor.g < closestNode.g)
              ) {
                closestNode = neighbor;
              }
            }

            if (!beenVisited) {
              // Pushing to heap will put it in proper place based on the 'f' value.
              openHeap.push(neighbor);
            } else {
              // Already seen the node, but since it has been rescored we need to reorder it in the heap
              openHeap.rescoreElement(neighbor);
            }
          }
        }
      }

      if (closest) {
        return pathTo(closestNode);
      }

      // No result was found - empty array signifies failure to find path.
      return [];
    },
    // See list of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
    heuristics: {
      manhattan: function (pos0, pos1) {
        var d1 = Math.abs(pos1.x - pos0.x);
        var d2 = Math.abs(pos1.y - pos0.y);
        return d1 + d2;
      },
      diagonal: function (pos0, pos1) {
        var D = 1;
        var D2 = Math.sqrt(2);
        var d1 = Math.abs(pos1.x - pos0.x);
        var d2 = Math.abs(pos1.y - pos0.y);
        return D * (d1 + d2) + (D2 - 2 * D) * Math.min(d1, d2);
      },
    },
    cleanNode: function (node) {
      node.f = 0;
      node.g = 0;
      node.h = 0;
      node.visited = false;
      node.closed = false;
      node.parent = null;
    },
  };

  /**
   * A graph memory structure
   * @param {Array} gridIn 2D array of input weights
   * @param {Object} [options]
   * @param {bool} [options.diagonal] Specifies whether diagonal moves are allowed
   */
  function Graph(gridIn, options) {
    options = options || {};
    this.nodes = [];
    this.diagonal = !!options.diagonal;
    this.grid = [];
    for (var x = 0; x < gridIn.length; x++) {
      this.grid[x] = [];

      for (var y = 0, row = gridIn[x]; y < row.length; y++) {
        var node = new GridNode(x, y, row[y]);
        this.grid[x][y] = node;
        this.nodes.push(node);
      }
    }
    this.init();
  }

  Graph.prototype.init = function () {
    this.dirtyNodes = [];
    for (var i = 0; i < this.nodes.length; i++) {
      astar.cleanNode(this.nodes[i]);
    }
  };

  Graph.prototype.cleanDirty = function () {
    for (var i = 0; i < this.dirtyNodes.length; i++) {
      astar.cleanNode(this.dirtyNodes[i]);
    }
    this.dirtyNodes = [];
  };

  Graph.prototype.markDirty = function (node) {
    this.dirtyNodes.push(node);
  };

  Graph.prototype.neighbors = function (node) {
    var ret = [];
    var x = node.x;
    var y = node.y;
    var grid = this.grid;

    // West
    if (grid[x - 1] && grid[x - 1][y]) {
      ret.push(grid[x - 1][y]);
    }

    // East
    if (grid[x + 1] && grid[x + 1][y]) {
      ret.push(grid[x + 1][y]);
    }

    // South
    if (grid[x] && grid[x][y - 1]) {
      ret.push(grid[x][y - 1]);
    }

    // North
    if (grid[x] && grid[x][y + 1]) {
      ret.push(grid[x][y + 1]);
    }

    if (this.diagonal) {
      // Southwest
      if (grid[x - 1] && grid[x - 1][y - 1]) {
        ret.push(grid[x - 1][y - 1]);
      }

      // Southeast
      if (grid[x + 1] && grid[x + 1][y - 1]) {
        ret.push(grid[x + 1][y - 1]);
      }

      // Northwest
      if (grid[x - 1] && grid[x - 1][y + 1]) {
        ret.push(grid[x - 1][y + 1]);
      }

      // Northeast
      if (grid[x + 1] && grid[x + 1][y + 1]) {
        ret.push(grid[x + 1][y + 1]);
      }
    }

    return ret;
  };

  Graph.prototype.toString = function () {
    var graphString = [];
    var nodes = this.grid;
    for (var x = 0; x < nodes.length; x++) {
      var rowDebug = [];
      var row = nodes[x];
      for (var y = 0; y < row.length; y++) {
        rowDebug.push(row[y].weight);
      }
      graphString.push(rowDebug.join(" "));
    }
    return graphString.join("\n");
  };

  function GridNode(x, y, weight) {
    this.x = x;
    this.y = y;
    this.weight = weight;
  }

  GridNode.prototype.toString = function () {
    return "[" + this.x + " " + this.y + "]";
  };

  GridNode.prototype.getCost = function (fromNeighbor) {
    // Take diagonal weight into consideration.
    if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
      return this.weight * 1.41421;
    }
    return this.weight;
  };

  GridNode.prototype.isWall = function () {
    return this.weight === 0;
  };

  function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  BinaryHeap.prototype = {
    push: function (element) {
      // Add the new element to the end of the array.
      this.content.push(element);

      // Allow it to sink down.
      this.sinkDown(this.content.length - 1);
    },
    pop: function () {
      // Store the first element so we can return it later.
      var result = this.content[0];
      // Get the element at the end of the array.
      var end = this.content.pop();
      // If there are any elements left, put the end element at the
      // start, and let it bubble up.
      if (this.content.length > 0) {
        this.content[0] = end;
        this.bubbleUp(0);
      }
      return result;
    },
    remove: function (node) {
      var i = this.content.indexOf(node);

      // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.
      var end = this.content.pop();

      if (i !== this.content.length - 1) {
        this.content[i] = end;

        if (this.scoreFunction(end) < this.scoreFunction(node)) {
          this.sinkDown(i);
        } else {
          this.bubbleUp(i);
        }
      }
    },
    size: function () {
      return this.content.length;
    },
    rescoreElement: function (node) {
      this.sinkDown(this.content.indexOf(node));
    },
    sinkDown: function (n) {
      // Fetch the element that has to be sunk.
      var element = this.content[n];

      // When at 0, an element can not sink any further.
      while (n > 0) {
        // Compute the parent element's index, and fetch it.
        var parentN = ((n + 1) >> 1) - 1;
        var parent = this.content[parentN];
        // Swap the elements if the parent is greater.
        if (this.scoreFunction(element) < this.scoreFunction(parent)) {
          this.content[parentN] = element;
          this.content[n] = parent;
          // Update 'n' to continue at the new position.
          n = parentN;
        }
        // Found a parent that is less, no need to sink any further.
        else {
          break;
        }
      }
    },
    bubbleUp: function (n) {
      // Look up the target element and its score.
      var length = this.content.length;
      var element = this.content[n];
      var elemScore = this.scoreFunction(element);

      while (true) {
        // Compute the indices of the child elements.
        var child2N = (n + 1) << 1;
        var child1N = child2N - 1;
        // This is used to store the new position of the element, if any.
        var swap = null;
        var child1Score;
        // If the first child exists (is inside the array)...
        if (child1N < length) {
          // Look it up and compute its score.
          var child1 = this.content[child1N];
          child1Score = this.scoreFunction(child1);

          // If the score is less than our element's, we need to swap.
          if (child1Score < elemScore) {
            swap = child1N;
          }
        }

        // Do the same checks for the other child.
        if (child2N < length) {
          var child2 = this.content[child2N];
          var child2Score = this.scoreFunction(child2);
          if (child2Score < (swap === null ? elemScore : child1Score)) {
            swap = child2N;
          }
        }

        // If the element needs to be moved, swap it, and continue.
        if (swap !== null) {
          this.content[n] = this.content[swap];
          this.content[swap] = element;
          n = swap;
        }
        // Otherwise, we are done.
        else {
          break;
        }
      }
    },
  };

  return {
    astar: astar,
    Graph: Graph,
  };
}

const { astar, Graph } = getAstar();

function buildSystem(raw = "", elfPower = 3) {
  const goblins = [];
  const elves = [];
  const grid = [];

  raw.split("\n").forEach((row, y) => {
    grid[y] = [];
    row.split("").forEach((char, x) => {
      switch (char) {
        case "#":
          grid[y][x] = "#";
          break;
        case "E":
          elves.push({
            id: elves.length,
            x,
            y,
            hp: 200,
            ap: elfPower,
            isGoblin: false,
            isDead: false,
          });
          break;
        case "G":
          goblins.push({
            id: goblins.length,
            x,
            y,
            hp: 200,
            ap: 3,
            isGoblin: true,
            isDead: false,
          });
          break;
      }

      if (char !== "#") {
        grid[y][x] = ".";
      }
    });
  });

  return [grid, elves, goblins];
}

function print(grid, elves, goblins) {
  const newGrid = combineGridAndUnits(grid, elves, goblins);

  newGrid.forEach((row) => console.log(row.join("")));
}

function combineGridAndUnits(grid, elves, goblins) {
  const newGrid = [];

  grid.forEach((row, y) => {
    newGrid[y] = [];

    row.forEach((char, x) => (newGrid[y][x] = char));
  });

  elves.forEach((elf) => (newGrid[elf.y][elf.x] = "E"));
  goblins.forEach((goblin) => (newGrid[goblin.y][goblin.x] = "G"));

  return newGrid;
}

function transformIntoGraph(grid, elves, goblins) {
  const newGrid = [];

  grid.forEach((row, y) => {
    newGrid[y] = [];

    row.forEach((char, x) => {
      const newChar = char === "." ? 1 : 0;
      newGrid[y][x] = newChar;
    });
  });

  elves.forEach((elf) =>
    !elf.isDead ? (newGrid[elf.y][elf.x] = 0) : undefined
  );
  goblins.forEach((goblin) =>
    !goblin.isDead ? (newGrid[goblin.y][goblin.x] = 0) : undefined
  );

  return new Graph(newGrid);
}

function attack(unit, victim) {
  victim.hp -= unit.ap;

  if (victim.hp <= 0) {
    victim.isDead = true;
  }

  return [unit, victim];
}

function manhattenDistance(hero, target) {
  return Math.abs(hero.y - target.y) + Math.abs(hero.x - target.x);
}

function wait(time = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

function playGame(raw = "") {
  let [grid, elves, goblins] = buildSystem(raw);

  let count = 0;
  let limit = 200;

  while (elves.length > 0 && goblins.length > 0 && count < limit) {
    // console.log("Round: ", count);
    // print(grid, elves, goblins);
    // await wait(1000);
    [grid, elves, goblins, isDone] = runRound(grid, elves, goblins);
    if (isDone) {
      break;
    }
    count++;
  }

  if (elves.length > 0) {
    return elves.reduce((sum, elf) => sum + elf.hp, 0) * count;
  } else {
    return goblins.reduce((sum, goblin) => sum + goblin.hp, 0) * count;
  }
}

function getNeighbouringEmptySquares(graph, unit) {
  return [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ].reduce((output, [x, y]) => {
    const newX = unit.x + x;
    const newY = unit.y + y;

    if (
      newX < 0 ||
      newX > graph.grid[0].length ||
      newY < 0 ||
      newY > graph.grid.length
    ) {
      return output;
    }

    const space = getPointFromGraph(graph, [newX, newY]);

    if (space.weight === 1) {
      output.push([newX, newY]);
    }
    return output;
  }, []);
}

function getMeleeTarget(hero, victims = []) {
  const possibleVictims = victims
    .filter((victim) => {
      return !victims.isDead && manhattenDistance(hero, victim) === 1;
    })
    .sort((a, b) => {
      if (a.hp < b.hp) {
        return -1;
      } else {
        return 1;
      }
    })
    .filter((victim, _, arr) => {
      return victim.hp === arr[0].hp;
    });

  if (possibleVictims.length === 0) {
    return;
  }

  return possibleVictims.sort((a, b) => {
    if (a.y < b.y) {
      return -1;
    }
    if (a.y === b.y && a.x < b.x) {
      return -1;
    }

    return 1;
  })[0];
}

function runRound(grid, elves, goblins) {
  let didBreak;
  const units = [...elves, ...goblins]
    .filter((unit) => !unit.isDead)
    .sort((a, b) => {
      if (a.y < b.y) {
        return -1;
      }
      if (a.y === b.y && a.x < b.x) {
        return -1;
      }

      return 1;
    });

  for (let i = 0; i < units.length; i++) {
    const hero = units[i];
    let victims = [];
    let meleeTarget;

    if (hero.isDead) {
      continue;
    }

    const graph = transformIntoGraph(grid, elves, goblins);

    // get targets

    if (hero.isGoblin) {
      victims = units.filter((unit) => !unit.isGoblin && !unit.isDead);
    } else {
      victims = units.filter((unit) => unit.isGoblin && !unit.isDead);
    }

    if (victims.length === 0) {
      didBreak = true;
      break;
    }

    meleeTarget = getMeleeTarget(hero, victims);

    // move if no target
    if (!meleeTarget) {
      const possibleEndpoints = victims
        .reduce((holder, victim) => {
          return [...holder, ...getNeighbouringEmptySquares(graph, victim)];
        }, [])
        .map((point) => {
          return {
            point,
            route: astar.search(
              graph,
              getPointFromGraph(graph, [hero.x, hero.y]),
              getPointFromGraph(graph, point)
            ),
          };
        })
        .filter((point) => point.route.length > 0)
        .sort((pointA, pointB) => pointA.route.length - pointB.route.length)
        .filter((point, _, arr) => {
          return point.route.length === arr[0].route.length;
        });

      if (possibleEndpoints.length === 0) {
        continue;
      }

      const chosenEndPoint = possibleEndpoints.sort((a, b) => {
        if (
          a.point[1] < b.point[1] ||
          (a.point[1] === b.point[1] && a.point[0] < b.point[0])
        ) {
          return -1;
        } else {
          return 1;
        }
      })[0];

      if (
        manhattenDistance(hero, {
          x: chosenEndPoint.point[0],
          y: chosenEndPoint.point[1],
        }) === 1
      ) {
        hero.x = chosenEndPoint.point[0];
        hero.y = chosenEndPoint.point[1];
      } else {
        const possibleStartPoints = getNeighbouringEmptySquares(graph, hero)
          .map((point) => {
            return {
              point,
              route: astar.search(
                graph,
                getPointFromGraph(graph, point),
                getPointFromGraph(graph, chosenEndPoint.point)
              ),
            };
          })
          .filter((a) => a.route.length > 0)
          .sort((a, b) => {
            return a.route.length - b.route.length;
          })
          .filter((point, _, arr) => {
            return point.route.length === arr[0].route.length;
          });

        if (possibleStartPoints.length === 0) {
          throw new Error("How is this possible!");
        }

        const chosenStartPoint = possibleStartPoints.sort((a, b) => {
          if (
            a.point[1] < b.point[1] ||
            (a.point[1] === b.point[1] && a.point[0] < b.point[0])
          ) {
            return -1;
          } else {
            return 1;
          }
        })[0];

        hero.x = chosenStartPoint.point[0];
        hero.y = chosenStartPoint.point[1];
      }
    }

    // attack

    meleeTarget = getMeleeTarget(hero, victims);

    if (meleeTarget) {
      attack(hero, meleeTarget);
    }
  }

  return [
    grid,
    elves.filter((elf) => !elf.isDead),
    goblins.filter((goblins) => !goblins.isDead),
    didBreak,
  ];
}

function getPointFromGraph(graph, point = [0, 0]) {
  return graph.grid[point[1]][point[0]];
}

function runOptimizedGames(raw = "") {
  let currentElfPower = 4;
  let bestElfPowerResult;

  while (!bestElfPowerResult) {
    let [grid, elves, goblins] = buildSystem(raw, currentElfPower);

    const elfCount = elves.length;
    let count = 0;
    let limit = 200;

    while (elves.length > 0 && goblins.length > 0 && count < limit) {
      [grid, elves, goblins, isDone] = runRound(grid, elves, goblins);
      if (isDone) {
        break;
      }
      count++;
    }

    if (elves.length === elfCount) {
      bestElfPowerResult = elves.reduce((sum, elf) => sum + elf.hp, 0) * count;
    } else {
      currentElfPower++;
    }
  }

  return bestElfPowerResult;
}

const result = runOptimizedGames(input);
console.log("result:", result);
console.timeEnd("run");
