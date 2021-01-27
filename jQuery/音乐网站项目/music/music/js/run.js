$(document).ready(function() {
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: 3000,
					loop: true,
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
						clickable:true,
					},
					// 如果需要前进后退按钮
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					}
				})
			})