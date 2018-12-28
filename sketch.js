let file;
let myStrArr;
let yearMonth = [];
let i = 0;

let count = 0;
let color = 0;

let lineWidth;



function preload(){
  file = loadStrings("aravg.csv");
}

function setup(){

  splitString(file);
  createCanvas(yearMonth.length, yearMonth.length);
  background(51);
  drawYear()

}

function splitString(thisFile){
  for (let i in thisFile){
    append(yearMonth,thisFile[i].split(" "));
  }
}
let minMaxArr = [];
function getMinMax(){

  for (let c = 0; c <yearMonth.length; c++){
    minMaxArr.push(parseFloat(yearMonth[c][2]));
  }
  let minVal = min(minMaxArr);
  let maxVal = max(minMaxArr);
  return([minVal, maxVal]);

}


function getStart(startYear, startMonth){
  for (let c = 0; c <yearMonth.length; c++){
    if(yearMonth[c][0]== startYear &&
       yearMonth[c][1] == startMonth){
         return(c)
       }
      }
}

function drawYear(){
  // stroke(255, 127);
  noFill();
  let startNum = getStart(1880, 1);
  let minMax = getMinMax();
  lineWidth = floor(yearMonth.length/(yearMonth.length-startNum));
  strokeWeight(lineWidth);

  for (let c = yearMonth.length-1; c > startNum; c--){
    strokeVal = map(float(yearMonth[c][2]), minMax[0], minMax[1], 0,255);
    stroke(strokeVal);
    // line(0, c*lineWidth, width, c*lineWidth);
    line(0, (yearMonth.length-c)*lineWidth, width, (yearMonth.length-c)*lineWidth);
    // line(c+(yearMonth.length/2),0, c+(yearMonth.length/2), height);


  }
}





function draw(){
    // stroke(map(yearMonth[i][2], -2, 2, 0, 255));
    // line(0, i, width, i);
    // i++;
}
