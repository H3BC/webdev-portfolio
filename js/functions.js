  $(document).ready(function(){ 

$.localScroll()

$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
}).blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});

$('.arrow').find('a').hide();
 $('.technology-logos').find('img').css({'opacity': '0'});

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
      var n = 0;
      $('.col-tech').find('li').css({'opacity': '1'});
      $('.col-tech').find('li').addClass('animated fadeInDownBig');

     var time_image = setInterval(function(){
        $('.technology-logos').find('img').eq(n++).addClass('animated fadeInDownBig');
          
          if (n == 8){
        clearTimeout(time_image);
                    }

      }, 120)
     
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

formValidation = function(){
  var email = document.getElementById('email').value;
  var topic = document.getElementById('topic').value;
  var message = document.getElementById('message').value;

  if (email.length < 5 || !email.includes('@') || !email.includes('.')){
    alert('wprowadz poprawne dane');
    return false;
  }
  else{
      if( topic.length == 0){
        alert('wprowadz poprawne dane');
        return false;
      }
      else{
          if(message.length < 4){
            alert('wprowadz poprawne dane');
            return false;
          }
          else{
            return true;
          }
      }
  }

}

window.addEventListener('submit', formValidation);
window.addEventListener('scroll', Scroll);




