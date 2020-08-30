function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$('.l1').on('click',function(){
  var tag = $(this).attr('value');
  var tag1 = $(this).text();
  // window.alert("#layer"+tag1);
  var back_link="#layer"+tag;
  //window.alert(back_link);
  $('.nav-link').attr('href',back_link);
  //$('.nav-link').text(tag1);
  $('.nav-link').attr('value',tag);
  $("#layer"+tag).removeClass('hide-menu');
  $("#layer"+tag).toggleClass('show-menu');
});
$('.nav-link').on('click',function(){
  var tag = $(this).attr('href');
  var val= $(this).attr('value');
  // window.alert(val);
  $(tag).removeClass('show-menu');
  var back_link="#layer"+(val-1);
  $('.nav-link').attr('href',back_link);
  $('.nav-link').attr('value',val-1);
  //window.alert(back_link);

});
