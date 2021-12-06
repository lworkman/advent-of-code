struct State {
  x: i32,
  y: i32,
}

struct AdvancedState {
  x: i32,
  y: i32,
  aim: i32,
}

fn main() {
  // let instructions = vec![
  //   "forward 5",
  //   "down 5",
  //   "forward 8",
  //   "up 3",
  //   "down 8",
  //   "forward 2",
  // ];

  let instructions = vec![
    "forward 2",
    "down 1",
    "down 7",
    "forward 6",
    "down 6",
    "down 6",
    "forward 6",
    "down 6",
    "down 9",
    "up 6",
    "forward 5",
    "down 1",
    "down 7",
    "forward 5",
    "forward 8",
    "forward 8",
    "forward 3",
    "down 3",
    "down 9",
    "down 1",
    "forward 5",
    "up 2",
    "down 6",
    "forward 9",
    "up 5",
    "forward 3",
    "down 9",
    "down 6",
    "down 2",
    "down 2",
    "down 5",
    "up 8",
    "up 1",
    "down 2",
    "down 7",
    "forward 1",
    "down 1",
    "down 4",
    "down 2",
    "forward 7",
    "down 9",
    "forward 3",
    "up 1",
    "up 6",
    "forward 2",
    "forward 2",
    "down 5",
    "down 5",
    "forward 1",
    "forward 5",
    "down 6",
    "forward 8",
    "forward 5",
    "up 8",
    "down 7",
    "forward 5",
    "up 9",
    "down 3",
    "forward 7",
    "up 8",
    "down 3",
    "down 3",
    "up 8",
    "down 1",
    "down 5",
    "up 8",
    "down 5",
    "forward 5",
    "forward 4",
    "up 8",
    "forward 6",
    "down 1",
    "down 3",
    "forward 8",
    "forward 6",
    "forward 2",
    "down 9",
    "up 9",
    "forward 6",
    "up 4",
    "down 9",
    "forward 3",
    "forward 4",
    "forward 4",
    "up 2",
    "forward 6",
    "up 7",
    "forward 4",
    "down 7",
    "forward 3",
    "forward 1",
    "forward 1",
    "down 9",
    "up 6",
    "forward 9",
    "down 1",
    "up 4",
    "forward 2",
    "forward 1",
    "down 3",
    "down 2",
    "forward 8",
    "forward 4",
    "forward 6",
    "down 3",
    "down 9",
    "forward 7",
    "forward 9",
    "down 4",
    "up 3",
    "down 7",
    "down 2",
    "down 8",
    "forward 7",
    "down 5",
    "forward 5",
    "forward 9",
    "down 7",
    "down 4",
    "down 2",
    "up 6",
    "forward 6",
    "down 7",
    "down 3",
    "up 7",
    "forward 4",
    "down 7",
    "forward 1",
    "forward 1",
    "up 1",
    "up 8",
    "down 7",
    "forward 8",
    "up 9",
    "up 2",
    "forward 8",
    "forward 2",
    "forward 3",
    "forward 2",
    "down 2",
    "down 4",
    "forward 1",
    "forward 1",
    "down 6",
    "forward 5",
    "down 9",
    "down 9",
    "down 3",
    "forward 6",
    "forward 5",
    "down 4",
    "forward 4",
    "forward 6",
    "down 9",
    "down 4",
    "forward 5",
    "forward 6",
    "forward 4",
    "forward 6",
    "forward 7",
    "down 6",
    "down 4",
    "up 8",
    "down 4",
    "forward 9",
    "down 3",
    "down 8",
    "down 5",
    "up 6",
    "forward 7",
    "forward 8",
    "forward 8",
    "down 5",
    "up 3",
    "down 3",
    "forward 4",
    "forward 4",
    "up 9",
    "forward 6",
    "down 1",
    "down 1",
    "down 7",
    "down 6",
    "forward 9",
    "forward 2",
    "down 5",
    "up 4",
    "down 5",
    "forward 8",
    "down 8",
    "forward 1",
    "forward 4",
    "up 2",
    "down 4",
    "forward 1",
    "down 6",
    "forward 1",
    "forward 3",
    "up 8",
    "forward 1",
    "up 8",
    "down 7",
    "forward 6",
    "up 5",
    "down 6",
    "up 8",
    "down 7",
    "down 6",
    "forward 7",
    "forward 9",
    "forward 2",
    "down 6",
    "down 4",
    "up 2",
    "forward 1",
    "down 8",
    "forward 9",
    "down 5",
    "down 7",
    "forward 6",
    "up 1",
    "forward 2",
    "forward 3",
    "forward 9",
    "up 3",
    "forward 7",
    "up 7",
    "up 7",
    "down 5",
    "up 7",
    "down 8",
    "forward 2",
    "down 4",
    "down 6",
    "up 2",
    "down 7",
    "forward 4",
    "down 2",
    "forward 3",
    "forward 7",
    "forward 4",
    "forward 1",
    "up 6",
    "forward 3",
    "forward 6",
    "forward 9",
    "up 9",
    "down 2",
    "forward 1",
    "forward 9",
    "forward 5",
    "forward 7",
    "forward 8",
    "down 1",
    "down 9",
    "up 4",
    "forward 5",
    "up 9",
    "down 9",
    "down 7",
    "forward 1",
    "forward 3",
    "forward 8",
    "forward 2",
    "forward 7",
    "forward 7",
    "forward 5",
    "down 8",
    "down 5",
    "up 9",
    "forward 2",
    "down 9",
    "forward 4",
    "up 9",
    "up 6",
    "up 2",
    "up 7",
    "down 2",
    "forward 8",
    "forward 9",
    "down 3",
    "down 6",
    "down 9",
    "forward 8",
    "down 4",
    "down 2",
    "down 8",
    "down 8",
    "down 9",
    "up 4",
    "down 5",
    "forward 4",
    "forward 7",
    "down 6",
    "down 3",
    "forward 9",
    "up 1",
    "forward 3",
    "down 1",
    "down 8",
    "up 1",
    "down 7",
    "down 5",
    "forward 2",
    "forward 3",
    "up 9",
    "down 7",
    "up 9",
    "up 8",
    "up 3",
    "forward 7",
    "down 4",
    "forward 8",
    "forward 9",
    "down 8",
    "forward 1",
    "up 7",
    "up 4",
    "down 2",
    "forward 6",
    "up 4",
    "forward 1",
    "up 1",
    "forward 1",
    "forward 2",
    "up 4",
    "up 2",
    "up 3",
    "forward 3",
    "forward 9",
    "forward 2",
    "down 1",
    "forward 9",
    "down 7",
    "forward 3",
    "down 3",
    "up 1",
    "down 2",
    "forward 9",
    "down 7",
    "down 5",
    "up 5",
    "down 2",
    "down 5",
    "forward 6",
    "forward 9",
    "forward 3",
    "down 5",
    "down 9",
    "forward 6",
    "up 3",
    "down 6",
    "down 8",
    "up 8",
    "down 1",
    "forward 2",
    "down 1",
    "up 5",
    "down 8",
    "up 4",
    "down 2",
    "forward 6",
    "forward 1",
    "down 8",
    "down 4",
    "down 2",
    "forward 4",
    "down 7",
    "up 9",
    "forward 6",
    "forward 5",
    "down 4",
    "down 5",
    "up 6",
    "down 6",
    "forward 4",
    "forward 8",
    "up 9",
    "down 8",
    "forward 3",
    "down 4",
    "down 9",
    "up 8",
    "down 1",
    "forward 7",
    "down 5",
    "down 1",
    "forward 7",
    "up 4",
    "forward 9",
    "up 6",
    "forward 8",
    "forward 1",
    "up 8",
    "up 8",
    "up 3",
    "forward 2",
    "forward 3",
    "forward 6",
    "forward 8",
    "forward 4",
    "down 7",
    "up 8",
    "forward 4",
    "down 3",
    "down 2",
    "down 5",
    "down 4",
    "up 2",
    "up 1",
    "down 3",
    "down 5",
    "down 3",
    "up 6",
    "down 8",
    "down 7",
    "down 9",
    "forward 2",
    "down 4",
    "up 1",
    "forward 4",
    "down 9",
    "forward 8",
    "up 3",
    "down 4",
    "down 1",
    "up 3",
    "forward 7",
    "forward 9",
    "down 5",
    "up 7",
    "forward 4",
    "down 4",
    "up 8",
    "down 2",
    "up 7",
    "up 3",
    "forward 7",
    "down 7",
    "down 4",
    "forward 6",
    "up 5",
    "forward 8",
    "down 4",
    "down 9",
    "forward 3",
    "down 6",
    "forward 3",
    "down 8",
    "down 5",
    "up 6",
    "down 8",
    "down 9",
    "down 4",
    "down 9",
    "forward 7",
    "down 4",
    "down 7",
    "forward 1",
    "down 8",
    "forward 9",
    "forward 1",
    "down 5",
    "down 3",
    "up 5",
    "forward 9",
    "down 7",
    "down 7",
    "up 3",
    "up 9",
    "down 4",
    "down 5",
    "forward 5",
    "down 5",
    "up 3",
    "forward 8",
    "down 5",
    "forward 1",
    "down 1",
    "up 6",
    "forward 1",
    "forward 4",
    "up 9",
    "up 5",
    "down 6",
    "down 7",
    "forward 8",
    "down 4",
    "forward 9",
    "forward 6",
    "down 7",
    "down 2",
    "up 1",
    "down 4",
    "down 5",
    "up 7",
    "down 7",
    "down 3",
    "up 8",
    "forward 8",
    "down 8",
    "forward 5",
    "down 6",
    "down 7",
    "forward 4",
    "up 7",
    "forward 9",
    "down 7",
    "up 7",
    "forward 2",
    "down 3",
    "down 7",
    "up 6",
    "forward 2",
    "down 1",
    "forward 1",
    "up 9",
    "forward 6",
    "forward 2",
    "forward 5",
    "up 1",
    "forward 3",
    "down 2",
    "up 2",
    "forward 4",
    "up 2",
    "down 2",
    "down 9",
    "up 9",
    "forward 2",
    "down 3",
    "down 2",
    "forward 9",
    "forward 9",
    "down 3",
    "down 6",
    "forward 3",
    "down 7",
    "up 6",
    "down 8",
    "forward 4",
    "forward 8",
    "forward 1",
    "down 7",
    "down 2",
    "forward 6",
    "forward 9",
    "up 6",
    "up 8",
    "down 4",
    "forward 9",
    "forward 9",
    "forward 1",
    "forward 4",
    "forward 3",
    "up 9",
    "down 8",
    "down 7",
    "down 4",
    "down 1",
    "down 9",
    "down 7",
    "forward 2",
    "forward 7",
    "forward 6",
    "down 7",
    "forward 2",
    "forward 1",
    "forward 8",
    "forward 9",
    "forward 2",
    "down 5",
    "down 9",
    "up 7",
    "forward 4",
    "up 4",
    "up 2",
    "down 1",
    "down 3",
    "down 4",
    "forward 1",
    "up 4",
    "up 1",
    "up 4",
    "down 6",
    "down 7",
    "forward 7",
    "down 4",
    "down 6",
    "forward 4",
    "forward 8",
    "down 2",
    "down 8",
    "down 1",
    "forward 1",
    "down 7",
    "down 1",
    "down 6",
    "up 2",
    "down 9",
    "forward 3",
    "down 7",
    "down 8",
    "down 9",
    "down 4",
    "down 7",
    "down 4",
    "up 1",
    "forward 1",
    "forward 2",
    "up 6",
    "up 6",
    "up 5",
    "forward 4",
    "down 3",
    "down 9",
    "forward 3",
    "up 5",
    "down 1",
    "forward 7",
    "down 6",
    "down 2",
    "up 3",
    "up 8",
    "up 5",
    "forward 4",
    "down 5",
    "forward 5",
    "forward 2",
    "down 3",
    "forward 3",
    "forward 9",
    "down 9",
    "down 9",
    "down 9",
    "forward 8",
    "forward 5",
    "up 1",
    "down 5",
    "forward 3",
    "forward 4",
    "forward 2",
    "up 1",
    "up 2",
    "up 8",
    "down 6",
    "up 4",
    "forward 3",
    "down 1",
    "down 6",
    "down 6",
    "up 7",
    "forward 7",
    "down 8",
    "up 2",
    "up 1",
    "up 5",
    "forward 4",
    "down 4",
    "down 8",
    "down 2",
    "down 5",
    "down 4",
    "up 4",
    "up 7",
    "forward 2",
    "forward 4",
    "forward 2",
    "down 6",
    "down 9",
    "up 3",
    "up 6",
    "forward 8",
    "forward 6",
    "forward 8",
    "forward 9",
    "down 7",
    "forward 9",
    "up 4",
    "up 5",
    "down 4",
    "down 7",
    "down 4",
    "up 8",
    "down 3",
    "forward 8",
    "down 2",
    "down 4",
    "forward 2",
    "up 6",
    "up 6",
    "down 9",
    "forward 6",
    "forward 8",
    "down 5",
    "forward 5",
    "down 3",
    "down 6",
    "up 9",
    "forward 2",
    "forward 8",
    "up 4",
    "forward 4",
    "forward 2",
    "down 4",
    "forward 3",
    "down 1",
    "up 4",
    "down 4",
    "up 7",
    "forward 2",
    "forward 8",
    "down 8",
    "up 7",
    "up 2",
    "down 7",
    "down 7",
    "forward 8",
    "forward 7",
    "forward 9",
    "down 4",
    "down 5",
    "down 9",
    "down 5",
    "forward 1",
    "down 5",
    "up 2",
    "forward 6",
    "forward 9",
    "down 3",
    "forward 5",
    "down 1",
    "forward 9",
    "up 2",
    "forward 1",
    "up 9",
    "forward 2",
    "up 2",
    "forward 4",
    "forward 3",
    "up 9",
    "forward 4",
    "forward 2",
    "up 7",
    "up 6",
    "down 3",
    "forward 7",
    "forward 1",
    "forward 6",
    "down 2",
    "down 8",
    "forward 5",
    "down 5",
    "up 5",
    "forward 5",
    "down 6",
    "forward 8",
    "forward 4",
    "down 2",
    "up 8",
    "forward 6",
    "down 2",
    "down 7",
    "forward 5",
    "down 4",
    "down 5",
    "up 6",
    "down 3",
    "up 6",
    "down 8",
    "forward 4",
    "down 8",
    "down 6",
    "forward 2",
    "forward 8",
    "up 8",
    "up 1",
    "forward 6",
    "down 2",
    "down 6",
    "forward 2",
    "forward 2",
    "down 8",
    "forward 7",
    "up 1",
    "forward 1",
    "down 8",
    "forward 3",
    "down 6",
    "forward 7",
    "forward 7",
    "up 7",
    "down 1",
    "forward 8",
    "up 7",
    "forward 8",
    "forward 8",
    "forward 2",
    "down 5",
    "up 7",
    "forward 1",
    "forward 9",
    "down 9",
    "forward 8",
    "down 6",
    "down 7",
    "up 4",
    "down 5",
    "forward 6",
    "down 8",
    "forward 5",
    "up 6",
    "up 4",
    "forward 8",
    "forward 5",
    "forward 1",
    "forward 3",
    "up 2",
    "down 3",
    "down 4",
    "down 2",
    "forward 3",
    "forward 2",
    "up 8",
    "up 1",
    "forward 5",
    "up 8",
    "down 1",
    "up 4",
    "down 6",
    "forward 1",
    "down 3",
    "up 8",
    "down 3",
    "forward 5",
    "down 7",
    "forward 3",
    "down 1",
    "up 8",
    "up 6",
    "down 4",
    "down 8",
    "up 2",
    "forward 1",
    "forward 8",
    "down 4",
    "down 8",
    "down 4",
    "up 7",
    "down 4",
    "forward 7",
    "forward 4",
    "forward 2",
    "forward 6",
    "up 4",
    "down 5",
    "forward 8",
    "forward 9",
    "down 1",
    "down 2",
    "down 2",
    "forward 6",
    "forward 1",
    "forward 4",
    "down 7",
    "forward 6",
    "forward 9",
    "down 5",
    "forward 9",
    "up 4",
    "down 2",
    "down 6",
    "forward 5",
    "forward 3",
    "forward 1",
    "forward 6",
    "forward 5",
    "forward 2",
    "down 9",
    "forward 1",
    "up 5",
    "down 2",
    "down 8",
    "up 5",
    "down 3",
    "up 1",
    "forward 5",
    "forward 8",
    "forward 2",
    "down 3",
    "down 7",
    "up 3",
    "up 8",
    "forward 5",
    "up 8",
    "forward 4",
    "down 7",
    "forward 4",
    "down 1",
    "forward 2",
    "forward 8",
    "up 9",
    "up 1",
    "forward 3",
    "down 6",
    "up 5",
    "down 9",
    "forward 8",
    "forward 3",
    "down 7",
    "forward 3",
    "up 9",
    "down 2",
    "forward 2",
    "down 6",
    "down 9",
    "down 4",
    "down 4",
    "down 7",
    "up 6",
    "up 2",
    "down 7",
    "forward 5",
    "up 1",
    "down 6",
    "up 2",
    "forward 8",
    "up 6",
    "forward 4",
    "down 2",
    "up 5",
    "down 6",
    "down 5",
    "forward 8",
    "forward 4",
    "down 5",
    "forward 5",
    "forward 3",
    "down 2",
    "forward 3",
    "up 3",
    "down 4",
    "up 2",
    "forward 9",
    "up 8",
    "forward 9",
    "up 5",
    "up 1",
    "forward 9",
    "down 8",
    "down 3",
    "forward 9",
    "up 4",
    "down 1",
    "forward 8",
    "down 6",
    "down 1",
    "down 2",
    "down 9",
    "down 1",
    "forward 5",
    "down 7",
    "forward 1",
    "up 6",
    "down 1",
    "down 6",
    "forward 6",
    "forward 9",
    "down 6",
    "forward 1",
    "forward 4",
    "up 4",
    "forward 1",
    "up 9",
    "forward 3",
    "forward 8",
    "down 3",
    "down 7",
    "forward 4",
    "up 1",
    "down 1",
    "forward 1",
    "down 3",
    "down 6",
    "down 9",
    "down 6",
    "forward 4",
    "down 1",
    "up 4",
    "forward 8",
    "down 6",
    "up 6",
    "down 5",
    "up 8",
    "forward 4",
    "up 7",
    "forward 4",
    "forward 2",
    "down 7",
    "forward 2",
  ];

  let final_state = advanced(instructions);

  println!("{},{}", final_state.x, final_state.y);
  println!("{}", final_state.x * final_state.y);
}

