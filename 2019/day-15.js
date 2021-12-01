console.log("------");

const input = `3,1033,1008,1033,1,1032,1005,1032,31,1008,1033,2,1032,1005,1032,58,1008,1033,3,1032,1005,1032,81,1008,1033,4,1032,1005,1032,104,99,1002,1034,1,1039,102,1,1036,1041,1001,1035,-1,1040,1008,1038,0,1043,102,-1,1043,1032,1,1037,1032,1042,1106,0,124,102,1,1034,1039,101,0,1036,1041,1001,1035,1,1040,1008,1038,0,1043,1,1037,1038,1042,1106,0,124,1001,1034,-1,1039,1008,1036,0,1041,1001,1035,0,1040,1002,1038,1,1043,101,0,1037,1042,1106,0,124,1001,1034,1,1039,1008,1036,0,1041,102,1,1035,1040,101,0,1038,1043,1001,1037,0,1042,1006,1039,217,1006,1040,217,1008,1039,40,1032,1005,1032,217,1008,1040,40,1032,1005,1032,217,1008,1039,7,1032,1006,1032,165,1008,1040,37,1032,1006,1032,165,1102,1,2,1044,1106,0,224,2,1041,1043,1032,1006,1032,179,1102,1,1,1044,1106,0,224,1,1041,1043,1032,1006,1032,217,1,1042,1043,1032,1001,1032,-1,1032,1002,1032,39,1032,1,1032,1039,1032,101,-1,1032,1032,101,252,1032,211,1007,0,39,1044,1105,1,224,1101,0,0,1044,1105,1,224,1006,1044,247,102,1,1039,1034,102,1,1040,1035,101,0,1041,1036,102,1,1043,1038,102,1,1042,1037,4,1044,1106,0,0,35,37,2,26,91,30,85,34,87,18,47,29,50,23,7,46,94,2,26,42,36,23,3,32,65,21,63,18,54,31,52,75,4,35,24,24,74,33,81,89,75,50,36,43,7,20,45,9,23,10,70,12,81,62,12,51,3,5,96,7,93,90,12,41,5,52,30,91,12,62,34,44,92,68,9,81,9,6,30,38,63,27,51,3,44,47,27,86,41,1,73,78,15,34,98,9,63,66,21,89,96,5,9,36,21,97,6,26,75,14,86,16,82,21,23,91,25,15,66,33,2,50,26,18,61,73,17,49,15,99,19,68,96,33,23,12,81,11,51,19,30,56,74,27,40,76,15,49,11,24,50,27,50,36,77,36,16,22,80,86,11,85,20,87,24,26,6,64,35,27,65,32,86,42,99,30,78,68,24,67,82,4,76,63,36,4,46,21,72,68,17,21,69,71,36,82,22,57,1,29,95,59,18,48,40,91,7,44,22,64,5,52,20,20,86,34,9,67,74,22,13,31,97,23,19,78,19,12,80,19,82,83,11,26,5,10,74,2,42,5,94,26,79,51,33,15,47,9,12,84,20,37,85,63,27,92,16,10,82,64,15,50,75,12,68,51,37,87,10,51,18,11,13,99,97,30,33,48,2,45,29,22,45,20,49,14,78,33,41,89,4,67,21,40,42,20,4,34,64,98,32,77,28,79,9,51,91,58,19,45,56,4,10,3,52,47,65,11,21,53,25,57,78,33,16,70,88,34,56,37,86,30,4,84,91,86,90,37,37,25,59,2,96,25,19,69,6,11,67,83,38,8,49,18,17,21,56,20,43,89,8,78,30,80,52,29,9,65,1,1,65,27,84,23,8,33,99,71,28,38,45,14,40,31,45,44,12,94,12,65,23,96,5,93,50,35,84,10,34,81,2,51,15,11,92,69,20,65,27,68,86,76,36,49,38,79,92,38,72,8,32,80,29,41,7,15,78,38,5,10,61,24,44,38,19,80,9,60,95,95,33,48,13,51,32,57,84,97,1,51,36,6,51,96,16,62,32,13,93,4,79,40,2,68,74,38,4,30,82,17,67,51,68,29,3,85,13,5,2,30,71,36,77,35,78,23,87,22,7,78,5,60,2,11,42,15,68,89,66,93,31,38,31,81,8,65,22,7,27,83,59,21,12,73,64,72,40,38,59,20,29,92,20,7,65,16,86,81,12,44,77,97,30,19,49,61,24,29,24,31,87,89,31,42,80,17,91,23,18,91,10,53,5,17,53,30,96,96,34,83,34,18,68,79,97,18,4,56,37,33,62,31,79,99,32,14,99,87,83,53,34,26,17,70,59,31,12,42,91,32,93,5,54,8,10,83,20,58,92,30,71,24,34,60,3,9,64,72,12,70,14,22,69,38,27,77,31,84,8,54,44,58,9,30,95,22,12,61,95,21,81,71,5,64,44,7,71,4,17,41,2,89,16,20,93,88,20,31,45,28,49,91,15,72,43,6,21,82,15,25,99,8,11,34,18,93,50,15,15,98,27,34,44,38,15,29,79,42,14,86,68,56,7,3,97,21,58,11,33,67,6,53,23,71,16,58,74,17,92,17,14,98,23,35,60,32,70,54,1,82,2,41,32,68,91,27,80,6,25,55,93,23,52,91,3,95,44,3,42,70,23,16,54,36,36,59,5,63,27,40,11,73,34,48,29,73,36,74,77,58,25,55,25,45,7,58,53,49,8,95,13,84,23,58,37,42,6,70,36,58,73,55,14,51,5,99,95,61,20,65,0,0,21,21,1,10,1,0,0,0,0,0,0`;

