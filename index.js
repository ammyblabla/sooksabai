$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.collapsible').collapsible();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({full_width: true});
});

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  }
);
