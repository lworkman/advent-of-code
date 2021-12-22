#![allow(dead_code)]
use std::fs;

fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

}
