let file;
let myStrArr;
let yearMonth = [];
let i = 0;

let a;
let b;
let count = 0;
let color = 0;
function preload(){
  file = loadStrings("aravg.csv");
}

function setup(){

  createCanvas(1000, 1666);
  background(51);
  splitString(file);
  // drawLines();
  a = 0;
  b = 100;
  drawYear()
}

function splitString(thisFile){
  for (let i in thisFile){
    append(yearMonth,thisFile[i].split(" "));
  }
}




function drawYear(){
  // stroke(255, 127);
  noFill();
  // strokeWeight(2);


  for (let c = 0; c < yearMonth.length; c++){

  // for (let c = yearMonth.length-1; c > 0; c--){
  //     if (count == 0){
  //   beginShape();
  // }
      // line(0, i, width, i);
      stroke(map(float(yearMonth[c][2]), -1, 1.5, 0, 255), 127);
      // color += float(yearMonth[c][2]);
      // vertex(a, b + 25*(float(yearMonth[c][2])));
      line(0, c, width, c)
      // console.log(yearMonth[c][0]);

  //     i++;
  //     a= a + width/11;
  //     count++;
  //
  //   if (count == 12){
  //     count = 0;
  //     console.log(color);
  //     stroke(map(color, -8, 12.6, 0, 255));
  //     endShape();
  //     color = 0;
  //     b += height/(yearMonth.length/11.75);
  //     a = 0;
  //   }
  //
  }
}

function draw(){
    // stroke(map(yearMonth[i][2], -2, 2, 0, 255));
    // line(0, i, width, i);
    // i++;
}
