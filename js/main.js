jQuery(function($){

/* ==============================================================
=============== Form Validations ================================
============================================================== */

$('#contactform').submit(function(){

	var action = $(this).attr('action');

	$("#message").slideUp(750,function() {
	$('#message').hide();

	$('#submit')
		.after('<img src="images/assets/progress.gif" class="loader" />')
		.attr('disabled','disabled');

	$.post(action, {
		name: $('#name').val(),
		email: $('#email').val(),
		phone: $('#phone').val(),
		comments: $('#comments').val()
	},
		function(data){
			document.getElementById('message').innerHTML = data;
			$('#message').slideDown('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#submit').removeAttr('disabled');
			if(data.match('success') != null) $('#contactform').slideUp('slow');

		}
	);
	});
	return false;
});

/* ==================================================
   INIT BUILT FUNCTIONS
================================================== */
	
	/* flexslider */
	$('.flexslider').flexslider({
		animation: "fade",
		slideshow: true,
    	slideshowSpeed: 7000,
		controlNav: true,
    	directionNav: false
	});
	// initiate page scroller plugin
	$('body').pageScroller({
		navigation: '.pageScrollerNav',
		scrollOffset: -55,
	});
	$('body').each(function(){
		$('.work a').click(function() {
		ProURL = $(this).attr("href");
			$('body').find('div[data-rel="'+ProURL+'"]').show();
			$("body").css({"overflow":"hidden"});
			return false;
		});	
		$(".close").click(function() {
			$('.project-lightbox').fadeOut();
			$("body").css({"overflow":"auto"});
			return false;
		}); 
	});
	$('.nav-icon').click(function(e){
		width=$('.navigation').css('width');
		if(width=='60px'){
		$(".main-wrapper").animate({marginLeft:"100px"},'medium','swing', {queue: false});
		$('.navigation').animate({width:"+=100px"},'medium','swing', function() {
			$(".pageScrollerNav li span").fadeIn();
		});
		} else {
		if(width=='160px')
		$(".main-wrapper").animate({marginLeft:"0"},'medium','swing', {queue: false});
		$(".pageScrollerNav li span").fadeOut();
		$('.navigation').animate({width:"-=100px"},'medium','swing');
		}
		e.preventDefault();
	});
	
	$('#status').spin();
	
	// Get window height and put in to homepage image
	var wheight = $(window).height();
	$(".showcase").css("height",wheight);
	
	// Animation Appear
	$("[data-appear-animation]").each(function() {
	
		var $this = $(this);
	  
		$this.addClass("appear-animation");
	  
		if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {
	  
			$this.appear(function() {
	  
				var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
	  
				if(delay > 1) $this.css("animation-delay", delay + "ms");
				$this.addClass($this.attr("data-appear-animation"));
	  
				setTimeout(function() {
					$this.addClass("appear-animation-visible");
				}, delay);
	  
			}, {accX: 0, accY: -150});
	  
		} else {
	  
			$this.addClass("appear-animation-visible");
	  
		}
	
	});
});	