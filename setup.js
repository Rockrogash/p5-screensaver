function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  kreis1 = new Kreis(3.2, 3.9);
  kreis2 = new Kreis(3, 2.6);

  balkenArray = new Array();
}

function draw() {
  // if(frameCount % 100 == 0){
  //   balken = new Balken();
  //   balkenArray.push(balken);
  // }

  for(i=balkenArray.length -1; i >= 0; i--){

    if (balkenArray[i].x > width + 100){
      balkenArray.splice(i);
    }

    balkenArray[i].update();
    balkenArray[i].show();


  }

  for(i=0; i<10; i++){
    kreis1.update();
    kreis1.show();
    kreis2.update();
    kreis2.show();
  }
}
