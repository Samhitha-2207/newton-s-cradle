class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY){
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offSetX, y:this.offSetY},
            stiffness:0.04,
            length:10
        }
        this.bodyB = bodyB;
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }
    display(){

        /*var pointA = this.bodyA.position;
        var pointB = this.bodyB.position;*/

        strokeWeight(2);
        stroke("lightblue");

        /*var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x+this.offSetX;
        var Anchor2Y = poinyB.y+this.offSetY;*/

        //line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        line(this.Rope.bodyA.position.x,this.Rope.bodyA.position.y,this.Rope.bodyB.position.x+this.offSetX,this.Rope.bodyB.position.y+this.offSetY);
    }
}