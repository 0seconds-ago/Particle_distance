let heading = [];
let limit = 10;
let r = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // for (let i = 0; i < limit; i++){
  //   heading.push(new Mover(0.005,0.01));
  // }

  background(0,255);
}

function draw() {
  background(0,255);

  for (let i = 0; i < heading.length; i++){
    heading[i].update();
    let xh = heading[i].x;
    let yh = heading[i].y;

    for (let ii=0; ii< heading.length; ii++){
      let xht = heading[ii].x;
      let yht = heading[ii].y;
      let d = dist(xh, yh, xht, yht);
      if (d < r && i !== ii){
        let sw = map(d,0,r,15,1);
        let sf = map(sw,20,1,255,50);
        strokeWeight(sw);
        stroke(255,sf);
        line(xh,yh,xht,yht);        
      }
    }

    strokeWeight(20);
    stroke(255,180,50,255);
    point(xh,yh);
    
  }
}

function mouseClicked(){
  heading.push(new Mover(0.005,0.01));

  if (heading.length > limit){
    heading.splice(1,1);
  }
}
