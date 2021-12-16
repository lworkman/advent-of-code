#![allow(dead_code)]
use std::fs;
fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

  advanced(contents);
}

fn advanced(contents: String) {
  let mut collection = contents
    .split(",")
    .map(|num| {
      let actual_num: isize = num.parse().unwrap();

      return actual_num;
    })
    .collect::<Vec<isize>>();

  collection.sort();

  let count = collection.iter().count();
  let mut target;

  if count % 2 == 0 {
    target = collection[(count / 2 - 1)];
  } else {
    let smaller = ((count / 2) as f32).floor() - 1_f32;
    let bigger = smaller + 1_f32;
    target = (collection[bigger as usize] + collection[smaller as usize]) / 2;
  }

  let mut fuel_saved = calculate_total_fuel_cost(&collection, target);

  loop {
    let this_target = target + 1;
    let new_fuel_saved = calculate_total_fuel_cost(&collection, this_target);
    if new_fuel_saved < fuel_saved {
      target = this_target;
      fuel_saved = new_fuel_saved;
    } else {
      break;
    }
  }

  loop {
    let this_target = target - 1;
    let new_fuel_saved = calculate_total_fuel_cost(&collection, this_target);
    if new_fuel_saved < fuel_saved {
      target = this_target;
      fuel_saved = new_fuel_saved;
    } else {
      break;
    }
  }

  println!("point: {}, fuel: {}", target, fuel_saved);
}

fn calculate_total_fuel_cost(distances: &Vec<isize>, target: isize) -> isize {
  return distances.iter().fold(0, |acc, dist| {
    let abs_distance = (*dist - target).abs() as isize;

    return acc + calculate_fuel_cost(abs_distance);
  });
}

fn calculate_fuel_cost(step: isize) -> isize {
  return (step + 1) * step / 2;
}

fn basic(contents: String) {
  let mut collection = contents
    .split(",")
    .map(|num| {
      let actual_num: isize = num.parse().unwrap();

      return actual_num;
    })
    .collect::<Vec<isize>>();

  collection.sort();

  let count = collection.iter().count();
  let median;

  if count % 2 == 0 {
    median = collection[(count / 2 - 1)];
  } else {
    let smaller = ((count / 2) as f32).floor() - 1_f32;
    let bigger = smaller + 1_f32;
    median = (collection[bigger as usize] + collection[smaller as usize]) / 2;
  }

  let fuel_count = collection.into_iter().fold(0, |acc, num| {
    let amt = ((num - median) as f32).abs() as isize;
    return acc + amt;
  });

  println!("Fueld count: {}", fuel_count);
}
