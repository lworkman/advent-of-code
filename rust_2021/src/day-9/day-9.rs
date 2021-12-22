#![allow(dead_code)]
use std::collections::HashMap;
use std::fs;

#[derive(Debug)]
struct Point {
  value: usize,
  basin: Option<String>,
  x: usize,
  y: usize,
}

struct Graph {
  nodes: Vec<Vec<Point>>,
}

impl Graph {
  fn get_coordinates(&self) -> Vec<(usize, usize)> {
    let mut output = vec![];

    for y in 0..self.nodes.iter().count() {
      for x in 0..self.nodes[0].iter().count() {
        output.push((x, y));
      }
    }

    return output;
  }

  fn get_mut_point(&mut self, x: usize, y: usize) -> &mut Point {
    return &mut self.nodes[y][x];
  }

  fn get_point(&self, x: usize, y: usize) -> &Point {
    return &self.nodes[y][x];
  }

  fn get_point_neighbours(&self, x: usize, y: usize) -> Vec<&Point> {
    let mut output = vec![];
    if x > 0 {
      output.push(self.get_point(x - 1, y));
    }
    if x < self.nodes[0].iter().count() - 1 {
      output.push(self.get_point(x + 1, y));
    }
    if y > 0 {
      output.push(self.get_point(x, y - 1));
    }
    if y < self.nodes.iter().count() - 1 {
      output.push(self.get_point(x, y + 1));
    }

    return output;
  }
}

fn main() {
  let filename: &str = "./src/input.txt";
  let contents = fs::read_to_string(filename).unwrap();

  advanced(contents);
}

fn advanced(contents: String) {
  let mut graph = make_graph(contents);
  let mut current_basin = 0;

  let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@",
    "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "<", ">",
  ];

  let high_point_neighbours = graph
    .get_coordinates()
    .into_iter()
    .filter(|(x, y)| graph.get_point(*x, *y).value == 9)
    .fold(vec![], |mut acc: Vec<(usize, usize)>, (x, y)| {
      let mut neighbours = graph
        .get_point_neighbours(x, y)
        .into_iter()
        .map(|point| (point.x, point.y))
        .collect::<Vec<(usize, usize)>>();

      acc.append(&mut neighbours);

      return acc;
    });

  for (x, y) in high_point_neighbours {
    let mut has_changes = false;
    let mut points_to_check = graph
      .get_point_neighbours(x, y)
      .into_iter()
      .map(|point| (point.x, point.y))
      .collect::<Vec<(usize, usize)>>();

    let point = graph.get_point(x, y);
    let do_loop = point.value == 9 || point.basin != None;

    if do_loop {
      while points_to_check.iter().count() > 0 {
        let (point_x, point_y) = points_to_check.pop().unwrap();
        let working_point = graph.get_mut_point(point_x, point_y);
        if working_point.basin == None && working_point.value != 9 {
          has_changes = true;
          // working_point.basin = Some(alphabet[current_basin].to_owned());
          working_point.basin = Some(current_basin.to_string());
          let mut new_neighbours = graph
            .get_point_neighbours(point_x, point_y)
            .into_iter()
            .map(|point| (point.x, point.y))
            .collect::<Vec<(usize, usize)>>();
          points_to_check.append(&mut new_neighbours);
        }
      }
    }

    if has_changes {
      current_basin += 1;
    }
    println!("Done iteration");
  }
  let basin_map = count_basins(&graph);
  print_graph(&graph, true);
  println!("{:?}", basin_map);

  let mut values = basin_map
    .into_iter()
    .map(|(_, val)| val)
    .collect::<Vec<usize>>();

  values.sort();

  values.reverse();

  println!("{:?}", values);

  println!("output: {}", values[0] * values[1] * values[2]);
}

fn count_basins(graph: &Graph) -> HashMap<String, usize> {
  let result = graph.get_coordinates().into_iter().fold(
    HashMap::new(),
    |mut acc: HashMap<String, usize>, (x, y)| {
      let point = graph.get_point(x, y);

      if point.basin != None {
        let basin = point.basin.as_ref().unwrap();

        if acc.get(basin) == None {
          acc.insert(basin.to_string(), 0);
        }

        let current_value = acc.get(basin).unwrap().clone();

        acc.insert(basin.to_string(), current_value + 1);
      }

      return acc;
    },
  );

  return result;
}

fn print_graph(graph: &Graph, use_basin: bool) {
  for row in graph.nodes.iter() {
    let line = row.iter().fold("".to_owned(), |acc, point| {
      let mut value = point.value.to_string();
      if use_basin {
        if point.basin == None {
          value = "0".to_owned();
        } else {
          value = point.basin.as_ref().unwrap().to_string();
        }
      }
      format!("{}{}", acc, value)
    });
    println!("{}", line);
  }
}

fn make_graph(contents: String) -> Graph {
  return Graph {
    nodes: contents
      .split("\n")
      .enumerate()
      .map(|(y, row)| {
        return row
          .split("")
          .filter(|char| *char != "")
          .collect::<Vec<&str>>()
          .into_iter()
          .enumerate()
          .map(|(x, num)| Point {
            value: num.parse().unwrap(),
            basin: None,
            x,
            y,
          })
          .collect::<Vec<Point>>();
      })
      .collect::<Vec<Vec<Point>>>(),
  };
}

fn basic(contents: String) {
  let graph = make_graph(contents);

  let lowest_points = graph
    .get_coordinates()
    .into_iter()
    .filter(|(x, y)| {
      let point = graph.get_point(*x, *y);
      let neighbours = graph.get_point_neighbours(*x, *y);
      return neighbours
        .into_iter()
        .all(|neighbour| neighbour.value > point.value);
    })
    .map(|(x, y)| graph.get_point(x, y))
    .collect::<Vec<&Point>>();

  let result = lowest_points
    .into_iter()
    .fold(0, |sum, point| sum + 1 + point.value);

  println!("{:?}", result);
}
