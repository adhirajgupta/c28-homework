class Box{
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.000001,
            'frictionStatic':10,
            'density':0.1,
        }
        this.body = Bodies.rectangle(x, y,width,height, options);      
        this.width = width;
        this.height = height;  
        World.add(world,this.body);
      }
      display(){
          push()
          var pos = this.body.position;
          translate(pos.x,pos.y);
          rectMode(CENTER);
          fill(255,255,255);
          rect(0,0,this.width,this.height);
          pop();
      }
}
