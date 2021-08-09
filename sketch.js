var backg
var harry
var vold, vold_move
var ronald
var hermione
var level = 1
var test = 1;



function preload() {
  //bg_image = loadImage("HP_back.jpg");
  bg_image1 = loadImage("HP_back1.jpg");
  harryim = loadImage("main1.png");
  voldim = loadImage("voldy_s.png");
  voldmove = loadImage("voldy_move.png");
  voldat = loadImage("voldy_at.jpg");
  hermpic = loadImage("Herm.png");
  ronpic = loadImage("Ron.png");
  //back_1 = loadImage("HP_back3.jpg");
  play = loadImage("Play.png");
  train = loadImage("HP_back4.jpg");
  // train1 = loadImage("train.jpg");
  nextimg = loadImage("Next.png");
  //hogins = loadImage("hogins.jpg");
  // training = loadImage("Training.jpg");
  broom = loadImage("Broom.png");
  background_2 = loadImage("background_2.jpg")

  background1Image = loadImage("HP_back3.jpg");
  background2Image = loadImage("HP_back.jpg");
  background3Image = loadImage("train.jpg");
  background4Image = loadImage("hogins.jpg");
  background5Image = loadImage("Dorm.png");
  background6Image = loadImage("Training.jpg");

}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 20);
  //harry.visible = false
  //ronald.visible = false
  // hermione.visible = false
  //start=createImg("Play.png")
  //start.position(width/2,height/2)
  //start.mousePressed(()=>{
  // level = 1
  //})
  start = createSprite(width / 2 - 50, height / 2);
  start.addImage(play);
  
}

function draw() {

  if (level == 1) {
    background(background1Image);
    if (mousePressedOver(start)) {
      level = 2
    }
    // drawSprites();
  }
  if (level == 2) {
    background(background1Image);
    start.destroy();
    level = 3
  }

  if (level == 3) {
    background(background2Image)
    //start.style.display = "none"
    harry = createSprite(width / 2 - 300, height / 2 + 100, 50, 50);
    harry.addImage(harryim);
    harry.scale = 0.7
    ronald = createSprite(width / 2, height / 2 - 200, 200, 200)
    ronald.addImage(ronpic);
    ronald.scale = 0.7
    hermione = createSprite(width / 2 + 300, height / 2 + 100, 200, 200)
    hermione.addImage(hermpic);
    hermione.scale = 0.7
    level = 4

  }
  if (level == 4) {
    background(background2Image);
    if (mousePressedOver(harry)) {
      harry.destroy();
      ronald.destroy();
      hermione.destroy();
      playerAnimation = 1
      level = 5
    }
    if (mousePressedOver(hermione)) {
      harry.destroy();
      ronald.destroy();
      hermione.destroy();
      playerAnimation = 2
      level = 5
    }
    if (mousePressedOver(ronald)) {
      harry.destroy();
      ronald.destroy();
      hermione.destroy();
      playerAnimation = 3
      level = 5
    }

  }
 
  if (level == 5) {
    background(background3Image);
    harry.destroy();
    ronald.destroy();
    next = createSprite(width-100, height/2+ 200)
    
    next.addImage(nextimg)
    next.scale = 0.45
    hermione.destroy();
    level =6
    setTimeout(() => {  console.log("World!"); }, 2000);
  }
  if(level == 6 ){
    background(background3Image);
    if(mousePressedOver(next)&& test ===1){
      level = 7
      test =2;
      setTimeout(() => {  console.log("World!"); }, 2000);
    }
  }

  if(level == 7) {
    background(background4Image);
    player = createSprite(200, 500, 50, 50);

    if (playerAnimation == 1) {
      player.addImage(harryim)
      player.scale = 0.5
    }
   if (playerAnimation == 2) {
      player.addImage(hermpic)
      player.scale = 0.5
    }
    if (playerAnimation == 3) {
      player.addImage(ronpic)
      player.scale = 0.5
    }
    player.visible = true
    next.destroy();
    next1 = createSprite(width-100, height/2- 200)
    next1.addImage(nextimg)
    next1.scale = 0.45
    level = 8;
    setTimeout(() => {  console.log("World!"); }, 2000);
  }
  if(level == 8){
    background(background4Image);
    if(mousePressedOver(next1)&& test ===2){
      level = 9
      test = 3;
    }
     
  }

  if(level == 9) {
    console.log("level =9")
    background(background5Image)
    next1.destroy();
    next2 = createSprite(width-100, height/2+ 200)
    next2.addImage(nextimg)
    next2.scale = 0.45
    level = 10
  }
  if(level == 10){
    background(background5Image)
    if(mousePressedOver(next2)&& test ===3){
      level = 11
      test = 4
    }
  }
  
  if (level == 11) {
    console.log("high")
    background(background6Image)
    next2.destroy();
    Broom = createSprite(displayWidth - 800, displayHeight - 200);
  Broom.addImage(broom);
    Broom.scale = 0.8
    
    if(mousePressedOver(Broom)){
       console.log("Hello World");
      player.x = Broom.x +50
    player.y = Broom.y - 120
      level = 12
    }
    
  }

  if(level == 12){
    background(background6Image)
    next2.destroy();
    next3 = createSprite(width-100, height/2- 200)
    next3.addImage(nextimg)
    next3.scale = 0.45

    player.depth = Broom.depth+1

    Broom.x  = mouseX
    Broom.y = mouseY
    player.x = Broom.x +50
    player.y = Broom.y - 120
  }



  

  
  drawSprites();
}