$(document).ready(function() {
		$('#navIcon-toggle').click(function(){
			   $(this).toggleClass('open');
			   $('#navigation-items').toggleClass('show');
		  });
		/*owl carousel slider for testimonials*/
		    var owl = $('.owl-carousel');
		  	owl.owlCarousel({
		        margin: 10,
		        nav: true,
		        autoplay: true,
		        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		        loop: true,
		        responsive: {
		          0: {
		            items: 1
		          },
		          600: {
		            items: 1
		          },
		          1000: {
		            items: 1
		          }
		        }
		  	});

		  	/*owl carousel navigation next and previous*/

		    $('.button-next').click(function() {
		  	owl.trigger('next.owl.carousel');
			});

			$('.button-prev').click(function() {
		  	owl.trigger('prev.owl.carousel');
			});

			$(window).scroll(function() {
				$(".slideanim").each(function(){
		          var pos = $(this).offset().top;
		    
		          var winTop = $(window).scrollTop();
		            if (pos < winTop + 600) {
		              $(this).addClass("slide-animation");
		            }else{
		                $(this).removeClass("slide-animation");
		            }
		        });
		        $(".slide-fade").each(function(){
		          var pos = $(this).offset().top;
		    
		          var winTop = $(window).scrollTop();
		            if (pos < winTop + 600) {
		              $(this).addClass("slide-animation-fade");
		            }else{
		                $(this).removeClass("slide-animation-fade");
		            }
		        });
		    });    
		});