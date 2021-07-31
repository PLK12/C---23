class Tower
{
    //properties
    constructor(x, y, w, h)
    {
        var options =
        {
            isStatic: true
        }
       
       this.image = loadImage("assets/tower.png"); 
       this.body = Bodies.rectangle(x, y, w, h, options);
       //instance variable
       this.w = w;
       this.h = h;
      // this.x = x;
      // this.y = y;
       World.add(myWorld, this.body);

    }


    //method/function user defined
    display()
    {

        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.w, this.h);
        pop();
    }



}