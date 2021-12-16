#![allow(dead_code)]
use std::fs;

struct Fish {
  countdown: isize,
  base: isize,
}

fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();
  let limit = 256;

  // basic(limit, contents.clone());
  advanced(limit, contents);
}

fn advanced(limit: isize, contents: String) {
  let mut fishes = contents
    .split(",")
    .into_iter()
    .map(|num| {
      let actual_num: usize = num.parse().unwrap();

      return actual_num;
    })
    .collect::<Vec<usize>>();

  let mut fish_days = vec![0, 0, 0, 0, 0, 0, 0, 0, 0];

  for fish in fishes {
    fish_days[fish] = fish_days[fish] + 1;
  }


  for _i in 0..limit {
    let mut new_population = vec![0, 0, 0, 0, 0, 0, 0, 0, 0];
    for j in 0..9 {
      if j == 0 {
        new_population[8] = fish_days[j].clone();
        new_population[6] = fish_days[j].clone();
      } else {
        new_population[j - 1] = new_population[j - 1] + fish_days[j];
      }
    }
    fish_days = new_population;
  }

  println!("Advanced: {}", fish_days.iter().sum::<usize>());
}

fn basic(limit: isize, contents: String) {
  let mut fishes: Vec<Fish> = contents
    .split(",")
    .into_iter()
    .map(|num| {
      let actual_num = num.parse().unwrap();

      return Fish {
        countdown: actual_num,
        base: 6,
      };
    })
    .collect();

  for _i in 0..limit {
    fishes = run_round(fishes);
    // println!("{}, {:?}", _i, fishes.iter().count());
  }

  println!("Basic: {:?}", fishes.iter().count());
}

fn run_round(fishes: Vec<Fish>) -> Vec<Fish> {
  let mut output = Vec::with_capacity(100000000);

  for mut fish in fishes.into_iter() {
    fish.countdown = fish.countdown - 1;

    if fish.countdown > -1 {
      output.push(fish);
    } else {
      output.push(make_fish());
      output.push(make_child());
    }
  }

  return output;
}

fn make_fish() -> Fish {
  return Fish {
    countdown: 6,
    base: 6,
  };
}

fn make_child() -> Fish {
  return Fish {
    countdown: 8,
    base: 8,
  };
}
