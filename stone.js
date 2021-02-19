class STON{
    constructor(x,y,w,h){
        var ops = {
            restitution:0.7,
            friction:2
        }
  

    this.body = Bodies.rectangle(x,y,w,h);
    this.width = w;
    this.hight = h;
    World.add(myworld,this.body);
}

display(){
    push(); 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    stroke("black");
    strokeWeight(5);   
    fill("black"); 
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop(); 
}
}