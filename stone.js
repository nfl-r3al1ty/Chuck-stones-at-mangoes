class Stone {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0,
          isStatic : false
  
        }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      this.image = loadImage("Plucking mangoes/stone.png")
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };