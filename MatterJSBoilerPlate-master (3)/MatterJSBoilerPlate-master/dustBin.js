class dustbin {
    constructor(x, y,width,height) {
      var options = {
          'isStatic':true,
          'density':1.0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.dust = loadImage("dustbin.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      image(this.dust,pos.x,pos.y,this.width,this.height);
      pop();
    }
  };