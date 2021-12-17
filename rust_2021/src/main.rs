#![allow(dead_code)]
use std::collections::HashMap;
use std::fs;
use std::cmp::Ordering;

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

  advanced(contents);

  // map_numbers(vec![
  //   // "ab", 
  //   // "eafb", 
  //   // "dab",
  //   // "cdfgeb",
  //   // "cdfbe", 
  //   // "acedgfb", 
  //   // "gcdfa", 
  //   // "fbcad", 
  //   // "cefabd", 
  //   // "cagedb",
  //   // "eafb", 
  //   // "cdbaf", 
  //   // "cdfeb", 
  //   // "fcadb", 
  //   // "cdfeb",
  //   // "edbfga", "begcd", "cbg", "gc", "gcadebf", "fbgde", "acbgfd", "abcde", "gfcbed", "gfec"
  // ], vec![
  //   // "cdfeb", "fcadb", "cdfeb", "cdbaf"
  //   // "fcgedb", "cgb", "dgebacf", "gc"
  //   ]);
}

fn advanced(contents: String) {
  let code_pairs = contents.split("\n").into_iter().map(|line| {
    let mut double = line.split(" | ");
    let codes = double.next().unwrap().split(" ").filter(|char| char != &"").collect::<Vec<&str>>();
    let output_codes = double.next().unwrap().split(" ").filter(|char| char != &"").collect::<Vec<&str>>();

    return (codes, output_codes);
  }).collect::<Vec<(Vec<&str>, Vec<&str>)>>();

  let sum = code_pairs.into_iter().fold(0, |sum, (code, output_codes)| {
    return sum + map_numbers(code, output_codes);
  });
  
  println!("{:?}", sum);
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

fn map_numbers(mut codes: Vec<&str>, output_code: Vec<&str>) -> isize {
  let mut clock_map = HashMap::from([
    ("a", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("b", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("c", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("d", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("e", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("f", vec!["a", "b", "c", "d", "e", "f", "g"]),
    ("g", vec!["a", "b", "c", "d", "e", "f", "g"]),
  ]);

  println!("{:?}", codes);
  codes.sort_by(|a, b| {
    let a_len = a.len();
    let b_len = b.len();

    if a_len > b_len {
      return Ordering::Greater;
    } else if a_len == b_len {
      return Ordering::Equal;
    } else {
      return Ordering::Less;
    }});
  println!("{:?}", codes);


  for _ in 0..10 {
    // for each code
    for code in codes.clone() {
      let keys = get_key();
  
      let mut best_match: Vec<String> = vec![];
  
      let best_guess = generate_permutations(clock_map.clone(), code);
  
      if best_guess != None {
        best_match = best_guess.unwrap();
        // println!("{} has to be {}", code, best_match.join(""));
      } else {
        // println!("Can't properly match {}", code);
      }
  
      if best_match != vec![] as Vec<String>  {
        // println!("{} matches {:?}", code, best_match);
  
        let str_arr = best_match.iter().map(|char| &**char).collect::<Vec<&str>>();
  
        let mut new_map = clock_map.clone();
        for (map_char, _) in &clock_map {
          if code.contains(map_char) {
            let new_entries = new_map
              .get(map_char)
              .unwrap()
              .clone()
              .into_iter()
              .filter(|elem| str_arr.contains(elem))
              .collect::<Vec<&str>>();
  
            new_map.insert(map_char, new_entries);
          } else {
            let new_entries = new_map
              .get(map_char)
              .unwrap()
              .clone()
              .into_iter()
              .filter(|elem| !str_arr.contains(elem))
              .collect::<Vec<&str>>();
  
            new_map.insert(map_char, new_entries);
          }
        }
        clock_map = new_map;
      }
    }
  
    if has_proper_key(&clock_map) {
      // println!("We're good!");
      break;
    }
  }

  if has_proper_key(&clock_map) {
    let mut nums = vec![];
    for code in output_code {
      nums.push(translate_code(&clock_map, code).to_string());
    }

    return nums.join("").parse().unwrap();
  } else {
    println!("Something broke");
    return 0;
  }

  // println!("{:?}", clock_map);
}

fn translate_code(map: &HashMap<&str, Vec<&str>>, code: &str) -> isize {
  let keys = get_key();
  let mut converted = code
    .split("")
    .filter(|char| *char != "")
    .map(|char| map.get(char).unwrap()[0])
    .collect::<Vec<&str>>();

  converted.sort();

  if keys.one == converted {
    return 1;
  } else if keys.two == converted {
    return 2;
  } else if keys.three == converted {
    return 3;
  } else if keys.four == converted {
    return 4;
  } else if keys.five == converted {
    return 5;
  } else if keys.six == converted {
    return 6;
  } else if keys.seven == converted {
    return 7;
  } else if keys.eight == converted {
    return 8;
  } else if keys.nine == converted {
    return 9;
  } else if keys.zero == converted {
    return 0;
  } else {
    println!("Something went wrong, {:?}", converted);
    return 0;
  }
}

fn has_proper_key(map: &HashMap<&str, Vec<&str>>) -> bool {
  return map.iter().all( |(_, elem)| elem.iter().count() == 1);
}

fn generate_permutations(map: HashMap<&str, Vec<&str>>, code: &str) -> Option<Vec<String>> {
  let mut permutations: Vec<String> = vec![];

  for char in code
    .split("")
    .filter(|elem| *elem != "")
    .collect::<Vec<&str>>()
  {
    let keys = map.get(char).unwrap();
    if permutations.iter().count() == 0 {
      let mut basic_permuation = keys
        .clone()
        .into_iter()
        .map(|str| format!("{}", str))
        .collect::<Vec<String>>();
      permutations.append(&mut basic_permuation);
    } else {
      let new_permuations = permutations
        .into_iter()
        .map(|elem| {
          let output = keys
            .iter()
            .map(|k| {
              let val = elem.clone();
              let internal_value = val;

              if (internal_value.contains(k)) {
                return String::from("");
              }

              let new_string = format!("{}{}", internal_value, k);

              let mut string_collection = new_string
                .split("")
                .filter(|char| *char != "")
                .collect::<Vec<&str>>();

              string_collection.sort();

              return string_collection.join("");
            })
            .collect::<Vec<String>>();

          return output;
        })
        .flatten()
        .collect::<Vec<String>>();
      permutations = new_permuations;
    }
  }

  
  permutations = permutations
  .into_iter()
  .filter(|elem| elem.len() == code.len())
  .collect();
  
  permutations.sort();
  permutations.dedup();
  
  // unique combinations not allowed
  
  permutations = permutations
    .into_iter()
    .filter(|set| {
      let mut string_collection = set
        .split("")
        .filter(|char| *char != "")
        .collect::<Vec<&str>>();

      string_collection.sort();

      let keys = get_key();

      return keys.one == string_collection || 
      keys.two == string_collection ||
      keys.three == string_collection ||
      keys.four == string_collection ||
      keys.five == string_collection ||
      keys.six == string_collection ||
      keys.seven == string_collection ||
      keys.eight == string_collection ||
      keys.nine == string_collection ||
      keys.zero == string_collection;
    })
    .collect();

  if permutations.len() == 1 {
    let code = permutations[0]
    .split("")
    .filter(|char| *char != "")
    .map(|char| char.to_string())
    .collect::<Vec<String>>();
    return Some(code);
  }

  return None;
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
