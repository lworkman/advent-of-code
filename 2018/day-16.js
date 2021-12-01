console.log("------");
console.time("run");

const input = `Before: [2, 0, 2, 2]
3 0 2 1
After:  [2, 1, 2, 2]

Before: [3, 0, 3, 3]
3 2 3 2
After:  [3, 0, 1, 3]

Before: [2, 0, 1, 0]
0 2 1 3
After:  [2, 0, 1, 1]

Before: [3, 0, 2, 1]
0 3 1 0
After:  [1, 0, 2, 1]

Before: [1, 1, 2, 3]
4 1 2 0
After:  [0, 1, 2, 3]

Before: [2, 1, 2, 3]
9 1 0 0
After:  [0, 1, 2, 3]

Before: [2, 1, 2, 3]
12 1 3 3
After:  [2, 1, 2, 0]

Before: [2, 2, 1, 3]
12 2 3 1
After:  [2, 0, 1, 3]

Before: [1, 3, 3, 1]
5 3 1 3
After:  [1, 3, 3, 1]

Before: [1, 1, 3, 2]
15 3 3 3
After:  [1, 1, 3, 0]

Before: [2, 1, 1, 3]
9 1 0 1
After:  [2, 0, 1, 3]

Before: [0, 3, 1, 1]
5 3 1 1
After:  [0, 1, 1, 1]

Before: [2, 3, 2, 1]
3 0 2 2
After:  [2, 3, 1, 1]

Before: [0, 2, 2, 1]
7 2 1 3
After:  [0, 2, 2, 1]

Before: [2, 2, 1, 3]
13 3 1 1
After:  [2, 0, 1, 3]

Before: [0, 0, 1, 2]
0 2 1 2
After:  [0, 0, 1, 2]

Before: [0, 1, 2, 1]
4 1 2 1
After:  [0, 0, 2, 1]

Before: [3, 1, 1, 2]
10 2 1 1
After:  [3, 2, 1, 2]

Before: [2, 2, 0, 2]
11 0 3 3
After:  [2, 2, 0, 1]

Before: [1, 1, 2, 0]
1 0 2 0
After:  [0, 1, 2, 0]

Before: [2, 1, 2, 2]
9 1 0 0
After:  [0, 1, 2, 2]

Before: [2, 1, 2, 1]
9 1 0 2
After:  [2, 1, 0, 1]

Before: [2, 1, 2, 2]
9 1 0 1
After:  [2, 0, 2, 2]

Before: [0, 1, 3, 3]
12 1 3 2
After:  [0, 1, 0, 3]

Before: [2, 1, 2, 0]
4 1 2 0
After:  [0, 1, 2, 0]

Before: [0, 1, 3, 3]
3 2 3 3
After:  [0, 1, 3, 1]

Before: [3, 0, 3, 3]
3 2 3 0
After:  [1, 0, 3, 3]

Before: [0, 3, 3, 3]
13 3 3 1
After:  [0, 1, 3, 3]

Before: [0, 3, 2, 1]
14 3 2 2
After:  [0, 3, 1, 1]

Before: [0, 2, 0, 3]
13 0 0 3
After:  [0, 2, 0, 1]

Before: [1, 3, 2, 1]
5 3 1 1
After:  [1, 1, 2, 1]

Before: [2, 2, 1, 1]
8 2 3 2
After:  [2, 2, 2, 1]

Before: [1, 0, 2, 3]
1 0 2 1
After:  [1, 0, 2, 3]

Before: [0, 2, 3, 3]
3 2 3 3
After:  [0, 2, 3, 1]

Before: [1, 2, 1, 2]
8 2 0 3
After:  [1, 2, 1, 2]

Before: [3, 2, 2, 3]
3 0 3 3
After:  [3, 2, 2, 1]

Before: [2, 1, 3, 1]
9 1 0 1
After:  [2, 0, 3, 1]

Before: [2, 0, 2, 1]
14 3 2 1
After:  [2, 1, 2, 1]

Before: [0, 1, 0, 0]
2 0 0 0
After:  [0, 1, 0, 0]

Before: [1, 0, 1, 1]
15 2 3 0
After:  [0, 0, 1, 1]

Before: [2, 0, 1, 1]
8 2 3 1
After:  [2, 2, 1, 1]

Before: [1, 3, 2, 0]
1 0 2 1
After:  [1, 0, 2, 0]

Before: [0, 0, 1, 0]
0 2 1 3
After:  [0, 0, 1, 1]

Before: [1, 3, 2, 0]
1 0 2 3
After:  [1, 3, 2, 0]

Before: [2, 1, 1, 0]
9 1 0 3
After:  [2, 1, 1, 0]

Before: [1, 1, 2, 1]
1 0 2 0
After:  [0, 1, 2, 1]

Before: [3, 1, 1, 1]
10 2 1 2
After:  [3, 1, 2, 1]

Before: [1, 1, 2, 1]
1 0 2 2
After:  [1, 1, 0, 1]

Before: [0, 3, 2, 1]
14 3 2 3
After:  [0, 3, 2, 1]

Before: [1, 3, 2, 1]
14 3 2 0
After:  [1, 3, 2, 1]

Before: [2, 0, 2, 2]
13 2 2 3
After:  [2, 0, 2, 1]

Before: [2, 3, 3, 2]
11 0 3 0
After:  [1, 3, 3, 2]

Before: [2, 2, 2, 3]
3 0 2 0
After:  [1, 2, 2, 3]

Before: [2, 2, 2, 2]
11 0 3 1
After:  [2, 1, 2, 2]

Before: [1, 1, 2, 0]
4 1 2 3
After:  [1, 1, 2, 0]

Before: [1, 2, 2, 0]
1 0 2 0
After:  [0, 2, 2, 0]

Before: [0, 1, 0, 0]
0 1 0 0
After:  [1, 1, 0, 0]

Before: [0, 2, 0, 2]
15 3 3 2
After:  [0, 2, 0, 2]

Before: [2, 1, 2, 3]
7 2 0 0
After:  [1, 1, 2, 3]

Before: [0, 0, 0, 3]
2 0 0 0
After:  [0, 0, 0, 3]

Before: [1, 3, 1, 1]
8 2 0 1
After:  [1, 2, 1, 1]

Before: [2, 1, 1, 1]
8 2 3 2
After:  [2, 1, 2, 1]

Before: [3, 1, 3, 3]
3 0 3 0
After:  [1, 1, 3, 3]

Before: [2, 0, 1, 2]
11 0 3 3
After:  [2, 0, 1, 1]

Before: [1, 0, 0, 0]
0 0 1 0
After:  [1, 0, 0, 0]

Before: [0, 3, 2, 1]
5 3 1 1
After:  [0, 1, 2, 1]

Before: [0, 1, 2, 1]
14 3 2 0
After:  [1, 1, 2, 1]

Before: [1, 2, 1, 1]
8 2 0 2
After:  [1, 2, 2, 1]

Before: [0, 3, 1, 3]
12 2 3 1
After:  [0, 0, 1, 3]

Before: [2, 1, 1, 0]
10 2 1 2
After:  [2, 1, 2, 0]

Before: [1, 3, 1, 0]
8 2 0 3
After:  [1, 3, 1, 2]

Before: [1, 3, 1, 2]
15 3 3 0
After:  [0, 3, 1, 2]

Before: [0, 0, 1, 3]
2 0 0 1
After:  [0, 0, 1, 3]

Before: [2, 1, 0, 2]
15 3 3 3
After:  [2, 1, 0, 0]

Before: [2, 1, 0, 0]
9 1 0 1
After:  [2, 0, 0, 0]

Before: [1, 0, 3, 0]
0 0 1 0
After:  [1, 0, 3, 0]

Before: [3, 0, 3, 1]
15 3 3 0
After:  [0, 0, 3, 1]

Before: [3, 1, 0, 3]
7 3 0 0
After:  [1, 1, 0, 3]

Before: [2, 3, 2, 1]
7 2 0 0
After:  [1, 3, 2, 1]

Before: [2, 2, 2, 2]
11 0 3 3
After:  [2, 2, 2, 1]

Before: [0, 0, 2, 2]
2 0 0 0
After:  [0, 0, 2, 2]

Before: [2, 3, 2, 2]
11 0 3 1
After:  [2, 1, 2, 2]

Before: [0, 1, 3, 2]
6 1 2 0
After:  [0, 1, 3, 2]

Before: [2, 1, 1, 1]
9 1 0 2
After:  [2, 1, 0, 1]

Before: [2, 1, 1, 2]
10 2 1 1
After:  [2, 2, 1, 2]

Before: [1, 1, 1, 1]
10 2 1 0
After:  [2, 1, 1, 1]

Before: [1, 0, 2, 0]
1 0 2 0
After:  [0, 0, 2, 0]

Before: [2, 1, 1, 2]
11 0 3 0
After:  [1, 1, 1, 2]

Before: [2, 0, 1, 3]
12 2 3 0
After:  [0, 0, 1, 3]

Before: [1, 1, 2, 3]
4 1 2 2
After:  [1, 1, 0, 3]

Before: [3, 2, 0, 3]
12 1 3 0
After:  [0, 2, 0, 3]

Before: [2, 0, 1, 3]
13 3 3 2
After:  [2, 0, 1, 3]

Before: [1, 3, 2, 3]
12 2 3 3
After:  [1, 3, 2, 0]

Before: [2, 1, 3, 3]
9 1 0 1
After:  [2, 0, 3, 3]

Before: [0, 3, 1, 1]
8 2 3 2
After:  [0, 3, 2, 1]

Before: [2, 3, 1, 1]
5 3 1 3
After:  [2, 3, 1, 1]

Before: [2, 1, 3, 3]
6 1 2 2
After:  [2, 1, 0, 3]

Before: [2, 1, 3, 1]
9 1 0 3
After:  [2, 1, 3, 0]

Before: [2, 0, 1, 2]
0 2 1 3
After:  [2, 0, 1, 1]

Before: [2, 3, 0, 1]
15 3 3 0
After:  [0, 3, 0, 1]

Before: [2, 1, 2, 3]
9 1 0 1
After:  [2, 0, 2, 3]

Before: [2, 1, 0, 0]
9 1 0 3
After:  [2, 1, 0, 0]

Before: [1, 3, 2, 1]
1 0 2 0
After:  [0, 3, 2, 1]

Before: [1, 1, 1, 2]
8 2 0 0
After:  [2, 1, 1, 2]

Before: [2, 1, 1, 2]
11 0 3 1
After:  [2, 1, 1, 2]

Before: [0, 1, 2, 0]
4 1 2 0
After:  [0, 1, 2, 0]

Before: [1, 1, 2, 1]
14 3 2 1
After:  [1, 1, 2, 1]

Before: [0, 1, 1, 2]
10 2 1 1
After:  [0, 2, 1, 2]

Before: [1, 1, 0, 3]
12 1 3 1
After:  [1, 0, 0, 3]

Before: [3, 3, 2, 1]
5 3 1 1
After:  [3, 1, 2, 1]

Before: [2, 2, 3, 3]
13 3 3 3
After:  [2, 2, 3, 1]

Before: [1, 3, 1, 1]
8 2 3 2
After:  [1, 3, 2, 1]

Before: [2, 2, 2, 1]
14 3 2 0
After:  [1, 2, 2, 1]

Before: [0, 1, 3, 2]
6 1 2 1
After:  [0, 0, 3, 2]

Before: [3, 2, 2, 1]
14 3 2 0
After:  [1, 2, 2, 1]

Before: [1, 2, 3, 3]
3 2 3 3
After:  [1, 2, 3, 1]

Before: [0, 2, 2, 1]
2 0 0 1
After:  [0, 0, 2, 1]

Before: [0, 1, 2, 1]
14 3 2 1
After:  [0, 1, 2, 1]

Before: [2, 3, 0, 2]
11 0 3 1
After:  [2, 1, 0, 2]

Before: [3, 1, 3, 1]
6 1 2 1
After:  [3, 0, 3, 1]

Before: [3, 1, 1, 3]
10 2 1 3
After:  [3, 1, 1, 2]

Before: [3, 0, 2, 1]
14 3 2 0
After:  [1, 0, 2, 1]

Before: [0, 0, 1, 1]
0 3 1 1
After:  [0, 1, 1, 1]

Before: [1, 2, 1, 3]
8 2 0 0
After:  [2, 2, 1, 3]

Before: [0, 1, 2, 0]
0 1 0 2
After:  [0, 1, 1, 0]

Before: [3, 1, 2, 3]
4 1 2 1
After:  [3, 0, 2, 3]

Before: [0, 3, 2, 1]
14 3 2 0
After:  [1, 3, 2, 1]

Before: [3, 2, 1, 3]
13 3 3 3
After:  [3, 2, 1, 1]

Before: [1, 1, 3, 1]
6 1 2 1
After:  [1, 0, 3, 1]

Before: [2, 0, 1, 2]
11 0 3 0
After:  [1, 0, 1, 2]

Before: [1, 2, 2, 1]
14 3 2 2
After:  [1, 2, 1, 1]

Before: [1, 3, 2, 1]
1 0 2 2
After:  [1, 3, 0, 1]

Before: [2, 0, 2, 2]
7 2 0 1
After:  [2, 1, 2, 2]

Before: [1, 1, 3, 0]
6 1 2 2
After:  [1, 1, 0, 0]

Before: [1, 2, 1, 0]
8 2 0 3
After:  [1, 2, 1, 2]

Before: [2, 1, 1, 3]
9 1 0 3
After:  [2, 1, 1, 0]

Before: [1, 1, 1, 0]
10 2 1 1
After:  [1, 2, 1, 0]

Before: [2, 1, 0, 2]
9 1 0 1
After:  [2, 0, 0, 2]

Before: [3, 3, 0, 1]
5 3 1 0
After:  [1, 3, 0, 1]

Before: [0, 0, 1, 2]
0 2 1 3
After:  [0, 0, 1, 1]

Before: [1, 1, 1, 1]
8 2 3 1
After:  [1, 2, 1, 1]

Before: [0, 0, 3, 3]
2 0 0 3
After:  [0, 0, 3, 0]

Before: [2, 2, 2, 2]
3 0 2 2
After:  [2, 2, 1, 2]

Before: [0, 1, 3, 1]
6 1 2 3
After:  [0, 1, 3, 0]

Before: [3, 3, 2, 1]
5 3 1 3
After:  [3, 3, 2, 1]

Before: [0, 3, 2, 3]
13 0 0 0
After:  [1, 3, 2, 3]

Before: [0, 3, 1, 1]
5 3 1 3
After:  [0, 3, 1, 1]

Before: [2, 1, 2, 1]
4 1 2 2
After:  [2, 1, 0, 1]

Before: [0, 1, 3, 3]
6 1 2 1
After:  [0, 0, 3, 3]

Before: [0, 1, 3, 3]
7 3 2 3
After:  [0, 1, 3, 1]

Before: [0, 3, 0, 1]
5 3 1 1
After:  [0, 1, 0, 1]

Before: [1, 3, 2, 3]
1 0 2 0
After:  [0, 3, 2, 3]

Before: [1, 2, 2, 3]
12 1 3 1
After:  [1, 0, 2, 3]

Before: [3, 1, 2, 2]
4 1 2 3
After:  [3, 1, 2, 0]

Before: [0, 3, 2, 3]
13 0 0 3
After:  [0, 3, 2, 1]

Before: [0, 3, 2, 2]
13 2 2 0
After:  [1, 3, 2, 2]

Before: [1, 1, 2, 3]
1 0 2 1
After:  [1, 0, 2, 3]

Before: [0, 2, 1, 2]
15 3 3 0
After:  [0, 2, 1, 2]

Before: [0, 1, 3, 3]
13 0 0 1
After:  [0, 1, 3, 3]

Before: [0, 2, 2, 1]
2 0 0 2
After:  [0, 2, 0, 1]

Before: [0, 1, 3, 2]
2 0 0 1
After:  [0, 0, 3, 2]

Before: [1, 3, 2, 1]
1 0 2 3
After:  [1, 3, 2, 0]

Before: [2, 2, 2, 3]
12 2 3 1
After:  [2, 0, 2, 3]

Before: [2, 1, 3, 3]
7 3 2 1
After:  [2, 1, 3, 3]

Before: [1, 1, 3, 2]
6 1 2 1
After:  [1, 0, 3, 2]

Before: [3, 1, 3, 0]
6 1 2 1
After:  [3, 0, 3, 0]

Before: [0, 3, 0, 3]
2 0 0 1
After:  [0, 0, 0, 3]

Before: [1, 0, 1, 3]
0 0 1 2
After:  [1, 0, 1, 3]

Before: [0, 1, 3, 0]
6 1 2 3
After:  [0, 1, 3, 0]

Before: [0, 3, 3, 1]
5 3 1 3
After:  [0, 3, 3, 1]

Before: [0, 0, 2, 1]
0 3 1 0
After:  [1, 0, 2, 1]

Before: [1, 1, 1, 0]
10 2 1 0
After:  [2, 1, 1, 0]

Before: [1, 3, 2, 0]
1 0 2 0
After:  [0, 3, 2, 0]

Before: [2, 1, 0, 3]
12 1 3 0
After:  [0, 1, 0, 3]

Before: [2, 0, 0, 2]
11 0 3 2
After:  [2, 0, 1, 2]

Before: [0, 1, 1, 1]
15 3 3 1
After:  [0, 0, 1, 1]

Before: [1, 1, 2, 0]
4 1 2 2
After:  [1, 1, 0, 0]

Before: [0, 3, 0, 1]
2 0 0 1
After:  [0, 0, 0, 1]

Before: [3, 1, 3, 1]
6 1 2 0
After:  [0, 1, 3, 1]

Before: [0, 2, 2, 2]
2 0 0 1
After:  [0, 0, 2, 2]

Before: [3, 0, 1, 3]
0 2 1 3
After:  [3, 0, 1, 1]

Before: [3, 2, 2, 0]
7 2 1 2
After:  [3, 2, 1, 0]

Before: [2, 1, 1, 3]
13 3 2 2
After:  [2, 1, 0, 3]

Before: [3, 1, 1, 1]
10 2 1 1
After:  [3, 2, 1, 1]

Before: [2, 2, 2, 0]
3 0 2 2
After:  [2, 2, 1, 0]

Before: [1, 3, 1, 0]
8 2 0 1
After:  [1, 2, 1, 0]

Before: [0, 1, 2, 2]
4 1 2 0
After:  [0, 1, 2, 2]

Before: [1, 2, 1, 2]
8 2 0 1
After:  [1, 2, 1, 2]

Before: [2, 0, 3, 2]
11 0 3 1
After:  [2, 1, 3, 2]

Before: [1, 2, 3, 1]
15 3 3 1
After:  [1, 0, 3, 1]

Before: [2, 1, 2, 0]
4 1 2 1
After:  [2, 0, 2, 0]

Before: [3, 1, 3, 3]
7 3 2 0
After:  [1, 1, 3, 3]

Before: [3, 0, 2, 3]
12 2 3 0
After:  [0, 0, 2, 3]

Before: [3, 1, 2, 0]
4 1 2 2
After:  [3, 1, 0, 0]

Before: [3, 3, 2, 1]
14 3 2 3
After:  [3, 3, 2, 1]

Before: [1, 1, 2, 1]
1 0 2 1
After:  [1, 0, 2, 1]

Before: [3, 3, 1, 1]
8 2 3 1
After:  [3, 2, 1, 1]

Before: [2, 3, 2, 2]
11 0 3 2
After:  [2, 3, 1, 2]

Before: [0, 1, 3, 0]
6 1 2 1
After:  [0, 0, 3, 0]

Before: [1, 2, 2, 2]
1 0 2 1
After:  [1, 0, 2, 2]

Before: [0, 2, 2, 1]
14 3 2 3
After:  [0, 2, 2, 1]

Before: [1, 3, 3, 1]
7 2 3 2
After:  [1, 3, 0, 1]

Before: [3, 1, 3, 3]
3 2 3 3
After:  [3, 1, 3, 1]

Before: [0, 0, 2, 2]
2 0 0 1
After:  [0, 0, 2, 2]

Before: [3, 2, 1, 3]
3 0 3 1
After:  [3, 1, 1, 3]

Before: [1, 3, 1, 1]
8 2 3 1
After:  [1, 2, 1, 1]

Before: [1, 0, 1, 1]
8 2 3 0
After:  [2, 0, 1, 1]

Before: [0, 3, 0, 0]
2 0 0 2
After:  [0, 3, 0, 0]

Before: [2, 1, 2, 2]
9 1 0 3
After:  [2, 1, 2, 0]

Before: [2, 1, 3, 0]
6 1 2 3
After:  [2, 1, 3, 0]

Before: [3, 1, 3, 1]
15 3 3 1
After:  [3, 0, 3, 1]

Before: [2, 1, 1, 1]
8 2 3 0
After:  [2, 1, 1, 1]

Before: [1, 3, 1, 0]
8 2 0 0
After:  [2, 3, 1, 0]

Before: [3, 3, 2, 1]
14 3 2 0
After:  [1, 3, 2, 1]

Before: [2, 1, 1, 3]
9 1 0 2
After:  [2, 1, 0, 3]

Before: [3, 1, 0, 3]
7 3 0 1
After:  [3, 1, 0, 3]

Before: [0, 0, 2, 1]
14 3 2 2
After:  [0, 0, 1, 1]

Before: [0, 1, 2, 3]
0 1 0 1
After:  [0, 1, 2, 3]

Before: [3, 3, 2, 3]
12 2 3 1
After:  [3, 0, 2, 3]

Before: [0, 0, 3, 2]
2 0 0 1
After:  [0, 0, 3, 2]

Before: [1, 1, 1, 3]
10 2 1 0
After:  [2, 1, 1, 3]

Before: [1, 2, 2, 2]
1 0 2 2
After:  [1, 2, 0, 2]

Before: [0, 3, 3, 3]
2 0 0 0
After:  [0, 3, 3, 3]

Before: [2, 2, 2, 2]
11 0 3 2
After:  [2, 2, 1, 2]

Before: [3, 3, 2, 1]
14 3 2 1
After:  [3, 1, 2, 1]

Before: [1, 1, 2, 0]
4 1 2 1
After:  [1, 0, 2, 0]

Before: [3, 3, 0, 3]
3 0 3 2
After:  [3, 3, 1, 3]

Before: [2, 3, 0, 1]
5 3 1 0
After:  [1, 3, 0, 1]

Before: [3, 3, 3, 3]
3 2 3 1
After:  [3, 1, 3, 3]

Before: [2, 1, 2, 0]
4 1 2 3
After:  [2, 1, 2, 0]

Before: [1, 2, 3, 3]
13 3 3 2
After:  [1, 2, 1, 3]

Before: [3, 0, 1, 1]
0 2 1 0
After:  [1, 0, 1, 1]

Before: [3, 0, 0, 2]
15 3 3 3
After:  [3, 0, 0, 0]

Before: [2, 0, 3, 2]
11 0 3 3
After:  [2, 0, 3, 1]

Before: [1, 0, 3, 0]
0 0 1 2
After:  [1, 0, 1, 0]

Before: [2, 1, 3, 1]
6 1 2 0
After:  [0, 1, 3, 1]

Before: [3, 0, 0, 1]
15 3 3 0
After:  [0, 0, 0, 1]

Before: [0, 1, 1, 2]
2 0 0 0
After:  [0, 1, 1, 2]

Before: [0, 1, 2, 3]
4 1 2 0
After:  [0, 1, 2, 3]

Before: [2, 1, 0, 3]
12 1 3 3
After:  [2, 1, 0, 0]

Before: [0, 3, 3, 1]
5 3 1 1
After:  [0, 1, 3, 1]

Before: [0, 0, 0, 1]
2 0 0 2
After:  [0, 0, 0, 1]

Before: [0, 0, 3, 3]
2 0 0 0
After:  [0, 0, 3, 3]

Before: [1, 1, 2, 2]
4 1 2 0
After:  [0, 1, 2, 2]

Before: [2, 2, 2, 1]
14 3 2 2
After:  [2, 2, 1, 1]

Before: [1, 2, 2, 0]
7 2 1 0
After:  [1, 2, 2, 0]

Before: [2, 1, 1, 3]
13 3 2 3
After:  [2, 1, 1, 0]

Before: [3, 1, 3, 1]
6 1 2 2
After:  [3, 1, 0, 1]

Before: [3, 0, 1, 3]
0 2 1 2
After:  [3, 0, 1, 3]

Before: [0, 3, 0, 1]
5 3 1 0
After:  [1, 3, 0, 1]

Before: [1, 1, 1, 1]
10 2 1 1
After:  [1, 2, 1, 1]

Before: [0, 2, 2, 3]
7 2 1 0
After:  [1, 2, 2, 3]

Before: [1, 3, 2, 3]
1 0 2 2
After:  [1, 3, 0, 3]

Before: [3, 1, 1, 0]
10 2 1 3
After:  [3, 1, 1, 2]

Before: [3, 1, 3, 3]
12 1 3 0
After:  [0, 1, 3, 3]

Before: [3, 0, 2, 3]
7 3 0 0
After:  [1, 0, 2, 3]

Before: [2, 1, 2, 3]
4 1 2 1
After:  [2, 0, 2, 3]

Before: [3, 0, 3, 3]
7 3 2 0
After:  [1, 0, 3, 3]

Before: [1, 0, 1, 1]
8 2 0 1
After:  [1, 2, 1, 1]

Before: [1, 1, 1, 0]
8 2 0 1
After:  [1, 2, 1, 0]

Before: [1, 0, 2, 3]
1 0 2 2
After:  [1, 0, 0, 3]

Before: [0, 3, 1, 1]
5 3 1 0
After:  [1, 3, 1, 1]

Before: [0, 1, 2, 3]
4 1 2 3
After:  [0, 1, 2, 0]

Before: [2, 0, 2, 2]
11 0 3 0
After:  [1, 0, 2, 2]

Before: [0, 1, 3, 3]
6 1 2 2
After:  [0, 1, 0, 3]

Before: [2, 1, 1, 1]
10 2 1 1
After:  [2, 2, 1, 1]

Before: [3, 3, 0, 1]
15 3 3 2
After:  [3, 3, 0, 1]

Before: [1, 0, 2, 3]
13 3 2 3
After:  [1, 0, 2, 0]

Before: [3, 2, 2, 1]
14 3 2 3
After:  [3, 2, 2, 1]

Before: [1, 3, 1, 1]
15 3 3 2
After:  [1, 3, 0, 1]

Before: [1, 3, 1, 1]
5 3 1 3
After:  [1, 3, 1, 1]

Before: [2, 3, 2, 1]
14 3 2 3
After:  [2, 3, 2, 1]

Before: [3, 2, 1, 1]
15 3 3 3
After:  [3, 2, 1, 0]

Before: [1, 0, 1, 1]
0 3 1 0
After:  [1, 0, 1, 1]

Before: [2, 1, 2, 3]
4 1 2 3
After:  [2, 1, 2, 0]

Before: [2, 3, 1, 3]
12 2 3 1
After:  [2, 0, 1, 3]

Before: [1, 0, 2, 3]
12 2 3 1
After:  [1, 0, 2, 3]

Before: [3, 2, 1, 3]
12 1 3 0
After:  [0, 2, 1, 3]

Before: [1, 0, 2, 0]
0 0 1 1
After:  [1, 1, 2, 0]

Before: [3, 0, 2, 3]
3 0 3 1
After:  [3, 1, 2, 3]

Before: [2, 0, 2, 1]
14 3 2 3
After:  [2, 0, 2, 1]

Before: [2, 1, 1, 1]
15 3 3 0
After:  [0, 1, 1, 1]

Before: [3, 1, 2, 2]
4 1 2 2
After:  [3, 1, 0, 2]

Before: [3, 3, 2, 3]
12 2 3 0
After:  [0, 3, 2, 3]

Before: [1, 2, 2, 3]
7 2 1 0
After:  [1, 2, 2, 3]

Before: [3, 3, 0, 1]
15 3 3 1
After:  [3, 0, 0, 1]

Before: [3, 1, 3, 3]
6 1 2 2
After:  [3, 1, 0, 3]

Before: [0, 1, 1, 2]
2 0 0 2
After:  [0, 1, 0, 2]

Before: [1, 1, 1, 2]
10 2 1 2
After:  [1, 1, 2, 2]

Before: [1, 0, 2, 2]
1 0 2 0
After:  [0, 0, 2, 2]

Before: [0, 3, 2, 0]
2 0 0 3
After:  [0, 3, 2, 0]

Before: [1, 2, 2, 0]
1 0 2 2
After:  [1, 2, 0, 0]

Before: [0, 2, 2, 2]
7 2 1 2
After:  [0, 2, 1, 2]

Before: [0, 3, 0, 1]
15 3 3 0
After:  [0, 3, 0, 1]

Before: [1, 1, 2, 2]
4 1 2 3
After:  [1, 1, 2, 0]

Before: [3, 1, 0, 3]
7 3 0 3
After:  [3, 1, 0, 1]

Before: [3, 0, 2, 3]
12 2 3 3
After:  [3, 0, 2, 0]

Before: [2, 1, 2, 3]
9 1 0 3
After:  [2, 1, 2, 0]

Before: [3, 1, 1, 0]
10 2 1 1
After:  [3, 2, 1, 0]

Before: [3, 1, 1, 1]
8 2 3 3
After:  [3, 1, 1, 2]

Before: [0, 3, 3, 3]
3 2 3 2
After:  [0, 3, 1, 3]

Before: [2, 2, 2, 3]
12 2 3 2
After:  [2, 2, 0, 3]

Before: [1, 1, 2, 1]
14 3 2 2
After:  [1, 1, 1, 1]

Before: [2, 1, 2, 3]
9 1 0 2
After:  [2, 1, 0, 3]

Before: [1, 1, 2, 3]
13 3 2 1
After:  [1, 0, 2, 3]

Before: [0, 3, 2, 1]
5 3 1 2
After:  [0, 3, 1, 1]

Before: [2, 3, 3, 2]
11 0 3 1
After:  [2, 1, 3, 2]

Before: [2, 3, 2, 3]
3 0 2 0
After:  [1, 3, 2, 3]

Before: [3, 3, 0, 3]
7 3 0 0
After:  [1, 3, 0, 3]

Before: [2, 2, 2, 0]
3 0 2 3
After:  [2, 2, 2, 1]

Before: [0, 2, 2, 0]
13 0 0 3
After:  [0, 2, 2, 1]

Before: [1, 2, 2, 1]
1 0 2 3
After:  [1, 2, 2, 0]

Before: [3, 1, 1, 0]
10 2 1 0
After:  [2, 1, 1, 0]

Before: [1, 1, 2, 2]
1 0 2 0
After:  [0, 1, 2, 2]

Before: [3, 3, 0, 2]
15 3 3 2
After:  [3, 3, 0, 2]

Before: [1, 2, 2, 2]
1 0 2 0
After:  [0, 2, 2, 2]

Before: [1, 2, 3, 3]
13 3 1 0
After:  [0, 2, 3, 3]

Before: [2, 3, 2, 1]
5 3 1 0
After:  [1, 3, 2, 1]

Before: [0, 1, 2, 1]
2 0 0 3
After:  [0, 1, 2, 0]

Before: [2, 2, 3, 3]
7 3 2 1
After:  [2, 1, 3, 3]

Before: [2, 2, 2, 3]
7 2 0 3
After:  [2, 2, 2, 1]

Before: [0, 1, 1, 3]
10 2 1 0
After:  [2, 1, 1, 3]

Before: [3, 3, 3, 3]
3 0 3 1
After:  [3, 1, 3, 3]

Before: [1, 3, 1, 1]
5 3 1 2
After:  [1, 3, 1, 1]

Before: [1, 1, 1, 3]
10 2 1 1
After:  [1, 2, 1, 3]

Before: [0, 1, 1, 0]
10 2 1 3
After:  [0, 1, 1, 2]

Before: [3, 3, 2, 1]
14 3 2 2
After:  [3, 3, 1, 1]

Before: [2, 1, 2, 2]
4 1 2 0
After:  [0, 1, 2, 2]

Before: [2, 1, 0, 2]
9 1 0 2
After:  [2, 1, 0, 2]

Before: [2, 1, 1, 1]
15 2 3 1
After:  [2, 0, 1, 1]

Before: [0, 1, 1, 0]
10 2 1 1
After:  [0, 2, 1, 0]

Before: [0, 1, 3, 2]
0 1 0 1
After:  [0, 1, 3, 2]

Before: [0, 1, 1, 1]
8 2 3 1
After:  [0, 2, 1, 1]

Before: [2, 1, 3, 2]
11 0 3 0
After:  [1, 1, 3, 2]

Before: [3, 1, 2, 0]
4 1 2 3
After:  [3, 1, 2, 0]

Before: [0, 1, 2, 1]
2 0 0 0
After:  [0, 1, 2, 1]

Before: [0, 0, 3, 1]
2 0 0 1
After:  [0, 0, 3, 1]

Before: [1, 0, 2, 0]
0 0 1 0
After:  [1, 0, 2, 0]

Before: [1, 0, 2, 1]
1 0 2 3
After:  [1, 0, 2, 0]

Before: [1, 1, 2, 0]
1 0 2 1
After:  [1, 0, 2, 0]

Before: [2, 1, 3, 2]
9 1 0 1
After:  [2, 0, 3, 2]

Before: [3, 1, 2, 0]
4 1 2 0
After:  [0, 1, 2, 0]

Before: [0, 1, 1, 0]
0 1 0 3
After:  [0, 1, 1, 1]

Before: [3, 1, 2, 1]
14 3 2 1
After:  [3, 1, 2, 1]

Before: [2, 1, 0, 2]
11 0 3 1
After:  [2, 1, 0, 2]

Before: [2, 3, 2, 1]
5 3 1 3
After:  [2, 3, 2, 1]

Before: [2, 0, 2, 1]
14 3 2 0
After:  [1, 0, 2, 1]

Before: [2, 1, 3, 2]
9 1 0 0
After:  [0, 1, 3, 2]

Before: [0, 0, 2, 2]
13 0 0 0
After:  [1, 0, 2, 2]

Before: [1, 1, 2, 1]
1 0 2 3
After:  [1, 1, 2, 0]

Before: [1, 0, 2, 1]
15 3 3 1
After:  [1, 0, 2, 1]

Before: [2, 2, 1, 2]
11 0 3 2
After:  [2, 2, 1, 2]

Before: [0, 1, 3, 0]
6 1 2 2
After:  [0, 1, 0, 0]

Before: [2, 1, 3, 2]
9 1 0 3
After:  [2, 1, 3, 0]

Before: [1, 0, 0, 3]
0 0 1 2
After:  [1, 0, 1, 3]

Before: [2, 0, 2, 1]
14 3 2 2
After:  [2, 0, 1, 1]

Before: [2, 2, 0, 2]
11 0 3 0
After:  [1, 2, 0, 2]

Before: [2, 2, 2, 2]
11 0 3 0
After:  [1, 2, 2, 2]

Before: [1, 2, 2, 0]
7 2 1 3
After:  [1, 2, 2, 1]

Before: [3, 3, 2, 3]
12 2 3 3
After:  [3, 3, 2, 0]

Before: [1, 0, 2, 2]
1 0 2 3
After:  [1, 0, 2, 0]

Before: [0, 1, 1, 3]
10 2 1 2
After:  [0, 1, 2, 3]

Before: [1, 1, 2, 1]
4 1 2 3
After:  [1, 1, 2, 0]

Before: [1, 3, 3, 3]
13 3 3 3
After:  [1, 3, 3, 1]

Before: [3, 0, 1, 1]
8 2 3 3
After:  [3, 0, 1, 2]

Before: [2, 2, 0, 3]
13 3 1 2
After:  [2, 2, 0, 3]

Before: [1, 1, 3, 3]
13 2 1 0
After:  [0, 1, 3, 3]

Before: [1, 1, 1, 0]
10 2 1 3
After:  [1, 1, 1, 2]

Before: [0, 2, 1, 3]
2 0 0 0
After:  [0, 2, 1, 3]

Before: [0, 3, 2, 1]
14 3 2 1
After:  [0, 1, 2, 1]

Before: [2, 1, 2, 2]
11 0 3 3
After:  [2, 1, 2, 1]

Before: [1, 0, 1, 0]
8 2 0 3
After:  [1, 0, 1, 2]

Before: [0, 2, 0, 2]
2 0 0 1
After:  [0, 0, 0, 2]

Before: [3, 1, 2, 2]
4 1 2 1
After:  [3, 0, 2, 2]

Before: [2, 0, 1, 1]
0 2 1 0
After:  [1, 0, 1, 1]

Before: [1, 1, 3, 1]
15 3 3 1
After:  [1, 0, 3, 1]

Before: [0, 1, 1, 3]
0 1 0 1
After:  [0, 1, 1, 3]

Before: [1, 0, 1, 3]
12 2 3 2
After:  [1, 0, 0, 3]

Before: [3, 2, 2, 1]
14 3 2 1
After:  [3, 1, 2, 1]

Before: [0, 0, 2, 3]
13 2 2 1
After:  [0, 1, 2, 3]

Before: [0, 1, 1, 0]
0 1 0 0
After:  [1, 1, 1, 0]

Before: [0, 3, 0, 1]
2 0 0 3
After:  [0, 3, 0, 0]

Before: [0, 1, 2, 3]
4 1 2 2
After:  [0, 1, 0, 3]

Before: [0, 2, 1, 3]
13 3 2 0
After:  [0, 2, 1, 3]

Before: [3, 1, 3, 3]
6 1 2 1
After:  [3, 0, 3, 3]

Before: [2, 1, 1, 2]
9 1 0 2
After:  [2, 1, 0, 2]

Before: [0, 0, 2, 1]
14 3 2 1
After:  [0, 1, 2, 1]

Before: [3, 2, 1, 3]
12 2 3 0
After:  [0, 2, 1, 3]

Before: [0, 2, 3, 3]
7 3 2 3
After:  [0, 2, 3, 1]

Before: [0, 1, 1, 3]
12 1 3 1
After:  [0, 0, 1, 3]

Before: [0, 1, 2, 1]
2 0 0 2
After:  [0, 1, 0, 1]

Before: [2, 0, 0, 2]
11 0 3 1
After:  [2, 1, 0, 2]

Before: [1, 3, 2, 3]
13 3 3 2
After:  [1, 3, 1, 3]

Before: [2, 3, 1, 1]
5 3 1 1
After:  [2, 1, 1, 1]

Before: [0, 0, 1, 1]
0 3 1 0
After:  [1, 0, 1, 1]

Before: [1, 2, 1, 3]
8 2 0 1
After:  [1, 2, 1, 3]

Before: [3, 3, 1, 3]
12 2 3 2
After:  [3, 3, 0, 3]

Before: [3, 1, 1, 1]
8 2 3 0
After:  [2, 1, 1, 1]

Before: [1, 3, 3, 1]
5 3 1 1
After:  [1, 1, 3, 1]

Before: [1, 1, 2, 3]
1 0 2 3
After:  [1, 1, 2, 0]

Before: [0, 0, 2, 2]
2 0 0 2
After:  [0, 0, 0, 2]

Before: [0, 1, 2, 1]
14 3 2 3
After:  [0, 1, 2, 1]

Before: [1, 3, 3, 1]
7 2 3 3
After:  [1, 3, 3, 0]

Before: [2, 1, 3, 2]
15 3 3 2
After:  [2, 1, 0, 2]

Before: [0, 3, 3, 3]
7 3 2 2
After:  [0, 3, 1, 3]

Before: [1, 0, 3, 1]
0 3 1 2
After:  [1, 0, 1, 1]

Before: [1, 0, 2, 2]
1 0 2 1
After:  [1, 0, 2, 2]

Before: [0, 1, 1, 3]
2 0 0 2
After:  [0, 1, 0, 3]

Before: [3, 1, 3, 3]
6 1 2 3
After:  [3, 1, 3, 0]

Before: [1, 0, 1, 0]
8 2 0 1
After:  [1, 2, 1, 0]

Before: [1, 2, 3, 3]
3 2 3 2
After:  [1, 2, 1, 3]

Before: [1, 1, 3, 1]
6 1 2 2
After:  [1, 1, 0, 1]

Before: [2, 1, 0, 3]
9 1 0 3
After:  [2, 1, 0, 0]

Before: [3, 3, 0, 1]
5 3 1 3
After:  [3, 3, 0, 1]

Before: [2, 0, 1, 2]
11 0 3 1
After:  [2, 1, 1, 2]

Before: [2, 2, 3, 3]
7 3 2 0
After:  [1, 2, 3, 3]

Before: [1, 3, 2, 1]
14 3 2 3
After:  [1, 3, 2, 1]

Before: [3, 1, 3, 2]
6 1 2 1
After:  [3, 0, 3, 2]

Before: [0, 2, 3, 3]
12 1 3 0
After:  [0, 2, 3, 3]

Before: [0, 2, 2, 1]
7 2 1 0
After:  [1, 2, 2, 1]

Before: [0, 1, 1, 1]
15 3 3 0
After:  [0, 1, 1, 1]

Before: [3, 3, 1, 1]
5 3 1 2
After:  [3, 3, 1, 1]

Before: [2, 3, 2, 0]
3 0 2 0
After:  [1, 3, 2, 0]

Before: [2, 1, 2, 2]
4 1 2 1
After:  [2, 0, 2, 2]

Before: [0, 0, 3, 3]
3 2 3 1
After:  [0, 1, 3, 3]

Before: [3, 1, 1, 2]
10 2 1 0
After:  [2, 1, 1, 2]

Before: [1, 2, 2, 1]
14 3 2 0
After:  [1, 2, 2, 1]

Before: [3, 1, 1, 3]
13 3 2 3
After:  [3, 1, 1, 0]

Before: [1, 2, 0, 1]
15 3 3 3
After:  [1, 2, 0, 0]

Before: [1, 1, 2, 3]
4 1 2 1
After:  [1, 0, 2, 3]

Before: [2, 1, 0, 3]
9 1 0 1
After:  [2, 0, 0, 3]

Before: [2, 1, 0, 1]
9 1 0 3
After:  [2, 1, 0, 0]

Before: [1, 2, 1, 3]
12 1 3 1
After:  [1, 0, 1, 3]

Before: [2, 1, 3, 0]
6 1 2 2
After:  [2, 1, 0, 0]

Before: [1, 3, 1, 2]
8 2 0 0
After:  [2, 3, 1, 2]

Before: [2, 1, 2, 3]
12 1 3 1
After:  [2, 0, 2, 3]

Before: [1, 3, 2, 2]
1 0 2 0
After:  [0, 3, 2, 2]

Before: [0, 3, 2, 3]
12 2 3 1
After:  [0, 0, 2, 3]

Before: [2, 2, 1, 2]
11 0 3 3
After:  [2, 2, 1, 1]

Before: [2, 1, 1, 3]
12 1 3 0
After:  [0, 1, 1, 3]

Before: [2, 0, 2, 1]
7 2 0 1
After:  [2, 1, 2, 1]

Before: [3, 3, 2, 1]
5 3 1 0
After:  [1, 3, 2, 1]

Before: [2, 3, 2, 2]
13 2 2 3
After:  [2, 3, 2, 1]

Before: [2, 3, 3, 1]
7 2 3 3
After:  [2, 3, 3, 0]

Before: [2, 3, 1, 1]
5 3 1 2
After:  [2, 3, 1, 1]

Before: [2, 1, 3, 0]
9 1 0 1
After:  [2, 0, 3, 0]

Before: [2, 1, 2, 2]
4 1 2 2
After:  [2, 1, 0, 2]

Before: [3, 3, 3, 1]
5 3 1 0
After:  [1, 3, 3, 1]

Before: [3, 2, 0, 2]
15 3 3 3
After:  [3, 2, 0, 0]

Before: [3, 3, 2, 3]
13 2 2 0
After:  [1, 3, 2, 3]

Before: [0, 3, 3, 3]
13 0 0 3
After:  [0, 3, 3, 1]

Before: [2, 1, 2, 1]
4 1 2 0
After:  [0, 1, 2, 1]

Before: [0, 3, 0, 1]
13 0 0 3
After:  [0, 3, 0, 1]

Before: [1, 0, 1, 2]
8 2 0 3
After:  [1, 0, 1, 2]

Before: [1, 3, 2, 1]
14 3 2 1
After:  [1, 1, 2, 1]

Before: [0, 2, 3, 1]
15 3 3 1
After:  [0, 0, 3, 1]

Before: [1, 2, 1, 2]
8 2 0 2
After:  [1, 2, 2, 2]

Before: [0, 0, 1, 2]
2 0 0 1
After:  [0, 0, 1, 2]

Before: [2, 1, 3, 2]
6 1 2 3
After:  [2, 1, 3, 0]

Before: [2, 1, 3, 3]
9 1 0 3
After:  [2, 1, 3, 0]

Before: [2, 1, 3, 3]
9 1 0 2
After:  [2, 1, 0, 3]

Before: [2, 1, 1, 2]
9 1 0 0
After:  [0, 1, 1, 2]

Before: [0, 0, 1, 2]
2 0 0 2
After:  [0, 0, 0, 2]

Before: [2, 0, 3, 3]
7 3 2 1
After:  [2, 1, 3, 3]

Before: [0, 3, 1, 2]
2 0 0 2
After:  [0, 3, 0, 2]

Before: [1, 2, 3, 3]
12 1 3 1
After:  [1, 0, 3, 3]

Before: [0, 1, 0, 3]
12 1 3 2
After:  [0, 1, 0, 3]

Before: [1, 0, 1, 2]
8 2 0 1
After:  [1, 2, 1, 2]

Before: [1, 0, 2, 1]
0 0 1 1
After:  [1, 1, 2, 1]

Before: [1, 1, 2, 1]
4 1 2 2
After:  [1, 1, 0, 1]

Before: [1, 3, 0, 1]
5 3 1 3
After:  [1, 3, 0, 1]

Before: [1, 3, 1, 1]
8 2 0 3
After:  [1, 3, 1, 2]

Before: [0, 3, 1, 1]
5 3 1 2
After:  [0, 3, 1, 1]

Before: [2, 2, 0, 2]
11 0 3 2
After:  [2, 2, 1, 2]

Before: [2, 1, 2, 2]
9 1 0 2
After:  [2, 1, 0, 2]

Before: [1, 1, 3, 0]
6 1 2 1
After:  [1, 0, 3, 0]

Before: [0, 3, 0, 1]
5 3 1 2
After:  [0, 3, 1, 1]

Before: [2, 2, 2, 1]
7 2 0 0
After:  [1, 2, 2, 1]

Before: [1, 3, 2, 3]
1 0 2 1
After:  [1, 0, 2, 3]

Before: [0, 1, 1, 1]
10 2 1 2
After:  [0, 1, 2, 1]

Before: [0, 1, 1, 1]
10 2 1 0
After:  [2, 1, 1, 1]

Before: [1, 3, 2, 2]
1 0 2 2
After:  [1, 3, 0, 2]

Before: [3, 3, 0, 3]
13 3 3 2
After:  [3, 3, 1, 3]

Before: [1, 0, 2, 0]
1 0 2 2
After:  [1, 0, 0, 0]

Before: [3, 3, 3, 1]
5 3 1 3
After:  [3, 3, 3, 1]

Before: [2, 1, 3, 0]
9 1 0 0
After:  [0, 1, 3, 0]

Before: [3, 1, 1, 3]
10 2 1 1
After:  [3, 2, 1, 3]

Before: [3, 1, 2, 3]
12 2 3 1
After:  [3, 0, 2, 3]

Before: [2, 1, 3, 2]
11 0 3 1
After:  [2, 1, 3, 2]

Before: [2, 1, 2, 1]
14 3 2 2
After:  [2, 1, 1, 1]

Before: [2, 1, 2, 1]
9 1 0 0
After:  [0, 1, 2, 1]

Before: [2, 3, 3, 1]
5 3 1 2
After:  [2, 3, 1, 1]

Before: [0, 1, 1, 1]
2 0 0 1
After:  [0, 0, 1, 1]

Before: [3, 0, 3, 1]
0 3 1 2
After:  [3, 0, 1, 1]

Before: [3, 1, 2, 1]
4 1 2 1
After:  [3, 0, 2, 1]

Before: [2, 2, 2, 1]
14 3 2 1
After:  [2, 1, 2, 1]

Before: [1, 1, 2, 3]
12 1 3 0
After:  [0, 1, 2, 3]

Before: [3, 3, 1, 3]
7 3 0 0
After:  [1, 3, 1, 3]

Before: [1, 1, 2, 2]
1 0 2 1
After:  [1, 0, 2, 2]

Before: [1, 0, 2, 3]
0 0 1 3
After:  [1, 0, 2, 1]

Before: [1, 0, 2, 1]
1 0 2 2
After:  [1, 0, 0, 1]

Before: [2, 0, 2, 3]
12 2 3 3
After:  [2, 0, 2, 0]

Before: [2, 1, 0, 1]
9 1 0 0
After:  [0, 1, 0, 1]

Before: [0, 3, 3, 1]
5 3 1 0
After:  [1, 3, 3, 1]

Before: [3, 1, 3, 3]
6 1 2 0
After:  [0, 1, 3, 3]

Before: [2, 1, 2, 0]
9 1 0 0
After:  [0, 1, 2, 0]

Before: [2, 3, 3, 1]
5 3 1 0
After:  [1, 3, 3, 1]

Before: [2, 1, 1, 3]
9 1 0 0
After:  [0, 1, 1, 3]

Before: [3, 3, 1, 1]
5 3 1 0
After:  [1, 3, 1, 1]

Before: [1, 0, 1, 3]
0 2 1 0
After:  [1, 0, 1, 3]

Before: [1, 0, 2, 3]
1 0 2 3
After:  [1, 0, 2, 0]

Before: [2, 3, 2, 1]
14 3 2 0
After:  [1, 3, 2, 1]

Before: [3, 1, 3, 1]
6 1 2 3
After:  [3, 1, 3, 0]

Before: [0, 0, 0, 0]
2 0 0 0
After:  [0, 0, 0, 0]

Before: [3, 3, 1, 1]
5 3 1 3
After:  [3, 3, 1, 1]

Before: [3, 1, 3, 2]
6 1 2 3
After:  [3, 1, 3, 0]

Before: [3, 2, 1, 3]
7 3 0 2
After:  [3, 2, 1, 3]

Before: [2, 3, 2, 1]
14 3 2 1
After:  [2, 1, 2, 1]

Before: [1, 1, 2, 2]
1 0 2 2
After:  [1, 1, 0, 2]

Before: [3, 1, 3, 1]
7 2 3 2
After:  [3, 1, 0, 1]

Before: [0, 0, 1, 1]
0 2 1 0
After:  [1, 0, 1, 1]

Before: [2, 1, 2, 3]
4 1 2 2
After:  [2, 1, 0, 3]

Before: [3, 1, 3, 0]
6 1 2 0
After:  [0, 1, 3, 0]

Before: [2, 3, 2, 2]
3 0 2 2
After:  [2, 3, 1, 2]

Before: [1, 2, 2, 0]
1 0 2 3
After:  [1, 2, 2, 0]

Before: [1, 1, 2, 2]
1 0 2 3
After:  [1, 1, 2, 0]

Before: [1, 1, 1, 3]
10 2 1 3
After:  [1, 1, 1, 2]

Before: [0, 1, 1, 0]
10 2 1 0
After:  [2, 1, 1, 0]

Before: [2, 2, 3, 3]
3 2 3 0
After:  [1, 2, 3, 3]

Before: [0, 3, 3, 3]
3 2 3 1
After:  [0, 1, 3, 3]

Before: [1, 3, 3, 1]
5 3 1 2
After:  [1, 3, 1, 1]

Before: [3, 1, 1, 0]
10 2 1 2
After:  [3, 1, 2, 0]

Before: [0, 0, 0, 0]
13 0 0 2
After:  [0, 0, 1, 0]

Before: [2, 3, 0, 1]
5 3 1 3
After:  [2, 3, 0, 1]

Before: [3, 0, 2, 1]
14 3 2 2
After:  [3, 0, 1, 1]

Before: [2, 1, 2, 1]
4 1 2 1
After:  [2, 0, 2, 1]

Before: [1, 2, 2, 1]
14 3 2 3
After:  [1, 2, 2, 1]

Before: [1, 3, 3, 3]
13 3 3 2
After:  [1, 3, 1, 3]

Before: [1, 0, 2, 1]
14 3 2 0
After:  [1, 0, 2, 1]

Before: [0, 1, 1, 3]
12 2 3 3
After:  [0, 1, 1, 0]

Before: [2, 3, 3, 1]
5 3 1 3
After:  [2, 3, 3, 1]

Before: [0, 3, 3, 2]
13 0 0 0
After:  [1, 3, 3, 2]

Before: [0, 1, 3, 3]
7 3 2 1
After:  [0, 1, 3, 3]

Before: [2, 1, 3, 3]
7 3 2 3
After:  [2, 1, 3, 1]

Before: [1, 1, 1, 3]
8 2 0 2
After:  [1, 1, 2, 3]

Before: [0, 1, 1, 2]
10 2 1 3
After:  [0, 1, 1, 2]

Before: [2, 1, 3, 2]
6 1 2 0
After:  [0, 1, 3, 2]

Before: [0, 0, 1, 2]
15 3 3 2
After:  [0, 0, 0, 2]

Before: [3, 1, 3, 2]
6 1 2 2
After:  [3, 1, 0, 2]

Before: [2, 0, 3, 2]
11 0 3 0
After:  [1, 0, 3, 2]

Before: [1, 3, 2, 3]
12 2 3 0
After:  [0, 3, 2, 3]

Before: [0, 3, 1, 2]
13 0 0 2
After:  [0, 3, 1, 2]

Before: [1, 2, 1, 1]
8 2 3 2
After:  [1, 2, 2, 1]

Before: [2, 0, 2, 2]
11 0 3 2
After:  [2, 0, 1, 2]

Before: [1, 3, 0, 1]
5 3 1 2
After:  [1, 3, 1, 1]

Before: [3, 2, 3, 3]
7 3 2 2
After:  [3, 2, 1, 3]

Before: [3, 2, 0, 3]
12 1 3 1
After:  [3, 0, 0, 3]

Before: [0, 3, 1, 0]
2 0 0 1
After:  [0, 0, 1, 0]

Before: [2, 1, 3, 3]
12 1 3 3
After:  [2, 1, 3, 0]

Before: [2, 1, 1, 1]
9 1 0 3
After:  [2, 1, 1, 0]

Before: [0, 1, 3, 2]
15 3 3 1
After:  [0, 0, 3, 2]

Before: [1, 1, 2, 1]
14 3 2 0
After:  [1, 1, 2, 1]

Before: [0, 1, 0, 3]
12 1 3 1
After:  [0, 0, 0, 3]

Before: [2, 1, 2, 0]
9 1 0 1
After:  [2, 0, 2, 0]

Before: [3, 3, 2, 3]
7 3 0 3
After:  [3, 3, 2, 1]

Before: [1, 2, 1, 3]
8 2 0 3
After:  [1, 2, 1, 2]

Before: [0, 0, 1, 2]
0 2 1 0
After:  [1, 0, 1, 2]

Before: [1, 0, 1, 0]
0 0 1 3
After:  [1, 0, 1, 1]

Before: [0, 1, 1, 1]
10 2 1 3
After:  [0, 1, 1, 2]

Before: [1, 1, 1, 3]
12 1 3 0
After:  [0, 1, 1, 3]

Before: [1, 0, 2, 0]
1 0 2 3
After:  [1, 0, 2, 0]

Before: [0, 1, 3, 1]
6 1 2 2
After:  [0, 1, 0, 1]

Before: [3, 1, 2, 1]
4 1 2 0
After:  [0, 1, 2, 1]

Before: [1, 3, 1, 3]
8 2 0 3
After:  [1, 3, 1, 2]

Before: [0, 3, 0, 0]
13 0 0 3
After:  [0, 3, 0, 1]

Before: [1, 3, 2, 0]
1 0 2 2
After:  [1, 3, 0, 0]

Before: [0, 3, 0, 1]
5 3 1 3
After:  [0, 3, 0, 1]

Before: [3, 0, 0, 3]
3 0 3 1
After:  [3, 1, 0, 3]

Before: [2, 2, 3, 2]
11 0 3 3
After:  [2, 2, 3, 1]

Before: [1, 1, 3, 3]
6 1 2 1
After:  [1, 0, 3, 3]

Before: [2, 2, 1, 2]
11 0 3 1
After:  [2, 1, 1, 2]

Before: [3, 1, 3, 0]
6 1 2 2
After:  [3, 1, 0, 0]

Before: [0, 1, 3, 2]
6 1 2 2
After:  [0, 1, 0, 2]

Before: [2, 3, 0, 1]
5 3 1 2
After:  [2, 3, 1, 1]

Before: [1, 2, 2, 3]
1 0 2 2
After:  [1, 2, 0, 3]

Before: [3, 2, 0, 3]
7 3 0 3
After:  [3, 2, 0, 1]

Before: [3, 0, 2, 3]
3 0 3 2
After:  [3, 0, 1, 3]

Before: [2, 2, 3, 2]
11 0 3 0
After:  [1, 2, 3, 2]

Before: [2, 2, 3, 1]
7 2 3 2
After:  [2, 2, 0, 1]

Before: [1, 0, 2, 0]
1 0 2 1
After:  [1, 0, 2, 0]

Before: [0, 1, 1, 3]
10 2 1 3
After:  [0, 1, 1, 2]

Before: [0, 0, 1, 2]
15 3 3 3
After:  [0, 0, 1, 0]

Before: [3, 3, 2, 0]
13 2 2 1
After:  [3, 1, 2, 0]

Before: [0, 1, 3, 2]
2 0 0 2
After:  [0, 1, 0, 2]

Before: [0, 2, 2, 1]
14 3 2 1
After:  [0, 1, 2, 1]

Before: [1, 1, 3, 2]
15 3 3 0
After:  [0, 1, 3, 2]

Before: [2, 1, 1, 2]
9 1 0 3
After:  [2, 1, 1, 0]

Before: [3, 0, 1, 0]
0 2 1 1
After:  [3, 1, 1, 0]

Before: [1, 2, 2, 3]
1 0 2 1
After:  [1, 0, 2, 3]

Before: [2, 0, 2, 2]
3 0 2 0
After:  [1, 0, 2, 2]

Before: [2, 1, 3, 2]
6 1 2 2
After:  [2, 1, 0, 2]

Before: [3, 3, 0, 1]
5 3 1 1
After:  [3, 1, 0, 1]

Before: [0, 0, 0, 3]
2 0 0 1
After:  [0, 0, 0, 3]

Before: [0, 0, 1, 1]
13 0 0 3
After:  [0, 0, 1, 1]

Before: [3, 1, 3, 3]
7 3 2 2
After:  [3, 1, 1, 3]

Before: [1, 0, 2, 1]
14 3 2 2
After:  [1, 0, 1, 1]

Before: [0, 2, 3, 3]
7 3 2 2
After:  [0, 2, 1, 3]

Before: [0, 3, 2, 2]
2 0 0 3
After:  [0, 3, 2, 0]

Before: [0, 0, 1, 1]
8 2 3 2
After:  [0, 0, 2, 1]

Before: [2, 3, 1, 2]
11 0 3 2
After:  [2, 3, 1, 2]

Before: [0, 3, 2, 1]
5 3 1 3
After:  [0, 3, 2, 1]

Before: [1, 3, 2, 1]
1 0 2 1
After:  [1, 0, 2, 1]

Before: [3, 1, 2, 1]
4 1 2 2
After:  [3, 1, 0, 1]

Before: [3, 2, 2, 3]
3 0 3 2
After:  [3, 2, 1, 3]

Before: [1, 0, 1, 0]
8 2 0 0
After:  [2, 0, 1, 0]

Before: [3, 2, 2, 3]
3 0 3 1
After:  [3, 1, 2, 3]

Before: [1, 1, 2, 0]
1 0 2 3
After:  [1, 1, 2, 0]

Before: [1, 3, 0, 1]
5 3 1 0
After:  [1, 3, 0, 1]

Before: [3, 1, 2, 2]
4 1 2 0
After:  [0, 1, 2, 2]

Before: [0, 3, 1, 1]
13 0 0 1
After:  [0, 1, 1, 1]

Before: [2, 3, 0, 1]
5 3 1 1
After:  [2, 1, 0, 1]

Before: [2, 0, 0, 2]
11 0 3 0
After:  [1, 0, 0, 2]

Before: [2, 2, 3, 3]
12 1 3 0
After:  [0, 2, 3, 3]

Before: [2, 2, 2, 0]
3 0 2 0
After:  [1, 2, 2, 0]

Before: [0, 3, 2, 1]
5 3 1 0
After:  [1, 3, 2, 1]

Before: [1, 1, 2, 2]
4 1 2 1
After:  [1, 0, 2, 2]

Before: [2, 1, 0, 3]
9 1 0 2
After:  [2, 1, 0, 3]

Before: [3, 0, 3, 3]
13 3 3 1
After:  [3, 1, 3, 3]

Before: [1, 2, 3, 3]
12 1 3 0
After:  [0, 2, 3, 3]

Before: [3, 1, 3, 3]
3 0 3 1
After:  [3, 1, 3, 3]

Before: [1, 1, 2, 3]
13 3 3 3
After:  [1, 1, 2, 1]

Before: [0, 3, 1, 1]
8 2 3 3
After:  [0, 3, 1, 2]

Before: [3, 1, 1, 3]
12 1 3 2
After:  [3, 1, 0, 3]

Before: [2, 1, 3, 0]
6 1 2 0
After:  [0, 1, 3, 0]

Before: [1, 0, 2, 2]
1 0 2 2
After:  [1, 0, 0, 2]

Before: [2, 2, 1, 3]
12 1 3 2
After:  [2, 2, 0, 3]

Before: [2, 0, 1, 2]
11 0 3 2
After:  [2, 0, 1, 2]

Before: [0, 2, 2, 1]
2 0 0 3
After:  [0, 2, 2, 0]

Before: [2, 3, 1, 1]
5 3 1 0
After:  [1, 3, 1, 1]

Before: [0, 2, 1, 1]
8 2 3 3
After:  [0, 2, 1, 2]

Before: [3, 1, 2, 1]
14 3 2 2
After:  [3, 1, 1, 1]

Before: [1, 2, 1, 3]
13 3 2 3
After:  [1, 2, 1, 0]

Before: [2, 3, 1, 2]
11 0 3 1
After:  [2, 1, 1, 2]

Before: [3, 1, 1, 2]
10 2 1 3
After:  [3, 1, 1, 2]

Before: [2, 1, 2, 2]
11 0 3 1
After:  [2, 1, 2, 2]

Before: [1, 1, 3, 1]
6 1 2 0
After:  [0, 1, 3, 1]

Before: [0, 2, 0, 0]
2 0 0 3
After:  [0, 2, 0, 0]

Before: [2, 3, 2, 1]
3 0 2 1
After:  [2, 1, 2, 1]

Before: [3, 1, 1, 3]
12 1 3 1
After:  [3, 0, 1, 3]

Before: [0, 1, 0, 3]
13 3 1 1
After:  [0, 0, 0, 3]

Before: [0, 3, 1, 2]
2 0 0 0
After:  [0, 3, 1, 2]

Before: [2, 2, 2, 0]
7 2 1 3
After:  [2, 2, 2, 1]

Before: [2, 1, 1, 1]
9 1 0 1
After:  [2, 0, 1, 1]

Before: [1, 1, 3, 3]
6 1 2 2
After:  [1, 1, 0, 3]

Before: [3, 2, 1, 1]
8 2 3 3
After:  [3, 2, 1, 2]

Before: [0, 2, 2, 1]
14 3 2 0
After:  [1, 2, 2, 1]

Before: [3, 3, 3, 1]
15 3 3 1
After:  [3, 0, 3, 1]

Before: [2, 3, 0, 2]
11 0 3 0
After:  [1, 3, 0, 2]

Before: [2, 2, 2, 2]
7 2 0 1
After:  [2, 1, 2, 2]

Before: [1, 1, 1, 1]
8 2 0 0
After:  [2, 1, 1, 1]

Before: [2, 1, 1, 1]
9 1 0 0
After:  [0, 1, 1, 1]

Before: [2, 2, 3, 3]
7 3 2 2
After:  [2, 2, 1, 3]

Before: [2, 1, 3, 3]
6 1 2 3
After:  [2, 1, 3, 0]

Before: [0, 3, 0, 3]
13 3 3 1
After:  [0, 1, 0, 3]

Before: [2, 1, 3, 1]
9 1 0 0
After:  [0, 1, 3, 1]

Before: [0, 1, 2, 2]
2 0 0 2
After:  [0, 1, 0, 2]

Before: [2, 3, 1, 3]
12 2 3 0
After:  [0, 3, 1, 3]

Before: [2, 1, 1, 0]
9 1 0 2
After:  [2, 1, 0, 0]

Before: [0, 1, 0, 3]
13 0 0 3
After:  [0, 1, 0, 1]

Before: [0, 1, 2, 3]
13 3 2 2
After:  [0, 1, 0, 3]

Before: [3, 0, 3, 3]
3 0 3 1
After:  [3, 1, 3, 3]

Before: [2, 1, 2, 1]
9 1 0 1
After:  [2, 0, 2, 1]

Before: [1, 1, 1, 2]
10 2 1 3
After:  [1, 1, 1, 2]

Before: [0, 0, 2, 1]
14 3 2 0
After:  [1, 0, 2, 1]

Before: [3, 3, 3, 1]
5 3 1 1
After:  [3, 1, 3, 1]

Before: [3, 0, 2, 0]
13 2 2 2
After:  [3, 0, 1, 0]

Before: [2, 0, 2, 1]
0 3 1 0
After:  [1, 0, 2, 1]

Before: [1, 0, 2, 3]
1 0 2 0
After:  [0, 0, 2, 3]

Before: [0, 0, 2, 3]
12 2 3 1
After:  [0, 0, 2, 3]

Before: [3, 1, 3, 3]
7 3 0 0
After:  [1, 1, 3, 3]

Before: [3, 0, 0, 3]
3 0 3 3
After:  [3, 0, 0, 1]

Before: [2, 3, 1, 2]
11 0 3 0
After:  [1, 3, 1, 2]

Before: [3, 1, 3, 3]
7 3 2 3
After:  [3, 1, 3, 1]

Before: [2, 0, 0, 2]
11 0 3 3
After:  [2, 0, 0, 1]

Before: [3, 3, 0, 1]
5 3 1 2
After:  [3, 3, 1, 1]

Before: [2, 1, 2, 1]
14 3 2 1
After:  [2, 1, 2, 1]

Before: [2, 0, 3, 2]
15 3 3 2
After:  [2, 0, 0, 2]

Before: [1, 1, 3, 3]
3 2 3 0
After:  [1, 1, 3, 3]

Before: [3, 0, 0, 3]
7 3 0 3
After:  [3, 0, 0, 1]

Before: [2, 1, 3, 0]
9 1 0 2
After:  [2, 1, 0, 0]

Before: [0, 3, 3, 0]
2 0 0 0
After:  [0, 3, 3, 0]

Before: [1, 0, 1, 1]
0 2 1 1
After:  [1, 1, 1, 1]

Before: [1, 1, 2, 1]
4 1 2 0
After:  [0, 1, 2, 1]

Before: [0, 0, 2, 3]
2 0 0 2
After:  [0, 0, 0, 3]

Before: [1, 1, 1, 3]
13 3 1 1
After:  [1, 0, 1, 3]

Before: [2, 1, 1, 2]
10 2 1 2
After:  [2, 1, 2, 2]

Before: [0, 2, 1, 1]
2 0 0 1
After:  [0, 0, 1, 1]

Before: [2, 1, 2, 3]
4 1 2 0
After:  [0, 1, 2, 3]

Before: [3, 2, 1, 1]
15 2 3 1
After:  [3, 0, 1, 1]

Before: [3, 0, 3, 3]
3 0 3 0
After:  [1, 0, 3, 3]

Before: [1, 2, 2, 1]
1 0 2 2
After:  [1, 2, 0, 1]

Before: [3, 3, 2, 3]
3 0 3 2
After:  [3, 3, 1, 3]

Before: [2, 1, 0, 1]
9 1 0 2
After:  [2, 1, 0, 1]

Before: [2, 1, 0, 1]
9 1 0 1
After:  [2, 0, 0, 1]

Before: [1, 2, 2, 1]
1 0 2 0
After:  [0, 2, 2, 1]

Before: [3, 1, 3, 2]
6 1 2 0
After:  [0, 1, 3, 2]

Before: [0, 2, 2, 1]
14 3 2 2
After:  [0, 2, 1, 1]

Before: [1, 2, 2, 3]
1 0 2 3
After:  [1, 2, 2, 0]

Before: [0, 1, 1, 2]
0 1 0 3
After:  [0, 1, 1, 1]

Before: [1, 3, 1, 1]
5 3 1 1
After:  [1, 1, 1, 1]

Before: [2, 1, 3, 1]
15 3 3 2
After:  [2, 1, 0, 1]

Before: [2, 1, 1, 3]
10 2 1 3
After:  [2, 1, 1, 2]

Before: [0, 1, 1, 0]
2 0 0 3
After:  [0, 1, 1, 0]

Before: [1, 1, 3, 2]
6 1 2 3
After:  [1, 1, 3, 0]

Before: [2, 1, 1, 2]
10 2 1 3
After:  [2, 1, 1, 2]

Before: [1, 2, 1, 3]
13 3 3 3
After:  [1, 2, 1, 1]

Before: [1, 0, 1, 3]
8 2 0 1
After:  [1, 2, 1, 3]

Before: [3, 3, 2, 2]
13 2 2 2
After:  [3, 3, 1, 2]

Before: [3, 1, 2, 0]
13 2 2 0
After:  [1, 1, 2, 0]

Before: [0, 1, 3, 2]
6 1 2 3
After:  [0, 1, 3, 0]

Before: [1, 0, 2, 3]
0 0 1 2
After:  [1, 0, 1, 3]

Before: [0, 2, 0, 2]
15 3 3 3
After:  [0, 2, 0, 0]

Before: [2, 1, 2, 2]
3 0 2 3
After:  [2, 1, 2, 1]

Before: [2, 1, 3, 2]
11 0 3 3
After:  [2, 1, 3, 1]

Before: [2, 2, 2, 2]
7 2 0 3
After:  [2, 2, 2, 1]

Before: [2, 1, 0, 0]
9 1 0 2
After:  [2, 1, 0, 0]

Before: [1, 1, 3, 2]
15 3 3 1
After:  [1, 0, 3, 2]

Before: [3, 0, 1, 2]
15 3 3 2
After:  [3, 0, 0, 2]

Before: [0, 2, 1, 3]
12 2 3 0
After:  [0, 2, 1, 3]

Before: [3, 2, 2, 1]
7 2 1 1
After:  [3, 1, 2, 1]

Before: [0, 2, 0, 1]
2 0 0 3
After:  [0, 2, 0, 0]

Before: [0, 0, 2, 1]
14 3 2 3
After:  [0, 0, 2, 1]

Before: [2, 0, 0, 1]
0 3 1 2
After:  [2, 0, 1, 1]

Before: [3, 1, 1, 1]
8 2 3 1
After:  [3, 2, 1, 1]

Before: [1, 2, 2, 1]
14 3 2 1
After:  [1, 1, 2, 1]

Before: [0, 1, 2, 2]
4 1 2 2
After:  [0, 1, 0, 2]

Before: [2, 2, 0, 2]
11 0 3 1
After:  [2, 1, 0, 2]

Before: [0, 1, 0, 2]
15 3 3 3
After:  [0, 1, 0, 0]

Before: [0, 0, 0, 1]
13 0 0 0
After:  [1, 0, 0, 1]

Before: [2, 0, 1, 1]
0 2 1 1
After:  [2, 1, 1, 1]

Before: [1, 0, 2, 3]
0 0 1 0
After:  [1, 0, 2, 3]

Before: [2, 1, 1, 1]
15 2 3 2
After:  [2, 1, 0, 1]

Before: [0, 0, 1, 1]
15 2 3 3
After:  [0, 0, 1, 0]

Before: [1, 1, 3, 3]
13 3 1 2
After:  [1, 1, 0, 3]

Before: [0, 0, 0, 3]
2 0 0 2
After:  [0, 0, 0, 3]

Before: [1, 0, 1, 3]
8 2 0 0
After:  [2, 0, 1, 3]

Before: [3, 0, 0, 3]
3 0 3 0
After:  [1, 0, 0, 3]

Before: [0, 1, 3, 3]
6 1 2 3
After:  [0, 1, 3, 0]

Before: [1, 1, 1, 2]
10 2 1 1
After:  [1, 2, 1, 2]

Before: [1, 2, 2, 1]
13 2 2 0
After:  [1, 2, 2, 1]

Before: [2, 1, 0, 3]
9 1 0 0
After:  [0, 1, 0, 3]

Before: [3, 3, 2, 1]
5 3 1 2
After:  [3, 3, 1, 1]

Before: [3, 3, 3, 1]
5 3 1 2
After:  [3, 3, 1, 1]

Before: [2, 1, 0, 0]
9 1 0 0
After:  [0, 1, 0, 0]

Before: [0, 0, 2, 0]
13 0 0 2
After:  [0, 0, 1, 0]

Before: [2, 1, 3, 2]
6 1 2 1
After:  [2, 0, 3, 2]

Before: [2, 1, 3, 2]
11 0 3 2
After:  [2, 1, 1, 2]

Before: [0, 1, 2, 0]
13 2 2 2
After:  [0, 1, 1, 0]

Before: [0, 1, 0, 1]
15 3 3 2
After:  [0, 1, 0, 1]

Before: [2, 2, 3, 1]
7 2 3 3
After:  [2, 2, 3, 0]

Before: [0, 3, 3, 1]
5 3 1 2
After:  [0, 3, 1, 1]

Before: [0, 1, 0, 0]
0 1 0 2
After:  [0, 1, 1, 0]

Before: [1, 0, 2, 2]
0 0 1 0
After:  [1, 0, 2, 2]

Before: [1, 1, 1, 1]
10 2 1 2
After:  [1, 1, 2, 1]

Before: [0, 1, 3, 3]
0 1 0 3
After:  [0, 1, 3, 1]

Before: [2, 3, 1, 1]
8 2 3 3
After:  [2, 3, 1, 2]

Before: [0, 0, 2, 1]
2 0 0 2
After:  [0, 0, 0, 1]

Before: [2, 1, 3, 0]
9 1 0 3
After:  [2, 1, 3, 0]

Before: [1, 3, 3, 1]
5 3 1 0
After:  [1, 3, 3, 1]

Before: [2, 1, 1, 1]
10 2 1 0
After:  [2, 1, 1, 1]

Before: [1, 3, 1, 3]
8 2 0 0
After:  [2, 3, 1, 3]

Before: [1, 1, 1, 0]
8 2 0 3
After:  [1, 1, 1, 2]

Before: [1, 0, 3, 3]
3 2 3 2
After:  [1, 0, 1, 3]

Before: [2, 1, 3, 3]
12 1 3 1
After:  [2, 0, 3, 3]

Before: [2, 2, 2, 0]
7 2 0 3
After:  [2, 2, 2, 1]

Before: [0, 0, 1, 1]
8 2 3 1
After:  [0, 2, 1, 1]



1 2 1 0
9 1 0 2
10 2 3 2
1 1 2 3
15 0 3 3
9 3 2 3
9 3 3 3
8 3 1 1
14 1 1 0
1 2 2 3
1 0 1 1
1 0 2 2
13 2 3 1
9 1 1 1
8 0 1 0
14 0 1 1
1 0 3 3
1 2 3 0
1 2 0 2
5 0 3 0
9 0 2 0
8 0 1 1
1 1 1 0
1 1 1 2
8 0 0 3
9 3 3 3
9 3 2 3
8 1 3 1
14 1 3 3
1 2 1 1
1 2 2 0
1 3 2 2
3 0 2 0
9 0 2 0
9 0 3 0
8 3 0 3
14 3 1 2
1 2 1 0
1 0 0 1
1 0 0 3
5 0 3 1
9 1 1 1
8 1 2 2
1 3 0 1
1 1 0 3
15 0 3 1
9 1 3 1
8 1 2 2
14 2 0 1
1 2 2 2
9 3 0 3
10 3 2 3
1 1 1 0
5 2 3 0
9 0 3 0
8 1 0 1
1 0 1 2
1 3 2 0
13 2 3 0
9 0 1 0
9 0 1 0
8 0 1 1
14 1 3 2
1 0 1 1
1 2 3 0
11 0 3 0
9 0 2 0
9 0 1 0
8 2 0 2
14 2 3 1
1 1 0 2
1 3 1 3
9 0 0 0
10 0 2 0
4 3 0 2
9 2 3 2
8 1 2 1
14 1 3 2
1 1 1 1
1 3 1 0
1 1 0 3
8 3 3 3
9 3 3 3
8 3 2 2
14 2 1 1
1 2 0 2
1 1 0 0
9 1 0 3
10 3 0 3
12 3 2 3
9 3 3 3
8 3 1 1
14 1 1 2
1 0 3 1
1 2 3 3
1 2 3 0
5 0 3 1
9 1 2 1
9 1 3 1
8 2 1 2
1 2 0 1
1 1 2 0
5 1 3 3
9 3 2 3
9 3 3 3
8 2 3 2
14 2 2 1
1 3 1 2
1 1 1 3
1 2 1 0
3 0 2 3
9 3 1 3
8 1 3 1
14 1 2 0
1 0 0 3
9 2 0 1
10 1 2 1
1 0 1 2
5 1 3 1
9 1 2 1
8 1 0 0
14 0 1 2
1 1 1 1
1 3 3 0
1 2 0 3
4 0 3 3
9 3 3 3
8 2 3 2
1 2 2 1
1 1 1 3
9 2 0 0
10 0 2 0
15 0 3 0
9 0 2 0
9 0 1 0
8 0 2 2
14 2 1 3
1 3 3 1
1 2 0 2
9 0 0 0
10 0 1 0
14 0 2 2
9 2 1 2
8 2 3 3
9 1 0 2
10 2 0 2
10 0 1 2
9 2 1 2
9 2 3 2
8 3 2 3
14 3 3 2
1 2 0 0
1 1 3 1
1 3 2 3
2 1 0 3
9 3 3 3
8 2 3 2
14 2 1 0
1 1 0 2
1 3 1 1
9 1 0 3
10 3 1 3
6 1 2 3
9 3 3 3
8 0 3 0
14 0 2 2
9 2 0 3
10 3 1 3
1 1 1 0
10 0 1 1
9 1 2 1
9 1 1 1
8 2 1 2
14 2 3 1
1 2 0 3
1 2 0 2
2 0 3 0
9 0 3 0
8 1 0 1
14 1 3 0
1 1 0 3
1 1 3 1
1 3 0 2
9 3 2 2
9 2 1 2
9 2 2 2
8 2 0 0
14 0 3 1
1 1 2 2
9 2 0 0
10 0 1 0
8 0 0 2
9 2 3 2
8 1 2 1
14 1 0 0
1 2 0 3
1 3 3 1
1 3 1 2
1 2 1 1
9 1 3 1
8 0 1 0
9 0 0 3
10 3 1 3
9 0 0 1
10 1 3 1
10 3 1 1
9 1 1 1
8 1 0 0
14 0 3 1
1 0 2 2
9 0 0 0
10 0 3 0
6 0 2 0
9 0 3 0
8 1 0 1
14 1 2 2
1 2 3 1
1 3 2 0
0 1 0 1
9 1 2 1
8 1 2 2
14 2 0 3
1 0 2 2
9 0 0 1
10 1 3 1
1 1 3 0
1 2 1 0
9 0 1 0
9 0 2 0
8 0 3 3
14 3 0 2
1 1 3 1
9 3 0 3
10 3 2 3
1 1 3 0
2 0 3 3
9 3 1 3
8 2 3 2
1 2 3 3
9 3 0 1
10 1 2 1
2 0 3 1
9 1 2 1
8 1 2 2
1 3 2 0
1 2 1 1
0 1 0 1
9 1 2 1
9 1 3 1
8 1 2 2
14 2 1 0
1 0 2 1
1 1 2 2
1 3 2 3
6 3 2 1
9 1 2 1
8 0 1 0
14 0 0 1
9 0 0 0
10 0 2 0
1 0 3 3
5 0 3 3
9 3 2 3
9 3 2 3
8 1 3 1
9 2 0 0
10 0 3 0
9 0 0 2
10 2 2 2
1 0 2 3
7 2 0 2
9 2 1 2
8 1 2 1
1 1 3 0
1 2 3 2
12 3 2 0
9 0 3 0
9 0 1 0
8 1 0 1
14 1 3 2
1 3 1 1
1 1 1 0
1 3 3 3
10 0 1 0
9 0 1 0
8 0 2 2
1 0 2 1
1 2 0 0
4 3 0 0
9 0 3 0
8 2 0 2
9 3 0 0
10 0 2 0
1 2 2 3
11 0 3 1
9 1 3 1
8 2 1 2
1 2 3 1
1 3 1 0
5 1 3 3
9 3 3 3
8 2 3 2
14 2 1 3
1 1 2 2
1 1 0 0
8 0 0 0
9 0 2 0
8 0 3 3
14 3 3 1
9 2 0 0
10 0 1 0
1 0 3 2
9 0 0 3
10 3 2 3
8 0 0 0
9 0 1 0
8 1 0 1
14 1 2 0
1 2 0 2
1 0 3 3
1 1 3 1
12 3 2 2
9 2 2 2
8 2 0 0
14 0 1 1
1 3 0 3
1 1 2 2
1 3 0 0
1 2 0 2
9 2 2 2
8 2 1 1
1 2 3 0
1 3 0 2
3 0 2 0
9 0 1 0
8 1 0 1
9 1 0 3
10 3 1 3
1 0 0 2
1 2 1 0
2 3 0 0
9 0 1 0
8 1 0 1
14 1 2 2
9 1 0 1
10 1 3 1
1 3 1 3
1 1 3 0
8 0 0 3
9 3 3 3
9 3 1 3
8 3 2 2
14 2 1 0
1 2 2 2
1 0 1 3
5 2 3 3
9 3 2 3
9 3 3 3
8 0 3 0
14 0 0 2
1 3 1 3
9 3 0 0
10 0 2 0
1 2 0 1
4 3 0 0
9 0 3 0
8 2 0 2
14 2 0 1
1 3 3 0
9 0 0 3
10 3 2 3
1 0 1 2
3 2 0 2
9 2 1 2
8 1 2 1
14 1 0 0
1 1 2 1
9 3 0 2
10 2 3 2
2 1 3 1
9 1 2 1
8 1 0 0
14 0 2 1
1 2 3 0
1 0 3 2
11 0 3 2
9 2 3 2
9 2 3 2
8 1 2 1
1 0 2 0
1 0 1 3
1 2 3 2
5 2 3 2
9 2 1 2
8 2 1 1
14 1 2 2
1 1 0 3
1 2 2 0
1 2 2 1
2 3 0 0
9 0 1 0
8 2 0 2
14 2 2 0
1 0 3 3
1 3 0 2
9 3 0 1
10 1 0 1
13 3 2 3
9 3 1 3
8 3 0 0
9 1 0 3
10 3 3 3
1 3 1 1
1 2 1 2
7 2 1 3
9 3 3 3
8 0 3 0
14 0 0 3
9 1 0 0
10 0 2 0
1 0 1 1
9 1 0 2
10 2 3 2
3 0 2 1
9 1 2 1
9 1 1 1
8 3 1 3
1 3 2 0
9 2 0 1
10 1 2 1
4 0 1 0
9 0 2 0
8 0 3 3
1 1 0 1
1 2 1 0
1 0 1 2
9 1 2 0
9 0 1 0
8 3 0 3
14 3 0 2
1 1 2 3
1 2 3 0
1 3 1 1
2 3 0 0
9 0 3 0
8 0 2 2
14 2 1 3
9 3 0 2
10 2 2 2
9 0 0 1
10 1 1 1
1 1 0 0
14 0 2 0
9 0 3 0
8 0 3 3
14 3 2 2
1 0 2 1
1 3 0 0
1 2 3 3
4 0 3 1
9 1 3 1
8 2 1 2
14 2 1 1
1 1 0 0
9 0 0 2
10 2 3 2
1 2 0 2
9 2 2 2
8 2 1 1
14 1 1 2
9 0 0 0
10 0 0 0
1 3 3 1
4 1 3 3
9 3 2 3
8 3 2 2
14 2 2 1
9 0 0 2
10 2 1 2
1 3 1 0
1 0 3 3
6 0 2 0
9 0 1 0
8 1 0 1
9 2 0 0
10 0 3 0
1 3 2 2
1 2 2 3
4 0 3 0
9 0 3 0
8 0 1 1
14 1 3 2
1 0 3 1
1 1 0 3
1 1 0 0
10 0 1 0
9 0 2 0
8 0 2 2
1 2 3 0
1 2 1 3
1 3 2 1
11 0 3 1
9 1 3 1
8 1 2 2
14 2 0 0
1 0 3 2
1 1 1 1
2 1 3 1
9 1 2 1
8 1 0 0
14 0 1 1
1 1 3 3
1 1 3 0
9 3 2 2
9 2 2 2
8 1 2 1
14 1 1 0
1 1 0 2
1 3 0 1
10 3 1 3
9 3 1 3
9 3 2 3
8 0 3 0
14 0 2 2
1 1 1 0
1 3 3 3
1 0 1 1
10 0 1 3
9 3 2 3
9 3 1 3
8 3 2 2
14 2 2 1
1 3 2 2
1 1 3 3
8 0 0 3
9 3 1 3
8 3 1 1
14 1 1 0
1 0 0 2
1 1 3 3
1 0 1 1
8 3 3 2
9 2 2 2
9 2 2 2
8 2 0 0
14 0 2 2
1 1 0 0
10 0 1 1
9 1 3 1
8 1 2 2
14 2 2 0
1 1 0 1
1 3 0 3
1 3 2 2
9 1 2 2
9 2 1 2
8 2 0 0
14 0 1 1
9 1 0 2
10 2 0 2
1 2 1 3
1 2 1 0
11 0 3 0
9 0 3 0
9 0 3 0
8 0 1 1
14 1 0 2
1 1 0 3
1 0 2 1
1 2 1 0
15 0 3 1
9 1 1 1
8 2 1 2
14 2 1 0
9 2 0 1
10 1 1 1
1 2 3 2
9 3 0 3
10 3 0 3
5 2 3 1
9 1 2 1
8 1 0 0
14 0 1 1
1 3 0 3
1 0 1 2
1 2 3 0
4 3 0 0
9 0 3 0
9 0 3 0
8 0 1 1
1 3 1 2
1 2 1 0
1 2 1 3
11 0 3 3
9 3 3 3
8 3 1 1
14 1 1 0
1 0 1 3
1 3 0 1
6 1 2 2
9 2 1 2
8 2 0 0
14 0 3 1
1 3 3 3
1 2 2 0
1 1 1 2
6 3 2 2
9 2 1 2
8 1 2 1
1 2 0 2
1 1 3 0
14 0 2 2
9 2 3 2
8 2 1 1
14 1 2 3
9 2 0 0
10 0 2 0
1 3 3 1
1 2 2 2
7 0 1 0
9 0 2 0
8 3 0 3
14 3 2 2
1 1 3 3
1 1 0 1
1 3 2 0
8 1 3 0
9 0 2 0
8 0 2 2
14 2 0 0
1 0 3 3
1 2 2 2
1 3 1 1
7 2 1 2
9 2 3 2
8 0 2 0
14 0 0 1
9 3 0 0
10 0 3 0
9 0 0 2
10 2 0 2
1 2 1 3
4 0 3 2
9 2 1 2
9 2 1 2
8 1 2 1
14 1 2 0
1 1 3 2
9 1 0 1
10 1 1 1
1 0 2 3
1 3 1 2
9 2 3 2
8 2 0 0
14 0 3 3
1 3 3 0
9 2 0 1
10 1 0 1
1 2 3 2
7 2 0 2
9 2 1 2
8 3 2 3
14 3 3 1
1 1 0 2
1 1 1 3
1 1 0 0
8 0 3 0
9 0 3 0
9 0 3 0
8 1 0 1
1 2 1 2
1 3 2 0
1 2 3 3
4 0 3 3
9 3 3 3
8 1 3 1
1 1 0 3
9 0 0 0
10 0 2 0
2 3 0 2
9 2 1 2
8 1 2 1
14 1 3 3
1 2 3 2
9 3 0 1
10 1 1 1
2 1 0 2
9 2 2 2
8 2 3 3
14 3 3 2
9 0 0 1
10 1 2 1
1 2 3 3
9 3 0 0
10 0 0 0
5 1 3 0
9 0 2 0
8 2 0 2
14 2 3 0
1 3 1 3
1 1 2 2
1 3 0 1
6 3 2 2
9 2 3 2
9 2 2 2
8 2 0 0
14 0 1 1
1 1 0 0
1 2 2 2
1 1 0 3
14 0 2 2
9 2 3 2
8 2 1 1
1 0 2 3
1 2 3 2
1 2 3 0
12 3 2 2
9 2 1 2
9 2 2 2
8 2 1 1
1 3 3 2
3 0 2 2
9 2 1 2
8 2 1 1
14 1 1 3
1 3 2 0
1 0 1 2
9 2 0 1
10 1 1 1
3 2 0 2
9 2 2 2
9 2 2 2
8 3 2 3
14 3 3 1
1 2 3 3
1 2 2 0
1 1 2 2
11 0 3 0
9 0 3 0
9 0 1 0
8 1 0 1
14 1 3 3
1 0 0 1
1 2 3 2
1 1 2 0
14 0 2 0
9 0 1 0
8 0 3 3
14 3 3 1
1 1 0 0
1 0 1 2
1 3 2 3
6 3 2 2
9 2 2 2
9 2 1 2
8 1 2 1
1 1 1 2
1 2 0 3
1 2 1 0
11 0 3 3
9 3 3 3
8 1 3 1
1 1 2 0
1 2 3 2
1 3 2 3
14 0 2 3
9 3 3 3
8 1 3 1
14 1 1 2
1 2 1 3
1 0 1 1
10 0 1 3
9 3 3 3
8 2 3 2
1 1 3 3
8 3 3 3
9 3 3 3
8 2 3 2
14 2 2 3
1 0 3 2
1 1 2 1
9 1 2 1
9 1 3 1
8 1 3 3
14 3 3 0
1 2 1 3
1 2 2 1
1 3 0 2
0 1 2 1
9 1 3 1
8 0 1 0
14 0 1 2
1 2 1 0
1 1 2 1
11 0 3 3
9 3 3 3
8 2 3 2
14 2 2 1
1 0 3 2
9 1 0 3
10 3 2 3
13 2 3 2
9 2 3 2
8 1 2 1
14 1 1 2
9 1 0 1
10 1 1 1
1 1 1 3
15 0 3 1
9 1 1 1
8 2 1 2
14 2 2 1
9 3 0 3
10 3 2 3
9 0 0 2
10 2 3 2
0 0 2 3
9 3 2 3
8 1 3 1
14 1 2 2
1 3 3 1
1 1 2 3
1 1 3 0
10 3 1 0
9 0 1 0
9 0 1 0
8 0 2 2
1 2 3 1
9 1 0 0
10 0 3 0
1 3 2 3
0 1 0 1
9 1 3 1
8 2 1 2
14 2 2 3
1 3 1 1
1 3 2 2
1 2 2 0
7 0 1 1
9 1 2 1
9 1 2 1
8 3 1 3
14 3 0 1
1 1 3 2
1 0 2 3
1 3 0 0
6 0 2 3
9 3 1 3
9 3 1 3
8 1 3 1
14 1 1 3
1 3 3 1
1 2 3 0
4 1 0 1
9 1 2 1
8 1 3 3
14 3 0 2
1 1 2 3
9 3 0 1
10 1 0 1
15 0 3 3
9 3 2 3
9 3 3 3
8 3 2 2
14 2 1 0
1 1 3 3
1 2 2 2
1 3 0 1
10 3 1 1
9 1 3 1
9 1 2 1
8 1 0 0
14 0 2 1
1 1 3 0
1 3 0 2
9 2 3 2
8 1 2 1
14 1 3 0
1 3 3 1
1 0 2 3
1 3 1 2
6 1 2 1
9 1 2 1
8 1 0 0
14 0 3 3
1 3 0 1
1 1 1 0
9 0 2 2
9 2 3 2
8 2 3 3
14 3 3 1
1 2 1 0
1 0 1 2
1 3 0 3
6 3 2 2
9 2 1 2
8 1 2 1
14 1 1 0`;

