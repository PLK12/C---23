class Cannon
{
    constructor(x,y,w,h, angle)
    {
        this.x =x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
    }
    

    display()
    {
        fill("grey");
        push();
       
        translate(this.x, this.y)
        rotate(this.angle)
        rect(0,0, this.w, this.h);
        pop();
        arc(this.x-30,this.y +75,170,220,PI, TWO_PI);

       
    }
}