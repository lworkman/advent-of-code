#![allow(dead_code)]
use std::collections::HashMap;
use std::fs;

struct ClockNumbers<'a> {
  zero: Vec<&'a str>,
  one: Vec<&'a str>,
  two: Vec<&'a str>,
  three: Vec<&'a str>,
  four: Vec<&'a str>,
  five: Vec<&'a str>,
  six: Vec<&'a str>,
  seven: Vec<&'a str>,
  eight: Vec<&'a str>,
  nine: Vec<&'a str>,
}

impl<'a> IntoIterator for ClockNumbers<'a> {
  type Item = Vec<&'a str>;
  type IntoIter = ClockNumberIterator<'a>;

  fn into_iter(self) -> Self::IntoIter {
    return ClockNumberIterator {
      clock_numbers: self,
      index: 0,
    };
  }
}

struct ClockNumberIterator<'a> {
  clock_numbers: ClockNumbers<'a>,
  index: usize,
}

impl<'a> Iterator for ClockNumberIterator<'a> {
  type Item = Vec<&'a str>;
  fn next(&mut self) -> Option<Vec<&'a str>> {
    let result = match self.index {
      0 => &self.clock_numbers.zero,
      1 => &self.clock_numbers.one,
      2 => &self.clock_numbers.two,
      3 => &self.clock_numbers.three,
      4 => &self.clock_numbers.four,
      5 => &self.clock_numbers.five,
      6 => &self.clock_numbers.six,
      7 => &self.clock_numbers.seven,
      8 => &self.clock_numbers.eight,
      9 => &self.clock_numbers.nine,
      _ => return None,
    };
    self.index += 1;

    return Some(result.to_vec());
  }
}

struct ClockMap<'a> {
  a: Vec<&'a str>,
  b: Vec<&'a str>,
  c: Vec<&'a str>,
  d: Vec<&'a str>,
  e: Vec<&'a str>,
  f: Vec<&'a str>,
  g: Vec<&'a str>,
}

fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

  // basic(contents);

  // should map to c,f

  map_numbers(vec![
    "ab", "eafb", "dab",
    "cdfbe",
    "acedgfb",
    "gcdfa",
     "fbcad", "cefabd", "cdfgeb", "cagedb", "eafb",
    "cdbaf",
    "cdfeb", "fcadb", "cdfeb",
  ]);
}

fn basic(contents: String) {
  let output_codes = contents
    .split("\n")
    .into_iter()
    .map(|line| {
      let mut double = line.split(" | ");
      double.next();
      let codes = double.next().unwrap();

      return codes.split(" ").into_iter().collect::<Vec<&str>>();
    })
    .flatten()
    .collect::<Vec<&str>>();

  println!(
    "{}",
    output_codes
      .into_iter()
      .filter(|code| check_code(code))
      .count()
  )
}

fn check_code(code: &str) -> bool {
  let keys = get_key();
  let count = code.len();

  let one_count = keys.one.iter().count();
  let four_count = keys.four.iter().count();
  let seven_count = keys.seven.iter().count();
  let eight_count = keys.eight.iter().count();

  return count == one_count || count == four_count || count == seven_count || count == eight_count;
}

fn map_numbers(codes: Vec<&str>) {
  let mut clock_map = HashMap::from([
    ("a", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("b", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("c", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("d", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("e", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("f", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("g", vec!["a", "b", "c", "d", "e", "f", "g"]),
  ]);


  // for each code
  for code in codes.clone() {
    let keys = get_key();

    let mut potential_matches = vec![];
    // for each key
    for key in keys {
      if key.iter().count() == code.len() {
        potential_matches.push(key.clone());
      }
    }

    if potential_matches.len() == 1 {
      let matches_to_use = &potential_matches[0];
      println!("{} matches {:?}", code, potential_matches);
      let mut new_map = clock_map.clone();
      for (map_char, _) in &clock_map {
        if code.contains(map_char) {
          let new_entries = new_map
            .get(map_char)
            .unwrap()
            .clone()
            .into_iter()
            .filter(|elem| matches_to_use.contains(elem))
            .collect::<Vec<&str>>();

          new_map.insert(map_char, new_entries);
        } else {
          let new_entries = new_map
            .get(map_char)
            .unwrap()
            .clone()
            .into_iter()
            .filter(|elem| !matches_to_use.contains(elem))
            .collect::<Vec<&str>>();

          new_map.insert(map_char, new_entries);
        }
      }
      clock_map = new_map;
    }
  }

  println!("{:?}", clock_map);
}


fn get_key<'a>() -> ClockNumbers<'a> {
  return ClockNumbers {
    zero: vec!["a", "b", "c", "e", "f", "g"],
    one: vec!["c", "f"],
    two: vec!["a", "c", "d", "e", "g"],
    three: vec!["a", "c", "d", "f", "g"],
    four: vec!["b", "c", "d", "f"],
    five: vec!["a", "b", "d", "f", "g"],
    six: vec!["a", "b", "d", "e", "f", "g"],
    seven: vec!["a", "c", "f"],
    eight: vec!["a", "b", "c", "d", "e", "f", "g"],
    nine: vec!["a", "b", "c", "d", "f", "g"],
  };
}
