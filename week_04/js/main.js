/* click handler for h3s to show/hide article content*/
$(document).ready(function() {
  //shows/hides article content
  $(".product").click(function(){
    $(this).siblings().slideToggle();
  });
});  