#![allow(dead_code)]
use std::fs;

fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

  advanced(contents);
}

fn advanced(contents: String) {
  let lines = contents
    .split("\n")
    .map(|line| {
      return line.chars().collect::<Vec<char>>();
    })
    .collect::<Vec<Vec<char>>>();

  let mut scores = lines
    .into_iter()
    .map(|line| {
      let mut buffer: Vec<char> = vec![];
      let mut internal_score = 0;
      let mut is_incomplete = true;
      for ch in line {
        match ch {
          '[' | '(' | '{' | '<' => buffer.push(ch),
          ']' | ')' | '}' | '>' => {
            let existing_ch = buffer.pop().unwrap();
            let matching_ch = get_pair(&ch);

            if existing_ch != matching_ch {
              is_incomplete = false;
              break;
            }
          }
          _ => panic!(),
        }
      }

      if is_incomplete {
        println!("Left: {}", buffer.iter().count());
        buffer.reverse();
        internal_score += buffer.into_iter().enumerate().fold(0, |acc, (i, ch)| {
          return acc * 5 + char_to_auto_num(&ch);
        });
      }

      return internal_score;
    })
    .filter(|score| *score != 0)
    .collect::<Vec<usize>>();

  scores.sort();

  println!("{:?}", scores[(scores.iter().count() + 1) / 2 - 1]);
}

fn basic(contents: String) {
  let lines = contents
    .split("\n")
    .map(|line| {
      return line.chars().collect::<Vec<char>>();
    })
    .collect::<Vec<Vec<char>>>();

  let mut score = 0;

  for line in lines {
    let mut buffer: Vec<char> = vec![];

    for ch in line {
      match ch {
        '[' | '(' | '{' | '<' => buffer.push(ch),
        ']' | ')' | '}' | '>' => {
          let existing_ch = buffer.pop().unwrap();
          let matching_ch = get_pair(&ch);

          if existing_ch != matching_ch {
            score += char_to_num(&ch);
          }
        }
        _ => panic!(),
      }
    }
  }

  println!("{}", score);
}

fn char_to_auto_num(char: &char) -> usize {
  match (char) {
    '[' => return 2,
    '(' => return 1,
    '{' => return 3,
    '<' => return 4,
    ']' => return 2,
    ')' => return 1,
    '}' => return 3,
    '>' => return 4,
    _ => panic!(),
  }
}

fn char_to_num(char: &char) -> usize {
  match (char) {
    '[' => return 57,
    '(' => return 3,
    '{' => return 1197,
    '<' => return 25137,
    ']' => return 57,
    ')' => return 3,
    '}' => return 1197,
    '>' => return 25137,
    _ => panic!(),
  }
}

fn get_pair(char: &char) -> char {
  match char {
    '[' => return ']',
    '(' => return ')',
    '{' => return '}',
    '<' => return '>',
    ']' => return '[',
    ')' => return '(',
    '}' => return '{',
    '>' => return '<',
    _ => panic!(),
  }
}
