class Hule{
    
    constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var hulepos=this.body.position;		
			push()
			translate(hulepos.x, hulepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}