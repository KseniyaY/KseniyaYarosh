
//изменение бекграунда при ховере на span как часть слогана. Способ №2:
$(document).ready(function(e){
    $("#backStage").mouseenter(function(){
	    $(".mainPart").fadeTo(200, 0),
		$("#backStage").fadeTo(350, 0),
		$(".theaterStage").css({'transition':'1s', 'background': 'url(../images/theaterBackstage.jpg) center 0', 'background-size': 'cover'})
    });
    $(".theaterStage").mouseleave(function(){
      	$(".theaterStage").css({'transition':'1s', 'background': 'url(../images/theater_top.jpg) center 0', 'background-size': 'cover'}),
      	$(".mainPart").fadeTo(1000, 1),
		$("#backStage").fadeTo(2750, 1)
    });

    //набор приветствия при загрузке странички
	var text = "Welcome to my place!\nI'm glad to see you here!";
	i = 0;

	(function type(){
		i++;
		if( i <= text.length )
			document.querySelector(".typeText").innerHTML = text.substring(0, i);
			setTimeout(type, 90);	
	})();

	//animation along the scrolling
	// $('.me-myPic').animated('bounceIn', 'bounceOut');
	$('.me-myInfo').animated('fadeIn', 'fadeOut');
	// $('.skills').ready(progress());
	$('.skills').animated('fadeInLeft', 'fadeOutLeft', progress());
	$('.certfication').animated('fadeInRight', 'fadeOutRight');
	$('.description').animated('fadeIn', 'fadeOut');
	$('.me-myWorks').animated('fadeIn', 'fadeOut');
	$('.fa-map').animated('bounceIn', 'bounceOut');
	$('.map').animated('fadeIn', 'fadeOut');
	$('.me-contact--mailbox').animated('zoomIn', 'zoomOut');
	$('.fa-envelope').animated('bounceIn', 'bounceOut');
	$('.fa-paper-plane').animated('bounceIn', 'bounceOut');
	// $('.me-contact--form').animated('zoomIn', 'zoomOut');

	
	//animate values of progress bars
	function progress() {
		setTimeout(function() {
			$('progress').each(function() {
    			var max = $(this).val();
    			$(this).val(0).animate({ value: max }, { duration: 4250, easing: 'easeOutCirc' });
			});
		}, 250)
	};

	//запуск плагина fancybox
	
	$("a.fancyimage").fancybox();

	

	//прокрутка страницы вверх с анимацией при нажатии на кнопку upButton с надписью back to Top
	$(".upButton").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
	});

	//one more interesting effect
	// $(".upButton").mPageScroll2id();

	// or one more alternative effect for all elements with attribute href and id
	// $("a[href*='#']").mPageScroll2id();


	//принудительная загрузка всех ссылок в новой вкладке
	$('a').each(function() {
	  var a = new RegExp('/' + window.location.host + '/');
	  if(!a.test(this.href)) {
	      $(this).click(function(event) {
	          event.preventDefault();
	          event.stopPropagation();
	          window.open(this.href, '_blank');
	      });
	  }
	});

});

//изменение бекграунда при ховере на span как часть слогана. Альтернативный способ:
// $(document).ready(function(){
// 	$("#backStage").click(function(){
// 	$(".mainPart").css({'transition':'0.5s', 'visibility': 'hidden'}),
// 	$("#backStage").css({'transition':'0.5s', "visibility": "hidden"}),
// 	$(".theaterStage").css({'transition':'1s', 'background': 'url(../images/theaterBackstage.jpg) center 0', 'background-size': 'cover'})
// 	// }, function(){
// 	// 	$(".mainPart").css({'transition':'2s', 'visibility': 'visible'}),
// 	// 	$("#backStage").css({'transition':'2s',"visibility": 'visible'}),
// 	// 	$(".theaterStage").css({'transition':'1s', 'background': 'url(../images/theater_top.jpg) center 0', 'background-size': 'cover'});	
// 	});
// });

//подгрузка контента при скроллинге(альтернативный сниппет)
// jQuery('.post').addClass("hidden").viewportChecker({
	// 	classToAdd:'visible animated fadeIn',
	// 	offset:100
	// });


//подгрузка контента при скроллинге (альтернативный сниппет 2)

// if ($(window).width() <= 549) {
//     if($(window).scrollTop() > 600) {
//         // анимация, которая должны быть выполнена
//         firstAnimation();
//     }
// } else if ($(window).width() > 549 && $(window).width() <= 991) {
//     if($(window).scrollTop() > 480){
//         // анимация, которая должны быть выполнена
//         firstAnimation();
//     }
// } else {
//     if ($(window).scrollTop() > 450) {
//         // анимация, которая должны быть выполнена
//         firstAnimation();
//     }
// }

// var firstAnimation = function () {
//     $('.scroll').each(
//         function () {
//             $(this).delay(500).animate({
//                 opacity: 1,
//                 // height: '180',
//                 // width: '250'
//             }, 2000);
//         }
//     );
// };