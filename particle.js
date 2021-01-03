class Particles{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
            
        }
       
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color(random(0,255),random (0,255),random (0,255))
        this.body = Bodies.circle(this.x, this.y,this.radius, options);
        World.add(world, this.body);
      }
      display(){
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        fill (this.color)
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2,this.radius*2)
        pop();
      }
}