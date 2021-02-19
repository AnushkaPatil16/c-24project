class HAMMER{
    constructor(x,y){
        var ops = {
            'density':2,
            'friction':1.0,
            'restitution':0.5
        }


    this.body = Bodies.rectangle(x,y,50,5,ops);
    this.width = 50;
    this.hight = 5
    World.add(myworld,this.body);  
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        stroke("black");
        strokeWeight(5);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height); 
        pop() 
}
}
