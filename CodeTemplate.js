$(document).ready(function(){

	document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();//13000
	var h = $("#canvas").height();//600
	var mx, my;

	var timer=0;
	var screen=1;

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
		w: 15,
		h: 15,
		speed:10,
		speedx:0,
		speedy:0
	};
	var bulletpic=new Image();

	//////////////////////////////////////////////////////////////////////////

	/*
	var box1={//top
		x:800,
		y:200,
		w:250,
		h:10
	};
	var box2={//bottom
		x:800,
		y:250,
		w:250,
		h:10
	};
	var box3={//left
		x:800,
		y:200,
		w:10,
		h:50
	};
	var box4={//right
		x:1050,
		y:200,
		w:10,
		h:50
	};

	var bigBox={//overlay
		x:box1.x,
		y:box1.y,
		w:box1.w+10,
		h: box3.h+10
	};
	*/
		function bSpawn(){
		this.x=gun.x+gun.w;
		this.y=gun.y+5;
	}

	function rotatePoint(){
		this.x= gun.x+gun.w;//back of gun no modifier
		this.y=gun.y+(((gun.h)/2)-20)//middle of gun(Center)
	}


	var box=[];

	for(var i=0;i<10;i++){
		box[i] = new boxSkel(500,150);

	}
	function boxSkel(x,y,w,h){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;

		this.draw = function(){

			ctx.fillRect(this.x, this.y, 200, 30);
		}
		/*
		ctx.fillRect(box1.x,box1.y,box1.w,box1.h);//top
		ctx.fillRect(box2.x,box2.y,box2.w,box2.h);//bottom
		ctx.fillRect(box3.x,box3.y,box3.w,box3.h);//left
		ctx.fillRect(box4.x,box4.y,box4.w,box4.h);//right
		*/
		}

		/*
		function collider(){
		if(bullet.x>= box1.x && bullet.x <= (box1.x+box1.w) && (bullet.y >= box1.y-bullet.h) && (bullet.y<=box1.y+bullet.h)){//top
			bullet.speedy*=-1;
			numberCollision++;

		}if(bullet.x>= box2.x && bullet.x <= (box2.x+box2.w) && (bullet.y >= box2.y-bullet.h) && (bullet.y<=box2.y+bullet.h)){//bottom
			bullet.speedy*=-1;
			numberCollision++;

		}if(bullet.x>= box3.x-bullet.w && bullet.x <= (box3.x+box3.w) && (bullet.y >= box3.y-bullet.h) && (bullet.y<=box3.y+box4.h+5)){//left
			bullet.speedx*=-1;
			numberCollision++;

		}if(bullet.x>= box4.x-bullet.w && bullet.x <= (box4.x+box4.w) && (bullet.y >= box4.y) && (bullet.y<=box4.y+box4.h+5)){//right
			bullet.speedx*=-1;
			numberCollision++;

		}
		*/

		function collider(){

			if(bullet.x>=box[0].x && bullet.x<=(box[0].x+box[0].w) && (bullet.y>=box[0].y-bullet.h)&&(bullet.y<=box[0].y+bullet.h)){
				bullet.speedy*=-1;
				numberCollision++;

			}if(bullet.x>=box[0].x && bullet.x<=(box[0].x+box[0].w) && (bullet.y<=box[0].y+box[0].h) && (bullet.y>=box[0].y+box[0].h)){
				bullet.speedy*=-1;
				numberCollision++;

		}
		}





	var muzzleFlash= new Image();

	var spawnPoint = new bSpawn()
	var specPoint = new rotatePoint()


	var maxbullets=1;
	var allbullets=[];

	var angle;
	var degrees;

	var shoot=false;
	var collision=false;
	var numberCollision=0;
	var firstShot=true;




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

	bullet.x=gun.x+113;
	bullet.y=gun.y;
//	bullet.x=spawnPoint.x;
//	bullet.y=spawnPoint.y;

	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 16.7);
	}

	init();





	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		if(screen==1){
		ctx.fillStyle = 'blue';
		ctx.fillRect(0,0, w,h);

		ctx.fillStyle = '#A9A9A9';
		ctx.fillRect (10,10, w - 20, h - 20);


		ctx.font='12pt Comic Sans';


		if(shoot==true){
			//ctx.drawImage(bulletpic,spawnPoint.x,spawnPoint.y,bullet.w,bullet.h);
			ctx.drawImage(bulletpic,bullet.x,bullet.y,bullet.w,bullet.h);

			bullet.x=bullet.x+bullet.speedx;
			bullet.y=bullet.y+bullet.speedy;

		}

		ctx.save();
		ctx.translate(specPoint.x,specPoint.y);
		ctx.rotate(angle)
		ctx.fillStyle='black';
		ctx.drawImage(gunpic,gun.x-specPoint.x,gun.y-specPoint.y,gun.w,gun.h);
		ctx.restore();

		ctx.fillStyle= 'black';




		angle = Math.atan2(my-specPoint.y,mx-specPoint.x);

		degrees = angle *(-180/Math.PI)
		if(degrees<0){
			(degrees+=360);
		}
		ctx.fillText("Shoot = " + shoot, 800, 75);
		ctx.fillText("Angle: " + Math.floor(degrees), 800,50);
		ctx.fillText("MX: " + mx + " MY: "+my, 800,100);
		ctx.fillText("# of collisions: "+ numberCollision,800,140);
		ctx.fillText("bullet.x "+Math.floor(bullet.x)+" bullet.y "+Math.floor(bullet.y),800,180);
		ctx.fillText("spawnPoint.x: "+Math.floor(spawnPoint.x)+" spawnPoint.y: "+Math.floor(spawnPoint.y),800,220);
		ctx.fillText("Sx: " + Math.floor(bullet.speedx) + " SY: "+Math.floor(bullet.speedy), 800,260);
		ctx.fillText("timer"+timer,100,100);
		ctx.fillText("screen"+screen,100,200);
		ctx.fillRect(w/2,h/2, 3,3);

		ctx.fillStyle='green';

		ctx.fillRect(0,0,w,5);
		ctx.fillRect(0,0,5,h);
		ctx.fillRect(0,h-5,w,5);
		ctx.fillRect(w-5,0,5,h);


		if(bullet.x>w-bullet.w||bullet.x<0){
			shoot=true;
			collision=true;
			numberCollision++;
			bullet.speedx*=-1;

		}

		if(bullet.y>h-bullet.h||bullet.y<0){
			bullet.speedy*=-1;
			shoot=true;
			numberCollision++;
		}

		if(numberCollision>=6){
			bullet.x=gun.x+113;
			bullet.y=gun.y;
			bullet.speedx=0;
			bullet.speedy=0;
			numberCollision=0;
			shoot=false;


		}


		//collider();
		ctx.fillStyle='black';

		//ctx.fillRect(bigBox.x,bigBox.y,bigBox.w,bigBox.h);
		box[0].draw();
		box[1].draw();
		box[2].draw();
		box[3].draw();
		box[4].draw();
		box[5].draw();


		if(shoot==true){
		var animation = setInterval(function(){
		timer++;

		}, 10);
	}


		if(timer>0&&timer<=10){
			ctx.drawImage(muzzleFlash,gun.x+113,gun.y-15,50,50);
			clearInterval(animation);
		}




		///////////////////////////////////////////////////////////////
		}else if (screen==2){
				ctx.fillStyle = 'blue';
		ctx.fillRect(0,0, w,h);

		ctx.fillStyle = '#A9A9A9';
		ctx.fillRect (10,10, w - 20, h - 20);


		ctx.font='12pt Comic Sans';



	}
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE




	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////






	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		if(screen==1){

			if(numberCollision==0){
			shoot=true;
			bullet.speedx=Math.cos(angle)*bullet.speed;
			bullet.speedy=Math.sin(angle)*bullet.speed;
			numberCollision++;


		}else if(numberCollision==6){
			shoot=false;
			bullet.speedx=Math.cos(angle)*bullet.speed;
			bullet.speedy=Math.sin(angle)*bullet.speed;


		}



		box[5]=new boxSkel(mx,my);


		}else if(screen==2){

		}

	}, false);




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


		if(key==50){//2
		screen=2;
		}
		else if (key==49){
			screen=1;
		}



	//p 80
	//r 82
	//1 49
	//2 50
	//3 51

	}, false);




})
