#![allow(dead_code)]
use std::fs;
fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

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
