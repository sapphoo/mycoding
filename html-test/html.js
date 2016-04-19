function goToTop(){
	$(window).scroll(function(e){
		if($(window).scrollTop()>200)
			$("#goToTop").fadeIn(1000);
		else
			$("#goToTop").fadeout(1000);
	});
};

$(function(){
	$("#goToTop").click(function(e){
		$('body,html').animate({scrollTop:0},1000);
	});
	// $("#goToTop").mouseover(function(e) {
 //        $(this).css("background","url(images/backtop2013.png) no-repeat 0px 0px");
 //    });
 //    $("#goToTop").mouseout(function(e) {
 //        $(this).css("background","url(images/backtop2013.png) no-repeat -70px 0px");
 //    });
	goToTop();
});
