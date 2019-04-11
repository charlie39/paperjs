
$(document).ready(function () {
'use strict';
	console.log("helo");
	paper.install(window);
	paper.setup(document.getElementById("mainCanvas"));


//-------printing a simple circle -------------
var c= Shape.Circle(200,200,300);
	c.fillColor='green';
//-------printing multiple nested cirles with different colors via nested for loops----
	let d;
	for(let x=25;x<400;x+=50) {
		for(let y=25;y<400;y+=50) {
			d=Shape.Circle(x,y,25);
			if(y==75 || y==175 || y==275 || y==375) {
				d.fillColor='red';
			}
			else {
				d.fillColor='blue';
			}
			if(y==x){
			d=Shape.Circle(x,y,15);
			d.fillColor='white';
			d=Shape.Circle(x,y,10);
			d.fillColor='green';
			d=Shape.Circle(x,y,5);
			d.fillColor='black';
			}
		}
	}

//--------taking user inputs with the tool obeject of paperjs to draw cirle-------
	var tool =new Tool();
	tool.onMouseDown=function (event) {
		var c=Shape.Circle(event.point.x,event.point.y,25);
		c.fillColor='blue';
		    c=Shape.Circle(event.point.x,event.point.y,20);
		c.fillColor='red';
		c=Shape.Circle(event.point,15);
		c.fillColor='yellow';
	}

         paper.view.draw();
});
