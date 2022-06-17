/**
 * This was built using the scrollie jQuery Plugin
 */


$( window ).ready(function() {
  
    /* var wHeight = $('.slide-one').height(); */

    $('.slide-one')
      /*.height(wHeight)*/
      .scrollie({
        scrollOffset : 200,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', '#fefaed');

          /*var ftColor = elem.data('color');
          $('body').css('color',ftColor);
          */
          
        }
      });
      $('.slide-two')
      /*.height(wHeight)*/
      .scrollie({
        scrollOffset : -1200,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);

          /*var ftColor = elem.data('color');
          $('.slide-one').css('color','black');
          $('body').css('color',ftColor);
          */
          
        }
      });

  });