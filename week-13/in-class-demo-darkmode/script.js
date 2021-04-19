console.log('hello');


$(document).ready(function(){

	//------------------------------------
	// show hide each item
	//------------------------------------

	$('.item').click(function(){
		$(this).toggleClass('active');
	});

	//---------------------------
	// setup show hide all button
	//---------------------------
	$("#showhide").click(function(){
		$('.item').toggleClass('active');
	});

	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(){
		$('body').toggleClass('darkmode');
	});

});