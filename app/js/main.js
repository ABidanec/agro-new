$(document).ready(function(){
	_moduleSlider.action();
	_moduleToTop.action();
	_moduleSlickMenu.action();
});

var _moduleSlider = (function(){
	var slider = $('.b-top-slider__list');

	return {
		action: function(){
			slider.slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 3000,
				fade: true,
				pauseOnHover: true,
				adaptiveHeight: true,
				responsive: [
					{
				      breakpoint: 600,
				      settings: {
				        dots: false
				      }
				    }
				]
			});
		}
	}
})();

var _moduleToTop = (function(){

	var scroll = $(".b-top-scroll"),
		top = 300,
		delay = 1800;
	return {
		action: function(){
			$(window).scroll(function() {
 				if($(this).scrollTop() != top) {
					scroll.fadeIn("slow");
				} else {
					scroll.fadeOut("slow");
				}
			});
			scroll.click(function() {
				$('body,html').animate(
					{"scrollTop" : "0"},
					delay
				);
			});
		}
	}
})();

var _moduleSlickMenu = (function(){
	var _topMenu = $('.b-header-menu__list'),
		_prependTo = '.b-header-menu',
		_labelTopMenu = '';


	return {
		action: function(){
			_topMenu.slicknav({
				label: _labelTopMenu,
				prependTo: _prependTo
			});
		}
	}
})();