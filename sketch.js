var sound, analyzer;
var opac = 0;
var opac1 = 200;
var c = 255;
var k = 255;
var z = 240;
var y = 0;


function preload(){
  sound = loadSound('assets/stranger-things-cover.mp3');
  img = loadImage("./assets/011.png");
  img2 = loadImage("./assets/nature-forest2.png");
  img3 = loadImage("./assets/nature-forest_r.png");
  img4 = loadImage("./assets/011_2.png");
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  
//impostazioni per il volume
  sound.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound);
  
//impostazioni per la frequenza  
  fft = new p5.FFT();
  sound.amp(0.2);
  
  
  
}

function draw(){

//setting cambio sfondo in base al volume  
  if (sound.isPlaying() == true) {
    
  background(z)
  var volume = analyzer.getLevel();


  if (volume >= 0.018) {
      background(k);
} 
}

//sfondo a colori
  image(img2,width/2,height/2,500,500);

//sfondo nero e rosso  con zero opacità
push();
  tint(255, opac);
  image(img3,width/2,height/2,503,503);
pop();

  
//linea della frequenza  
  var waveform = fft.waveform();
  
  fill(255,0,0,35);
  beginShape();
  stroke(c);
  strokeWeight(3);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
  

//el_01    
  image(img,width/2,height/2,img.windowWidth*2,img.windowHeight*2);
  
//el_02 con zero opacità      
push();
  tint(255, opac);  
  image(img4,width/2,height/2,img4.windowWidth*2,img4.windowHeight*2);
pop();

//testo click
push();
  fill(255,255,255, opac1);
  noStroke();
  textAlign(CENTER);
  textStyle(BOLD);
  text('click to the upside down', windowWidth/2, windowHeight/2+220);
pop();

//testo RUN
push();
  fill(255,255,255,opac);
  noStroke();
  textAlign(CENTER);
  textStyle(BOLD);
  text('R U N', windowWidth/2, windowHeight/2+220);
pop();



}

function mouseClicked() {


//impostazione del cambio di opacità 
 if (opac == 0) {
   opac = 255;
 } else {
   opac = 0
 }
 
 if (opac1 == 200) {
   opac1 = 0;
 } else {
   opac1 = 200
 }
 
//impostazione del cambio di colori
 if (c == 255) {
    c = '#4e0101';
  } else {
    c = 255;
  }
  
  if (z == 240) {
    z = 0;
  } else {
    z = 240
  }
  
  if (k == 255) {
    k = '#be0000';
  } else {
    k = 255
  }
  

  
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}




