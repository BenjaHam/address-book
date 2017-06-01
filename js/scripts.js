$(document).ready(function() {
  $("#book").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var numberInput = $("input#number").val();
    var emailInput = $("input#email").val();
    var urlInput = $("input#url").val();

    $(".person1").text(nameInput);
    $(".address1").text(addressInput);
    $(".number1").text(numberInput);
    $(".email1").text(emailInput);
    $(".url1").text(urlInput);

    $("#addressbook").show();
  });

  $("#display").click(function(){
    $("#moreinfo").toggle();
  });

});
