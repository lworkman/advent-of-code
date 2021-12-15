#![allow(dead_code)]
use std::collections::HashMap;
use std::fs;

fn main() {

  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

  advanced(contents);
}

fn advanced(input: String) {
  let coords = input
    .split("\n")
    .collect::<Vec<&str>>()
    .into_iter()
    .map(|line| {
      let mut split_line = line.split(" -> ");
      let first_coor = get_coordinate(split_line.next().unwrap());
      let second_coor = get_coordinate(split_line.next().unwrap());
      return (first_coor, second_coor);
    })
    .map(|(first, second)| {
      if first.0 == second.0 || first.1 == second.1 {
        return build_line(first, second);
      } else {
        return build_line_diagonal(first, second);
      }
    })
    .flatten()
    .fold(HashMap::new(), |mut acc, coor| {
      let coor_key = format!("{},{}", coor.0, coor.1);
      if acc.get(&coor_key) == None {
        acc.insert(coor_key.clone(), 0);
      }

      let new_value = acc.get(&coor_key).unwrap() + 1;
      acc.insert(coor_key, new_value);
      return acc;
    });

  let count = coords
    .into_iter()
    .filter(|(_, val)| {
      return *val > 1;
    })
    .count();

  println!("{}", count);
}

fn basic(input: String) {
  let coords = input
    .split("\n")
    .collect::<Vec<&str>>()
    .into_iter()
    .map(|line| {
      let mut split_line = line.split(" -> ");
      let first_coor = get_coordinate(split_line.next().unwrap());
      let second_coor = get_coordinate(split_line.next().unwrap());
      return (first_coor, second_coor);
    })
    .filter(|(first, second)| return first.0 == second.0 || first.1 == second.1)
    .map(|(first, second)| return build_line(first, second))
    .flatten()
    .fold(HashMap::new(), |mut acc, coor| {
      let coor_key = format!("{},{}", coor.0, coor.1);
      if acc.get(&coor_key) == None {
        acc.insert(coor_key.clone(), 0);
      }

      let new_value = acc.get(&coor_key).unwrap() + 1;
      acc.insert(coor_key, new_value);
      return acc;
    });

  let count = coords
    .into_iter()
    .filter(|(_, val)| {
      return *val > 1;
    })
    .count();

  println!("{}", count);
}

fn get_coordinate(input: &str) -> (usize, usize) {
  let mut split = input.split(",");
  let x = split.next().unwrap().parse().unwrap();
  let y = split.next().unwrap().parse().unwrap();

  return (x, y);
}

fn build_line(start: (usize, usize), end: (usize, usize)) -> Vec<(usize, usize)> {
  let mut output: Vec<(usize, usize)> = vec![];

  let mut low_x = start.0;
  let mut high_x = end.0;
  let mut low_y = start.1;
  let mut high_y = end.1;

  if start.0 > end.0 {
    low_x = end.0;
    high_x = start.0;
  }

  if start.1 > end.1 {
    low_y = end.1;
    high_y = start.1;
  }

  for x in low_x..high_x + 1 {
    for y in low_y..high_y + 1 {
      output.push((x, y));
    }
  }
  return output;
}

fn build_line_diagonal(start: (usize, usize), end: (usize, usize)) -> Vec<(usize, usize)> {
  let mut output: Vec<(usize, usize)> = vec![];

  let is_x_positive = start.0 < end.0;
  let is_y_positive = start.1 < end.1;

  
  let int_x = i32::try_from(start.0).ok().unwrap();
  let int_y = i32::try_from(end.0).ok().unwrap();

  for num in 0..(int_x - int_y).abs() + 1 {
    let mut new_x = start.0 + (num as usize);
    let mut new_y = start.1 + (num as usize);

    if !is_x_positive {
      new_x = start.0 - (num as usize);
    }

    if !is_y_positive {
      new_y = start.1 - (num as usize);
    }

    output.push((new_x, new_y))
  }

  return output;
}

// Turn each instruction into a vec of coordinates
// Discard instructions that aren't straight lines
// Determine size of grid
// Check how many arrays each spot on the grid is in, count how many are in more than 2
