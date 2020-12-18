class Ground{

 constructor(x,y,width,height) {
     
    var groundOptions={
        isStatic:true        
    }

    //adding ground to the Physics Engine
    this.body = Bodies.rectangle(x,y,width,height,groundOptions);
    World.add(myWorld, this.body);
    this.width=width
    this.height=height
}


display(){
 
    rectMode(CENTER);
    fill(50)
    rect(this.body.position.x, this.body.position.y, this.width,this.height)

}
}
