class Block{
    constructor(x, y, width, height) {
      this.image=loadImage("block.png");
      this.Visibility=255;
        var options = {
          restitution:1,
          firction:1,
         // density:0.5,

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        if (this.body.speed<3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          //translate(pos.x, pos.y);
          //rotate(angle);
          //imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
          pop();
         
        }
        else{
      
       //remove blocks
      
         World.remove(world,this.body);
          push();//renew
          this.Visibility = this.Visibility - 5;
           tint(255,this.Visibility);
           image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
           pop();//go back
      
        }
        
      }
}
