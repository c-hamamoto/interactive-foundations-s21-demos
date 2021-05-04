$(document).ready(function(){


     // random order
     var boxes = $('.box');

     console.log(boxes);
     for(var i = 0; i < boxes.length; i++){
     	var target = Math.floor(Math.random() * boxes.length -1) + 1;
     	var target2 = Math.floor(Math.random() * boxes.length -1) +1;
     	boxes.eq(target).before(boxes.eq(target2));
     }	


 });

