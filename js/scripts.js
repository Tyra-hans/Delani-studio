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

  $("#work4").hover(function(){
    $(".work4").toggle('slow');
  });
  $("#work3").hover(function(){
    $(".work3").toggle('slow');
  });
  $("#work2").hover(function(){
    $(".work2").toggle('slow');
  });
  $("#work1").hover(function(){
    $(".work1").toggle('slow');
  });
  $("#work5").hover(function(){
    $(".work5").toggle('slow');
  });
  $("#work6").hover(function(){
    $(".work6").toggle('slow');
  });
  $("#work7").hover(function(){
    $(".work7").toggle('slow');
  });
  $("#work8").hover(function(){
    $(".work8").toggle('slow');
  });
});
