function Kreis(xspeed, yspeed){
  this.x = 250;
  this.y = 250;
  this.xspeed = xspeed;
  this.yspeed = yspeed;
  this.diameter = floor(random(5, 20));
  this.radius = this.diameter / 2;
  this.green = 255;
  this.red = 255;
  this.blue = 255;
  this.opacity = floor(random(128,256));

  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if(this.x > width - this.radius || this.x < 0 + this.radius){
      this.xspeed = this.xspeed * (-1);

      this.red = (this.red + floor(random(0, 10))) % 255;
      this.green = (this.green + floor(random(0, 10))) % 255;
      this.blue = (this.blue + floor(random(0, 10))) % 255;
      this.opacity = floor(random(128,256));
      this.diameter = floor(random(5, 20));
    }

    if(this.y > height - this.radius || this.y < 0 + this.radius){
      this.yspeed = this.yspeed * (-1);

      this.red = (this.red + floor(random(0, 10))) % 255;
      this.green = (this.green + floor(random(0, 10))) % 255;
      this.blue = (this.blue + floor(random(0, 10))) % 255;
      this.opacity = floor(random(128,256));
      this.diameter = floor(random(5, 20));
    }

  }

  this.show = function(){
    fill(this.x, 0, this.x, 50, this.opacity);
    circle(this.x + this.radius, this.y + this.radius, this.diameter * 1.5);
    fill(this.red, this.green, this.blue, this.opacity);
    rect(this.x, this.y, this.diameter, this.diameter);
    rect(this.x + 0.5, this.y - 1, this.diameter, this.diameter);


  }
}
