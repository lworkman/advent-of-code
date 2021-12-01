console.log("------");
console.time("run");

const test = `         A           
         A           
  #######.#########  
  #######.........#  
  #######.#######.#  
  #######.#######.#  
  #######.#######.#  
  #####  B    ###.#  
BC...##  C    ###.#  
  ##.##       ###.#  
  ##...DE  F  ###.#  
  #####    G  ###.#  
  #########.#####.#  
DE..#######...###.#  
  #.#########.###.#  
FG..#########.....#  
  ###########.#####  
             Z       
             Z       `;

const test2 = `         A           
         A     D     
  #######.#####E###  
  #######.........#  
  #######.#######.#  
  #######.#######.#  
  #######.#######.#  
  #####  B    ###.#  
BC...##  C    ###.#  
  ##.##       ###.#  
  ##.##    F  ###.#  
  #####    G  ###.#  
  #########.#####.#  
  #.#######...###.#  
  #.#########.###.#  
  #.#######DE.....#  
  ###########.#####  
             Z       
             Z       `;

const test3 = `                   A               
                   A               
  #################.#############  
  #.#...#...................#.#.#  
  #.#.#.###.###.###.#########.#.#  
  #.#.#.......#...#.....#.#.#...#  
  #.#########.###.#####.#.#.###.#  
  #.............#.#.....#.......#  
  ###.###########.###.#####.#.#.#  
  #.....#        A   C    #.#.#.#  
  #######        S   P    #####.#  
  #.#...#                 #......VT
  #.#.#.#                 #.#####  
  #...#.#               YN....#.#  
  #.###.#                 #####.#  
DI....#.#                 #.....#  
  #####.#                 #.###.#  
ZZ......#               QG....#..AS
  ###.###                 #######  
JO..#.#.#                 #.....#  
  #.#.#.#                 ###.#.#  
  #...#..DI             BU....#..LF
  #####.#                 #.#####  
YN......#               VT..#....QG
  #.###.#                 #.###.#  
  #.#...#                 #.....#  
  ###.###    J L     J    #.#.###  
  #.....#    O F     P    #.#...#  
  #.###.#####.#.#####.#####.###.#  
  #...#.#.#...#.....#.....#.#...#  
  #.#####.###.###.#.#.#########.#  
  #...#.#.....#...#.#.#.#.....#.#  
  #.###.#####.###.###.#.#.#######  
  #.#.........#...#.............#  
  #########.###.###.#############  
           B   J   C               
           U   P   P               `;

const test4 = `             Z L X W       C                 
             Z P Q B       K                 
  ###########.#.#.#.#######.###############  
  #...#.......#.#.......#.#.......#.#.#...#  
  ###.#.#.#.#.#.#.#.###.#.#.#######.#.#.###  
  #.#...#.#.#...#.#.#...#...#...#.#.......#  
  #.###.#######.###.###.#.###.###.#.#######  
  #...#.......#.#...#...#.............#...#  
  #.#########.#######.#.#######.#######.###  
  #...#.#    F       R I       Z    #.#.#.#  
  #.###.#    D       E C       H    #.#.#.#  
  #.#...#                           #...#.#  
  #.###.#                           #.###.#  
  #.#....OA                       WB..#.#..ZH
  #.###.#                           #.#.#.#  
CJ......#                           #.....#  
  #######                           #######  
  #.#....CK                         #......IC
  #.###.#                           #.###.#  
  #.....#                           #...#.#  
  ###.###                           #.#.#.#  
XF....#.#                         RF..#.#.#  
  #####.#                           #######  
  #......CJ                       NM..#...#  
  ###.#.#                           #.###.#  
RE....#.#                           #......RF
  ###.###        X   X       L      #.#.#.#  
  #.....#        F   Q       P      #.#.#.#  
  ###.###########.###.#######.#########.###  
  #.....#...#.....#.......#...#.....#.#...#  
  #####.#.###.#######.#######.###.###.#.#.#  
  #.......#.......#.#.#.#.#...#...#...#.#.#  
  #####.###.#####.#.#.#.#.###.###.#.###.###  
  #.......#.....#.#...#...............#...#  
  #############.#.#.###.###################  
               A O F   N                     
               A A D   M                     `;

