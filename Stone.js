class Stone{
    constructor(x, y, radius){
        var options = {isStatic : false, restitution : 0.5, friction : 1}
        this.body = Bodies.circle(x, y, radius/3, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("Images/stone.png")
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.radius, this.radius);
       pop();
   }
}