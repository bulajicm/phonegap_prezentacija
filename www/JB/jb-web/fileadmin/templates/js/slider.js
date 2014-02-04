jQuery(document).ready(function() {
	
	$('.slide-teaser1').click(function() {		
		$('.slide-content1').delay(100).animate({width: 'toggle'}, {duration: 800});
		$('.slide-teaser1 .find-out').toggleClass('act-btn');
		$('.slide-teaser4 .find-out').toggleClass('hide');
	});

	$('.slide-teaser2').click(function() {
		$('.slide-content2').delay(100).animate({width: 'toggle'}, {duration: 800});
		$('#s1').animate({width: 'toggle'});
		$('.slide-teaser2 .find-out').toggleClass('act-btn');
	});

	$('.slide-teaser3').click(function() {
		$('.slide-content3').delay(100).animate({width: 'toggle'}, {duration: 800});
		$('#s1').animate({width: 'toggle'});
		$('#s2').animate({width: 'toggle'});
		$('.slide-teaser3 .find-out').toggleClass('act-btn');
	});

	$('.slide-teaser4').click(function() {
		$('.slide-content4').delay(100).animate({width: 'toggle'}, {duration: 800});
		$('#s1').animate({width: 'toggle'});
		$('#s2').animate({width: 'toggle'});
		$('#s3').animate({width: 'toggle'});
		$('.slide-teaser4 .find-out').toggleClass('act-btn');
	});
	
	// Set Menu Active Status
	$("li.n1 ul li a").mouseenter(function() {$('#n1').addClass("active");});
	$("li.n1 ul li a").mouseleave(function() {$('#n1').removeClass("active");});
	
	$("li.n2 ul li a").mouseenter(function() {$('#n2').addClass("active");});
	$("li.n2 ul li a").mouseleave(function() {$('#n2').removeClass("active");});
	
	$("li.n3 ul li a").mouseenter(function() {$('#n3').addClass("active");});
	$("li.n3 ul li a").mouseleave(function() {$('#n3').removeClass("active");});
	
	$("li.n4 ul li a").mouseenter(function() {$('#n4').addClass("active");});
	$("li.n4 ul li a").mouseleave(function() {$('#n4').removeClass("active");});
	
	$("li.n5 ul li a").mouseenter(function() {$('#n5').addClass("active");});
	$("li.n5 ul li a").mouseleave(function() {$('#n5').removeClass("active");});
		
	
	
		$("li.n1").mouseenter(function() {
			$('#header_01b').css('visibility', 'inherit');
			$('#teaser #s4 span').css('display', 'none');
		});
		
		$("li.n2").mouseenter(function() {
			$('#header_02b').css('visibility', 'inherit');
			$('#teaser #s4 span').css('display', 'none');
		});
		
		$("li.n3").mouseenter(function() {
			$('#header_03b').css('visibility', 'inherit');
			$('#teaser #s4 span').css('display', 'none');
		});
		
		$("li.n4").mouseenter(function() {
			$('#header_04b').css('visibility', 'inherit');
			$('#teaser #s4 span').css('display', 'none');
		});
		
		$("li.n5").mouseenter(function() {
			$('#header_05b').css('visibility', 'inherit');
			$('#teaser #s4 span').hide();
		});
		
		$("li.l1").mouseleave(function() {
			$('#header_01b').css('visibility', 'hidden');
			$('#header_02b').css('visibility', 'hidden');
			$('#header_03b').css('visibility', 'hidden');
			$('#header_04b').css('visibility', 'hidden');
			$('#header_05b').css('visibility', 'hidden');
			$('#teaser #s4 span').show();
		});
});
