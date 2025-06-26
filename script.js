let el1 = document.getElementById("element1");

let matrix = erstelleMatrix(50,50);
let grasArray = []
let RasenDestroyerArray = [] 
let FleischfresserArray = []

function setup() {
  createCanvas(500, 500);
  frameRate(50)
  noStroke()
  for (let i = 0; i < 1; i++) {
    grasArray.push(new gras(22,23))
    grasArray.push(new gras(23,22))
    grasArray.push(new gras(22,21))
    grasArray.push(new gras(23,21))
    grasArray.push(new gras(25,22))
    grasArray.push(new gras(25,23))
    grasArray.push(new gras(25,24))
    grasArray.push(new gras(25,25))
    grasArray.push(new gras(21,25))
    grasArray.push(new gras(22,25))
    grasArray.push(new gras(23,25))
    grasArray.push(new gras(24,25))
  }
  for (let i = 0; i < 1; i++) {
    RasenDestroyerArray.push(new RasenDestroyer(21,21))
    RasenDestroyerArray.push(new RasenDestroyer(21,21))
  }
  /*for (let i = 0; i < 1; i++) {
    FleischfresserArray.push(new FleischFresser(25,26))
  } */
  //for (let i = 0; i < 1; i++) {
  //  FleischfresserArray.push(new RasenDestroyer(22,22))
  //}
}

let z = 0
function draw() {
  console.log(grasArray.length+RasenDestroyerArray.length);
  //console.log(RasenDestroyerArray)
  //console.log(grasArray)
  if (z < 1000) {
    for (let i = 0; i < grasArray.length; i++) {
      grasArray[i].spielzug()
    }
    for (let i = 0; i < RasenDestroyerArray.length; i++) {
      RasenDestroyerArray[i].spielzug()
    }
    for (let i = 0; i < FleischfresserArray.length; i++) {
      FleischfresserArray[i].spielzug()
    }
    zeichneMatrix(3, 3);
  }
  z++;
}





