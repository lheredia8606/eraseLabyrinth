const totalColumns = 4;
const grid = document.getElementById("the-grid");
grid.addEventListener("keydown", (e) => {
  console.log(e.key);
});

const positions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "",
];
const renderGrid = () => {
  for (let i = 0; i < positions.length; i++) {
    const text = document.createTextNode(positions[i]);
    const slot = document.createElement("div");
    slot.classList.add("grid-slot");
    slot.appendChild(text);
    grid.appendChild(slot);
  }
};
const getCoordinates = (position) => {
  const x = Math.floor(position / totalColumns);
  const y = position % totalColumns;
  return [x, y];
};
const getEmptySlotCoordinates = () => {
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === "") return getCoordinates(i);
  }
};

const isMovementValid = (move) => {
  if (
    move !== "ArrowUp" &&
    move !== "ArrowDown" &&
    move !== "ArrowLeft" &&
    move !== "ArrowRight"
  ) {
    return false;
  }
  switch (move) {
    case "ArrowUp":
      if (currentEmptyCoordinates[0] === totalColumns - 1) {
        return false;
      }
      break;
    case "ArrowDown":
      if (currentEmptyCoordinates[0] === 0) {
        return false;
      }
      break;
    case "ArrowLeft":
      if (currentEmptyCoordinates[1] === totalColumns - 1) {
        return false;
      }
      break;
    case "ArrowRight":
      if (currentEmptyCoordinates[1] === 0) {
        return false;
      }
      break;
    default:
      return true;
  }
};

const getSlotToMoveCoordinates = (move) => {
  if (move === "ArrowUp") {
    return [currentEmptyCoordinates[0] + 1, currentEmptyCoordinates[1]];
  } else if (move === "ArrowDown") {
    return [currentEmptyCoordinates[0] - 1, currentEmptyCoordinates[1]];
  } else if (move === "ArrowLeft") {
    return [currentEmptyCoordinates[0], currentEmptyCoordinates[1] + 1];
  } else {
    return [currentEmptyCoordinates[0], currentEmptyCoordinates[1] - 1];
  }
};

/**
 *
 * @param {int} emptySlotPosition
 * @param {int} slotPositionToMove
 */
const switchSlotPositions = (emptySlotPosition, slotPositionToMove) => {
  currentEmptyCoordinates = getCoordinates(slotPositionToMove);
  currentEmptyPosition = slotPositionToMove;
  const temp = positions[slotPositionToMove];
  positions[slotPositionToMove] = positions[emptySlotPosition];
  positions[emptySlotPosition] = temp;
};
const isMoveValid = () => {};
//will save the empty position to avoid search fot it all the time
let currentEmptyPosition = positions.findIndex((element, i) => element === "");
//same as coordinates
let currentEmptyCoordinates = getEmptySlotCoordinates();
switchSlotPositions(15, 7);
renderGrid();
console.log(currentEmptyCoordinates);
console.log(getEmptySlotCoordinates());
