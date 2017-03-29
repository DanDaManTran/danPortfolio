$("document").ready(function(){

	//slowly scrolls to other pages when clicked on the top header
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html, body').animate({scrollTop: target.offset().top}, 1000);
				return false;
			}
		}
	});

	//Hide and show text on the edEx page
	$(document).on("click",".plusMinus",function(){
	  	var num = $(this).data('value');
			$(this).toggleClass("fa-chevron-down fa-chevron-up");
	  	if(num%2==0){
	  		$(this).data('value',(num+1));
	  		$('[data-showHide='+num+']').show();
	  	} else{
	  		$(this).data('value',(num-1));
	  		$('[data-showHide='+(num-1)+']').hide();
	  	}
	});

	//show title, github and heroku links for each project, when mouse is over the project picture
	$(".backPort").on("mouseover", function(){
		var portIndex = $(this).data('value');
		$("#"+portIndex).show();
	});

	//hide title, github and heroku links for each project, when mouse move out the project picture
	$(".backPort").on("mouseout", function(){
		var portIndex = $(this).data('value');
		$("#"+portIndex).hide();
	});

	$("#email").on("click", function(){
		window.open('mailto:DanD.Tran@yahoo.com')
	});



});