class LiamComputer {
  _version = "3.0";
  _instructions = [];
  _head = 0;
  _initialInputs = [];
  _relativeBase = 0;
  _output = [];

  constructor(rawInstructions = "", initialInputs = [], relativeBase = 0) {
    this._instructions = rawInstructions
      .split(",")
      .map((num) => parseInt(num, 10));

    this._initialInputs = initialInputs;
    this._relativeBase = relativeBase;
  }

  run() {
    let isDone = false;
    let getInputFunction;

    while (!isDone && !getInputFunction) {
      getInputFunction = undefined;
      const codes = this._turnInstructionIntoCodes(
        this._instructions[this._head]
      );
      const value1 = {
        mode: codes.p1,
        value: this._instructions[this._head + 1],
      };
      const value2 = {
        mode: codes.p2,
        value: this._instructions[this._head + 2],
      };
      const pointer = {
        mode: codes.p3,
        value: this._instructions[this._head + 3],
      };
      switch (codes.instruction) {
        case 1:
          this.add(value1, value2, pointer);
          break;
        case 2:
          this.multiply(value1, value2, pointer);
          break;
        case 3:
          getInputFunction = this.input(value1);
          break;
        case 4:
          const temp = this.output(value1);
          if (temp === undefined) {
            isDone = true;
          } else {
            this._output.push(temp);
          }
          break;
        case 5:
          this.jumpIfTrue(value1, value2);
          break;
        case 6:
          this.jumpIfFalse(value1, value2);
          break;
        case 7:
          this.lessThan(value1, value2, pointer);
          break;
        case 8:
          this.equals(value1, value2, pointer);
          break;
        case 9:
          this.adjustRelativeBase(value1);
          break;
        case 99:
          this._output.push(0);
          isDone = true;
          break;
      }
    }

    const outputCopy = [...this._output];
    this._output = [];
    return {
      output: outputCopy,
      exitCode: isDone ? 0 : undefined,
      input: getInputFunction,
    };
  }

  add(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    const value1 =
      arg1.mode === 1 ? arg1.value : this._instructions[arg1.value];
    const value2 =
      arg2.mode === 1 ? arg2.value : this._instructions[arg2.value];
    this._instructions[this._determinePointer(pointer)] =
      this._determineValue(arg1) + this._determineValue(arg2);
    this.incrementHead(4);
  }

  multiply(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    const value1 = this._determineValue(arg1);
    const value2 = this._determineValue(arg2);
    this._instructions[this._determinePointer(pointer)] = value1 * value2;
    this.incrementHead(4);
  }

  input(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    const pointer = this._determinePointer(arg1);

    const handleInput = (value = 0) => {
      this._instructions[pointer] = value;
      this.incrementHead(2);
      return this.run();
    };

    if (this._initialInputs.length > 0) {
      const input = this._initialInputs.splice(0, 1)[0];
      this._instructions[pointer] = input;
      this.incrementHead(2);
    } else {
      return handleInput;
    }
  }

