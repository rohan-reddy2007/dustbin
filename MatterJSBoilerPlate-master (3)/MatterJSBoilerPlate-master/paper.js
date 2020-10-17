class paper {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.Paper = loadImage("paper.png");
    }
    display(){
      
      
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x= 30;
      pos.y= 200;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.Paper,pos.x,pos.y,this.width,this.height);
      pop();
    }
  };