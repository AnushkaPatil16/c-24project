class RUBBER{
    constructor(x,y,r,w,h){
        var ops = {
            restitution:1.3,
            friction:5,
            density:1
                        
        }


        this.body = Bodies.circle(x,y,r,w,h,ops);
        this.width = w;
        this.hight = h;
        this.radius = r;
        World.add(myworld,this.body);
    }

    display(){
        push(); 
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        stroke("black");
        strokeWeight(5);   
        fill("red"); 
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.width,this.hight)
        pop(); 

    }
}