$(document).ready(function(){

	document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();//13000
	var h = $("#canvas").height();//600
	var mx, my;

	var timer=0;
	var screen=0;
	var nombre=0;
	var maxCollisions = 10;
///////////////////////////////////////////////////////////////////////////
	var gun={
		x:40,
		y:450,
		w:120,
		h:60
	};
	var gunpic=new Image();
////////////

	var bullet={

		x:313,
		y:300,
		w: 10,
		h: 10,
		speed:10,
		speedx:0,
		speedy:0

	};
	var bulletpic=new Image();





	//////////////////////////////////////////////////////////////////////////



	function rotatePoint(){
		this.x= gun.x+gun.w;//back of gun no modifier
		this.y=gun.y+(((gun.h)/2)-20)//middle of gun(Center)
	}


	var box=[];

	for(var i=0;i<10;i++){
		box[i] = new boxSkel();

	}
	function boxSkel(x,y,w,h){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;

		this.draw = function(){

			ctx.fillRect(this.x, this.y, 200, 30);
		}
		}

		/*
		function collider(){
			for(var i=0;i<10;i++){
		if(bullet.x>= box[i].x && bullet.x <= (box[i].x+200) && (bullet.y >= box[i].y-bullet.h) && (bullet.y<=box[i].y+bullet.h)){//top
			bullet.speedy*=-1;
			numberCollision++;


		}if(bullet.x>= box[i].x && bullet.x <= (box[i].x+205) && (bullet.y >= box[i].y-bullet.h+30) && (bullet.y<=box[i].y+35)){//bottom
			bullet.speedy*=-1;
			numberCollision++;


		}if(bullet.x>= box[i].x-bullet.w && bullet.x <= (box[i].x+bullet.w/2) && (bullet.y >= box[i].y) && (bullet.y<=box[i].y+30)){//left
			bullet.speedx*=-1;
			numberCollision++;


		}if(bullet.x>= box[i].x+200-bullet.w && bullet.x <= (box[i].x+200+bullet.w) && (bullet.y >= box[i].y-bullet.h) && (bullet.y<=box[i].y+25)){//right
			bullet.speedx*=-1;
			numberCollision++;

		}
		}
		}

		*/
		/*
		function collider(){
			for(var i=0;i<10;i++){
		if(bullet.x>= box[i].x +5 && bullet.x <= (box[i].x+195) && (bullet.y >=box[i].y-10) &&(bullet.y<=box[i].y+10)){//top
			bullet.speedy*=-1;
			numberCollision++;




		}if(bullet.x>= box[i].x +5 && bullet.x <= (box[i].x+195) && (bullet.y >= box[i].y+20)&&(bullet.y <= box[i].y+40)){//bottom
			bullet.speedy*=-1;
			numberCollision++;



		}if(bullet.x>= box[i].x-5 && bullet.x<=box[i].x+5&& (bullet.y >= box[i].y+10) && (bullet.y<=box[i].y+30)){//left
			bullet.speedx*=-1;
			numberCollision++;


		}if(bullet.x>= box[i].x+195 && bullet.x<=box[i].x+205 && (bullet.y >= box[i].y+10) && (bullet.y<=box[i].y+30)){//right
			bullet.speedx*=-1;
			numberCollision++;

		}

		/////
		if(bullet.x>= box[i].x  && bullet.x <= (box[i].x+bullet.w) && (bullet.y >=box[i].y) &&(bullet.y<=box[i].y+bullet.h)){//top left corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("top left corner")
		}
			if(bullet.x>= box[i].x+200-bullet.w && bullet.x <= (box[i].x+200) && (bullet.y >=box[i].y) &&(bullet.y<=box[i].y+bullet.h)){//top right corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("top right corner")
		}
			if(bullet.x>= box[i].x  && bullet.x <= (box[i].x+bullet.w) && (bullet.y >=box[i].y-bullet.h) &&(bullet.y<=box[i].y)){//bot left corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("bot left corner")
		}
		if(bullet.x>= box[i].x+200  && bullet.x <= (box[i].x+200+bullet.w) && (bullet.y >=box[i].y-bullet.h) &&(bullet.y<=box[i].y)){//bot right corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("bot right corner")
		}


		}
		}
		*/


		function collider(){
			for(var i=0;i<10;i++){
		if(bullet.x>= box[i].x+bullet.w && bullet.x <= (box[i].x+200-bullet.w) && (bullet.y >= box[i].y-bullet.h) && (bullet.y<=box[i].y)){//top
			bullet.speedy*=-1;
			numberCollision++;
			console.log("top")

		}if(bullet.x>= box[i].x+bullet.w && bullet.x <= (box[i].x+200-bullet.w) && (bullet.y >= box[i].y-bullet.h+30) && (bullet.y<=box[i].y+30)){//bottom
			bullet.speedy*=-1;
			numberCollision++;
			console.log("bottom")


		}if(bullet.x>= box[i].x-bullet.w && bullet.x <=box[i].x && (bullet.y >= box[i].y+bullet.h) && (bullet.y<=box[i].y+30-bullet.h)){//left
			bullet.speedx*=-1;
			numberCollision++;
			console.log("left")

		}if(bullet.x>= box[i].x+200-bullet.w && bullet.x <= box[i].x+200 && (bullet.y >= box[i].y+bullet.h) && (bullet.y<=box[i].y+30-bullet.h)){//right
			bullet.speedx*=-1;
			numberCollision++;
			console.log("right")

///////////////////////////////////////////////////////////////////////////////

/*
		}if(bullet.x>= box[i].x  && bullet.x <= (box[i].x+bullet.w) && (bullet.y >=box[i].y) &&(bullet.y<=box[i].y+bullet.h)){//top left corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("top left corner")
		}
			if(bullet.x>= box[i].x+200-bullet.w && bullet.x <= (box[i].x+200) && (bullet.y >=box[i].y) &&(bullet.y<=box[i].y+bullet.h)){//top right corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("top right corner")
		}
			if(bullet.x>= box[i].x  && bullet.x <= (box[i].x+bullet.w) && (bullet.y >=box[i].y-bullet.h+30) &&(bullet.y<=box[i].y+30)){//bot left corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("bot left corner")
		}
		if(bullet.x>= box[i].x+200  && bullet.x <= (box[i].x+200+bullet.w) && (bullet.y >=box[i].y-bullet.h+30) &&(bullet.y<=box[i].y+30)){//bot right corner
			bullet.speedy*=-1;
			bullet.speedx*=-1;
			numberCollision++;
			console.log("bot right corner")
		}
		*/
		}
}

		if(bullet.x>=w-bullet.w||bullet.x<=0){//Screen Boundaries
			numberCollision++;
			bullet.speedx*=-1;

		}

		if(bullet.y>=h-bullet.h||bullet.y<=0){//Screen Boundaries
			numberCollision++;
			bullet.speedy*=-1;
		}



	}










	function Mover(){

		this.sx = 5;
		this.sy = 5;

		this.move = function(){
			this.x += this.sx;
			this.y += this.sy;
		}
	}


	var Gary = new Mover();


	Gary.x = 200;
	Gary.move();

	var muzzleFlash= new Image();
	var specPoint = new rotatePoint()
	var CityBackground= new Image();

	var angle;
	var degrees;

	var shoot=false;
	var collision=false;
	var numberCollision=0;






	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	//////////
	///STATE VARIABLES

	bulletpic.src= 'Images/bullet.png';
	gunpic.src='Images/gun.png';
	muzzleFlash.src='Images/explosion.gif';
	CityBackground.src='Images/CityBackground.png';

	bullet.x=gun.x+113;
	bullet.y=gun.y;


	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 16.67);//16.67 = 60 FPS
	}

	init();





	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint(){

		if(screen==0){//Main Menu
		ctx.textAlign = "center";
		ctx.font='40pt Verdana';
		ctx.fillStyle = '#2F4F4F';
		ctx.fillRect(0,0, w,h);

		ctx.fillStyle = '#A9A9A9';
		ctx.fillRect (5,5, w - 10, h - 10);

		ctx.fillStyle= 'black';
		ctx.fillText("Ricochet Raze",w/2,100)

		ctx.fillStyle='#696969'
		ctx.fillRect(w/2-150,175,300,75);
		ctx.font='25pt Verdana';
		ctx.fillStyle='black';
		ctx.fillText("PLAY",w/2,225);

		if((mx>=(w/2-150)&&mx<=(w/2+150))&&(my>=175&&my<=250)){
		ctx.fillStyle='black'
		ctx.fillRect(w/2-152,173,304,79);
		ctx.fillStyle='#696969'
		ctx.fillRect(w/2-150,175,300,75);
		ctx.font='25pt Verdana';
		ctx.fillStyle='#DCDCDC';
		ctx.fillText("PLAY",w/2,225);
		}

		ctx.fillStyle='#696969'
		ctx.fillRect(w/2-150,275,300,75);
		ctx.font='25pt Verdana';
		ctx.fillStyle='black';
		ctx.fillText("INSTRUCTIONS",w/2,325);

		if((mx>=(w/2-150)&&mx<=(w/2+150))&&(my>=275&&my<=350)){
		ctx.fillStyle='black'
		ctx.fillRect(w/2-152,273,304,79);
		ctx.fillStyle='#696969'
		ctx.fillRect(w/2-150,275,300,75);
		ctx.font='25pt Verdana';
		ctx.fillStyle='#DCDCDC';
		ctx.fillText("INSTRUCTIONS",w/2,325);

		}

		}


		if(screen==1){
			ctx.font='12pt Comic Sans';
		ctx.fillStyle = '#2F4F4F';
		ctx.fillRect(0,0, w,h);

		ctx.drawImage (CityBackground,5,5, w - 10, h - 10);

		ctx.fillRect(0,0,w,5);
		ctx.fillRect(0,0,5,h);
		ctx.fillRect(0,h-5,w,5);
		ctx.fillRect(w-5,0,5,h);



		if(shoot==true){

			ctx.drawImage(bulletpic,bullet.x,bullet.y,bullet.w,bullet.h);

			bullet.x=bullet.x+bullet.speedx;
			bullet.y=bullet.y+bullet.speedy;

		}

		ctx.save();
		ctx.translate(specPoint.x,specPoint.y);
		ctx.rotate(angle);
		ctx.fillStyle='black';
		ctx.drawImage(gunpic,gun.x-specPoint.x,gun.y-specPoint.y,gun.w,gun.h);
		ctx.restore();

		ctx.fillStyle= 'black';




		angle = Math.atan2(my-specPoint.y,mx-specPoint.x);

		degrees = angle *(-180/Math.PI)
		if(degrees<0){
			(degrees+=360);
		}
		ctx.fillText("Angle: " + Math.floor(degrees), 800,50);
		ctx.fillText("MX: " + Math.floor(mx) + " MY: "+Math.floor(my), 800,100);
		ctx.fillText("# of collisions: "+ numberCollision,800,140);
		ctx.fillText("bullet.x "+Math.floor(bullet.x)+" bullet.y "+Math.floor(bullet.y),800,180);
		ctx.fillText("Sx: " + Math.floor(bullet.speedx) + " SY: "+Math.floor(bullet.speedy), 800,260);
		ctx.fillText("timer"+timer,100,100);
		ctx.fillText("screen"+screen,100,200);
		ctx.fillText("shoot "+shoot,100,300);
		ctx.fillRect(w/2,h/2, 3,3);






		if(numberCollision>maxCollisions){
			bullet.x=gun.x+113;
			bullet.y=gun.y;
			bullet.speedx=0;
			bullet.speedy=0;
			numberCollision=0;
			shoot=false;


		}

		ctx.fillStyle='black';


		for(var i=0;i<box.length;i++){//draw boxes
			box[i].draw();
		}



	collider();




		}
		///////////////////////////////////////////////////////////////
		if (screen==2){
			ctx.fillStyle = 'blue';
			ctx.fillRect(0,0, w,h);


			ctx.drawImage (CityBackground,5,5, w - 10, h - 10);

			ctx.fillStyle = 'black';
			ctx.font = '15pt Arial';
			ctx.fillText("Click to add a block to the map!", 200, 100);

			ctx.font='12pt Comic Sans';
			ctx.fillStyle='black';

			ctx.fillRect(mx-100,my-15,200,30);



		for(var i=0;i<box.length;i++){//draw boxes
			box[i].draw();
		}


	}


		if(screen==3){
		ctx.textAlign = "center";
		ctx.font='25pt Verdana';
		ctx.fillStyle='black';
		ctx.fillRect(w/2-235,h/2-185, 470,370);
		ctx.fillStyle = '#2F4F4F';
		ctx.fillRect(w/2-225,h/2-175, 450,350);
		ctx.fillStyle='black';
		ctx.fillText("PAUSED",w/2,170);
		}











	}
	////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE




	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////






	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		if(screen==0){

			if((mx>=(w/2-150)&&mx<=(w/2+150))&&(my>=200&&my<=275)){
				screen=1
			}
		}





		if(screen==2){

		if(nombre==0){
				box[0]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==1){
				box[1]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==2){
				box[2]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==3){
				box[3]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==4){
				box[4]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==5){
				box[5]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==6){
				box[6]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==7){
				box[7]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==8){
				box[8]=new boxSkel(mx-100,my-15);
				nombre++;
		}else if(nombre==9){
				box[9]=new boxSkel(mx-100,my-15);
				nombre++;
		}








		}

	}, false);

	canvas.addEventListener('mousedown', function (evt){
	if(screen==1){



			if(numberCollision==0){
			shoot=true
			bullet.speedx=Math.cos(angle)*bullet.speed;
			bullet.speedy=Math.sin(angle)*bullet.speed;
			numberCollision++;


		}else if(numberCollision==maxCollisions+1){
			shoot=false;

		}
	}
	},false);


	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt)
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}


	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////




	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		if (key==49){
			screen=1;
		}

		if(key==50){//2
		screen=2;
		}
		if(key==82){//r
		numberCollision=maxCollisions+1;
		}

		if(screen==1||screen==2){
			if(key==80){//p
				screen=3;
				hhsdfhsf();
			}

		}
		if(screen==3 && key==80){
			screen=1;
		}









	//p 80
	//r 82
	//1 49
	//2 50
	//3 51

	}, false);




})
