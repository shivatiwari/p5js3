var bubbles = [];

function setup()
{
  createCanvas(innerWidth,innerHeight);
    background(0);
    for(var i = 0; i < 400; i++)
    {
       bubbles[i] = new Bubble();
    }
    print(bubbles);
}

function draw()
{
    background(0);
    for(var i = 0; i < bubbles.length; i++){
    
    bubbles[i].move();
    bubbles[i].display();
        }
}

function Bubble()
{  
    this.x = random(0,width);
    this.y = random(0,height);
   
        
        this.display = function()  
        {
        stroke(255);
        noFill();
        ellipse(this.x,this.y,25,25);
        } 
        this.move = function()
        {
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
        }
}

 
