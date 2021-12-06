fn main() {
  let lines = vec![build_line((0, 0), (0, 2)), build_line((0, 1), (0, 3))];

  let (length, height) = lines.iter().fold((0, 0), |(saved_x, saved_y), line| {
    let mut x_to_return = 0;
    let mut y_to_return = 0;

    for (x, y) in line.iter() {
      if saved_x > *x {
        x_to_return = saved_x;
      } else {
        x_to_return = *x;
      }
      if saved_y > *y {
        y_to_return = saved_y;
      } else {
        y_to_return = *y;
      }
    }

    return (x_to_return, y_to_return);
  });

  let mut count: usize = 0;

  for x in 0..length + 1 {
    for y in 0..height + 1 {
      let how_many_lines_contain = lines
        .clone()
        .into_iter()
        .filter(|line| line.contains(&(x, y)))
        .count();

      if how_many_lines_contain >= 2 {
        count = count + how_many_lines_contain;
      } else {
        count = count;
      }
    }
  }

  println!("{:?}", count);
  println!("{:?}", lines);
}

fn build_line(start: (usize, usize), end: (usize, usize)) -> Vec<(usize, usize)> {
  let mut output: Vec<(usize, usize)> = vec![];

  for x in start.0..end.0 + 1 {
    for y in start.1..end.1 + 1 {
      output.push((x, y));
    }
  }
  return output;
}

// Turn each instruction into a vec of coordinates
// Discard instructions that aren't straight lines
// Determine size of grid
// Check how many arrays each spot on the grid is in, count how many are in more than 2
