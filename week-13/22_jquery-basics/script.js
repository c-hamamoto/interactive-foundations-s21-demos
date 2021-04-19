$(document).ready(function(){

	
	console.log('hello world');


	//---------------------------------------
	// add 'play' class to activate animation
	//---------------------------------------

	$('#play').click(function(){
		// $('#title').html('this is a demo by chris');
		$('.element').addClass('play');
	});

	$('#pause').click(function(){
		$('.element').removeClass('play');
	});	

	$('#toggle').click(function(){
		$('.element').toggleClass('play');
	});		

	$(".element").click(function(){
		$(this).toggleClass('play');
	});

	$('body').keyup(function(e){
		if(e.keyCode == 8){
			// user has pressed backspace
			alert('backspace');
			$('body').removeClass('play');			
		}
		if(e.keyCode == 32){
			// user has pressed space
			alert('space bar');
			$('body').addClass('play');			
		}
	});

	$(document).mousemove(function(e) {
    	var x = e.pageX;
    	var y = e.pageY;
    	// console.log('x: '+x+', y:'+y+'');
    	$('#mouse').css({
    		'position': 'absolute',
    		'top': x+'px',
    		'left': y+'px'
    	})
    	$('#title').html('x: '+x+', y:'+y+'');
	});


});

