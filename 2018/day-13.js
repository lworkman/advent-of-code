console.log("------");
console.time("run");

const test = `/->-~        
|   |  /----~
| /-+--+-~  |
| | |  | v  |
~-+-/  ~-+--/
  ~------/   `;

const test2 = `/>-<~  
|   |  
| /<+-~
| | | v
~>+</ |
  |   ^
  ~<->/`;

const input = `              /----------------------~                                                                              /--------------------------~      
              |                     /+------------------------------------------------------------------------------+-------------~            |     
              |                  /--++--------------------------------------------------------~                     |             |            |     
              |                  | /++--------------------------------------------------------+---------------------+-------~     |            |     
              | /----------------+-+++--------~ /---------------------------------------------+---------------------+~      |     |            |     
              | |                | |||        | |                                            /+---------------------++------+-----+-----------~|     
         /----+-+-~              | |||        | |               /----------------------------++---------------------++---~  |     |           ||     
         |    | | |/-------------+-+++--------+-+---------------+--->------------------------++--~     /------------++---+--+-----+---------~ ||     
         |    | | ||     /-------+-+++--------+-+---------------+----------------------------++--+-----+-----~      ||   |  |     |         | ||     
        /+----+-+-++-----+-------+-+++--------+-+---------------+----------------------------++--+--~  |     |      ||   |  |     |         | ||     
        ||    |/+-++-----+-------+-+++--------+-+---------------+----------------------------++--+--+--+-----+-~    ||   |  |     |         | ||     
  /-----++----+++~||     |       | |||        | |               |                            ||  |  |  |     | |    ||   |  |  /--+---------+-++----~
  |     ||    ||||||     |       | |||        | |            /--+----------------------------++--+--+--+-----+-+----++---+--+--+--+------~  | ||    |
  |     ||    ||||||     |       | |||        | |   /--------+~ |      /---------------------++--+--+--+-----+-+----++---+--+--+--+------+--+-++---~|
  |     ||    ||||||/----+-------+-+++--------+-+---+--------++-+------+---------------------++--+--+--+-----+-+----++---+~ |  |  |      |  | ||   ||
  |     ||    |||||||/---+-------+-+++--------+-+---+--------++-+------+----------------~    ||  |  |  |     | |    ||   || |  |  |      |  | ||   ||
  |     ||    ||||||||   |       | |||        | |   |        || |      |                |    ||  |  |  |     | |  /-++---++-+--+--+------+--+-++-~ ||
  |  /--++----++++++++---+-------+-+++--~   /-+-+---+--------++-+------+----------------+----++--+--+~ |     | |  | ||   || |  |  |      |  | || | ||
 /+--+--++----++++++++---+-------+-+++--+---+-+-+---+--------++-+------+----------------+-~  ||  |  || |     | |  | ||   || |  |  |      |  | || | ||
 ||  |  ||    ||||||||   |       | |||  |   | | |   |        || |      |                | |  ||/-+--++-+-----+-+--+-++~  || |  |  |      |  | || | ||
 ||  |  ||    ||||||||   |       | |||  |   | | |   |        || |      |       /--------+-+--+++-+--++~|     | |  | |||  || |  |  |      |  | || | ||
 ||  |  ||    ||||||||   |       | |||  |   | | |   |        || |      |       |        | |  ||| |  ||||     | |  | |||  || |  |  |      |  | || | ||
 ||  |  ||    |||||^||   ~-------+-+++--+---+-+-+---+--------++-+------+-------+--------+-+--+++-+--++++-----/ |  | |||  || |  |  |      |  | || | ||
 ||  |  ~+-<--++++++++-----------+-+++--+---+-+-+---+--------++-+------+-------+--------+-+--+++-+--/|||       |  | |||  || |  |  |      |  | || | ||
 ||  |   |    ||||||||      /----+-+++--+---+-+-+---+--------++-+----~ |       |        | |  ||| |   |||/------+--+-+++--++-+--+--+------+--+~|| | ||
 ||  |   |    ||||||||      |    | |||/-+---+-+-+---+--------++-+----+-+-------+--------+-+--+++-+---++++------+--+-+++--++-+--+--+------+-~|||| | ||
 ||  |   |    ||||||||      |    | |||| |  /+-+-+---+--------++-+----+-+-------+--------+-+--+++-+---++++------+--+-+++--++-+--+--+--~   | ||||| | ||
 ||  |   |    ||||||||      |    | ~+++-+--++-+-+---+--------++-+----+-+-------+--------+-+--+++-+---++++------+--+-+++--++-/  |  |  |   | ||||| | ||
 ||  |   |    ||||||||      |    |  ||| |/-++-+-+---+--------++-+----+~|       |        | |  ||| |   ||||      |  | |||  ||    |  |  |   | ||||| | ||
 ||  |/--+----++++++++---->-+----+--+++-++-++-+-+---+--------++-+---~|||       |        | |  ||| |   ||||      |/-+-+++--++----+--+~ |   | ||||| | ||
 ||  ||  |    ||||||||     /+----+--+++-++-++-+-+---+--------++-+---++++-------+--------+-+--+++-+---++++------++-+-+++--++---~|  || |   | ||||| | ||
 ||  ||  |    ||||||||     ||    | /+++-++-++~| |   |        || ^   ||||       |        | |  ||| |   ||||/-----++-+-+++--++---++--++-+---+~||||| | ||
 ||  ||  |/---++++++++-----++----+-++++-++-++++-+---+--------++-+---++++-------+--------+-+--+++-+~/-+++++-----++-+-+++--++---++~ || |   ||||||| | ||
 ||  ||  ||   ||||||||     ||    | |||| || |||| |   |        || |   ||||       |        | |  ||| ||| |||||     || | |||  ||   ||| || |   ||||||| | ||
 ||  ||  ||   ||||||||     ||    | |||| || ||||/+---+--------++-+---++++-------+--------+-+~ ||| ||| |||||     || | |||  ||   ||| || |   ||||||| | ||
 ||  || /++---++++++++-----++----+-++++-++-++++++---+--------++-+---++++-------+--------+-++-+++-+++-+++++~    || | |||  ||   ||| || |   ||||||| | ||
 ||  || |||   ||||||||     ||    |/++++-++-++++++---+--------++~|   ||||       |        |/++-+++-+++-++++++--~ || | |||  ||   ||| || |   ||||||| | ||
 ||  || |||   ||||||||     ||    |||||| || ||||||   |        ||||   ||||       ~--------++++-+++-+++-+/||||  | || | |||  ||   ||| || |   ||||||| | ||
 |~--++-+++---+++/||||     ||    |||||| || ||||||   |        ||||   |||| /--------------++++-+++-+++-+-++++--+-++-+-+++--++---+++-++-+~  ||||||| | ||
 |   ~+-+++---+++-++++-----++----++++++-/| ||||||   |        ||||   |||| |              |||| ||| ||| | ||||  | || | |||  ||   ||| || ||  ||||||| | ||
 |    | |||   ||| ||||     ||    |||||| /+-++++++---+--------++++---++++-+--------------++++-+++-+++-+-++++--+~|| | |||  ||   ||| || ||  ||||||| | ||
 |    | |||   |~+-++++-----++----++++++-++-++++++---+--------++++---++++-+--------------++++-+++-+++-+-++++--++/| | |||  ||   ||| || ||  ||||||| | ||
 |    | |||   | | ||||     ||/---++++++-++-++++++---+--------++++---++++-+------------~ |||| ||| ||| | ||~+--++-+-+-+++--++---+++-++-++--+/||||| | ||
 |    | |||   | | ||||     |||   |||||| || ||||||   | /------++++---++++-+------------+-++++-+++-+++-+-++-+--++-+-+-+++--++--~||| || ||  | ||||| | ||
/+----+-+++---+~| ||||     |||   |||||| || ||||||   | |      ||||   |||| |            | |||| ||| ||| | |~-+--++-+-+-+++--++--++++-++-++--+-++/|| | ||
||    | |||   ||| ||||     |||   |||||| || ||||||   ~-+------+/|~---++++-+------------+-++++-+++-+++-+-+--+--++-+-+-+++--/|  |||| || ||  | || || | ||
||  /-+-+++---+++-++++-~   |||   |||||| |~-++++++-----+------+-+----++/| |       /----+-++++-+++-+++-+-+--+--++-+-+~|||   |  |||| || ||  | || || | ||
||  | | |||   ||| |||| |   |||   |||||| |  ||||~+-----+------+-+----++-+-+-------+----+-+++/ ||| ||| | |/-+--++-+-+++++--~|  |||| || ||  | || || | ||
||  | | |||   ||| |||| |   |||   |||||| |  |||| |     |      | |    || | |       |    | |||  ||| ||| | || |  || | |||||  ||  |||| || ||  | || || | ||
||  |/+-+++---+++-++++-+---+++---++++++-+--++++-+-----+------+-+----++-+-+-------+---~| |||  ||~-+++-+-++-+--++-+-++++/  ||  |||| || ||  | || || | ||
||  ||| ||~---+++-++++-+---+++---++++++-+--++++-+-----+------+-+----++-+-+-------+---++-+++--++--+/| | ~+-+--++-+-++++---++--++++-++-++--+-+/ || | ||
||  ||| ||/---+++-++++-+---+++---++++++-+--++++-+-----+------+-+----++-+-+-----<-+---++-+++--++-~| | |  | |  || | ||~+---++--++++-++-++--+-+--+/ | ||
||  ||| |||   ||| |||| |   |||   |||||| |  |||| |     |      | |    || | |       |   || |||  ||/++-+-+--+-+--++-+-++-+---++~ |||| || ||  | |  |  | ||
||  ||| |||   ~++-++++-+---+++---++++/| |  ||||/+-<---+------+-+----++-+-+-------+---++-+++--+++++-+~|  | |  || | || |   ||| |||| || ||  | |  |  | ||
||  ||| |||    || |||| |   |||   |||| | |  ||||||     |      | |  /-++-+-+-------+---++-+++--+++++-+++--+-+-~|| | || |   ||| |||| || ||  | |  |  | ||
||  ||| |||    || |||| |   |||   |||| | |  ||||||     |      | |  | || | |       |   || |~+--+++++-+++--+-+-+/|/+-++-+---+++-++++-++-++--+-+~ |  | ||
||  ||| |||    || |||| |   |||   |||| | |  ||||||     |      | |  | || | |       ^   || | |  ||||| |||  | | | ||| || |   ||| |||| || ||  | || |  | ||
||  ||| |||    || |||| |   |||   |||| | |  ||||||  /--+------+-+--+-++-+-+-------+---++-+-+--+++++-+++--+-+-+-+++-++-+---+++-++++-++-++~ | || |  | ||
||  ||| |||    || |||| |   |||   |||| | |  ||||||  |  |      | |  | || | |       ~---++-+-+--+++++-+++--+-+-+-+++-+/ |   ||| |||| || ||| | || |  | ||
|~--+++-+++----++-++++-+---+++---++++-+-+--++++++--+--+------+-+--+-++-+-+-----------++-+-/  ||||| |||  | | | ||| |  |   ||| |||| || ||| | || |  | ||
|   ||| |||    || |||| |   |||   |||| | |  ||||||  | /+------+~|  | || | |           || |    ||||| |||  | | | ||| |  |   ||| |||| || ||| | || |  | ||
|   ||| |||    || |||| |   |||   |||| | |  ||||||  | ||      |||  | || | |/----------++-+----+++++-+++--+-+-+-+++-+--+---+++-++++-++~||| | || |  | ||
|   ||~-+++----++-++++-+---+++---++++-+-+--++++++--+-++------+++--+-/| | ||          || |    ||||| |||  | | | |||/+--+---+++-++++-++++++-+-++-+--+~||
|/--++--+++----++-++++-+~  |||   |||| | |/-++++++--+-++------+++--+--+-+-++----------++-+----+++++-+++--+-+-+-+++++--+---+++-++++<++++++-+-++-+~ ||||
||  ||  |||  /-++-++++-++--+++---++++-+-++-++++++--+-++------+++--+--+-+-++----------++-+----+++++-+++--+-+-+-+++++--+~  ||| |||| |||||| | || || ||||
||  ||  |||  | || ||||/++--+++---++++-+-++-++++++--+-++------+++--+--+-+-++----------++-+----+++++-+++--+-+-+~|||||  ||  ||| |||| |||||| | || || ||||
||/-++--+++--+-++-+++++++--+++---++++-+~|| |||||~--+-++------+++--+--+-+-++----------++-+----+++++-+++--+-+-+++++++--/|  ||| |||| |||||| | || || ||||
||| ||  |||  | || |||||||  |||   |||| |||| ||||| /-+-++------+++--+--+-+-++--------~ || |    ||||| |||  | | |||||||  /+--+++-++++-++++++-+-++-++~||||
||| ||  |||  | || |||||||  |||   |||| |||| ||||| | | ||      |||  |  | | ||        | || |    ||||| |||  | | |||||||  ||  ||| |||| |||||| | || |||||||
||| ||  |||  | || |||||||  |~+---++++-++++-+++++-+-+-++------+++--+--/ | ||    /---+-++-+----+++++-+++--+-+-+++++++--++--+++-++++~|||||| | || |||||||
||| ||  |||  | || ||~++++--+-+---++++-++++-+++++-+-+-++------+++--+----+-++----+---+-++-+----+++++-+++--+-+-+++++++--++--+/| ||||||||||| | || |||||||
||| ||  |||  | || || ||||  | |   |||| |||| ~++++-+-+-++------+++--+----+-++----+---+-++-+----+++++-+++--+-+-+++++++--++--+-+-++++++++/|| | || |||||||
||| ||  |||  | || || |v||  | |  /++++-++++--++++-+-+-++------+++--+----+-++-~  |   | || |    ||||| |||  | | |||||||  ||  | | |||||||| || | || |||||||
||v || /+++--+-++-++-++++--+-+--+++++-++++--++++-+-+-++------+++--+----+-++-+--+---+-++-+----+++++-+++--+-+~|||||||  ||  | | |||||||| || | || |||||||
||| || ||||  | || || ||||  | |  ||||| ||||  |||| | | ||      |||  |/---+-++-+-~|   | || |    ||||| |||  | |||||||||  ||  | | |||||||| || | || |||||||
||| || ||||  | || || ||||  | |  ||||| ||||  |||| | | ||      |||  ||   | || | ||/--+-++-+----+++++-+++--+-+++++++++~ ||  | | |||||||| || | || |||||||
||| || ||||  | || || ||||  | |  |||~+-++++--+/|| | | ||      |||  ||   ~-++-+-+++--+-++-+----+++++-+++--+-++++++++++-++--+-+-++++++++-++-+-++-+++++/|
||| || ||||  | || || ||||  | |  ||| | ||||  | || | | ||      |||  ||     || | |||  | || |    ||||| |||  | |||||||||| ~+--+-+-++++++++-++-+-++-++/|| |
||| || ||||  ~-++-++-++++--+-+--+++-+-++++--+-++-+-+-++------+++--++-----++-+-+++--+-++-+----+++++-+++--+-++++++++++--/  | | ||~+++++-++-+-++-++-++-/
||| || ||||    || || ||||  | |  ||| | ~+++--+-++-+-+-++------+++--++-----++-+-+++--+-++-+----+++++-+++--+-++++++++++-----+-+-++-+++++-++-+-/| || ||  
||| || ||||    ||/++-++++--+-+--+++-+--+++--+-++-+-+-++------+++--++-----++-+-+++--+-++-+----+++++-+++--+-++++++++++-----+-+~|| ||||| || |  | || ||  
||| || |||~----+++++-++++--+-+--+++-+--+++--+-++-+-+-++------+++--++-----++-+-+++--+-++-+----+++/| |||  | ||||||||||     | |||| ||||| || |  | || ||  
||| || |||     ||||| ||||  | |  ||| |  |||  | || | | ||      |||  ||     || | |||  | || |    ||| | |||  ~-++++++++++-----/ |||| ||||| || |  | || ||  
|~+-++-+++-----+++++-+++/  | |  ||| |  ||~--+-++-+-+-++------+++--++-----++-+-+++--+-++-+----+++-+-+++----++++++++++-------++++-+++++-++-+--+-+/ ||  
| | || |||     ||||| |||   | |  ||| |  ||   | || | | ||      |||  ||     || | |||/-+-++-+----+++-+-+++----++++++++++-------++++-+++++-++-+~ | |  ||  
| | || |||     ||||| ||| /-+-+--+++-+--++~  | || | | || /----+++--++-----++-+-++++-+-++-+----+++-+-+++----++++++++++-------++++-+++++-++-++-+-+--++-~
| | || |||     ||||| ||| | | |  ||| |  |||  | || | | || |    |||  ||     || | |||| | || |    ~++-+-+++----++++++++++-------++++-+++++-++-++-+-/  || |
| | || ||~-----+++/| ||| | | |  ||| |  |||  | || | | || |    |||  ||     || | |||| | || |     |~-+-+++----++++++++++-------/||| ||||| || || |    || |
| | || ||  /---+++-+-+++-+-+-+--+++-+--+++--+-++-+-+-++-+----+++--++-----++-+-++++-+-++-+-----+--+-+++----++++++++++--~     ||| ||||| || || |    || |
~-+-++-++--+---/|| | ||| | | |  ||| |  |||  | || | | || |    |||  ||     || | |||| | || |     |  | ~++----++++++++++--+-----+++-/|||| || || |    || |
  | || ||  |    || | ||| | | |  ||| |  |||  | || | | || |    |||  ||     || | |||| | || |     |  |  ||    ||||||||||  |     |||  |||| || || |    || |
  | || ||  |    ~+-+-+++-+-+-+--+++-+--+++--+-/| | | || |    |||  ||     || | |||| | || |     |  |  ||/---++++++++++--+-----+++--++++-++-++-+~   || |
  | || || /+-----+-+-+++-+-+-+--+++-+--+++--+--+-+-+-++-+----+++-~||     || | |||| | || |     |  |  |||   ||||||||||  |     |||  ||^| || || ||   || |
  | || || ||     | | ||| | | |  ||| |  |||  |  | | | || |    ||| |||     || | |||| | || |     |  |  |||   ||||||||||  |     |||  |||| || || ||   || |
  | || || ||     | | ||| | | |  ||| |  |||  |  | | | || |    ||| |||     || | ||||/+-++-+-----+--+-~|||   ||||||||||  |     |||  |||| || || ||   || |
/-+-++-++-++-----+-+-+++-+-+-+--+++-+--+++--+--+-+-+-++~|    ||| |||     || | |||~++-++-+-----+--+-++++---++++++++++--+-----+++--++++-++-+/ ||   || |
| | ||/++-++-----+-+-+++-+-+-+--+++-+--+++--+--+-+-+-++++----+++-+++~    || | ||| || || |     |  | ||||   ||||||||||  |     |||  |||| || |  ||   || |
| | ||||| ||     | | ||| | |/+--+++-+--+++--+--+-+-+-++++----+++-++++----++-+-+++-++-++-+-----+--+-++++---++++++++++--+-----+++-~|||| || |  ||   || |
| | |||||/++-----+-+-+++~| |||  ||| ~--+++--+--+-+-+-++++----+++-++++----++-+-+++-++-++-+-----+--+-++++---++++++++++--+-----+++-++/|| || |  ||   || |
| | ||||||||     | | ||||| |||  |~+----+++--+--+-+-+-++++----+++-++++----++-+-+++-++-++-+-----/  | ||||   ||||||||~+--+-----+++-++-++-++-+--++---/| |
| | ||||||||     | | ||||| |||  | |    |||  |  | | | ||||    ||| ||||    || | ||| || || |        | ||||   |||||||| |  |     ||| || || || |  ||    | |
| | ||||||||     | | ||||| |||  | |    |||  |  | | | ||||    ~++-++++--->++-+-+++-++-++-+--------+-++++---++++++++-+--+-----+++-++-++-++-/  ||    | |
| | ||||||||     | | ||||| |||  | |  /-+++--+--+-+-+-++++-----++-++++~   || | ||| || || |        | ||||   |||||||| |  |     ||| || || ||    ||    | |
| | ||||||||     | | ||||| |||  | |  | |||  |  | | | ||||     || |||||   || | ||| || || |        | ||||   |||||||| |  |     ||| || || ||    ||    | |
| | ||||||||     | | ||||| |||  ~-+--+-+++--+--+-+-+-++++-----++-+++++>--++-/ ||| || || |        | ||||   |||||||| |  |     ||| || || ||    ||    | |
| | ||||||||     | | ||||| |||   /+--+-+++--+--+~| | ||||     || |||||   ||   ||| || || |        | |||~---++++++++-+--+-----+++-++-++-++----+/    | |
| ~-++++++++-----+-+-+++++-+++---++--+-/||  |  ||| | ||||     || |||||  /++---+++-++-++-+--------+~|||    |||||||| |  |     ||| || || ||    |     | |
|   ||||||||     | | ||||| |||   ||  |  ||  |  ~++-+-++++-----++-+++++--+++---+++-++-++-+--------+++/|    |||||||| |  |     ||| || || ||    |     | |
|   ||||||~+-----+-+-+++++-+++---++--+--++--+---++-+-++++-----++-/||||  |||   ||| || ||/+--------+++-+----++++++++-+--+-----+++-++-++-++----+~    | |
|   |||||| |     | ~-+++++-+++---++--+--++--+---++-+-++++-----++--++++--+++---+++-++-++++--------/|| |    ||||||~+-+--+-----+++-++-/|/++----++~   | |
|   |||||| |     |   ||||| |||   ||  |  ~+--+---++-+-++++-----++--++++--+++---+++-++-++++---------++-+----++++/| | |  |     ||| ||  ||||    |||   | |
|   |||||| |     |   ||||| |||   ||  |   |  |   || | ||||     ||  ||||  |~+---+++-++-++++---------++-+----++++-+-+-+--+-----+++-++--++/|    |||   | |
|   |||||| |    /+---+++++-+++---++--+---+--+---++-+-++++-----++--++++--+-+---+++-++-++++---------++-+----++++-+-+-+--+~    ||| ||  || |    |||   | |
|   |||||~-+----++---+++/| |||   ||  |   |  |   || | ||||     ||  ||||  | |   ||| || ||||         || |    |||| | | |  ||    ||| ||  || |    |||   | |
|   |||||  |  /-++---+++-+-+++---++--+---+--+---++-+-++++-----++--++++-~| ~---+++-++-++++---------++-+----++++-+-+-+--++----+++-++--/| |    |||   | |
|   |||||  |  | ||   ||| | ||~---++--+---+--+---++-+-++++-----++--++++-++-----+++-++-+/||         || |  /-++++-+-+-+--++----+++-++---+-+----+++-~ | |
|   |||||  |  | ||   ||| | ||    ~+--+---+--+---/| | ||||     ||  |||| ||     ||| || | ||         || |  | |||| | | |  ||   /+++-++---+-+----+++-+-+~|
|   |||||  |  | ||   ||| | ||     |  |   |  |    | | ||||     ||  |||| ||     ||| ~+-+-++---------+/ |  | |||| | | |  ||   |||| ||   | |    ||| | |||
|   |||||  |  | ||   ||| | |~-----+--+---+--+----+-+-++++-----++--++++-++-----+++--+-+-++---------+--+--+-++++-+-+-+--++---++++-/|   | |    ||| | |||
|   |||||  |  | ||   ||| | ~------+--+---+--+----+-+-++++-----++--++++-++-----+++--+-+-++---------+--+--+-++++-+-+-+--++---+++/  |   | |    ||| | |||
|   |||||  |  | ||   ~++-+--------+--+---+--+----+-+-++++-----++--++++-++-----+++--+-+-+/         |  |  | |||| |/+-+--++---+++---+--~| |    ||| | |||
~---+++++--+--+-++----++-+--------+--+---+--+----+-+-++/|     ||  |||| ||     |||  | | |          |  |  | |||| ||| |  ||   |||   |  || |    ||| | |||
    |||||  |  | ||    || ~--------+--+---/  |    | | || |     ||  |||| ||     |||  | | ~----------+--+--+-++++-+++-+--++---+++---+--++-+----+/| | |||
    |||||  |  | || /--++----------+--+--~   |    | ~-++-+-----++--++++-++-----+++--+-+------------+--+--+-++++-+++-+--++---+++---+--++-/    | | | |||
    |||||  |  | || |  ||          |  |  |   ~----+---++-+-----++--++++-++-----+++--+-+------------+--/  | |||| ||| |  ||   |||   |  ||      | | | |||
    |||||  |  | || |  ||          |  |  |        |   |~-+-----++--++++-++-----+++--+-+------------+-----+-++++-+++-+--++---++/   |  ||      | | | |||
    |||||  ~--+-++-+--++----------+--+--+--------+---+--+-----++--++++-++-----+++--+-+------------+-----+-++++-+++-+--/|   ||    |  ||      | | | |||
    |~+++-----+-++-+--++----------+--+--+--------+---+--+-----++--++++-++-----+++--+-/            |     | |||| ||| |   |   ||    |  ||      | | | |||
    | |||  /--+-++-+--++----------+--+--+--------+---+--+-----++--++++-++-----+++~ |              |     | |||| ||| |   |   ||    |  ||      | | | |||
    | |||  |  | || |  ||          |  |  |        |   |  ~-----++--++++-++-----++++-+--------------+-----+-++++-+++-+---+---++----+--++------+-+-+-++/
    | |||  |  | || |/-++----------+--+--+--------+---+----~   ||  |||| ||     |||| |              |     | |||| ||| |   |   ||    v  ||      | | | || 
    | |||  |  | || || ||          |  |  |        ~---+----+---++--++++-++-----++++-/              |     | |||| ||| |   |   ||    |  ||      | | | || 
 /--+-+++--+-~| || || ||          |  |  |            |    |   ||  |||| ||     ||||                |     | |||| ||| |   |   ||    |  ||      | | | || 
 |  | |||  | || || ~+-++----------+->+--/            |    |   ||  |~++-++-----/|||                |     | |||| ||| |   |   ||    |  ||      | | | || 
 |  | |||  | || ||  | ||          |  |               |    |   ||  | || ||      |||               /+-----+-++++-+++-+---+---++----+--++------+-+-+-++~
 |  | ||~--+-++-++--+-++--->------+--+---------------+----+---++--+-++-++------+++---------------++-----+-/||| ||| |   |   ||    |  ||      | | | |||
 |  | ||   | || ||  | ||          ~--+---------------+----+---+/  | || ||      |||               ||     |  ||| |~+-+---+---++----+--/|      | | | |||
 |  | ||   | || ||  | ~+-------------+---------------+----+---+---+-++-++------+++---------------++-----+--++/ | | |   |   ||    |   |      | | | |||
 |  | ||   | |~-++--+--+-------------+---------------+----+---+---+-++-/|      |~+---------------++-----+--++--+-+-/   |   ||    |   ~------+-/ | |||
 |  | ||   | |  ||  |  |             |               |    |   |   | ||  ~------+-+---------------+/     |  ||  | |     |   ||    |          |   | |||
 |  ~-++---+-+--++--+--/             ~---------------+----+---+---+-+/         | |               |      ~--++--+-+-----+---++----+----------+---/ |||
 |    |~---+-+--++--+--------------------------------+----+---+---+-+----------+-+---------------+---------/|  | ~-----+---++----+----------+-----/||
 ~----+----+-/  ||  |                                ~----+---/   | |          | |               |          |  |       |   ||    |          |      ||
      |    |    ||  |                                     |       ~-+----------+-+---------------+----------/  |       |   ||    |          |      ||
      |    |    ~+--+-------------------------------------+---------+----------+-+---------------+-------------+-------/   ~+----+----------+------/|
      |    |     ~--+-------------------------------------+---------+----------+-+---------------+-------------+------------/    |          |       |
      |    ~--------+-------------------------------------+---------+----------+-/               |             |                 |          |       |
      |             ~-------------------------------------/         |          ~-----------------+-------------+-----------------/          |       |
      |                                                             |                            |             ~----------------------------/       |
      ~-------------------------------------------------------------/                            ~--------------------------------------------------/`;

