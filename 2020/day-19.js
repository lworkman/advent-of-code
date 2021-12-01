console.log("------");

const test = `0: 1 4
1: 4 | 4 1 4
2: 4 4 | 5 5
3: 4 5 | 5 4
4: "a"
5: "b"

aaaaaaaa`;
const input = `97: 138 57 | 12 83
131: 20 83 | 74 57
7: 57 110 | 83 51
48: 17 83 | 56 57
2: 83 57
40: 57 101 | 83 93
16: 12 83 | 47 57
42: 15 83 | 66 57
62: 83 134 | 57 18
55: 124 57 | 45 83
1: 57 116 | 83 93
63: 83 1 | 57 32
83: "a"
72: 57 83 | 83 83
18: 83 57 | 57 83
67: 90 83 | 99 57
91: 83 108 | 57 72
8: 42
116: 83 18 | 57 72
41: 57 83
130: 57 84 | 83 50
26: 57 12 | 83 124
103: 134 57 | 45 83
39: 83 18 | 57 138
46: 83 47 | 57 138
129: 57 138 | 83 108
58: 108 57 | 72 83
138: 57 57 | 83 57
49: 58 57 | 26 83
133: 57 79 | 83 13
125: 83 124 | 57 72
123: 105 83 | 134 57
128: 45 57 | 2 83
24: 83 117 | 57 76
86: 57 12 | 83 85
76: 107 57 | 123 83
70: 83 37 | 57 112
51: 83 45 | 57 54
37: 47 57 | 72 83
9: 57 124 | 83 105
61: 57 19 | 83 47
75: 108 83 | 105 57
120: 83 105 | 57 18
124: 57 57 | 83 83
4: 41 83 | 12 57
0: 8 11
27: 83 41
89: 57 29 | 83 40
111: 54 83 | 18 57
12: 57 57
53: 57 52 | 83 73
90: 83 130 | 57 48
59: 55 83 | 125 57
21: 45 83 | 19 57
30: 83 7 | 57 70
88: 41 57 | 2 83
71: 60 57 | 44 83
74: 98 57 | 14 83
87: 131 57 | 30 83
73: 49 83 | 94 57
82: 83 41 | 57 138
35: 83 22 | 57 89
136: 57 105 | 83 108
94: 83 129 | 57 86
65: 83 72 | 57 108
105: 95 95
77: 83 78 | 57 92
19: 83 83
92: 95 138
104: 18 83 | 124 57
43: 83 102 | 57 103
99: 115 57 | 23 83
135: 83 93 | 57 97
23: 81 57 | 69 83
115: 83 132 | 57 25
110: 85 57 | 18 83
52: 83 3 | 57 137
3: 68 57 | 106 83
15: 35 83 | 53 57
106: 41 83 | 85 57
60: 113 83 | 24 57
93: 12 57
66: 87 83 | 133 57
34: 55 83 | 28 57
80: 83 41 | 57 85
28: 72 57 | 124 83
45: 83 57 | 83 83
38: 58 57 | 61 83
25: 4 83 | 62 57
14: 57 124 | 83 138
29: 136 83 | 121 57
64: 18 83 | 19 57
81: 122 57 | 9 83
137: 33 83 | 91 57
118: 100 57 | 120 83
98: 108 57 | 41 83
114: 83 72 | 57 45
132: 128 57 | 75 83
107: 83 134 | 57 72
50: 123 83 | 114 57
78: 41 83 | 19 57
79: 57 118 | 83 77
32: 62 57 | 109 83
10: 59 83 | 43 57
119: 39 57 | 111 83
36: 57 134 | 83 41
6: 83 2 | 57 138
69: 126 83 | 27 57
57: "b"
113: 5 83 | 38 57
112: 138 83 | 105 57
33: 108 83 | 45 57
127: 41 57 | 12 83
22: 83 34 | 57 119
20: 57 127 | 83 80
85: 95 57 | 57 83
68: 134 57 | 19 83
44: 83 63 | 57 10
47: 83 95 | 57 57
54: 57 57 | 57 83
96: 36 57 | 21 83
84: 98 57 | 46 83
117: 83 16 | 57 65
95: 83 | 57
122: 18 83 | 41 57
101: 83 41 | 57 72
121: 134 57 | 108 83
56: 82 83 | 6 57
17: 83 88 | 57 93
108: 57 95 | 83 83
109: 134 83 | 124 57
134: 95 83 | 83 57
5: 104 83 | 64 57
100: 41 83 | 138 57
126: 54 83 | 45 57
11: 42 31
13: 57 135 | 83 96
31: 83 71 | 57 67
102: 19 57 | 72 83

babbaaaabbbbbbabaaaaabbb
bbaababbbbabbaaabaabbabbbbbabbbabbbbbaba
baaabbababaabbbabbbbbaab
bbbaabbbbbbbaaababbabbabaabaababaaababbabbbababa
bababababababbbbabaaaaaababbabaababbabaaabbaabbb
bbbbaaababbaababaaabaaba
bbbabaabaabbbbabbbbabbba
aaaaabbaabbbabababbbaaaabbbbaabaabbbabbbabbbabaababbaabb
bababbabaaabbbabbbabaabaaaaaabaaaaaaaaaabbbbbabbaaaaabaaaaaabaab
aaaababaaabbbbbabbaabbaaaaaababbabaaaaabbaaababb
ababbbbaaabbaaaababaaaaabaabaabaabbbbabbaabaaaaaaababbaababaabaabaabbaaaabababbb
aababbaabaabbabababbbabb
abaaabaabaabbaaaaababaab
abbbbbaababbbabababbabab
abaababbbaabaaaaaababbbaabaaabbaababbaaabaabaabaaababbabbabbbbabaababbbbaabaabba
bbababbabaaabbababaabbaabaaaabab
aabbaaabbbbbbabaaaabbbbbbaabbbbb
abbaababbbabbabbbbbaaabababababaabbababaabbbabaaababbbab
ababbaaaababbbbbaaaaabbabbabbabbabbbbabbbbbaabaa
baaabaabbaaabbabbabbbbba
aabbbabaabbbaabbbbabbbbbaabbbabaaaabbbabbbababbaaaaaabaa
ababbbababbaabaabaaaaaba
baabaabbaababbaabaabbbabbbaaabbb
abbabbabaaaabbaaabbbbbbbbbbbaaabbaaaabbbbbaaaabaaaaabbbb
bbbbbaaaaabbbbbaababaaba
bbaabbaabaabbaabbabababb
aaaabbaabbabaabbbabaaaaa
abbbbbbaabbbbababbaabbba
aaaaabaaabbaaaabaabbabaabbbbbabaabbbabbb
abaabbbbaababbbaaababbbbaaaabaaaabaabaaabbbaaaab
bbbaaaabaaaababaababbbabbabbababaabbababbabbbbaabbbaaaaabbbbbabaaaabbbaa
bbabababaabbaababaaabbbb
aaaaaabbaabbbbaaabaaaaabaabbaaaabaabbaaabababbba
babaaaabababbaaabbabaaaaaabaabbbbbabaaababaabbbabaabbaaa
bbaabaaaaaaaaabbaaaabbaabbbabbbabaaabbbb
baabbbaabbaababaaabbbbabbaababaa
bbbbbaaaaabbbbababbaabaababbbbbababbbaaaaaaabaaabbaababbbbbabbab
babbaaaabbbabbaaabbababb
bbbaaabaaabbbbbaababaaaabaabaaab
aaaaaabbbbaababaaaaaaaabbaaababa
abaabbaabbabbabbbbbbabbaabbbbbbababbabbaaabaaaba
abbbababbabaaababaaaabaaabbbabba
babaabbbbbababbaaababbbaababaaaa
bbbaabbbbbbabaabbbbaaabb
aababbbbabbaababbbbaaababbaaaaaa
aabbbaaaababbbbabbaaaababbbbaaaa
bbababbababababaabaaaabb
aaabaabaabbababbbaababaaabbaaaababbbabaabbabbbabbbbbbabbbabaaabb
aababbaaaaaaabaaaabababb
bbbbbbbbbabaabbbaaaababbabbbaabaabaabbaaaababbabbbaabbbbbbbbbaba
bbaaaabbabbbbaabbbabaaabbbbaabbabaaaabbbaabaabba
aaaabaaabababaabbbaabaaabaaaababbaababab
abbbababaaaabaaababaaaaaaaabbaaaaabaaabbbbbbabaabbbbaaaaaababaabaabbbabb
aaabbababbbaabaababbabba
aabbabbbaaabbabaabbabaabbaaaababbbbbbabbabababbaabaaabba
aabaababaaaaaabaaabbbaaaaabbabaaababbbbaaabaaabbabbbabbaabbabbba
abbabaaabaabbaabaababbbaaabbaaaabbbbbabb
aabbbaabababbaabbbaaaabaabaaababbbbaaabb
bbbabaabababbbbbbbbaabbbaaaabbbb
babbaabbaabaaababaaabbabbbabbabaabaabbbabbbbbabbbaaaabbabaaaaaaabbbabbba
aababbabaaaabbabaaaababbbababbbbbaabbbbaaabaaaabbaaaaabaaaabbbabbaaaabababaabbaabbbbabaaaabababb
abbbbabbbbaababaaaabbabb
bbaabbaaaababbabbaaabaababbbaaaaabaaabbaaaaaabbbbbaabbbb
abbbbabbbaabbababaaaabba
aaaaaabaabbbbababbbaaabb
abaabbbabbaaabaabbbbaabababaabba
aaababbaababbbbbbabbbbbbbaaabbbb
bbbabaaaaabaabbaaabbbbabaaababbbaabbaaabbaababaa
aabbbaaaaaabbabaabbbbbab
baaaaaabaaabbaabbbabbabbabbabaabbbaabbab
abbabaaabbbaabababababbb
bbaaaaaabbbbaaaaaabbabab
abbbbbaaaaaaaabaabbbbabbbbbbbbbbbbabbbbbabaabaab
ababababbbaababbaabbaaabbbaabbaabaaabababbabaabb
aaaaaaaababababaaabaaaaa
babbbaaabbaaaabbaaaabbba
abbbbaabbbbaabbbbabaaaabbabababababaabbbaaabbbbb
bababbbabbbbaaaabbaaabbabaaaabbaababbbaa
aabaababbbaaabaaaaaabaabbaababba
babaaaabbaabbaabbabaabba
bbabbababbbaababbbabbbbaaabbabab
bbaaaabaaabbabaabbabaaaaabbaabbb
aabbabbbbabbbbabbbaaaabbbaabbbbbaabbabba
babbabbbaaaaaaaabaabaaab
abbbbbbbaaaabbbbaaaabbbababaaaaa
aababbabbbbbbaababbbbbab
aabbabaaaaabaabbaaaabbaaaabaaaaaabaabbab
ababababaabbbbababbbabaaabbbbabbbbabbbbaababbaabbbaaaaaaabbbaaaa
abaabababbbbabbbaaabbbab
baababbbaaababaabababaab
abbbaababbbbaabbaaababab
aabaabaaaabaabaababbbbaaabaaaabaaabababbbaaaabab
bbbbaabaabaabaaabaaaabaabbabbaabbabaabbabaaaaabbabaabaab
aaaabaababaababbabaaaaaabbababaabaaabbaa
babababaaaaabaabbbbbabaaabaababbabaaaaab
abababaabbabbabbbbbaaabb
bbbabbbbabbbaabbbbaaabbbbbbbaaaabbaaaabbabbaababaabaabaa
abbbaaaabbbbaaabbabbabbbbabbbbabbaaaaabb
bbabaaababbbababbbaabaaa
bbaaabaababbaaaabbbabbabaaababaabababaab
babababbbabaaabaaabbbabaababbbbb
bbbbbbbbbababbbbaaaabaaabbababba
aaaaaabbbbbbbbbbababbbaa
bbaabababbaababbbaaabbbb
bbbbbaaaabbaaaabbbaaabab
aaaabaaaabaabbbababababaaaabbbaa
abbabbabaaabbababbbabbba
aaaabababaaaababaabaaaba
aaababbaababaaababbabbabbbaaabaaabbbbaaabaaababbbaaaaaba
aaaaabaaabababbabbbbbbbbbbaaaabbabaabbababaaabab
abbbbbbaabbbbabbbabababb
babbaaaaabaaababaabbbabbbaabaaaa
bababbbabbabaaababbaaabb
ababababbbaaaabaabbaabbbabbbabaa
bbbbaabaaababbabbbaabbab
aabbaabababaaabababbbbaaababaaba
aaaababaaaaaabaabaababab
bbabaabbbbbaabaababbabab
babaabbbbbbaabbaaabbbabb
babbbababaaabaabaababbabaaababaa
aaaabaaabbaaaabababaabaababaabab
aaaababbbbbaaabaaabbabbbbaaabaabbbaabbbb
abababaabaabbabaababababbabbabaa
baaabaabaaababbaaabababa
abababaaabbabaabbbbaaaab
abbbbaabaaaabbaabaababbbbbaabaabaabbbaababaabbbbabaaaaaaabaabaabbbbabbaabaabbabbaaabaabbabaaaaba
bababbbbabababaabbbbbabb
aaaaabaaabbbbbbabababababaababbb
aabaababbbbaababaababbaaabbbbabbaabbbaba
abbbababaaaabbbbbbbbbaababaabaaababababaabbababaaaabaaab
aaaabaabaaabaabbbbabbabbaabaaaabbabbbbba
bbbabbabbbbaabbbbbbababa
aaabaaaaaababbbaabaaaaba
abaaaaabbaaaabaaabaaaabb
baabbababbaababbbbaabbaababbaaaabaaaababaaabbbaa
bbbbaabbaaabaaaabbababaa
abbaababbbbbbbbbbbbbabaabaababab
abaabbabbaabbbbbababaaba
abbbbbaabbbbaababbaabbaabaabbaaaaabbabab
babbaaabbbaababbbbbbabbbbaabbabbababaaba
aabbbbabaaabbabaabbbaaab
bbabbabaabbbbabbabbababb
ababbaabaaababbaaabbaababbbabaaabbaaabbbabaabbbbbaababaabbaaabbbaabbabab
abbbaaaabbabbabbabbababa
bbbbbaabbbbbabbaaabaaaab
bbabbaaaaaaabaabbabbaaaaaaaabbabaabbabba
baabaabbaabbbbaaaabbbabaaabaabaa
abbabaabbaabbabaaaaabbbabaaaaabb
ababbbbabababababbbaaabbbabbbbbabaaababbbbababbababaaabb
bbbabaababbbbbbbaaababbaabbabbaabbabbabbabbbabbb
ababbbbbaabbabbbbaabaaababbabbbbaabaaaaaabbbbbaa
aaabaabbabaabaababbaabbbabaabbbababbaababbbbabbabaabaabbbabbbabbaabababbaaaaabbbbbbaabbb
baaaaaabbbbaababababbbab
baaaaaababbbababaaabbaab
ababbababbbaabababbbabba
babbaaaaaaabaabbbaabbabaaabbbaba
babaaaaabbabaaaabaabbbbbbbbbabbb
bbbaaaaaababbaababaaabaa
abaabbbabbabaaababbabbabbaabbabb
bbbabbabababbaaaabbaaaababaabaaa
bbbababbaaaaabaabbbbabaaabbbbbbbabbaaaabababaabaabbbabaa
bbaaabbaaabaabbbbaabbbbaababbbaababbbaaa
aababbbbabababaaaabaaaab
aabbaabaabbbaabaabbaaaabbbbbbaababbbbbbaabaaaabb
bbbaabaabbabbbbababaababaabaabba
abbbaababbbaabbabaababab
aababbaababbabbbaabababa
bbbaababaaaabaabbababababbbbaaabbbbabaababaabbab
babaaaabaabbbbbaabbbbbaaaaaaaabbbbbaabbaaababaabbabbaaab
aaaabaabaaabbabaababbaaabbabbbaabbbabbbaaaabbbbbaabbabba
babbbaaaaabbbaabaaaaaabaaaaaabbaabaaabbbaabaaaba
aabbbaaabbabababaabbabaaaaabbaaababbabaa
bbaaabbabbbabaaaabbaabaaabaaabba
baabbbababbababbbaaabababaabaababbaaababbabbbbaa
aabaababbbaaaabbbaabbabababaaabaabaabaaa
aaaabaaaabbaababaabbbbaa
bbbbababbabaabbababbaababbbbbbbaabbaabbabbaabbab
abbbbbaabbbbaabaabbbbbab
bbaabbaabbaaabbaabaaaaaa
aaaababbbbbbbaabaabaabba
bbaaaaaabbbabbabbaabaaaa
bbbababbaaaaaaabaabbabbabaabaaaaaabaaaba
bbaabaabbaaabbbaaaabaaab
bbababaabbbabbabaaababbbbbabaabbaaaaabaaaaaababa
bbaababaabbaabaaabababbbbaaabbbbbaaaaabbbbabababbabbabbaaaaaaaba
bbabababbabaaaababbababa
bbabaabbbaaabbbaaaababab
abbbaababbaaaababaaabbabaabaaababbbbbbba
ababbbbaaaaababaaaaabbba
ababbbbbaabbbaaaaabbabba
bbabbabbabbaaaabbbbababa
abbabbbbbbabaaaaaababbbbababbababbaaabaa
bbbbbbbbaabbabaabbabbbab
bbababbabaabaabbabbaababbabbbbbbababaaaababaabaa
aaaababbaaabbbbaaabbaabb
baaabbabbababaaabaabaaba
baaaabbaabbaaaaabaaabbaa
aabbabaaabbbbabaababbaaabbabbbbababbabab
baaaaaabaabbbaabaababbaaaababbbbbbaaababbabbaababababbab
babaaaabbabaabababaaabbabbabbbababaabbbb
baabbabaaababbbaababbabb
aaaaaabababbbaabbaaabaabbaababaaabaaaaababbbbaaaabbbaaba
bbaaaabbbbabaaaabbbbbabb
abaabbaabbabbbbbbaaabbbabbabaaaabbbaaabbbbaabbab
ababaaaababbbbbabaabaaababbbaabbabaaaabbbaabababaaababaababbbbaabaababaabbbabaaa
babbbabaabbabaabbbaabbba
ababababbbabbabababbaaab
abababababababbabbababbbbababaabababbbabaaabbaabababaaaa
bbbabbaabababaaabaaabaabaabbaababababbaa
abbbababaaaabaaaabbabaaabaaaabbbabbbabbaaabaaaaaaaabababbaaaaaaa
bababaaaaaababbababbabaa
aaababbabbaaaabbabaaabab
bbbabbabbaabbbbaaaaabbab
abababbaabaababaabbaababbbaaaababaaabbababbababa
babaabbbbabbaaaabbaaaaab
aaaaaabbbbbbbaabaaaaabaaabbbbbbaaabbbbabbaabaaabbabaabab
abaabbaabbbbbbbbaaaaaaababaabbbabbabaaaa
baabbbbaaaabbababaabaaaa
aabaababaaaabbaaaababaaa
aabbabaabbbabaabbaabbbaababaabaa
aaaaaabaabbbaabaabaaabba
aaaaaabaabaaaaabababbabbbabaabbaaabbbbaaaaabbaaaabbaabaa
abbbaabbbaabbbbaabbbaaaabbbaaababbbbaabaabbababbbbbbaabbaaaabaab
baabbbbbabaabbbbabababaabbbaaaba
aaaabbaaabbabbabbabaabbb
bbaaabbabaaabbbaaabbaaabbaaaabaa
babbaaaaabaabbbaabaabbbaabbbbaaa
bbaaabbabbbaababbbabbabbbaabbaababaaabbaaabbabba
abaabbaabbabaabbbabbbaaaabaaaabb
abbabababbbabbabbabbabbbbbaaaaaaaaaabbbbabbabbaaaabbabaa
bbaabaabababbbbbaabababa
aabbbaabbabbbaabaabaaaaa
bbbbbbabaabaababbaaababb
bbbbbaabaaabbaababbbbabbaabbbbbbaabaaabbabaababaaabbababbbbbababbbbbabbabaababbaabbabaab
abbaaaabbbabbbbabbbbaabaabbbabaa
ababaaaabbabaabbabbbbaabbbbbbbabbaaabaaa
abbaaaaaaababbbabbaabaaa
bababaaaabbbbababaabbbabbbbbabab
aabbbbabaababbaaaabaaaaa
babbbaabbbabbaabaababbabaaaaabab
aaaaaababbaabaabbbababbaaaaabbbb
bababaabbaaaaaaaabbbabba
aaabaaabbabababbbbbbabbaaaabaaababbbaabbaaaaababbaaabbbbbbaabbbbabbabababaabaabb
bbabbbbaaaaaabaaababaaba
aaaabbbaaaaababbaabaaababababababbbbaababaaaaaaaababaababbbbababaaaabaaaaaabaabb
abbababaaababaabababbabb
aababbaabbbbabbaababbabb
bbbbabaabababaaaaabbbabb
babaababbbbbaabaababaabbbbbabaab
aabbbbaaaabbababaaaabbaabbbbaabaababbaaaabbaabab
baabbbababaabbaaabbbbaabaabaaabbaabbbabb
bbaaabbaabbabaabbbababaa
baaaababababbbbbbbaaababababbaaabbabbaaaaaaabbbbbabbbaaaababbaab
babbabbbaababbbbbaababbb
bababaaabbaabaabbaabaabbaaababbabbbbaabbaaababab
bbabaaabbababbbbbbbabbabaababbbaaaababaa
aaabbababbaaaababbaabbbb
bbbbaaababaabbbabbbabbbb
bbababbaabbaaaababaaaaaa
bbbaaabaaaaabaabbabababb
aaabaaaabbbbaabbbaaaaaaa
bbabbaabaaabbbbaaaababba
bbbaaaaaabbbaabaaababbaaaaabaaab
abaaabbbababaaabbbbaaababaaabaabaabaabbabbbabbabbbaaaaaaaabbabaa
aabbabbaababbabbbbbbbbba
baabbbbaaabababbabaabaab
aaaababaaabbbbbaaaaaabbb
bbbbbaaabababbbbababababaaabaaab
ababbbbbbbababbabbabbbbaabbababa
babaaabaaaabbabaaabbaabb
abaabababbbabbabbbbbabaababaabab
abbbababbabababababaabba
bbaabbaabaabbbababababbabababbbabaabaabbaabbabab
bbaababaaabbbaababbbbbbaaaaabbba
baaabbabbbbabbabbbaabaaa
abbabbbbbbbaabababaaabaa
baaaabbbabaabbaaabbaabaa
abbbabbbbbbbabbbaabaaabbbbbbaabbbaabbabbbaaabbab
bbbabaababbaababbbabaaba
ababbbbabaaabbbaaaabaaaa
ababbaaabbabaaaabaababba
abbaaaabbbaabaabbabbabab
aaabbbbbabbbaabbbaaabbbbabaaaaab
bababbbbbaaabbabbbaaabab
babbbaabbbabbbbaabbbaabb
bbaababbbbabbabaaabaababaababaaa
abaababaabbabbaaabbbbaaa
bbababbabbbbbaaabbababaa
aaaaaabaaabbbaaaabaaaabaaaabaaba
bbababbabaaabbbababbabaa
bbbabbabbbbababbabbbaaaaaabbbaaaabbbbaaabbbaababbbbaaaaababbaaababbaabaa
bbbbbaabaaaaabbaaaaabbaabbaaabbaabbabaabbaaaaabb
bbbbabbabbabaaabababaaba
aaabaabbbbaabaababbabbaabbbbbaabaababbbaabbaabbabbabbbaaabbbabaababbbbbb
abaabbbabbbbaabaabbaaaaaaabaaaab
abbbbbbbabaabababaaabbbabaaabbbabaaababbbabaaabbabbbabaa
abbabaaabaaabbbaaababaaa
baabbbbaaaababbaaabaababababbbabbabbaaba
bbaabababbaabbaaabbbabbbaaabbaaa
abbaababbabbbbbbabbaabaa
bbaababaaaabbabaaababbabbbaababbbababaabbbbbbabb
bbbbbaabaaaabaaabaaaabab
abbabbaaabbbaaaabbbbbaba
bbbbaabaaabbaaabbbbbbaabaabbabaaaababaaa
abbabbabaabbabbbabbbbabaabbbabbabababbab
aabbaaabbbabaabbaaaabbbb
bbabbaaababaaababbbaababbbaabbbbaabbaabbbbbbbaba
abababababbaaaaaabbaaaabbbbbbabbaabaaaba
bbbaabbababaaabaaaabbbbababbbbabbbbbabababaaabbb
bbaababbabbaaaaaabbbababbababbab
bbabbaaaaaaabbaaababaaaa
aababbabbbaaabaabbbbabbb
aaababbabaabbbbabbabaabbabbbababbbbbaaaaaabbbbbabaaaaaaa
aabbaaabaaababbbbababbbbabaabaaa
aaaaabababbbbbaabbbaaababbbaaaaaabbaaaab
aaaaaabbbbbabaababaababb
ababbbbbaaaaaababbbbbaba
baabbabaababbaabbbabbbbaaaaabaabaabbabbabaaaabab
abbbababbbbbaaaaabbbbbabbbabaaababbaaabaababbabbaaaabbaabbaabaaabaabbbbb
abbbbabaaabbbbabaabbbaaa
bbabaaababbabbaabababaaababaabaa
abababababbabbbbaaabbbaa
aababbabbabbbababaaaababbbbbbbaaabbaabbb
abababbaabbbbabbbabaabbbabbbaaaabbabbaaaabaaaaab
bbbbabaaababbabaaaabbabaabbabaaaabaababb
aabbaaabbababaaaaabaaaab
abbbababaabbbbbabbabbababbabbaabbbaaaabbbbbbabaababaabab
aabbabbababababbabbaabbbabbbabbb
babababbabaaaabaabbbaaabbbaabbbb
babaaabababaaaabaabbabbbababababbbababbabbbaaabbaabbabab
babaaaabbbabbbbaabaabaab
baaabbbabaabbbbabaaabaaa
ababbbbbabaabababaabbaabbbbbbbabbababaab
aaabaabbaaababbbbabbabab
aaaaaabaaaaabaabbaabbababbbabbaabaaaaabbbaabbbbbbaaaabab
aabaaabbbaaaabaabaaabbbbbabbaaabaaaabababbbaabbbbababaababaaabbbabaaaababaabbabb
aaaabaabaabbabaababbbaaa
babaabbbaabaabbaaabbaabbaabaabaa
bbabbbbbababababaabbbbbabaaaaabbabbababa
aabbbaaaaaaabbaaaabababb
babbbaaabbabbbbaaaaabaaabbaabbbb
aabaabbbbbaaabaabababbbaabaaaaab
bbbaababbbababbabbaababaaababbaabaaaabab
bbaabaabbaabaabaabbaaabb
aababbaabbaaabbbaaabbabaaabaabbbaaababbabababbabbbaaaabb
abaabbaabbabbaabbbbabbabbaababaaababbabb
baabbbaabbbbbaabbabbabaa
aaaaaaaaababbaabaababbbaababababaaaaaaabaabbbbaa
bbabaaabbabababaaaabbabababbbbaaabbbbaaa
baabbaabaabbaaabbbababaa
baababbbaaabbaabbbaaabab
abaaababaaabababaabaaaab
aaabbbbaabbbbabaaaabbababbbababbabbabaababbbbbbaaabbbabbbaababbbbaaabbbb
baaababbaababbbabbbbaaaabbbababbbbbabbaa
abbbbaaabaaabbabaababbbabbbbbbbabaabbbbbabbaaabbabbbbaaa
bbabaaabaaaabababbabbaaaaaaaaaabaaabbbbb`;
const test2 = `42: 9 14 | 10 1
9: 14 27 | 1 26
10: 23 14 | 28 1
1: "a"
5: 1 14 | 15 1
19: 14 1 | 14 14
12: 24 14 | 19 1
16: 15 1 | 14 14
31: 14 17 | 1 13
6: 14 14 | 1 14
2: 1 24 | 14 4
0: 8 11
13: 14 3 | 1 12
15: 1 | 14
17: 14 2 | 1 7
23: 25 1 | 22 14
28: 16 1
4: 1 1
20: 14 14 | 1 15
3: 5 14 | 16 1
27: 1 6 | 14 18
14: "b"
21: 14 1 | 1 14
25: 1 1 | 1 14
22: 14 14
8: 42 | 42 8
11: 42 31 | 42 11 31
26: 14 22 | 1 20
18: 15 15
7: 14 5 | 1 21
24: 14 1

abbbbbabbbaaaababbaabbbbabababbbabbbbbbabaaaa
bbabbbbaabaabba
babbbbaabbbbbabbbbbbaabaaabaaa
aaabbbbbbaaaabaababaabababbabaaabbababababaaa
bbbbbbbaaaabbbbaaabbabaaa
bbbababbbbaaaaaaaabbababaaababaabab
ababaaaaaabaaab
ababaaaaabbbaba
baabbaaaabbaaaababbaababb
abbbbabbbbaaaababbbbbbaaaababb
aaaaabbaabaaaaababaa
aaaabbaaaabbaaa
aaaabbaabbaaaaaaabbbabbbaaabbaabaaa
babaaabbbaaabaababbaabababaaab
aabbbbbaabbbaaaaaabbbbbababaaaaabbaaabba`;
const input2 = `97: 138 57 | 12 83
131: 20 83 | 74 57
7: 57 110 | 83 51
48: 17 83 | 56 57
2: 83 57
40: 57 101 | 83 93
16: 12 83 | 47 57
42: 15 83 | 66 57
62: 83 134 | 57 18
55: 124 57 | 45 83
1: 57 116 | 83 93
63: 83 1 | 57 32
83: "a"
72: 57 83 | 83 83
18: 83 57 | 57 83
67: 90 83 | 99 57
91: 83 108 | 57 72
116: 83 18 | 57 72
41: 57 83
130: 57 84 | 83 50
26: 57 12 | 83 124
103: 134 57 | 45 83
39: 83 18 | 57 138
46: 83 47 | 57 138
129: 57 138 | 83 108
58: 108 57 | 72 83
138: 57 57 | 83 57
49: 58 57 | 26 83
133: 57 79 | 83 13
125: 83 124 | 57 72
123: 105 83 | 134 57
128: 45 57 | 2 83
24: 83 117 | 57 76
86: 57 12 | 83 85
76: 107 57 | 123 83
70: 83 37 | 57 112
51: 83 45 | 57 54
37: 47 57 | 72 83
9: 57 124 | 83 105
61: 57 19 | 83 47
75: 108 83 | 105 57
120: 83 105 | 57 18
124: 57 57 | 83 83
4: 41 83 | 12 57
0: 8 11
27: 83 41
89: 57 29 | 83 40
111: 54 83 | 18 57
12: 57 57
53: 57 52 | 83 73
90: 83 130 | 57 48
59: 55 83 | 125 57
21: 45 83 | 19 57
30: 83 7 | 57 70
88: 41 57 | 2 83
71: 60 57 | 44 83
74: 98 57 | 14 83
87: 131 57 | 30 83
73: 49 83 | 94 57
82: 83 41 | 57 138
35: 83 22 | 57 89
136: 57 105 | 83 108
94: 83 129 | 57 86
65: 83 72 | 57 108
105: 95 95
77: 83 78 | 57 92
19: 83 83
92: 95 138
104: 18 83 | 124 57
43: 83 102 | 57 103
99: 115 57 | 23 83
135: 83 93 | 57 97
23: 81 57 | 69 83
115: 83 132 | 57 25
110: 85 57 | 18 83
52: 83 3 | 57 137
3: 68 57 | 106 83
15: 35 83 | 53 57
106: 41 83 | 85 57
60: 113 83 | 24 57
93: 12 57
66: 87 83 | 133 57
34: 55 83 | 28 57
80: 83 41 | 57 85
28: 72 57 | 124 83
45: 83 57 | 83 83
38: 58 57 | 61 83
25: 4 83 | 62 57
14: 57 124 | 83 138
29: 136 83 | 121 57
64: 18 83 | 19 57
81: 122 57 | 9 83
137: 33 83 | 91 57
118: 100 57 | 120 83
98: 108 57 | 41 83
114: 83 72 | 57 45
132: 128 57 | 75 83
107: 83 134 | 57 72
50: 123 83 | 114 57
78: 41 83 | 19 57
79: 57 118 | 83 77
32: 62 57 | 109 83
10: 59 83 | 43 57
119: 39 57 | 111 83
36: 57 134 | 83 41
6: 83 2 | 57 138
69: 126 83 | 27 57
57: "b"
113: 5 83 | 38 57
112: 138 83 | 105 57
33: 108 83 | 45 57
127: 41 57 | 12 83
22: 83 34 | 57 119
20: 57 127 | 83 80
85: 95 57 | 57 83
68: 134 57 | 19 83
44: 83 63 | 57 10
47: 83 95 | 57 57
54: 57 57 | 57 83
96: 36 57 | 21 83
84: 98 57 | 46 83
117: 83 16 | 57 65
95: 83 | 57
122: 18 83 | 41 57
101: 83 41 | 57 72
121: 134 57 | 108 83
56: 82 83 | 6 57
17: 83 88 | 57 93
108: 57 95 | 83 83
109: 134 83 | 124 57
134: 95 83 | 83 57
5: 104 83 | 64 57
100: 41 83 | 138 57
126: 54 83 | 45 57
13: 57 135 | 83 96
31: 83 71 | 57 67
102: 19 57 | 72 83
8: 42 | 42 8
11: 42 31 | 42 11 31

babbaaaabbbbbbabaaaaabbb
bbaababbbbabbaaabaabbabbbbbabbbabbbbbaba
baaabbababaabbbabbbbbaab
bbbaabbbbbbbaaababbabbabaabaababaaababbabbbababa
bababababababbbbabaaaaaababbabaababbabaaabbaabbb
bbbbaaababbaababaaabaaba
bbbabaabaabbbbabbbbabbba
aaaaabbaabbbabababbbaaaabbbbaabaabbbabbbabbbabaababbaabb
bababbabaaabbbabbbabaabaaaaaabaaaaaaaaaabbbbbabbaaaaabaaaaaabaab
aaaababaaabbbbbabbaabbaaaaaababbabaaaaabbaaababb
ababbbbaaabbaaaababaaaaabaabaabaabbbbabbaabaaaaaaababbaababaabaabaabbaaaabababbb
aababbaabaabbabababbbabb
abaaabaabaabbaaaaababaab
abbbbbaababbbabababbabab
abaababbbaabaaaaaababbbaabaaabbaababbaaabaabaabaaababbabbabbbbabaababbbbaabaabba
bbababbabaaabbababaabbaabaaaabab
aabbaaabbbbbbabaaaabbbbbbaabbbbb
abbaababbbabbabbbbbaaabababababaabbababaabbbabaaababbbab
ababbaaaababbbbbaaaaabbabbabbabbabbbbabbbbbaabaa
baaabaabbaaabbabbabbbbba
aabbbabaabbbaabbbbabbbbbaabbbabaaaabbbabbbababbaaaaaabaa
ababbbababbaabaabaaaaaba
baabaabbaababbaabaabbbabbbaaabbb
abbabbabaaaabbaaabbbbbbbbbbbaaabbaaaabbbbbaaaabaaaaabbbb
bbbbbaaaaabbbbbaababaaba
bbaabbaabaabbaabbabababb
aaaabbaabbabaabbbabaaaaa
abbbbbbaabbbbababbaabbba
aaaaabaaabbaaaabaabbabaabbbbbabaabbbabbb
abaabbbbaababbbaaababbbbaaaabaaaabaabaaabbbaaaab
bbbaaaabaaaababaababbbabbabbababaabbababbabbbbaabbbaaaaabbbbbabaaaabbbaa
bbabababaabbaababaaabbbb
aaaaaabbaabbbbaaabaaaaabaabbaaaabaabbaaabababbba
babaaaabababbaaabbabaaaaaabaabbbbbabaaababaabbbabaabbaaa
bbaabaaaaaaaaabbaaaabbaabbbabbbabaaabbbb
baabbbaabbaababaaabbbbabbaababaa
bbbbbaaaaabbbbababbaabaababbbbbababbbaaaaaaabaaabbaababbbbbabbab
babbaaaabbbabbaaabbababb
bbbaaabaaabbbbbaababaaaabaabaaab
aaaaaabbbbaababaaaaaaaabbaaababa
abaabbaabbabbabbbbbbabbaabbbbbbababbabbaaabaaaba
abbbababbabaaababaaaabaaabbbabba
babaabbbbbababbaaababbbaababaaaa
bbbaabbbbbbabaabbbbaaabb
aababbbbabbaababbbbaaababbaaaaaa
aabbbaaaababbbbabbaaaababbbbaaaa
bbababbababababaabaaaabb
aaabaabaabbababbbaababaaabbaaaababbbabaabbabbbabbbbbbabbbabaaabb
aababbaaaaaaabaaaabababb
bbbbbbbbbabaabbbaaaababbabbbaabaabaabbaaaababbabbbaabbbbbbbbbaba
bbaaaabbabbbbaabbbabaaabbbbaabbabaaaabbbaabaabba
aaaabaaabababaabbbaabaaabaaaababbaababab
abbbababaaaabaaababaaaaaaaabbaaaaabaaabbbbbbabaabbbbaaaaaababaabaabbbabb
aaabbababbbaabaababbabba
aabbabbbaaabbabaabbabaabbaaaababbbbbbabbabababbaabaaabba
aabaababaaaaaabaaabbbaaaaabbabaaababbbbaaabaaabbabbbabbaabbabbba
abbabaaabaabbaabaababbbaaabbaaaabbbbbabb
aabbbaabababbaabbbaaaabaabaaababbbbaaabb
bbbabaabababbbbbbbbaabbbaaaabbbb
babbaabbaabaaababaaabbabbbabbabaabaabbbabbbbbabbbaaaabbabaaaaaaabbbabbba
aababbabaaaabbabaaaababbbababbbbbaabbbbaaabaaaabbaaaaabaaaabbbabbaaaabababaabbaabbbbabaaaabababb
abbbbabbbbaababaaaabbabb
bbaabbaaaababbabbaaabaababbbaaaaabaaabbaaaaaabbbbbaabbbb
abbbbabbbaabbababaaaabba
aaaaaabaabbbbababbbaaabb
abaabbbabbaaabaabbbbaabababaabba
aaababbaababbbbbbabbbbbbbaaabbbb
bbbabaaaaabaabbaaabbbbabaaababbbaabbaaabbaababaa
aabbbaaaaaabbabaabbbbbab
baaaaaabaaabbaabbbabbabbabbabaabbbaabbab
abbabaaabbbaabababababbb
bbaaaaaabbbbaaaaaabbabab
abbbbbaaaaaaaabaabbbbabbbbbbbbbbbbabbbbbabaabaab
ababababbbaababbaabbaaabbbaabbaabaaabababbabaabb
aaaaaaaababababaaabaaaaa
babbbaaabbaaaabbaaaabbba
abbbbaabbbbaabbbbabaaaabbabababababaabbbaaabbbbb
bababbbabbbbaaaabbaaabbabaaaabbaababbbaa
aabaababbbaaabaaaaaabaabbaababba
babaaaabbaabbaabbabaabba
bbabbababbbaababbbabbbbaaabbabab
bbaaaabaaabbabaabbabaaaaabbaabbb
aabbabbbbabbbbabbbaaaabbbaabbbbbaabbabba
babbabbbaaaaaaaabaabaaab
abbbbbbbaaaabbbbaaaabbbababaaaaa
aababbabbbbbbaababbbbbab
aabbabaaaaabaabbaaaabbaaaabaaaaaabaabbab
ababababaabbbbababbbabaaabbbbabbbbabbbbaababbaabbbaaaaaaabbbaaaa
abaabababbbbabbbaaabbbab
baababbbaaababaabababaab
abbbaababbbbaabbaaababab
aabaabaaaabaabaababbbbaaabaaaabaaabababbbaaaabab
bbbbaabaabaabaaabaaaabaabbabbaabbabaabbabaaaaabbabaabaab
aaaabaababaababbabaaaaaabbababaabaaabbaa
babababaaaaabaabbbbbabaaabaababbabaaaaab
abababaabbabbabbbbbaaabb
bbbabbbbabbbaabbbbaaabbbbbbbaaaabbaaaabbabbaababaabaabaa
abbbaaaabbbbaaabbabbabbbbabbbbabbaaaaabb
bbabaaababbbababbbaabaaa
bbaaabaababbaaaabbbabbabaaababaabababaab
babababbbabaaabaaabbbabaababbbbb
bbbbbbbbbababbbbaaaabaaabbababba
aaaaaabbbbbbbbbbababbbaa
bbaabababbaababbbaaabbbb
bbbbbaaaabbaaaabbbaaabab
aaaabaaaabaabbbababababaaaabbbaa
abbabbabaaabbababbbabbba
aaaabababaaaababaabaaaba
aaababbaababaaababbabbabbbaaabaaabbbbaaabaaababbbaaaaaba
aaaaabaaabababbabbbbbbbbbbaaaabbabaabbababaaabab
abbbbbbaabbbbabbbabababb
babbaaaaabaaababaabbbabbbaabaaaa
bababbbabbabaaababbaaabb
ababababbbaaaabaabbaabbbabbbabaa
bbbbaabaaababbabbbaabbab
aabbaabababaaabababbbbaaababaaba
aaaababaaaaaabaabaababab
bbabaabbbbbaabaababbabab
babaabbbbbbaabbaaabbbabb
babbbababaaabaabaababbabaaababaa
aaaabaaabbaaaabababaabaababaabab
aaaababbbbbaaabaaabbabbbbaaabaabbbaabbbb
abababaabaabbabaababababbabbabaa
baaabaabaaababbaaabababa
abababaaabbabaabbbbaaaab
abbbbaabaaaabbaabaababbbbbaabaabaabbbaababaabbbbabaaaaaaabaabaabbbbabbaabaabbabbaaabaabbabaaaaba
bababbbbabababaabbbbbabb
aaaaabaaabbbbbbabababababaababbb
aabaababbbbaababaababbaaabbbbabbaabbbaba
abbbababaaaabbbbbbbbbaababaabaaababababaabbababaaaabaaab
aaaabaabaaabaabbbbabbabbaabaaaabbabbbbba
bbbabbabbbbaabbbbbbababa
aaabaaaaaababbbaabaaaaba
abaaaaabbaaaabaaabaaaabb
baabbababbaababbbbaabbaababbaaaabaaaababaaabbbaa
bbbbaabbaaabaaaabbababaa
abbaababbbbbbbbbbbbbabaabaababab
abaabbabbaabbbbbababaaba
abbbbbaabbbbaababbaabbaabaabbaaaaabbabab
babbaaabbbaababbbbbbabbbbaabbabbababaaba
aabbbbabaaabbabaabbbaaab
bbabbabaabbbbabbabbababb
ababbaabaaababbaaabbaababbbabaaabbaaabbbabaabbbbbaababaabbaaabbbaabbabab
abbbaaaabbabbabbabbababa
bbbbbaabbbbbabbaaabaaaab
bbabbaaaaaaabaabbabbaaaaaaaabbabaabbabba
baabaabbaabbbbaaaabbbabaaabaabaa
abbabaabbaabbabaaaaabbbabaaaaabb
ababbbbabababababbbaaabbbabbbbbabaaababbbbababbababaaabb
bbbabaababbbbbbbaaababbaabbabbaabbabbabbabbbabbb
ababbbbbaabbabbbbaabaaababbabbbbaabaaaaaabbbbbaa
aaabaabbabaabaababbaabbbabaabbbababbaababbbbabbabaabaabbbabbbabbaabababbaaaaabbbbbbaabbb
baaaaaabbbbaababababbbab
baaaaaababbbababaaabbaab
ababbababbbaabababbbabba
babbaaaaaaabaabbbaabbabaaabbbaba
babaaaaabbabaaaabaabbbbbbbbbabbb
bbbaaaaaababbaababaaabaa
abaabbbabbabaaababbabbabbaabbabb
bbbabbabababbaaaabbaaaababaabaaa
bbbababbaaaaabaabbbbabaaabbbbbbbabbaaaabababaabaabbbabaa
bbaaabbaaabaabbbbaabbbbaababbbaababbbaaa
aababbbbabababaaaabaaaab
aabbaabaabbbaabaabbaaaabbbbbbaababbbbbbaabaaaabb
bbbaabaabbabbbbababaababaabaabba
abbbaababbbaabbabaababab
aababbaababbabbbaabababa
bbbaababaaaabaabbababababbbbaaabbbbabaababaabbab
babaaaabaabbbbbaabbbbbaaaaaaaabbbbbaabbaaababaabbabbaaab
aaaabaabaaabbabaababbaaabbabbbaabbbabbbaaaabbbbbaabbabba
babbbaaaaabbbaabaaaaaabaaaaaabbaabaaabbbaabaaaba
aabbbaaabbabababaabbabaaaaabbaaababbabaa
bbaaabbabbbabaaaabbaabaaabaaabba
baabbbababbababbbaaabababaabaababbaaababbabbbbaa
aabaababbbaaaabbbaabbabababaaabaabaabaaa
aaaabaaaabbaababaabbbbaa
bbbbababbabaabbababbaababbbbbbbaabbaabbabbaabbab
abbbbbaabbbbaabaabbbbbab
bbaabbaabbaaabbaabaaaaaa
aaaababbbbbbbaabaabaabba
bbaaaaaabbbabbabbaabaaaa
bbbababbaaaaaaabaabbabbabaabaaaaaabaaaba
bbaabaabbaaabbbaaaabaaab
bbababaabbbabbabaaababbbbbabaabbaaaaabaaaaaababa
bbaababaabbaabaaabababbbbaaabbbbbaaaaabbbbabababbabbabbaaaaaaaba
bbabababbabaaaababbababa
bbabaabbbaaabbbaaaababab
abbbaababbaaaababaaabbabaabaaababbbbbbba
ababbbbaaaaababaaaaabbba
ababbbbbaabbbaaaaabbabba
bbabbabbabbaaaabbbbababa
abbabbbbbbabaaaaaababbbbababbababbaaabaa
bbbbbbbbaabbabaabbabbbab
bbababbabaabaabbabbaababbabbbbbbababaaaababaabaa
aaaababbaaabbbbaaabbaabb
baaabbabbababaaabaabaaba
baaaabbaabbaaaaabaaabbaa
aabbabaaabbbbabaababbaaabbabbbbababbabab
baaaaaabaabbbaabaababbaaaababbbbbbaaababbabbaababababbab
babaaaabbabaabababaaabbabbabbbababaabbbb
baabbabaaababbbaababbabb
aaaaaabababbbaabbaaabaabbaababaaabaaaaababbbbaaaabbbaaba
bbaaaabbbbabaaaabbbbbabb
abaabbaabbabbbbbbaaabbbabbabaaaabbbaaabbbbaabbab
ababaaaababbbbbabaabaaababbbaabbabaaaabbbaabababaaababaababbbbaabaababaabbbabaaa
babbbabaabbabaabbbaabbba
ababababbbabbabababbaaab
abababababababbabbababbbbababaabababbbabaaabbaabababaaaa
bbbabbaabababaaabaaabaabaabbaababababbaa
abbbababaaaabaaaabbabaaabaaaabbbabbbabbaaabaaaaaaaabababbaaaaaaa
bababaaaaaababbababbabaa
aaababbabbaaaabbabaaabab
bbbabbabbaabbbbaaaaabbab
abababbaabaababaabbaababbbaaaababaaabbababbababa
babaabbbbabbaaaabbaaaaab
aaaaaabbbbbbbaabaaaaabaaabbbbbbaaabbbbabbaabaaabbabaabab
abaabbaabbbbbbbbaaaaaaababaabbbabbabaaaa
baabbbbaaaabbababaabaaaa
aabaababaaaabbaaaababaaa
aabbabaabbbabaabbaabbbaababaabaa
aaaaaabaabbbaabaabaaabba
aaaaaabaabaaaaabababbabbbabaabbaaabbbbaaaaabbaaaabbaabaa
abbbaabbbaabbbbaabbbaaaabbbaaababbbbaabaabbababbbbbbaabbaaaabaab
baabbbbbabaabbbbabababaabbbaaaba
aaaabbaaabbabbabbabaabbb
bbaaabbabaaabbbaaabbaaabbaaaabaa
babbaaaaabaabbbaabaabbbaabbbbaaa
bbaaabbabbbaababbbabbabbbaabbaababaaabbaaabbabba
abaabbaabbabaabbbabbbaaaabaaaabb
abbabababbbabbabbabbabbbbbaaaaaaaaaabbbbabbabbaaaabbabaa
bbaabaabababbbbbaabababa
aabbbaabbabbbaabaabaaaaa
bbbbbbabaabaababbaaababb
bbbbbaabaaabbaababbbbabbaabbbbbbaabaaabbabaababaaabbababbbbbababbbbbabbabaababbaabbabaab
abbaaaabbbabbbbabbbbaabaabbbabaa
ababaaaabbabaabbabbbbaabbbbbbbabbaaabaaa
abbaaaaaaababbbabbaabaaa
bababaaaabbbbababaabbbabbbbbabab
aabbbbabaababbaaaabaaaaa
babbbaabbbabbaabaababbabaaaaabab
aaaaaababbaabaabbbababbaaaaabbbb
bababaabbaaaaaaaabbbabba
aaabaaabbabababbbbbbabbaaaabaaababbbaabbaaaaababbaaabbbbbbaabbbbabbabababaabaabb
bbabbbbaaaaaabaaababaaba
aaaabbbaaaaababbaabaaababababababbbbaababaaaaaaaababaababbbbababaaaabaaaaaabaabb
abbababaaababaabababbabb
aababbaabbbbabbaababbabb
bbbbabaabababaaaaabbbabb
babaababbbbbaabaababaabbbbbabaab
aabbbbaaaabbababaaaabbaabbbbaabaababbaaaabbaabab
baabbbababaabbaaabbbbaabaabaaabbaabbbabb
bbaaabbaabbabaabbbababaa
baaaababababbbbbbbaaababababbaaabbabbaaaaaaabbbbbabbbaaaababbaab
babbabbbaababbbbbaababbb
bababaaabbaabaabbaabaabbaaababbabbbbaabbaaababab
bbabaaabbababbbbbbbabbabaababbbaaaababaa
aaabbababbaaaababbaabbbb
bbbbaaababaabbbabbbabbbb
bbababbaabbaaaababaaaaaa
bbbaaabaaaaabaabbabababb
aaabaaaabbbbaabbbaaaaaaa
bbabbaabaaabbbbaaaababba
bbbaaaaaabbbaabaaababbaaaaabaaab
abaaabbbababaaabbbbaaababaaabaabaabaabbabbbabbabbbaaaaaaaabbabaa
aabbabbaababbabbbbbbbbba
baabbbbaaabababbabaabaab
aaaababaaabbbbbaaaaaabbb
bbbbbaaabababbbbababababaaabaaab
ababbbbbbbababbabbabbbbaabbababa
babaaabaaaabbabaaabbaabb
abaabababbbabbabbbbbabaababaabab
abbbababbabababababaabba
bbaabbaabaabbbababababbabababbbabaabaabbaabbabab
bbaababaaabbbaababbbbbbaaaaabbba
baaabbabbbbabbabbbaabaaa
abbabbbbbbbaabababaaabaa
baaaabbbabaabbaaabbaabaa
abbbabbbbbbbabbbaabaaabbbbbbaabbbaabbabbbaaabbab
bbbabaababbaababbbabaaba
ababbbbabaaabbbaaaabaaaa
ababbaaabbabaaaabaababba
abbaaaabbbaabaabbabbabab
aaabbbbbabbbaabbbaaabbbbabaaaaab
bababbbbbaaabbabbbaaabab
babbbaabbbabbbbaabbbaabb
bbaababbbbabbabaaabaababaababaaa
abaababaabbabbaaabbbbaaa
bbababbabbbbbaaabbababaa
aaaaaabaaabbbaaaabaaaabaaaabaaba
bbababbabaaabbbababbabaa
bbbabbabbbbababbabbbaaaaaabbbaaaabbbbaaabbbaababbbbaaaaababbaaababbaabaa
bbbbbaabaaaaabbaaaaabbaabbaaabbaabbabaabbaaaaabb
bbbbabbabbabaaabababaaba
aaabaabbbbaabaababbabbaabbbbbaabaababbbaabbaabbabbabbbaaabbbabaababbbbbb
abaabbbabbbbaabaabbaaaaaaabaaaab
abbbbbbbabaabababaaabbbabaaabbbabaaababbbabaaabbabbbabaa
abbabaaabaaabbbaaababaaa
baabbbbaaaababbaaabaababababbbabbabbaaba
bbaabababbaabbaaabbbabbbaaabbaaa
abbaababbabbbbbbabbaabaa
bbaababaaaabbabaaababbabbbaababbbababaabbbbbbabb
bbbbbaabaaaabaaabaaaabab
abbabbaaabbbaaaabbbbbaba
bbbbaabaaabbaaabbbbbbaabaabbabaaaababaaa
abbabbabaabbabbbabbbbabaabbbabbabababbab
aabbaaabbbabaabbaaaabbbb
bbabbaaababaaababbbaababbbaabbbbaabbaabbbbbbbaba
abababababbaaaaaabbaaaabbbbbbabbaabaaaba
bbbaabbababaaabaaaabbbbababbbbabbbbbabababaaabbb
bbaababbabbaaaaaabbbababbababbab
bbabbaaaaaaabbaaababaaaa
aababbabbbaaabaabbbbabbb
aaababbabaabbbbabbabaabbabbbababbbbbaaaaaabbbbbabaaaaaaa
aabbaaabaaababbbbababbbbabaabaaa
aaaaabababbbbbaabbbaaababbbaaaaaabbaaaab
aaaaaabbbbbabaababaababb
ababbbbbaaaaaababbbbbaba
baabbabaababbaabbbabbbbaaaaabaabaabbabbabaaaabab
abbbababbbbbaaaaabbbbbabbbabaaababbaaabaababbabbaaaabbaabbaabaaabaabbbbb
abbbbabaaabbbbabaabbbaaa
bbabaaababbabbaabababaaababaabaa
abababababbabbbbaaabbbaa
aababbabbabbbababaaaababbbbbbbaaabbaabbb
abababbaabbbbabbbabaabbbabbbaaaabbabbaaaabaaaaab
bbbbabaaababbabaaaabbabaabbabaaaabaababb
aabbaaabbababaaaaabaaaab
abbbababaabbbbbabbabbababbabbaabbbaaaabbbbbbabaababaabab
aabbabbababababbabbaabbbabbbabbb
babababbabaaaabaabbbaaabbbaabbbb
babaaabababaaaabaabbabbbababababbbababbabbbaaabbaabbabab
babaaaabbbabbbbaabaabaab
baaabbbabaabbbbabaaabaaa
ababbbbbabaabababaabbaabbbbbbbabbababaab
aaabaabbaaababbbbabbabab
aaaaaabaaaaabaabbaabbababbbabbaabaaaaabbbaabbbbbbaaaabab
aabaaabbbaaaabaabaaabbbbbabbaaabaaaabababbbaabbbbababaababaaabbbabaaaababaabbabb
aaaabaabaabbabaababbbaaa
babaabbbaabaabbaaabbaabbaabaabaa
bbabbbbbababababaabbbbbabaaaaabbabbababa
aabbbaaaaaaabbaaaabababb
babbbaaabbabbbbaaaaabaaabbaabbbb
aabaabbbbbaaabaabababbbaabaaaaab
bbbaababbbababbabbaababaaababbaabaaaabab
bbaabaabbaabaabaabbaaabb
aababbaabbaaabbbaaabbabaaabaabbbaaababbabababbabbbaaaabb
abaabbaabbabbaabbbbabbabbaababaaababbabb
baabbbaabbbbbaabbabbabaa
aaaaaaaaababbaabaababbbaababababaaaaaaabaabbbbaa
bbabaaabbabababaaaabbabababbbbaaabbbbaaa
baabbaabaabbaaabbbababaa
baababbbaaabbaabbbaaabab
abaaababaaabababaabaaaab
aaabbbbaabbbbabaaaabbababbbababbabbabaababbbbbbaaabbbabbbaababbbbaaabbbb
baaababbaababbbabbbbaaaabbbababbbbbabbaa
abbbbaaabaaabbabaababbbabbbbbbbabaabbbbbabbaaabbabbbbaaa
bbabaaabaaaabababbabbaaaaaaaaaabaaabbbbb`;

