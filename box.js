class Box{
    constructor(x,y,width,height){
      var options={
          restitution:0.5
      }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.Visiblity=255
        World.add(world,this.body);
    }
    display(){
    if(this.body.speed<7){
        var angle=this.body.angle
        push ()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate (angle)
        rectMode(CENTER)
        fill(255,192,203)
        rect(0,0,this.width,this.height)
        pop()
    }else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(0, 153, 204,this.Visiblity);
     pop();
    }    

    }

    score(){
        if(this.Visiblity<0&&this.Visiblity>-1005){
            score++;
        }
    }
}