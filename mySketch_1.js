function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(100);
	Pic()
}

function Pic(){
	let m=map(mouseX,0,width,0,100)
	for(var x=0;x<width;x+=200){
		for(var y=0;y<width;y+=200){
			noFill()
			stroke("#FFB563")
			ellipse(x,y, 200+m);
			noFill()
			stroke("#918450")
			quad(100+x,0+y-m,200+x+m,100+y,100+x,200+y+m,0+x-m,100+y)
			rectMode(CENTER)
			noFill()
			stroke("#FEFAE0")
			rect(100+x,100+y,100+m)
			ellipseMode(CENTER)
			noFill()
			stroke("#FFD29D")
			ellipse(200+x,200+y, 80+m);
		}
	}
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}