const input = `                                     A   B   M             Q   B           B     L   F                                           
                                     A   F   W             R   K           U     I   B                                           
  ###################################.###.###.#############.###.###########.#####.###.#########################################  
  #.#...#...............#.#.#.#.......#.....#.#...#.......#.#.#...#.#...#.#.#.....#.......#...........#...#.#...#.......#.#.#.#  
  #.#.#######.#.###.#.#.#.#.#.#.#.###.#.###.#.#.#.###.###.#.#.#.###.#.###.#.###.#.###.###.#.#######.#.###.#.#.#####.#####.#.#.#  
  #.#.#.......#.#.#.#.#.#.......#.#.....#...#...#...#.#.......#.....#.#.#...#...#.#...#.......#...#.#.#...#...#.#.......#.#.#.#  
  #.#.###########.#####.#.#####.###.#####.#.###.###.#.#########.#####.#.#.###.#####.#.#.#######.#########.#.###.#.###.###.#.#.#  
  #.#.....#...#...#.#.#.......#.#...#.....#.#.....#.#.#.....#...#.#.......#...#...#.#.#...#.#.#...#...#.#...........#.#...#.#.#  
  #.#####.###.###.#.#.#.###############.###########.#.#.###.#.###.#.###.#####.#.#######.###.#.#.###.###.#.###.#.#######.###.#.#  
  #.....#...#.............#.#.#...#.......#.....#...#...#.#.#.#...#...#.....#.......#...........#.#.#.....#.#.#...#.....#.....#  
  ###.###.###########.#.###.#.#.#######.###.#####.###.###.#.#.#.#.#######.#.#.#.#####.#.#.#####.#.#.#.#####.#.#######.#.#.#.###  
  #.#.#.#.#...#.#.#...#.#.......#.#.#.......#.......#...#.#.#...#.#.....#.#.#.#.#.#.#.#.#.#.#.#...........#.#.#.#.....#.#.#...#  
  #.#.#.#.#.#.#.#.###########.#.#.#.#######.#.#############.#.#######.#.###.#.###.#.#####.#.#.#.#######.###.###.###.#####.#####  
  #.........#.................#.....#.#.#...#.........#.#.#.#.#.#.....#...#.#.#...#.#.........#...#...................#.#.....#  
  ###.###.###.#.#.#.#####.#.#####.###.#.###.#######.###.#.#.#.#.#####.###.#.#.#.###.#.###.#.###.#.#####.#.###.#.#.#####.#.#####  
  #...#...#.#.#.#.#...#...#.#.#...........#...#...#.#.......#...#.#.#.#.#.#.#...#.#...#...#.#.#.#.#...#.#...#.#.#...#.#...#...#  
  ###.#.#.#.#.###.#.###.#.###.#######.###.#.###.#.#.#.#########.#.#.#.#.#.#.###.#.#.###.#.###.#######.#.#.#.###.###.#.###.#.#.#  
  #.#.#.#.#.#.#...#.#.#.#.#.#.........#.......#.#...#.#.....#.....#.#.#.....#...#.....#.#.............#.#.#...#.#.#.#.#.....#.#  
  #.#######.###.#.#.#.#####.#####.#.#.#######.#.###.#.#.###.#.#####.#.#######.#####.###.###.###.#.###.#########.#.#.#.#####.###  
  #.#.#...#...#.#.#.#.#...........#.#.......#.#...#.#...#.#.#.#...#.........#.#.#.....#.#.....#.#.#.#...#.#.#.#...#.#.#.....#.#  
  #.#.###.#.#.#######.###.###.#.#.###.#.###########.#.#####.#.###.#.###.#.###.#.###.###.###.#.#####.#.###.#.#.###.#.#.#.#.###.#  
  #.#...#...#.#.............#.#.#.#.#.#...#...#.#.#.#...#...#.....#.#...#.#.....#.....#.#...#.#.#...#...........#.#.#...#.#...#  
  #.###.###.#######.###.###########.###.###.###.#.#.#.#####.###.#####.#####.###.#.#.#######.###.#.###.#.#####.#.#########.#.#.#  
  #...#...#.#.#.#.#.#.#.#.#...#...#.........#.#.....#...#...#.#.....#.....#.#...#.#.#...#...........#.#.#.#...#.#.#...#.....#.#  
  ###.#.###.#.#.#.###.#.#.#.#.###.###.###.###.#.###########.#.###.#####.#####.#.###.#.#######.###.#.#####.#######.#.#####.#####  
  #...#...#.#.#.........#.#.#.#.......#.....#.#.......#.....#.....#.#.....#...#.#...........#.#.#.#.#...........#.....#.#...#.#  
  ###.###.#.#.#######.#.#.#.#####.#####.#.#.#.#####.#######.#.#.###.#.#.#.#.#.#####.#.#########.###.###.#.#####.#####.#.#.###.#  
  #...#...#...#.....#.#.#.#...#.#.#.#...#.#.#...........#...#.#...#...#.#.#.#.....#.#.#.....#.#...#.#.#.#.....#.#.#.#.#.......#  
  ###.###.#.#####.###.###.###.#.###.#####.###.#####.#######.#.#######.#######.#####.###.#####.#.#.###.#.#########.#.#.#####.###  
  #.....#.#...#.#...#.#.............#.....#.....#.#.#.#.....#.....#.#...#.#.....#...#.#...#.....#.#.#.#...#...#.#.....#.....#.#  
  #.#.###.#.###.###.###.###.###.###.#.#########.#.###.#####.#.#####.#.###.#####.###.#.#.#####.#.###.#.#.#####.#.#####.###.###.#  
  #.#...#.#.#.#...#...#.#...#.#.#.....#.#...#.....#.#.#...#.#...#...#.#...#.....#.......#.....#.#.......#...#...#...#.#.....#.#  
  #.#.###.#.#.#.###.#########.#####.#.#.#.#######.#.#.###.#.#.#####.#.###.###.#####.###.#.#############.#.###.#####.#.###.###.#  
  #.#...#.#.......#.#.#.#...#.....#.#...........#.....#.....#.......#.......#...#...#.....#.......#.#...#.#.....#.#...#...#...#  
  #####.#.#.#.###.#.#.#.###.###.###########.#######.#####.#########.#####.###.#########.#########.#.###.#.#.###.#.#.#.#.#####.#  
  #.#...#.#.#.#.#.#...#...#.#.#.#.#        R       K     X         O     W   Q         H      #...#.......#.#.#...#.#.#.#.....#  
  #.###.#.#####.#.###.#.###.#.#.#.#        Y       W     G         I     I   R         B      ###.###.###.###.###.#.###.#####.#  
XG....#.......#.......#.......#...#                                                           #.........#.#...#.........#.....#  
  ###.#.#.###.###.#.#.###.###.#.#.#                                                           #####.#.#####.###.#.#.###.#.#.#.#  
  #...#.#.#.......#.#.....#.#.#.#.#                                                           #.#.#.#.#.#.#.....#.#.#.....#.#..QS
  ###.#.#####.###.#.###.#.#.#.#.#.#                                                           #.#.###.#.#.#####.#####.###.###.#  
  #...#.....#...#.#.#.#.#.#...#.#.#                                                           #.#.#...#...#.#.......#...#...#.#  
  ###.#.#########.###.#####.###.#.#                                                           #.#.###.#.###.###.#.#.#.###.#.###  
  #.............#...#...#.......#..BF                                                       FB..................#.#.#...#.#...#  
  #########.#########.#############                                                           ###############.#.#######.#######  
  #...#.#.#.#.#...........#.#.....#                                                           #...#.......#.#.#.#...#...#.#...#  
  #.#.#.#.#.#.#.#####.###.#.#.#.###                                                           #.#.#.#####.#.#####.#######.###.#  
RY..#.#...#.#.#.#...#.#.....#.#...#                                                           #.#.#.#...#...#.....#.....#......LY
  #.#.#.#####.###.###.###.###.###.#                                                           #.#.#.###.###.#####.#.#.###.#####  
  #.#.....#.#.........#...#...#...#                                                         WH..#.#.......#.#.#.....#...#.....#  
  ###.#####.#####.#####.#.#.###.#.#                                                           #.#.#######.#.#.#.###.#########.#  
  #.#...............#.#.#.....#.#..LY                                                         #.#.........#.....#.............#  
  #.#################.#####.#######                                                           #############################.###  
WI..........#.............#.#.....#                                                           #.....#...#.#...........#...#...#  
  #.###.#.#.#.#.#.###.#######.#.#.#                                                           #.###.#.#.#.#.#####.###.###.#####  
  #...#.#.#.#.#.#.#.#.#.#.....#.#.#                                                           #.#...#.#...#.#.#...#.#.#.#.....#  
  #########.#.#######.#.#####.###.#                                                           #.#.###.###.#.#.#####.#.#.###.###  
  #.#.#.#.#.......#...#.#.#.#.#...#                                                         NK..#.......#.......#.......#.....#  
  #.#.#.#.#.###.###.###.#.#.#.###.#                                                           ###.###.###############.#.###.#.#  
  #...........#...#.............#..IM                                                         #.#.#.#.#...#.#...#...#.#.....#..DK
  ###.#.###.#######.###############                                                           #.###.###.###.#.#####.###########  
  #...#...#.#.....#.#.......#.....#                                                           #.....#...#.........#...#.......#  
  #####.#######.#####.#####.#.#.###                                                           #.###.#.#.###.#.#####.###.#####.#  
  #...#.#...#.....#...#.....#.#...#                                                           #...#...#.....#...#.......#.#...#  
  ###.#.###.###.#####.###.###.###.#                                                           #.###.#.###.#.###.#.#######.#.###  
  #.#.#.#...#...#.......#...#...#..DS                                                         #.#...#.#...#...#.....#.#...#.#.#  
  #.#.###.#.#.#.#.#.#.#####.###.###                                                           #.#.#.#######.###.#.###.###.#.#.#  
OI........#...#...#.#.#.........#.#                                                         LI..#.#...#.#.#...#.#.#.#.#........JN
  #######.#.###.###############.#.#                                                           #########.#.#######.#.#.#######.#  
  #.#.#...#...#...#.....#.....#...#                                                         BK..#.....#.......#.#.#.........#.#  
  #.#.###.###########.#.#.###.#####                                                           #.#.#.#.#.#.#.#.#.###.#####.#####  
OZ....#...#.........#.#...#...#.#.#                                                           #.#.#.#...#.#.#.........#.....#..HB
  #.###########.#####.#####.###.#.#                                                           #.###.#########.#.###.#####.###.#  
  #.#.#.....#.......#.....#...#....QS                                                         #...#.......#.#.#...#.#.......#.#  
  #.#.#.###.#####.#.#.#######.#.###                                                           #.#.#####.###.#######.#######.#.#  
  #.....#.........#...#.....#.....#                                                           #.#.......#.#...#...#.#.#.#.....#  
  #.#####################.#########                                                           ###########.#.#####.###.#.#######  
  #.#.................#.#.........#                                                           #.#...............#...#.........#  
  ###.#.#.#####.#####.#.###.#####.#                                                           #.#.#.###.###.#.#.#.#.#.#.#######  
  #.#.#.#.....#.#...........#.....#                                                           #...#...#.#...#.#.#.#...#...#.#.#  
  #.#.#######.#.#.###.#.#.###.#####                                                           #.###.###.#######.#.#####.###.#.#  
NK........#...#.#...#.#.#.#.......#                                                           #.#.#...#.#...#.....#.....#...#..GI
  #####.#.###.###.#.#.#.#.#.#.#.#.#                                                           #.#.#.###.#.###.#.###.#####.#.#.#  
  #...#.#.#.#...#.#.#.#.#.#.#.#.#..NL                                                       OH....#...#.#.....#.#.........#...#  
  ###.#.###.###.#.###.###.###.#.###                                                           #.#.#.#######.#.#####.#.#####.#.#  
  #.........#...#.#...#.#.#...#...#                                                           #.#.#.....#...#...#...#.....#.#.#  
  #.#.###.#####.#.#####.#.#####.#.#        G       M       B O         D           Q   J M    ###.#.#.#######.#.###.#.#.#.#.###  
  #.#.#...#...#.#.#...#...#...#.#.#        I       Y       U Z         K           D   N W    #.#.#.#.#.......#.#...#.#.#.#...#  
  #.#####.#.#######.###.###.#####.#########.#######.#######.#.#########.###########.###.#.#####.#.###.###.#####.#.#.#####.#.#.#  
  #...#.......#...#.......#.#...#.#...........#.....#.....#.#.....#.........#.#.....#.......#.......#...#.....#.#.#...#...#.#.#  
  #.#.###.#.#####.#.#.#####.###.#####.#.#.#########.#.###.#.###.###.#.###.###.###.#####.#.#####.#################.#.###########  
  #.#.#...#...#.....#...#.....#.#.#.#.#.#.....#.....#.#.....#.....#.#...#.#.#...#.#.....#...#.#.#.#.#.............#...........#  
  #######.#.###.#####.#.#.###.#.#.#.#####.#.#######.#.#########.#.###.#.#.#.#.###.###.#.#####.###.#.###########.###.###########  
  #.......#...#.#.....#.#.#.#.#.#.#.......#.#.#...#.#.........#.#...#.#.#.#.....#...#.#.....#.#.#.......#.#.#.#...#...#...#...#  
  ###.###.#.#.#.###.#.#.###.#.#.#.###.#.#.#.#.#.###.#######.#.#####.###.###.#.#####.#.#######.#.#.#######.#.#.#.###.#####.#.###  
  #.....#.#.#.#.#...#.#.#.#.......#.#.#.#.#.#.......#.#.....#.#.....#.#.#.#.#.......#...............#...........#.............#  
  ###.###.#.###.###.#####.#.#.#.#.#.#######.#####.#.#.#####.#####.###.#.#.###.#######.#.#####.###.#######.#####.#####.###.#####  
  #...#.#.#.#...#.#.#.......#.#.#.....#.......#.#.#...#.#.....#.#.#.....#...#.......#.#...#.....#.....#...#...#.#.#.#.#.......#  
  #.###.#.#######.#####.#.#.#####.#.#######.###.###.#.#.###.#.#.#.###.#.#.#.###.###.#.#.###.###########.#.###.#.#.#.#.#.#.#.###  
  #.#.#.#.#.#.........#.#.#.#.#...#...#.#.#...#.....#.#.....#.#.....#.#...#.#...#...#.#.#.#.#.#.......#.#.#.#.......#.#.#.#.#.#  
  ###.#.###.#######.#########.#######.#.#.#.###.###.#####.#.#####.###.###.#.###.###.#.###.###.#.###########.#.#.#.###.###.###.#  
  #...#.#.............#.#.#...#.......#.#.....#.#.....#...#...#.....#.#.#.#...#...#.#...#.#.#.#.............#.#.#...#.#.#.....#  
  ###.#.###.###.#.###.#.#.###.#.###.#.#.###.#####.#####.###.#######.###.###.#######.#.###.#.#.#.#.#.#######.#####.###.#.#.#####  
  #.........#.#.#.#.#...........#...#.....#.#.#.#.....#.#.#.#.........#.........#.#.#.#.#.#.....#.#...#.#.......#...#.#.......#  
  ###.###.###.#.#.#.#.#########.#.#.#.#####.#.#.#.###.###.#.#######.#####.#.###.#.#.#.#.#.#.#.#.#######.#######.###.###.###.#.#  
  #.#.#...#...#.#.#.#.#...#...#.#.#.#...#...#.......#.#.#.#.#.#.#.#.....#.#...#.#...#.#.....#.#...#.#.#.......#...#.#.....#.#.#  
  #.#########.#####.#####.#.#########.#.#.#.#.#####.###.#.#.#.#.#.#.#######.#.###.#.#.###.#.#######.#.#.#####.#########.#.#####  
  #.....#.....#.............#.#.#...#.#...#.#.....#...#...#.#.......#.....#.#.#...#.#...#.#...#...........#.#.#.#.#...#.#.....#  
  #.#########.#######.#####.#.#.###.#.###########.#####.###.#.#########.#.#.#######.###.#.#.###.###.#####.#.###.#.#.#####.#.#.#  
  #.......#.....#...#.#.#.......#.............#...#.#...#...#.......#.#.#...#.........#...#...#.#.#...#...............#.#.#.#.#  
  #.#####.###.#####.###.#.#.#.#.###########.###.#.#.#.#.#.#####.#####.#.#######.###.#####.#.###.#.#######.###.#.###.###.#.#.###  
  #.#...#.............#...#.#.#.#...#.....#.#...#.#...#.....#.#.#.#...........#.#.#.#...#.#...........#.#...#.#...#.....#.#...#  
  ###.###.#####.###.#.#.#######.#.#.#.#.#.#.#.#####.#.#######.#.#.###.#####.#####.#.#.#####.#####.#####.#####.#.###.#.#.###.###  
  #.......#...#.#...#...#.......#.#...#.#.#.#.....#.#.#.....#...#.#.#...#...#...#.....#.......#.......#.....#.#.#...#.#.#.....#  
  #.###.#.###.#.#######.#.###.#.#####.#.###.#.#######.###.#.#.###.#.###.###.###.###.#######.#####.#######.#.#.###.#.#######.###  
  #...#.#.#.......#...#.#.#.#.#.......#.#...#.......#.#...#.#.....#...#...#.#.......#...#.#.....#.........#.#...#.#.......#...#  
  #.#####.#.#.#######.#####.###.#.#.#.#.#.###.#######.#.###.#####.###.#####.#.#########.#.#.#########.#######.#.###.###.###.###  
  #.#...#.#.#.....#.#...........#.#.#.#...#...#...#.....#.#...#...#.......#.#...#.....#...#.....#.#.......#...#.#.#.#.#.#.....#  
  #.###.#######.###.#.###.#.#####.#.#.#######.#.#########.#.#####.###.###.#.###.#.#.#.#.#.#.#.###.#.#.#.#.###.###.#.#.#######.#  
  #.#.............#...#...#.....#.#.#.......#.......#...........#...#...#...#.....#.#.#.#...#...#...#.#.#.#.....#...........#.#  
  #####################################.#######.#######.#########.###.#######.#####.###.#.#####################################  
                                       N       D       M         Q   K       O     Z   I W                                       
                                       L       S       Y         D   W       H     Z   M H                                       
`;

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
      var closest = options.closest || true;

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
        return (
          Math.abs(pos1.x - pos0.x) +
          Math.abs(pos1.y - pos0.y) * (1 + Math.abs(pos1.z - pos0.z))
        );
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
  function Graph(gridIn, portals, options) {
    options = options || {};
    this.nodes = [];
    this.initialNodes = [];
    this.diagonal = !!options.diagonal;
    this.grid = [[]];
    this.portals = portals || new PortalRecord();
    this.highestDepth = 0;
    for (var x = 0; x < gridIn.length; x++) {
      this.grid[0][x] = [];

      for (var y = 0, row = gridIn[x]; y < row.length; y++) {
        const portal = portals.getOpposingNearSpace([y, x]);
        let mX;
        let mY;
        if (portal) {
          mX = portal[1];
          mY = portal[0];
        }
        var node = new GridNode(x, y, row[y], mX, mY, 0);

        this.grid[0][x][y] = node;
        this.nodes.push(node);
        this.initialNodes.push({ ...node });
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
    var z = node.z;
    var grid = this.grid[z];

    const width = grid.length;
    const height = grid[0].length;

    const portalLogic = (portal = [0, 0]) => {
      // if (portal[0] === 17 && portal[1] === 34) {
      //   console.log("HERE!", isOutsidePortal([portal[1], portal[0]], height, width));
      // }
      if (!isOutsidePortal([portal[1], portal[0]], height, width)) {
        if (z !== 0) {
          ret.push(this.grid[z - 1][portal[1]][portal[0]]);
        }
      } else {
        const newDepth = z + 1;
        if (newDepth > 200) {
          return;
        }
        if (newDepth > this.highestDepth) {
          console.log(portal);
          const newGridLevel = [];

          this.initialNodes.forEach((node) => {
            const newNode = new GridNode(
              node.x,
              node.y,
              node.weight,
              node.manhattenX,
              node.manhattenY,
              newDepth
            );
            newNode.z = newDepth;

            if (!newGridLevel[newNode.x]) {
              newGridLevel[newNode.x] = [];
            }
            newGridLevel[newNode.x][newNode.y] = newNode;
            this.nodes.push(newNode);
          });
          this.grid[newDepth] = newGridLevel;
          this.highestDepth = newDepth;
        }
        ret.push(this.grid[newDepth][portal[1]][portal[0]]);
      }
    };

    // West
    if (grid[x - 1] && grid[x - 1][y]) {
      const matchingPortal = this.portals.getMatchingPortal([y - 1, x]);
      if (matchingPortal) {
        portalLogic(matchingPortal);
      } else {
        ret.push(grid[x - 1][y]);
      }
    }

    // East
    if (grid[x + 1] && grid[x + 1][y]) {
      const matchingPortal = this.portals.getMatchingPortal([y + 1, x]);
      if (matchingPortal) {
        portalLogic(matchingPortal);
      } else {
        ret.push(grid[x + 1][y]);
      }
    }

    // South
    if (grid[x] && grid[x][y - 1]) {
      const matchingPortal = this.portals.getMatchingPortal([y, x - 1]);
      if (matchingPortal) {
        portalLogic(matchingPortal);
      } else {
        ret.push(grid[x][y - 1]);
      }
    }

    // North
    if (grid[x] && grid[x][y + 1]) {
      const matchingPortal = this.portals.getMatchingPortal([y, x + 1]);
      if (matchingPortal) {
        portalLogic(matchingPortal);
      } else {
        ret.push(grid[x][y + 1]);
      }
    }

    return ret;
  };

  function GridNode(x, y, weight, mX, mY, depth) {
    this.x = x;
    this.y = y;
    this.z = depth;
    this.weight = weight;

    this.manhattenX = mX === undefined ? x : mX;
    this.manhattenY = mY === undefined ? y : mY;
  }

  GridNode.prototype.getCost = function (fromNeighbor) {
    // Take diagonal weight into consideration.
    if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y && fromNeighbor.z != this.z) {
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

function buildGraph(raw = "") {
  const rows = raw.split("\n").map((row) => row.split(""));

  let start;
  let end;
  const map = [];
  const portals = new PortalRecord();
  let i = 0;

  rows.forEach((row, y) => {
    map.push([]);
    row.forEach((char, x) => {
      if (/[A-Z]/.test(char) || char === "#" || char === " ") {
        map[i].push("#");
      } else if (char === ".") {
        const neighbours = [
          [x, y - 1],
          [x - 1, y],
          [x + 1, y],
          [x, y + 1],
        ];
        if (
          y < rows.length - 1 &&
          y > 0 &&
          x < rows[0].length - 1 &&
          x > 0 &&
          neighbours.some(([nX, nY]) => {
            return /[A-Z]/.test(rows[nY][nX]);
          })
        ) {
          let key;
          let coord;

          function testRow([coorX, coorY]) {
            return /[A-Z]/.test(rows[coorY][coorX]);
          }

          // north
          if (testRow(neighbours[0])) {
            coord = [x, y - 1];
            key = rows[y - 2][x] + rows[y - 1][x];
            // east
          } else if (testRow(neighbours[1])) {
            coord = [x - 1, y];
            key = rows[y][x - 2] + rows[y][x - 1];
            // west
          } else if (testRow(neighbours[2])) {
            coord = [x + 1, y];
            key = rows[y][x + 1] + rows[y][x + 2];
            // south
          } else {
            coord = [x, y + 1];
            key = rows[y + 1][x] + rows[y + 2][x];
          }

          if (key === "AA") {
            start = [x, y];
          } else if (key === "ZZ") {
            end = [x, y];
          }

          portals.addPortal(key, coord, [x, y]);

          map[i].push("O");
        } else {
          map[i].push(".");
        }
      }
    });
    i++;
  });

  const weightedMap = map.map((row) =>
    row.map((char) => (char === "#" ? 0 : 1))
  );
  const graph = new Graph(weightedMap, portals);
  const route = astar.search(
    graph,
    graph.grid[0][start[1]][start[0]],
    graph.grid[0][end[1]][end[0]]
  );

  route.forEach((node) => {
    map[node.x][node.y] = "X";
  });

  map.forEach((row) => console.log(row.join("")));

  return route.length;
}

class PortalRecord {
  _coord_to_portal = {};
  _key_to_portals = {};
  _nearspace_to_key = {};

  addPortal(key = "", [x, y] = [0, 0], nearSpace = []) {
    this._coord_to_portal[[x, y].join(",")] = key;
    if (!this._key_to_portals[key]) {
      this._key_to_portals[key] = [];
    }
    this._key_to_portals[key].push({ portal: [x, y], nearSpace });
    this._nearspace_to_key[nearSpace.join(",")] = key;
  }

  getMatchingPortal([x, y] = [0, 0]) {
    const key = this._coord_to_portal[[x, y].join(",")];
    if (key) {
      const portals = this._key_to_portals[key];
      if (portals.length < 2) {
        return;
      }
      if (portals[0].portal[0] === x && portals[0].portal[1] === y) {
        return portals[1].nearSpace;
      } else {
        return portals[0].nearSpace;
      }
    }
  }

  getOpposingNearSpace([x, y] = [0, 0]) {
    const key = this._nearspace_to_key[[x, y].join(",")];

    if (key) {
      const portals = this._key_to_portals[key];
      if (portals.length < 2) {
        return;
      }
      if (portals[0].nearSpace[0] === x && portals[0].nearSpace[1] === y) {
        return portals[1].nearSpace;
      } else {
        return portals[0].nearSpace;
      }
    }
  }
}

function buildGraphWithDepth(raw = "") {
  const rows = raw.split("\n").map((row) => row.split(""));

  let start;
  let end;
  const map = [];
  const portals = new PortalRecord();
  let i = 0;

  rows.forEach((row, y) => {
    map.push([]);
    row.forEach((char, x) => {
      if (/[A-Z]/.test(char) || char === "#" || char === " ") {
        map[i].push("#");
      } else if (char === ".") {
        const neighbours = [
          [x, y - 1],
          [x - 1, y],
          [x + 1, y],
          [x, y + 1],
        ];
        if (
          y < rows.length - 1 &&
          y > 0 &&
          x < rows[0].length - 1 &&
          x > 0 &&
          neighbours.some(([nX, nY]) => {
            return /[A-Z]/.test(rows[nY][nX]);
          })
        ) {
          let key;
          let coord;

          function testRow([coorX, coorY]) {
            return /[A-Z]/.test(rows[coorY][coorX]);
          }

          // north
          if (testRow(neighbours[0])) {
            coord = [x, y - 1];
            key = rows[y - 2][x] + rows[y - 1][x];
            // east
          } else if (testRow(neighbours[1])) {
            coord = [x - 1, y];
            key = rows[y][x - 2] + rows[y][x - 1];
            // west
          } else if (testRow(neighbours[2])) {
            coord = [x + 1, y];
            key = rows[y][x + 1] + rows[y][x + 2];
            // south
          } else {
            coord = [x, y + 1];
            key = rows[y + 1][x] + rows[y + 2][x];
          }

          if (key === "AA") {
            start = [x, y];
          } else if (key === "ZZ") {
            end = [x, y];
          }

          portals.addPortal(key, coord, [x, y]);

          map[i].push("O");
        } else {
          map[i].push(".");
        }
      }
    });
    i++;
  });

  const weightedMap = map.map((row) =>
    row.map((char) => (char === "#" ? 0 : 1))
  );
  const graph = new Graph(weightedMap, portals);

  const route = astar.search(
    graph,
    graph.grid[0][start[1]][start[0]],
    graph.grid[0][end[1]][end[0]]
  );

  const maps = [];

  // route.forEach((node, index) => {
  //   let char;

  //   if (!maps[node.z]) {
  //     maps[node.z] = [...map.map((row) => [...row])];
  //   }
  //   if (index === 0) {
  //     char = "X";
  //   } else {
  //     const lastNode = route[index - 1];

  //     if (lastNode.z < node.z) {
  //       char = "\\";
  //     } else if (lastNode.z > node.z) {
  //       char = "/";
  //     } else if (lastNode.x < node.x) {
  //       char = "V";
  //     } else if (lastNode.x > node.x) {
  //       char = "^"
  //     } else if (lastNode.y < node.y) {
  //       char = ">"
  //     } else {
  //       char = "<";
  //     }
  //   }

  //   maps[node.z][node.x][node.y] = char;
  // });

  // route.reduce((p, node) => {
  //   return p.then(() => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         console.log(`Level ${node.z}`);
  //         map.forEach((row, y) => {
  //           if (y === node.x) {
  //             const alteredRow = [...row];
  //             alteredRow[node.y] = "X";
  //             console.log(alteredRow.join(""));
  //           } else {
  //             console.log(row.join(""));
  //           }
  //         });

  //         resolve();
  //       }, 300);
  //     });
  //   });
  // }, Promise.resolve());

  // maps.forEach((level) => {
  //   console.log("===========");
  //   level.forEach((row) => console.log(row.join("")));
  // });

  // console.log(route);

  // console.log(portals);

  return route.length;
}

function isOutsidePortal([x, y] = [0, 0], height = 0, width = 0) {
  return x - 3 <= 0 || x + 3 >= width || y - 3 <= 0 || y + 3 >= height;
}

const result = buildGraphWithDepth(input);

console.log("result:", result);
console.timeEnd("run");
