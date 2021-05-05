class Fly {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 5
        }
        this.pointB = pointB
        this.Fly= Constraint.create(options);
        World.add(world, this.Fly);
    }

      display(){
        if(this.Fly.bodyA){
            var pointA = this.Fly.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }    
   
    }  
      fly(){
          this.Fly.bodyA=null; 
      }
}