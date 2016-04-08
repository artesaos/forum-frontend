$(document).ready(function(){
	$('.button-collapse').sideNav();
	$('navbar').load('/components/navbar.html');
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    if(height >= 250){
			$('.navbar').addClass('shadow');
			$('.navbar-container ').children().addClass('navbar-fixed');
	    }else{
			$('.navbar').removeClass('shadow');
			$('.navbar-container ').children().removeClass('navbar-fixed');
	    }
	});

});
