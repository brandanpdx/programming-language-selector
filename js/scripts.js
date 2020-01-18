$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var nameResult = $("input#name").val();
    var subject = $("#subject").val();
    var coast = $("#coast").val();
    var dessert = $("#dessert").val();
    var cereal = $("#cereal").val();
    
    if (nameResult === "") {
      alert("Please enter your name!");
    } else if (subject === "english" || subject === "art") {
      $(".nameresult").text(nameResult);
      $("#results").show();
      $("#C").hide();
      $("#Haskell").hide();
    } else if (subject === "math") {
      $(".nameresult").text(nameResult);
      $("#results").show();
      $("#Python").hide();
      $("#Haskell").hide();
    } else {
      $(".nameresult").text(nameResult);
      $("#results").show();
      $("#Python").hide();
      $("#C").hide();
      
    }
  })
})