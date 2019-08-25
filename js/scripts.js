// what we do section
$(document).ready(function() {
  $("#design-1").click(function() {
    $("#design-p").toggle();
    $("#design-icon").toggle();
  });
  $("#development").click(function() {
    $("#development-p").toggle();
    $("#development-1").toggle();
  });
  $("#product-management").click(function() {
    $("#prod-management-1").toggle();
    $("#prod-p").toggle();
  });
// portfolio section
  $("#work4").hover(function(){
    $(".work4").toggle(500);
  });
  $("#work3").hover(function(){
    $(".work3").toggle(500);
  });
  $("#work2").hover(function(){
    $(".work2").toggle(500);
  });
  $("#work1").hover(function(){
    $(".work1").toggle(500);
  });
  $("#work5").hover(function(){
    $(".work5").toggle(500);
  });
  $("#work6").hover(function(){
    $(".work6").toggle(500);
  });
  $("#work7").hover(function(){
    $(".work7").toggle(500);
  });
  $("#work8").hover(function(){
    $(".work8").toggle(500);
  });
});
function form(){
  // getting the name from form
  console.log("working")
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var text=document.getElementById("text").value;
  // form validation
  if (name === " "){
  alert("please enter your name");
  return false
}else if(email === " "){
  alert("please enter your email")
  return false;
}
}