const codes = [
  {
    key: "addr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] + newReg[b];
      return newReg;
    },
  },
  {
    key: "addi",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] + b;
      return newReg;
    },
  },
  {
    key: "mulr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] * newReg[b];
      return newReg;
    },
  },
  {
    key: "muli",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] * b;
      return newReg;
    },
  },
  {
    key: "banr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] & newReg[b];
      return newReg;
    },
  },
  {
    key: "bani",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] & b;
      return newReg;
    },
  },
  {
    key: "borr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] | newReg[b];
      return newReg;
    },
  },
  {
    key: "bori",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] | b;
      return newReg;
    },
  },
  {
    key: "setr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a];
      return newReg;
    },
  },
  {
    key: "seti",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = a;
      return newReg;
    },
  },
  {
    key: "gtir",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = a > newReg[b] ? 1 : 0;
      return newReg;
    },
  },
  {
    key: "gtri",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] > b ? 1 : 0;
      return newReg;
    },
  },
  {
    key: "gtrr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] > newReg[b] ? 1 : 0;
      return newReg;
    },
  },
  {
    key: "eqir",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = a === newReg[b] ? 1 : 0;
      return newReg;
    },
  },
  {
    key: "eqri",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] === b ? 1 : 0;
      return newReg;
    },
  },
  {
    key: "eqrr",
    method: (nums = [], reg = []) => {
      const [op, a, b, c] = nums;
      const newReg = [...reg];
      newReg[c] = newReg[a] === newReg[b] ? 1 : 0;
      return newReg;
    },
  },
];

