$(document).ready(function(){
	_moduleSlider.action();
	_moduleToTop.action();
	_moduleSlickMenu.action();
});

var _moduleSlider = (function(){
	var _slider = $('.b-top-slider__list'),
		_smallSlider = $('.b-services__list');

	return {
		action: function(){
			_slider.slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 3000,
				fade: true,
				pauseOnHover: true,
				adaptiveHeight: true,
				arrows: false,
				draggable: true,
				responsive: [
					{
				      breakpoint: 600,
				      settings: {
				        dots: false
				      }
				    }
				]
			});

			_smallSlider.slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 3500,
				fade: true,
				pauseOnHover: true,
				adaptiveHeight: false,
				arrows: false,
				draggable: true,
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
		delay = 800;
	return {
		action: function(){
			$(window).on("scroll",function() {
 				if($(window).scrollTop() >= top) {
					scroll.fadeIn();
				} else {
					scroll.fadeOut();
				}
			});
			scroll.on("click",function(e) {
				e.preventDefault();
				$('body,html').animate(
					{scrollTop:0},
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