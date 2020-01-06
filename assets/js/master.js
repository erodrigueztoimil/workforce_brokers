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


// when menu button clicked navigation slides in
jQuery(
  function() {
    var menuButton = $('.menu-button');
    var menuBackdrop = $('.menu-backdrop');
    var menuItems = $('.menu-items');
    var menuLink = $('.menu-items a');
    var page = $('html');

    menuButton.click(
      function() {
        menuItems.toggleClass('show');
        menuBackdrop.toggleClass('show');
        page.css('overflow', 'hidden');
      }
    )

    menuBackdrop.click(
      function() {
        menuItems.removeClass('show');
        menuBackdrop.removeClass('show');
        page.css('overflow', 'scroll');
      }
    )

    menuLink.click(
      function() {
        menuItems.removeClass('show');
        menuBackdrop.removeClass('show');
        page.css('overflow', 'scroll');
      }
    )
  }
)