function findMatchingCommands(before = [], command = "", after = []) {
  const result = codes.filter((code) => {
    return code.method(command, before).toString() === after.toString();
  });

  return result.length;
}

function readInput(raw = "") {
  const commands = raw
    .split("\n\n\n")[0]
    .split("\n\n")
    .map((command) => {
      const [before, code, after] = command.split("\n");

      const beforeReg = /Before: \[(.+)\]/
        .exec(before)[1]
        .split(",")
        .map((num) => Number(num));
      const afterReg = /After:  \[(.+)\]/
        .exec(after)[1]
        .split(",")
        .map((num) => Number(num));

      return {
        before: beforeReg,
        code: code.split(" ").map((num) => Number(num)),
        after: afterReg,
      };
    });
  const program = raw
    .split("\n\n\n\n")[1]
    .split("\n")
    .map((row) => row.split(" ").map((num) => Number(num)));

  return [commands, program];
}

function calculateMatches(raw = "") {
  const [commands] = readInput(raw);
  const matchingCount = commands
    .map(({ before, code, after }) => {
      return findMatchingCommands(before, code, after);
    })
    .filter((count) => count >= 3);

  return matchingCount.length;
}

function testLeftoverCommands(before, command, after, map) {
  return codes.filter((code) => {
    if (!map[code.key]) {
      return code.method(command, before).toString() === after.toString();
    }
  });
}

function deduceMap(raw = "") {
  const [commands, program] = readInput(raw);
  const commandMap = {};

  commands.forEach(({ before, code, after }) => {
    const op = code[0];
    const result = testLeftoverCommands(before, code, after, commandMap);
    if (result.length === 1) {
      commandMap[result[0].key] = op;
    }
  });

  codes.forEach((code) => {
    if (commandMap[code.key] == undefined) {
      commandMap[code.key] = 2;
    }
  });

  const codeMap = Object.keys(commandMap).reduce((holder, key) => {
    holder[commandMap[key]] = codes.find((code) => code.key === key);
    return holder;
  }, {});

  let reg = [0, 0, 0, 0];

  program.forEach((code) => {
    const command = codeMap[code[0]];
    reg = command.method(code, reg);
    console.log(reg);
  });

  console.log(reg);

  return reg[0];
}

const result = deduceMap(input);

console.log("result:", result);
console.timeEnd("run");