function parseRules(lines = [""]) {
  const rules = {};

  lines.forEach((line) => {
    const key = parseInt(/(\d+):/.exec(line)[1], 10);
    const checks = /:(.+)/
      .exec(line)[1]
      .split("|")
      .map((check) => {
        if (check.includes('"')) {
          return [/\w+/.exec(check)[0]];
        } else {
          return check
            .trim()
            .split(" ")
            .map((element) => parseInt(element, 10));
        }
      });
    rules[key] = checks;
  });

  return rules;
}

function parseInput(raw = "") {
  const [rules, codes] = raw.split("\n\n").map((result) => result.split("\n"));

  return [parseRules(rules), codes];
}

function validateRule(code = "", rule = 0, rules = {}) {
  const check = rules[rule];
  let pointer = [];

  const hello = check.filter((ruleSet) => {
    let internalPointer = 0;
    const test = ruleSet.every((ruleId) => {
      if (rule === 31) {
        console.log(ruleSet, ruleId, code.slice(internalPointer));
      }
      let output;
      if (typeof ruleId === "string") {
        output = code[internalPointer] === ruleId;
        internalPointer++;
      } else {
        const result = validateRule(code.slice(internalPointer), ruleId, rules);
        output = result[0];
        internalPointer = internalPointer + result[1];
      }
      return output;
    });

    if (test) {
      pointer.push(internalPointer);
      return true;
    }
  });

  if (hello.length > 1) {
    console.log("double!");
  }

  return [hello.length > 0, pointer[0] || pointer[1] || 0];
}

function validateRuleWithLoop(code = "", rule = 0, rules = {}) {
  const check = rules[rule];
  const ruleSetResult = check.map((ruleSet) => {
    const results = ruleSet.reduce(
      (branches, ruleId) => {
        const output = [];

        branches.forEach((index) => {
          if (typeof ruleId === "string") {
            const matches = code[index] === ruleId;
            if (matches) {
              output.push(index + 1);
            }
          } else {
            const branchResult = validateRuleWithLoop(
              code.slice(index),
              ruleId,
              rules
            );
            branchResult.forEach((setResult) => {
              setResult.forEach((result) => output.push(result + index));
            });
          }
        });
        return output;
      },
      [0]
    );
    return results;
  });

  return ruleSetResult.filter((result) => result.length > 0);
}

function testInput(raw = "") {
  const [rules, codes] = parseInput(raw);

  return codes.filter((code) => {
    const result = validateRuleWithLoop(code, 0, rules);
    return result.some((set) => set.some((pointer) => pointer === code.length));
  }).length
}

const result = testInput(input2);

// 4
// 1
//  3
//   5 4
//  2
//   5 5
// 5

console.log(result);