function getChar(char = "") {
  switch (char) {
    case ">":
    case "<":
      return "-";
    case "v":
    case "^":
      return "|";
    case "~":
      return "\\";
    default:
      return char;
  }
}

function isCart(char = "") {
  switch (char) {
    case ">":
    case "<":
    case "v":
    case "^":
      return true;
    default:
      return false;
  }
}

function wait100() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 400);
  });
}

function buildGraph(raw = "") {
  const grid = raw.split("\n").map((row) => row.split(""));
  let carts = [];
  let collisionSpot;

  grid.forEach((row, y) => {
    row.forEach((char, x) => {
      if (isCart(char)) {
        carts.push({
          id: carts.length,
          state: char,
          x,
          y,
          previousX: undefined,
          previousY: undefined,
          nextTurn: "left",
        });
      }
      grid[y][x] = getChar(char);
    });
  });

  carts = sortCarts(carts);

  const limit = 2000;
  let i = 0;

  while (!collisionSpot && i < limit) {
    i++;
    carts = carts.map((cart) => {
      let nextSpace;
      let nextStatus;
      let nextTurn = cart.nextTurn;

      switch (cart.state) {
        case "^": {
          nextSpace = [cart.x, cart.y - 1];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "\\":
            case "~":
              nextStatus = "<";
              break;
            case "/":
              nextStatus = ">";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = "<";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = "^";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = ">";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
        case ">": {
          nextSpace = [cart.x + 1, cart.y];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "~":
            case "\\":
              nextStatus = "v";
              break;
            case "/":
              nextStatus = "^";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = "^";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = ">";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = "v";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
        case "v": {
          nextSpace = [cart.x, cart.y + 1];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "\\":
            case "~":
              nextStatus = ">";
              break;
            case "/":
              nextStatus = "<";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = ">";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = "v";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = "<";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
        case "<": {
          nextSpace = [cart.x - 1, cart.y];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "\\":
            case "~":
              nextStatus = "^";
              break;
            case "/":
              nextStatus = "v";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = "v";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = "<";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = "^";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
      }

      return {
        state: nextStatus,
        x: nextSpace[0],
        y: nextSpace[1],
        previousX: cart.x,
        previousY: cart.y,
        nextTurn,
        id: cart.id,
      };
    });

    const spaces = [];

    if (!collisionSpot) {
      carts.some((oldCarts) => {
        const key = [oldCarts.x, oldCarts.y].join(",");
        const otherKey = [oldCarts.previousX, oldCarts.previousY].join(",");

        const hasKey = spaces.includes(key);
        const hasOldKey = spaces.includes(otherKey);

        if (!hasKey) {
          spaces.push(key);
        } else if (!hasOldKey) {
          spaces.push(otherKey);
        }

        if (hasKey) {
          collisionSpot = [oldCarts.x, oldCarts.y];
          return true;
        }

        if (hasOldKey) {
          collisionSpot = [oldCarts.previousX, oldCarts.previousY];
          return true;
        }
      });
    }

    carts = sortCarts(carts);
  }

  return collisionSpot;
}

function sortCarts(carts = [{ x: 0, y: 0, state: "", nextTurn: "", id: 0 }]) {
  return carts.sort((cartA, cartB) => {
    if (cartA.y > cartB.y) {
      return 1;
    } else if (cartA.y === cartB.y && cartA.x > cartB.x) {
      return 1;
    } else {
      return -1;
    }
  });
}

function printAroundOneCart(cartId, carts, grid) {
  const targetCart = carts.find((cart) => cart.id === cartId);

  let baseY = targetCart.y - 5;
  if (baseY < 0) {
    baseY = 0;
  }
  let baseX = targetCart.x - 5;
  if (baseX < 0) {
    baseX = 0;
  }

  let topX = targetCart.x + 5;
  let topY = targetCart.y + 5;

  if (topX > grid[0].length) {
    topX = grid[0].length;
  }

  if (topY > grid.length) {
    topY = grid.length;
  }

  for (let y = baseY; y < topY; y++) {
    const row = [];
    for (let x = baseX; x < topX; x++) {
      const matchingCart = carts.find(
        (cart) => cart.y === y && cart.x === x && cart.id !== cartId
      );
      if (x === targetCart.x && y === targetCart.y) {
        row.push(targetCart.state);
      } else if (matchingCart) {
        row.push(matchingCart.state);
      } else {
        row.push(grid[y][x]);
      }
    }
    console.log(row.join(""));
  }
}

function printMap(grid, carts, collision) {
  const newMap = [];

  grid.forEach((row, y) => {
    newMap[y] = [];
    row.forEach((char, x) => {
      newMap[y][x] = char;
    });
  });

  carts.forEach((cart) => {
    newMap[cart.y][cart.x] = cart.state;
  });

  if (collision) {
    newMap[collision[1]][collision[0]] = "X";
  }

  newMap.forEach((row) => console.log(row.join("")));
}

function buildGraphWithCollissions(raw = "") {
  const grid = raw.split("\n").map((row) => row.split(""));
  let carts = [];
  let finalCart;

  grid.forEach((row, y) => {
    row.forEach((char, x) => {
      if (isCart(char)) {
        carts.push({
          id: carts.length,
          state: char,
          x,
          y,
          previousX: undefined,
          previousY: undefined,
          nextTurn: "left",
          isDisabled: false,
        });
      }
      grid[y][x] = getChar(char);
    });
  });

  carts = sortCarts(carts);

  const limit = 20000;
  let i = 0;

  while (!finalCart && i < limit) {
    i++;

    carts.forEach((cart) => {
      let nextSpace;
      let nextStatus;
      let nextTurn = cart.nextTurn;

      switch (cart.state) {
        case "^": {
          nextSpace = [cart.x, cart.y - 1];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "\\":
            case "~":
              nextStatus = "<";
              break;
            case "/":
              nextStatus = ">";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = "<";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = "^";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = ">";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
        case ">": {
          nextSpace = [cart.x + 1, cart.y];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "~":
            case "\\":
              nextStatus = "v";
              break;
            case "/":
              nextStatus = "^";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = "^";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = ">";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = "v";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
        case "v": {
          nextSpace = [cart.x, cart.y + 1];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "\\":
            case "~":
              nextStatus = ">";
              break;
            case "/":
              nextStatus = "<";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = ">";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = "v";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = "<";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
        case "<": {
          nextSpace = [cart.x - 1, cart.y];
          const newChar = grid[nextSpace[1]][nextSpace[0]];
          switch (newChar) {
            case "\\":
            case "~":
              nextStatus = "^";
              break;
            case "/":
              nextStatus = "v";
              break;
            case "+":
              switch (nextTurn) {
                case "left":
                  nextStatus = "v";
                  nextTurn = "straight";
                  break;
                case "straight":
                  nextStatus = "<";
                  nextTurn = "right";
                  break;
                case "right":
                  nextStatus = "^";
                  nextTurn = "left";
                  break;
              }
              break;
            default:
              nextStatus = cart.state;
              break;
          }
          break;
        }
      }

      cart["state"] = nextStatus;
      cart["x"] = nextSpace[0];
      cart["y"] = nextSpace[1];
      cart["previousX"] = cart.x;
      cart["previousY"] = cart.y;
      cart["nextTurn"] = nextTurn;
      cart["id"] = cart.id;
      cart["isDisabled"] = cart.isDisabled;

      cart = {
        state: nextStatus,
        x: nextSpace[0],
        y: nextSpace[1],
        previousX: cart.x,
        previousY: cart.y,
        nextTurn,
        id: cart.id,
        isDisabled: cart.isDisabled,
      };

      const spaces = {};

      carts.forEach((subCart) => {
        const key = [subCart.x, subCart.y].join(",");
        const otherKey = [subCart.previousX, subCart.previousY].join(",");
        const hasKey = spaces[key];
        const hasOtherKey = spaces[otherKey];

        if (!hasKey) {
          spaces[key] = [subCart.id];
        } else {
          spaces[key].push(subCart.id);
        }

        if (subCart.previousX !== undefined) {
          if (!hasOtherKey) {
            spaces[otherKey] = [subCart.id];
          } else {
            spaces[otherKey].push(subCart.id);
          }
        }
      });
      Object.keys(spaces).forEach((key) => {
        if (spaces[key].length > 1) {
          spaces[key].forEach(
            (id) => (carts.find((c) => c.id === id).isDisabled = true)
          );
        }
      });
    });

    carts = sortCarts(carts).filter((cart) => !cart.isDisabled);
    if (carts.length <= 1) {
      finalCart = carts[0];
    }
  }

  console.log(carts);

  return finalCart;
}

const result = buildGraphWithCollissions(input);

// not 46,49
// 118,98
// 16,73

console.log("result:", result);
console.timeEnd("run");
