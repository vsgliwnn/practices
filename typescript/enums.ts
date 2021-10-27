enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getDirection(direction: keyof typeof Direction) {
  console.log(Direction[direction]);
}

getDirection("Up");
