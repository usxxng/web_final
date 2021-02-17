jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider1 ul li').length;
	var slideWidth = $('#slider1 ul li').width();
	var slideHeight = $('#slider1 ul li').height();
	var slider1UlWidth = slideCount * slideWidth;
	
	$('#slider1').css({ width: slideWidth, height: slideHeight });
	
	$('#slider1 ul').css({ width: slider1UlWidth, marginLeft: - slideWidth });
	
    $('#slider1 ul li:last-child').prependTo('#slider1 ul');

    function moveLeft() {
        $('#slider1 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider1 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    