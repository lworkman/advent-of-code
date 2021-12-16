#![allow(dead_code)]
use std::fs;

fn main() {
  let filename: &str = "./src/test.txt";
  let contents = fs::read_to_string(filename).unwrap();

  build_instructions(contents);
}

fn build_instructions(contents: String) {
  println!(
    "{:?}",
    contents.split("\r").into_iter().collect::<Vec<&str>>()
  );
}

fn get_key() {
  let zero = ["a", "b", "c", "d"];
  let one = ["c", "f"];
  let two = ["a", "c", "d", "e", "g"];
  let three = ["a", "c", "d", "f", "g"];
  let four = ["b", "c", "d", "f"];
  let five = ["a", "b", "d", "f", "g"];
  let six = ["a", "b", "d", "e", "f", "g"];
  let seven = ["a", "c", "f"];
  let eight = ["a", "b", "c", "d", "e", "f", "g"];
  let nine = ["a", "b", "c", "d", "f", "g"];
}
