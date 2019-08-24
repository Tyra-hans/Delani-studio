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

});
