import { zeichneMatrix } from "./utils";

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

let matrix = erstelleMatrix(50,50);
let grasArray = []
let RasenDestroyerArray = [] 
let FleischfresserArray = []

function setup() {
  createCanvas(500, 500);
  frameRate(50)
  noStroke()
  for (let i = 0; i < 1; i++) {
    grasArray.push(new gras(22,21))
    grasArray.push(new gras(21,22))
    grasArray.push(new gras(22,22))
    grasArray.push(new gras(21,21))
    grasArray.push(new gras(21,20))
    grasArray.push(new gras(20,21))
    grasArray.push(new gras(20,22))
    grasArray.push(new gras(20,22))
    grasArray.push(new gras(20,20))
    RasenDestroyerArray.push(new rasendestroyer(21,21))
    FleischfresserArray.push(new fleischfresser(25,26))
  }
}

