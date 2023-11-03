let movers = [];
let limit = 7;
let r = 400;
let bs = 100;
let ss = 5;
let silr = 200;
let sils= 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255);

  silr = width;
  mot = createVector (width/2, height);
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
    
  }

  for (let m of movers){
    //m.update();
    m.drawSil(mot);
    m.draw();
    m.checkEdges();

  }
  
}

function mouseClicked(){
  let newMover = new Mover(0.05,0.002);
  movers.push(newMover);

  if (movers.length > limit){
    movers.shift();
  }

}