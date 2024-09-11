//vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let Dog = [];
let Dog1 = [];
let Dog2 = [];
let Dog3 = [];
let backgroundImage;

function draw_one_frame(words, vocal, drum, bass, other, counter){
  colorMode(HSB,100)
  background(255)

  if(firstRun){
  rectMode(CENTER);
  
  Dog.push(loadImage('Dog.other.1.png')); // Load images in preload function
  Dog.push(loadImage('Dog.other.2.png'));
  Dog.push(loadImage('Dog.other.3.png'));
  Dog.push(loadImage('Dog.other.4.png'));
  
  Dog1.push(loadImage('Dog.vocal.1.png')); // Load images in preload function
  Dog1.push(loadImage('Dog.vocal.2.png'));
  Dog1.push(loadImage('Dog.vocal.3.png'));
  Dog1.push(loadImage('Dog.vocal.4.png'));
  
  Dog2.push(loadImage('Dog.drum.1.png')); // Load images in preload function
  Dog2.push(loadImage('Dog.drum.2.png'));
  Dog2.push(loadImage('Dog.drum.3.png'));
  Dog2.push(loadImage('Dog.drum.4.png'));

  Dog3.push(loadImage('Dog.bass.1.png')); // Load images in preload function
  Dog3.push(loadImage('Dog.bass.2.png'));
  Dog3.push(loadImage('Dog.bass.3.png'));
  Dog3.push(loadImage('Dog.bass.4.png'));

  backgroundImage = loadImage('stage.png')

  firstRun=false
}
function setup(){
  createCanvas(800,800);
}



//background
push();
scale(0.5);
image(backgroundImage, 0, 0, 1600, height/2+570);
pop ();

//other
  let otherFrame;

  if(other<60){
    otherFrame = 0;
  } else if (other<70){
    otherFrame = 1;
  } else if(other<80){
    otherFrame=2;
  } else if(other<90){
    otherFrame=3;
  } else{
    otherFrame=Dog.length-1;
  }
  
  console.log(otherFrame);
  push();
  scale(0.2);
  image(Dog[otherFrame], 2500, height/2+500);
  pop ();
  
  //vocal
  let vocalFrame;
  
  if(vocal<60){
    vocalFrame = 0;
  } else if (vocal<70){
    vocalFrame = 1;
  } else if(vocal<80){
    vocalFrame=2;
  } else if(vocal<90){
    vocalFrame=3;
  } else{
    vocalFrame = Dog1.length-1;
  }
  
  console.log(vocalFrame);
  push();
  scale(0.2);
  image(Dog1[vocalFrame], 1800, height/2+550);
  pop ();


  //drum
  let drumFrame;

  if(drum<60){
    drumFrame = 0;
  } else if (drum<70){
    drumFrame = 1;
  } else if(drum<80){
    drumFrame=2;
  } else if(drum<90){
    drumFrame=3;
  } else{
    drumFrame = Dog2.length-1;
  }
  
  console.log(drumFrame);
  push();
  scale(0.2);
  image(Dog2[drumFrame], 1100, height/2+550);
  pop ();

  //bass
  let bassFrame;

  if(bass<60){
    bassFrame = 0;
  } else if (bass<70){
    bassFrame = 1;
  } else if(bass<80){
    bassFrame=2;
  } else if(bass<90){
    bassFrame=3;
  } else{
    bassFrame = Dog3.length-1;
  }
  
  console.log(bassFrame);
  push();
  scale(0.2);
  image(Dog3[bassFrame], 400, height/2+550);
  pop ();



}
  
  
  
  
  
  // rectMode(CENTER)
  // strokeWeight(9)
  // let lenghthOfLine=100

//   if ()
//   let vocalMap=map(vocal,0,100,5,50)
//   let LineStart=100
//   let LineEnd = LineStart+lenghthOfLine
//   stroke(vocal,80,80)

//   for(let i=1; i<=vocalMap; i++){
//     let LineStep1 = i*15
//     line(LineStart,LineStep1,LineEnd,LineStep1)
//   }

//   let drumMap=map(drum,0,100,5,50)
//   let LineStart2 = 210
//   let LineEnd2 = LineStart2+lenghthOfLine
//   stroke(drum,80,80)

//   for(let i=1; i<=drumMap; i++){
//     let LineStep2 = i*15
//     line(LineStart2,LineStep2,LineEnd2,LineStep2)
//   }

//   let bassMap=map(bass,0,100,5,50)
//   let LineStart3 = 320
//   let LineEnd3 = LineStart3+lenghthOfLine
//   stroke(bass,80,80)

//   for(let i=1; i<=bassMap; i++){
//     let LineStep3 = i*15
//     line(LineStart3,LineStep3,LineEnd3,LineStep3)
//   }

//   let otherMap=map(other,0,100,5,50)
//   let LineStart4 = 430
//   let LineEnd4 = LineStart4+lenghthOfLine
//   stroke(other,100,80)

//   for(let i=1; i<=otherMap; i++){
//     let LineStep4 = i*15
//     line(LineStart4,LineStep4,LineEnd4,LineStep4)
//   }
// }


// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   background(20)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
  
// let eyeLSize = map(drum,0,100,70,220)
// ellipse(200,200,eyeLSize,eyeLSize)

// let eyeRSize = map(bass,0,100,70,220)
// ellipse(500,200,eyeRSize,eyeRSize)

// let mouthSize = map(vocal,0,100,60,350)
// rect(350,500,200,mouthSize)
// }

//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
//  }