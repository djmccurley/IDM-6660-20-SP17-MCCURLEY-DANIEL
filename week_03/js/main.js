$(document).ready(function() {
  //shows/hides article content
  $(".product").click(function(){
    $(this).siblings().slideToggle();
  });
});  