class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true

        }
       
        this.x=x;
        this.y=y;
        this.radius=10;

        this.body = Bodies.circle(this.x, this.y,this.radius, options);
        World.add(world, this.body);
      }
      display(){
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        fill ("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2,this.radius*2)
        pop();
      }
}