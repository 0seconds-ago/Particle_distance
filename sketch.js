let movers = [];
let limit = 10;
let r = 500;
let bs = 70;
let ss = 5;
let silr = 200;
let sils= 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255);

  silr = width;
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

    let mot = createVector (width/2, height);
    movers[i].drawSil(mot);

  }
  
}

function mouseClicked(){
  let newMover = new Mover(0.05,0.002);
  movers.push(newMover);

  if (movers.length > limit){
    movers.shift();
  }

}