  $(document).ready(function(){ 
// $('.nav').localScroll();

$.localScroll()

$('.arrow').find('a').hide();

});

var waypoint = new Waypoint({
  element: document.getElementById('anim-me'),
  handler: function() {
    $('.col-info').css({'opacity': '1'});
    $('.col-photo').find('img').css({'opacity': '1'});
    $('.col-info').addClass('animated fadeInLeft');
    $('.col-photo').find('img').addClass('animated fadeInRight');

  }
})

var waypoint = new Waypoint({
  element: document.getElementById('anim-service'),
  handler: function() {
    $('.serv').css({'opacity': '1'});
      $('.serv').addClass('animated fadeInDown');
   

  }
})
var waypoint = new Waypoint({
  element: document.getElementById('anim-technology'),
  handler: function() {
    $('.col-tech').find('li').css({'opacity': '1'});
      $('.col-tech').find('li').addClass('animated fadeInDownBig');
   

  }
})
var waypoint = new Waypoint({
  element: document.getElementById('anim-works'),
  handler: function() {
    $('.thumbnail').find('li').css({'opacity': '1'});
      $('.thumbnail').addClass('animated fadeInRightBig');
   

  }
})

function Scroll(){
  var distance = window.pageYOffset;
  if (distance > 558){
    $('.arrow').find('a').show(500);
 }
 else{
  $('.arrow').find('a').hide(500);
 }
}

window.addEventListener('scroll', Scroll);


