class Box{
    constructor(x,y,width,height){
        var option = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.4,
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
}