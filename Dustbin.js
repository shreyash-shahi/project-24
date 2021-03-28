class Dustbin{
    constructor(x,y,width,height) {
     var options = {
        isStattic: true,
        restitution:0,
        friction:3.2,
        density:15
     }
     this.body=Bodies.rectangle(x,y,width,height,options) ;
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
     
}