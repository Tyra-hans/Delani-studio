$(document).click(function() {
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

    $('.wrap').hover(function () {
      $('.work-4').fadeIn("slow");
      $('#work-4').toggle("slow");
  });
  $('.wrap1').hover(function () {
    $('.work-3').toggle();
    $('#work-3').toggle();
});
$('.wrap1').hover(function () {
  $('.work-3').toggle();
  $('#work-3').toggle();
        $("#work-2").hover(function(){
          $(".work2").toggle('slow');
      });
        $("#work-1").hover(function(){
          $(".work1").toggle('slow');
        });
        $("#work-5").hover(function(){
          $(".work5").toggle('slow');
        });
        $("#work-6").hover(function(){
          $(".work6").toggle('slow');
        });
        $("#work-7").hover(function(){
          $(".work7").toggle('slow');
        });
        $("#work-8").hover(function(){
          $(".work8").toggle('slow');
        });
});
