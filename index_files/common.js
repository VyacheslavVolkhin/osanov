$(function () {
	var tabContainers = $('div.tabs > div');
	tabContainers.hide().filter(':first').show();		
	$('div.tabs ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});
$(function () {
	var tabContainers = $('div.tabs2 > div');
	tabContainers.hide().filter(':first').show();		
	$('div.tabs2 ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs2 ul.tabNavigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});

$(function(){
	$('.catalog-page .filter .close').click(function() {
		$('.catalog-page .filter').removeClass('opened');
	});
	$('.catalog-page .sort .filter-link').click(function() {
		$('.catalog-page .filter').addClass('opened');
	});
	$('.catalog-page .filter .item h3').click(function() {
		$(this).toggleClass('active');
		$(this).next('.item-content').slideToggle();
	});
    // $('.minus').click(function () {
    //     var $input = $(this).parent().find('input');
    //     var count = parseInt($input.val()) - 1;
    //     count = count < 1 ? 1 : count;
    //     $input.val(count);
    //     $input.change();
    //     return false;
    // });
    // $('.plus').click(function () {
    //     var $input = $(this).parent().find('input');
    //     $input.val(parseInt($input.val()) + 1);
    //     $input.change();
    //     return false;
    // });
	$(".header form input[type='text']").focus(function(){
		$('.searchbg').show();
		$('.header form').addClass('active');
	}).blur(function(){
		$('.searchbg').hide();
		$('.header form').removeClass('active');
	})
	$('.footer nav .item h3').click(function() {
		$(this).next('ul').toggleClass('opened');
	});
	$('.mobile-menu .close').click(function() {
		$('.mobile-menu').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.mobile-menu').addClass('opened');
	});
	$('.mobile-menu ul li .sub .back-link').click(function() {
		$(this).parent().hide();
	});
	$('.mobile-menu ul li a').click(function() {
		$(this).next('.sub').show();
	});
	$('.header .catalog .catalog-link').click(function() {
		$(this).toggleClass('active');
		$('.catalogbg').toggle();
		$('.header .catalog .window').toggle();
	});
	$('.top-menu .list').slick({
		variableWidth: true
	});
	$('.index-top-sliders .slider1').slick({
		arrows: false,
		dots: true
	});
	$('.index-top-sliders .slider2 .list').slick({
		dots: true,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		]
	});
	$('.index-catalog-block .list').slick({
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 5
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 2,
		        arrows: false,
		        dots: true
		      }
		    }
		]
	});
	$('.clips-block .list').slick({
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        variableWidth: true,
		        arrows: false
		      }
		    }
		]
	});
	$('.brands-block .list').slick({
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1450,
		      settings: {
		        slidesToShow: 5
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        variableWidth: true,
		        arrows: false
		      }
		    }
		]
	});
	$('.shops-block .list').slick({
		speed: 300,
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        adaptiveHeight: true
		      }
		    }
		]
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  vertical: true,
	  focusOnSelect: true
	});
});