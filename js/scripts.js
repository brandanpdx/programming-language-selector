$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var nameResult = $("input#name").val();
    console.log(nameResult)



    $(".nameresult").text(nameResult);
  })

})