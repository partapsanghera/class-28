class SlingShot {
    constructor(bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
    this.pointB=pointB
    this.sling=Constraint.create(options)  

     World.add(world,this.sling);
}
     display() {

        if(this.sling.bodyA) {
        
        var pointingA = this.sling.bodyA.position 
         var pointingB=this.pointB

         line(pointingA.x,pointingA.y,pointingB.x,pointingB.y);
        }
     }
    fly(){
        this.sling.bodyA=null;

    }
    }
    
    
