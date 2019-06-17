$(function() {
  "use strict";
  let lost = 1;
  let won = 1;

  function reset() {
    $(".boundary").removeClass("youlose");
    $("#status").text("Go to E without touching any walls!");
    lost = 0;
    won = 0;
  }

  function lose() {
    if (won) return;
    $(".boundary").addClass("youlose");
    $("#status").text("You Lost!");
    lost = 1;
    won = 0;
  }

  $("#start").mouseover(reset);
  $(".boundary").mouseover(lose);
  $("#end").mouseover(()=>{
    if (lost === 0) {
      $("#status").text("You Win!");
      won = 1;
    }
  });

  $("#maze").mouseleave(lose);

});