  output(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    const output = this._determineValue(arg1);
    this.incrementHead(2);
    return output;
  }

  jumpIfTrue(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    }
  ) {
    const value = this._determineValue(arg1);
    if (value !== 0) {
      this._head = this._determineValue(arg2);
    } else {
      this.incrementHead(3);
    }
  }

  jumpIfFalse(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    }
  ) {
    const value = this._determineValue(arg1);
    if (value === 0) {
      this._head = this._determineValue(arg2);
    } else {
      this.incrementHead(3);
    }
  }

  lessThan(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    if (this._determineValue(arg1) < this._determineValue(arg2)) {
      this._instructions[this._determinePointer(pointer)] = 1;
    } else {
      this._instructions[this._determinePointer(pointer)] = 0;
    }
    this.incrementHead(4);
  }

  equals(
    arg1 = {
      mode: 0,
      value: 0,
    },
    arg2 = {
      mode: 0,
      value: 0,
    },
    pointer = {
      mode: 0,
      value: 0,
    }
  ) {
    if (this._determineValue(arg1) === this._determineValue(arg2)) {
      this._instructions[this._determinePointer(pointer)] = 1;
    } else {
      this._instructions[this._determinePointer(pointer)] = 0;
    }
    this.incrementHead(4);
  }

  adjustRelativeBase(
    arg1 = {
      mode: 0,
      value: 0,
    }
  ) {
    this._relativeBase += this._determineValue(arg1);
    this.incrementHead(2);
  }

  incrementHead(value = 0) {
    this._head += value;
  }

  _turnInstructionIntoCodes(value = 0) {
    let stringValue = value.toString();
    if (value < 10) {
      stringValue = "0" + stringValue;
    }
    if (value < 100) {
      stringValue = "0" + stringValue;
    }
    if (value < 1000) {
      stringValue = "0" + stringValue;
    }
    if (value < 10000) {
      stringValue = "0" + stringValue;
    }
    return {
      instruction: parseInt(stringValue.slice(-2), 10),
      p1: parseInt(stringValue[2], 10),
      p2: parseInt(stringValue[1], 10),
      p3: parseInt(stringValue[0], 10),
    };
  }

  _determineValue({ mode, value } = { mode: 0, value: 0 }) {
    if (mode === 1) {
      return value;
    } else if (mode === 2) {
      return this._instructions[this._relativeBase + value] || 0;
    } else {
      return this._instructions[value] || 0;
    }
  }

  _determinePointer({ mode, value } = { mode: 0, value: 0 }) {
    // a bit unsure of how this works

    if (mode === 2) {
      return this._relativeBase + value;
    } else {
      return value;
    }
  }
}

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

