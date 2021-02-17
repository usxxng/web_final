jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight2();
    }, 2000);
  
	var slideCount = $('#slider2 ul li').length;
	var slideWidth = $('#slider2 ul li').width();
	var slideHeight = $('#slider2 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider2').css({ width: slideWidth, height: slideHeight });
	
	$('#slider2 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft2() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft2();
    });

    $('a.control_next').click(function () {
        moveRight2();
    });

});    