// (function($){
//   $(function(){

//     $('.button-collapse').sideNav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space


(function($){
  $(function(){

    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({
      menuWidth: 150,
      edge: 'left',
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.parallax').parallax();

  });
})(jQuery);