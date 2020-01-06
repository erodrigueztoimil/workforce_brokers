// // on scroll navigation background changes color
$(document).ready(
  function() {
    var pagePosition = 0;

    $(document).scroll(
      function() {
        pagePosition = $(this).scrollTop();

        if ( pagePosition > 30 ) {
          $('nav').css('background', 'white');
        }

        if ( pagePosition < 30 ) {
          $('nav').css('background', 'transparent');
        }
      }
    )
  }
)





// // menu links active handler
// jQuery(
//   function() {
//     var link = $('.navbar-nav a');
//
//     $(document).scroll(function() {
//       var position = $(this).scrollTop();
//
//       link.each(function() {
//         var offset = $(this.hash).offset().top - 220;
//
//         if ( offset <= position ) {
//           $(this).addClass('active');
//           $(this).siblings().removeClass('active');
//         }
//       })
//     })
//   }
// );


// // menu button animaiton handler
// jQuery(
//   function() {
//     var menuItems = $('.menu-items');
//     var menuButton = $('.menu-button');
//     var menuLink = $('nav a');
//
//     menuButton.click(() => {
//       $('html').toggleClass('overflow');
//       menuButton.toggleClass('show');
//       menuItems.toggleClass('show');
//     });
//
//     menuLink.click(() => {
//       $('html').removeClass('overflow');
//       menuButton.removeClass('show');
//       menuItems.removeClass('show');
//     });
//   }
// )
