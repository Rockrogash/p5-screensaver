function Balken(){
  this.x = 0;
  this.y = random(0, height);

  this.show = function(){
    fill(255);
    rect(this.x, this.y, 5, 30);
  }


  this.update = function(){
    this.x += 1;
  }
}
