use std::fs;

struct Board {
  digits: Vec<isize>,
  lines: Vec<Vec<isize>>,
}

impl std::cmp::PartialEq for Board {
  fn eq(&self, other: &Board) -> bool {
    return self.digits == other.digits && self.lines == other.lines;
  }
}

fn main() {
  advanced();
}
fn basic() {
  let filename: &str = "./src/input.txt";
  let (boards, digits) = parse_instructions_and_make_boards(filename);

  let mut digits_called: Vec<isize> = vec![];

  for digit in digits {
    let mut winning_score: isize = -1;
    digits_called.push(digit);
    for board in boards.iter() {
      if is_winner(board, digits_called.clone()) {
        winning_score = calcuate_score(&digits_called, digit, &board);
        break;
      }
    }
    if winning_score != -1 {
      println!("{}", winning_score);
      break;
    }
  }
}

fn advanced() {
  let filename: &str = "./src/input.txt";
  let (boards, digits) = parse_instructions_and_make_boards(filename);

  let mut digits_called: Vec<isize> = vec![];
  let mut winning_boards: Vec<&Board> = vec![];

  for digit in digits {
    digits_called.push(digit);
    for board in boards.iter() {
      if is_winner(board, digits_called.clone()) && !winning_boards.contains(&board) {
        winning_boards.push(board);
      }
    }
    if winning_boards.iter().count() == boards.iter().count() {
      let loser_board = winning_boards.pop().unwrap();
      println!("{}", calcuate_score(&digits_called, digit, loser_board));
      break;
    }
  }
}

fn parse_instructions_and_make_boards(filename: &str) -> (Vec<Board>, Vec<isize>) {
  let contents = fs::read_to_string(filename).unwrap();
  let lines: Vec<&str> = contents
    .split("\r\n")
    .collect::<Vec<&str>>()
    .into_iter()
    .filter(|val| *val != "")
    .collect();

  let digits: Vec<isize> = lines[0]
    .split(",")
    .collect::<Vec<&str>>()
    .into_iter()
    .map(|num| num.parse().unwrap())
    .collect();

  let unparsed_boards = &lines[1..lines.iter().count()];
  let mut boards: Vec<Board> = vec![];

  for index in 0..((unparsed_boards.iter().count() as f32 / 5.0).floor() as usize) {
    let lines_we_care_about = &unparsed_boards[index * 5..(index * 5 + 5)];
    let board_numbers: Vec<Vec<isize>> = lines_we_care_about
      .iter()
      .map(|line| {
        let line_numbers = line.split(" ").collect::<Vec<&str>>();
        let line_numbers_parsed = line_numbers
          .iter()
          .filter(|val| **val != "")
          .map(|num: &&str| {
            return num.parse::<isize>().unwrap();
          })
          .collect::<Vec<isize>>();
        return line_numbers_parsed;
      })
      .collect();
    boards.push(generate_lines(board_numbers));
  }

  return (boards, digits);
}

fn is_winner(board: &Board, digits_called: Vec<isize>) -> bool {
  return board
    .lines
    .iter()
    .any(|line| line.iter().all(|num| digits_called.contains(num)));
}

fn calcuate_score(digits_called: &Vec<isize>, digit: isize, board: &Board) -> isize {
  return board.digits.iter().fold(0, |acc, num| {
    if digits_called.contains(num) {
      return acc;
    } else {
      return acc + num;
    }
  }) * digit;
}

fn generate_lines(square: Vec<Vec<isize>>) -> Board {
  let mut lines: Vec<Vec<isize>> = vec![];
  let mut digits: Vec<isize> = vec![];
  for line in 0..5 {
    for digit in &square[line] {
      digits.push(*digit);
    }

    lines.push(vec![
      square[line][0],
      square[line][1],
      square[line][2],
      square[line][3],
      square[line][4],
    ]);
    lines.push(vec![
      square[0][line],
      square[1][line],
      square[2][line],
      square[3][line],
      square[4][line],
    ]);
  }

  return Board {
    digits: digits,
    lines: lines,
  };
}
