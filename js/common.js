$(document).ready(function() {

	$(".m-menu").click(function() {
		$('#menu').removeClass("hidden");
		$('#menu').mmenu({
			navbar: {
				extensions: [ "widescreen", "theme-white", "effect-menu-slide", "pagedim-block" ],
				title: "Меню"
			}
		});
		var mm = $("#menu").data("mmenu");
		mm.open();


		var t = $(this).find(".toggle-mnu");
		t.toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".toggle-mnu").removeClass("on");
		return false;
	});

	$(".m-tree").click(function() {
		$('#tree').removeClass("hidden");
		
		$('#tree').mmenu({
			navbar: {
				extensions: [ "widescreen", "theme-white", "effect-menu-slide", "pagedim-block" ],
				title: "Меню"
			}
		});
		var mm = $("#tree").data("mmenu");
		mm.open();

		var t = $(this).find(".toggle-mnu");
		t.toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".toggle-mnu").removeClass("on");
		return false;
	});


	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="mark">Мы здесь</div>'
        ),

		myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Мы здесь',
            balloonContent: '',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mark.png',
            // Размеры метки.
            iconImageSize: [90, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects.add(myPlacemarkWithContent);
    }

	$(".tab_item").equalHeights();
	$(".tiz").equalHeights();

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".description").equalHeights();

	$(".carousel").owlCarousel({
		responsive : {
	        0 : {
	            items : 1,
	            nav : true
	        }
	    },
	    navText: ""
	});

	$(".owl-next").html("<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>");
	$(".owl-prev").html("<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>");

	$(".child").click(function(){
		return false;
	});

	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});

	$(".parent").click(function() {
			if($(this).children("i").hasClass("hidden")){
				$(this).children("i").removeClass("hidden");
				$(this).children("ul").removeClass("hidden");
			}
			else{
				$(this).children("i").addClass("hidden");
				$(this).children("ul").addClass("hidden");
			}
		}
	);
	

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});