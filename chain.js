class Chain {
    constructor(body1, point){
        var options = {bodyA:body1, pointB:point, stiffness: 0.04, length: 10}
        this.chain = Constraint.create(options);
        World.add(world, this.chain);        
    }

    attach(body){
        this.chain.bodyA = body;
    }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
         this.chain.bodyA = bodyA;
         var PointA = this.chain.bodyA.position;
         var PointB = this.pointB;
         strokeWeight(6);
         line(PointA, PointB.x, PointB.y);
    }
}