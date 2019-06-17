/*

*/
$(function() {
  "use strict";
  let emptySquareRow = 3;
  let emptySquareCol = 3;
  const NUM_COL = 4;
  const NUM_ROW = 4;
  const SQUARE_WIDTH = 100;
  const SQUARE_HEIGHT = 100;

  function parseTop(element) {
    return parseInt($(element).css("top")) / SQUARE_HEIGHT;
  }

  function parseLeft(element) {
    return parseInt($(element).css("left")) / SQUARE_WIDTH;
  }

  function isMovable(element) {
    const top = parseTop(element);
    const left = parseLeft(element);

    if ((top === emptySquareRow && Math.abs(left - emptySquareCol) === 1) ||
      (left === emptySquareCol && Math.abs(top - emptySquareRow) === 1)) {
        return true;
      }
    return false;
  }

  function clickHandler(event) {
    if (isMovable(event.currentTarget))
      move(event.currentTarget);
  }

  // Need to toggle class based on current position ....
  function toggleMovable(add = true) {
    $("#puzzlearea")
      .children()
      .each(function(index, e) {
        if (isMovable(e)){
          if (add) $(e).addClass("movablepiece");
          else $(e).removeClass("movablepiece");
        }
      });
  }

  function move(target) {

    const top = parseTop(target);
    const left = parseLeft(target);
    $(`#puzzlearea`)
      .children()
      .filter(function(index, element) {
          if (element === target) return true;
          else return false;
      })
      .css("top", emptySquareRow * SQUARE_WIDTH + "px")
      .css("left", emptySquareCol * SQUARE_HEIGHT + "px");

    toggleMovable(false);
    emptySquareRow = top;
    emptySquareCol = left;

    toggleMovable(true);
  }

  // Setting Initial Position & backgroundImage to Puzzle
  $("#puzzlearea")
    .children()
    .addClass("puzzlepiece")
    .css("top", (index) => Math.floor(index / NUM_ROW) * SQUARE_HEIGHT + "px")
    .css("left", (index) => (index % NUM_COL) * SQUARE_WIDTH + "px")
    .css("background-position", (index) => (-(index % NUM_COL) * SQUARE_WIDTH) + "px " +
      (-Math.floor(index / NUM_ROW) * SQUARE_HEIGHT) + "px")
    .click(clickHandler);


  $("#shufflebutton")
    .click(function() {
      const N = 100;
      for (let i = 0; i < N; i++) {
        $("#puzzlearea")
        .children()
        .filter(function(index, element) {
            if (Math.random() > 0.5) return true;
            else false;
        }).click();
      }
    });
  toggleMovable(true);

});
