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