fn basic(instructions: Vec<&str>) -> State {
  return instructions
    .iter()
    .fold(State { y: 0, x: 0 }, |acc, instruction| {
      let split: Vec<&str> = instruction.split(" ").collect();
      let direction = split[0];
      let value: i32 = split[1].parse().unwrap();
      match direction {
        "forward" => forward(acc, value),
        "back" => back(acc, value),
        "up" => up(acc, value),
        "down" => down(acc, value),
        _ => acc,
      }
    });
}

fn advanced(instructions: Vec<&str>) -> AdvancedState {
  return instructions
    .iter()
    .fold(AdvancedState { y: 0, x: 0, aim: 0 }, |acc, instruction| {
      let split: Vec<&str> = instruction.split(" ").collect();
      let direction = split[0];
      let value: i32 = split[1].parse().unwrap();
      match direction {
        "forward" => forward_advanced(acc, value),
        "back" => back_advanced(acc, value),
        "up" => up_advanced(acc, value),
        "down" => down_advanced(acc, value),
        _ => acc,
      }
    });
}

fn forward(state: State, count: i32) -> State {
  let output = State {
    y: state.y,
    x: state.x + count,
  };

  return output;
}

fn back(state: State, count: i32) -> State {
  let output = State {
    y: state.y,
    x: state.x - count,
  };

  return output;
}

fn up(state: State, count: i32) -> State {
  let output = State {
    y: state.y - count,
    x: state.x,
  };

  return output;
}

fn down(state: State, count: i32) -> State {
  let output = State {
    y: state.y + count,
    x: state.x,
  };

  return output;
}

fn forward_advanced(state: AdvancedState, count: i32) -> AdvancedState {
  let output = AdvancedState {
    y: state.y + (state.aim * count),
    x: state.x + count,
    aim: state.aim
  };

  return output;
}

fn back_advanced(state: AdvancedState, count: i32) -> AdvancedState {
  let output = AdvancedState {
    y: state.y,
    x: state.x - count,
    aim: state.aim
  };

  return output;
}

fn up_advanced(state: AdvancedState, count: i32) -> AdvancedState {
  let output = AdvancedState {
    y: state.y,
    x: state.x,
    aim: state.aim - count,
  };

  return output;
}

fn down_advanced(state: AdvancedState, count: i32) -> AdvancedState {
  let output = AdvancedState {
    y: state.y,
    x: state.x,
    aim: state.aim + count
  };

  return output;
}