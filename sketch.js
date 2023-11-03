let movers = [];
let limit = 10;
let r = 300;
let bs = 30;
let ss = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255);

  // for (let i = 0; i < limit; i++){
  //   movers.push(new Mover(0.005,0.01));
  // }

}

function draw() {
  background(0,255);


  for (let i = 0; i < movers.length; i++) {
    movers[i].update();

    for (let ii = 0; ii < movers.length; ii++) {
      if(i !== ii){
        movers[i].drawConnection(movers[ii]);
      }
    }    
    
    movers[i].draw();
    
  }
}

function mouseClicked(){
  let newMover = new Mover(0.005,0.01);
  movers.push(newMover);

  if (movers.length > limit){
    movers.shift();
  }

  for (let i = 0; i < movers.length - 1; i++) {
    newMover.addConnection(movers[i]);
  }

}