function buildShipMap(raw = "") {
  const size = 1000;
  let computer = new LiamComputer(raw);
  let map = [];
  let robotPosition = [size / 2, size / 2];
  const { astar, Graph } = getAstar();
  let ventLocation;

  let upperX = 0;
  let upperY = 0;
  let lowerX = size;
  let lowerY = size;

  for (let y = 0; y < size; y++) {
    map[y] = [];
    for (let x = 0; x < size; x++) {
      map[y][x] = 3;
    }
  }

  const graph = new Graph(map);
  let computerOutput = computer.run();
  let i = 0;

  while (i < 10000) {
    i++;
    let unknownSpot;
    let spotsToCheck = [robotPosition];
    const hasChecked = [];

    if (robotPosition[0] < lowerX) {
      lowerX = robotPosition[0];
    }
    if (robotPosition[0] > upperX) {
      upperX = robotPosition[0];
    }

    if (robotPosition[1] < lowerY) {
      lowerY = robotPosition[1];
    }
    if (robotPosition[1] > upperY) {
      upperY = robotPosition[1];
    }

    while (!unknownSpot && spotsToCheck.length > 0) {
      const nextSpots = [];
      spotsToCheck.forEach((spot) => {
        hasChecked.push(spot.join(","));
        const coords = getSurroundingCoordinates(spot);
        const target = coords.find(
          ([x, y]) => graph.grid[x] && graph.grid[x][y].weight === 3
        );
        if (target) {
          unknownSpot = target;
        } else {
          nextSpots.splice(
            0,
            0,
            ...coords.filter(
              ([x, y]) =>
                graph.grid[x] &&
                graph.grid[x][y].weight === 1 &&
                !hasChecked.includes([x, y].join(","))
            )
          );
        }
      });
      spotsToCheck = nextSpots;
    }

    if (unknownSpot) {
      const route = astar.search(
        graph,
        graph.grid[robotPosition[0]][robotPosition[1]],
        graph.grid[unknownSpot[0]][unknownSpot[1]]
      );

      const moves = routeToMoves(route, robotPosition);

      let currentSpot = [...robotPosition];

      for (let w = 0; w < moves.length; w++) {
        const move = moves[w];

        let numericMove;
        switch (move) {
          case "north":
            numericMove = 1;
            currentSpot[1]--;
            break;
          case "west":
            numericMove = 3;
            currentSpot[0]--;
            break;
          case "south":
            numericMove = 2;
            currentSpot[1]++;
            break;
          case "east":
            numericMove = 4;
            currentSpot[0]++;
            break;
        }
        computerOutput = computerOutput.input(numericMove);
        const output = computerOutput.output[computerOutput.output.length - 1];
        graph.grid[currentSpot[0]][currentSpot[1]].weight = output;

        if (currentSpot[0] === 49 && currentSpot[1] === 49) {
          console.log("hello!");
        }

        if (output === 0) {
          break;
        } else {
          robotPosition = [...currentSpot];

          if (output === 2) {
            ventLocation = currentSpot;
          }
        }
      }
    } else {
      break;
    }
  }

  const newGraph = [];

  for (let x = lowerX - 2; x < upperX + 3; x++) {
    const row = [];
    for (let y = lowerY - 2; y < upperY + 3; y++) {
      row.push(graph.grid[x][y].weight);
    }

    newGraph.push(row);
  }

  return new Graph(newGraph);
}

function routeToMoves(
  route = [
    {
      x: 0,
      y: 0,
    },
  ],
  startingPoint = [0, 0]
) {
  let currentPoint = startingPoint;
  return route.map((point) => {
    const pointX = point.x;
    const pointY = point.y;
    const [currentX, currentY] = currentPoint;
    let output;
    if (pointX < currentX) {
      output = "west";
    } else if (pointX > currentX) {
      output = "east";
    } else if (pointY < currentY) {
      output = "north";
    } else {
      output = "south";
    }

    currentPoint = [pointX, pointY];

    return output;
  });
}

function getSurroundingCoordinates([x, y] = [0, 0]) {
  function createNewCoord(diffX, diffY) {
    const newX = diffX + x;
    const newY = diffY + y;
    return [newX, newY];
  }

  return [
    createNewCoord(0, -1),
    createNewCoord(1, 0),
    createNewCoord(0, 1),
    createNewCoord(-1, 0),
  ];
}

function fillWithOxygren(raw = "") {
  const map = buildShipMap(raw);
  let oxygenPort;

  map.grid.forEach((row) => {
    row.forEach((element) => {
      if (element.weight === 2) {
        oxygenPort = element;
      }
    });
  });

  let pointsToCheck = [oxygenPort];
  let counter = 0;

  while(pointsToCheck.length > 0) {
    counter ++;
    const nextPoints = [];
    pointsToCheck.forEach(point => {
      const node = map.grid[point.x][point.y];
      if (!node.weight !== 2) {
        node.weight = 2;
      }
      const surroundingNodes = map.neighbors(node);
      surroundingNodes.forEach(node => {
        if (node.weight === 1) {
          nextPoints.push(node);
        }
      })
    });

    pointsToCheck = nextPoints;
  }

  for (let x = 0; x < map.grid.length; x++) {
    const row = [];
    const gridRow = map.grid[x];
    for (let y = 0; y < gridRow.length; y++) {
      switch(map.grid[x][y].weight) {
        case 0:
          row.push("#");
          break;
        case 2:
          row.push("O");
          break;
        case 1:
          row.push(".");
          break;
        case 3:
          row.push("?");
          break;
      }
    }

    console.log(row.join(" "));
  }


  return counter;
}

const result = fillWithOxygren(input);
// 345 too high
console.log("result:", result);
