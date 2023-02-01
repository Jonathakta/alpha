var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6824c84b-7d78-4d67-b5d5-ac6fd5a4beae","611417ef-0f39-448a-80ab-2fdfe3b9af71","89d5e518-5244-4e73-8952-d48f13b2597d","03ac0b52-8fd5-4648-b13e-b28c55e8a3c7","927db741-afc6-4aff-b491-ba8b93915e82","eb9f509c-aecb-49c4-872d-091615818f62","a2f4fe2c-ab99-4a23-8c4a-0d2dd99faf69","4a5fc235-8b48-4030-abc5-a96271100aa5","aba3d56a-87ca-4abd-974a-9d7bea537f5f","155dbdd9-ddc1-41fc-a879-09859958cd4c","6b769960-9f43-4234-b1c5-32aa17a19598","f64e2818-a1af-4e46-b863-9a01a5a45ec4","51efc1c7-8f43-4b7b-90c0-4674a192a1e1","979b2788-d64d-462e-b442-5cfb73d613ea"],"propsByKey":{"6824c84b-7d78-4d67-b5d5-ac6fd5a4beae":{"name":"puck","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"},"611417ef-0f39-448a-80ab-2fdfe3b9af71":{"name":"rede1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7ecs1OSDdByAECe.mseY8LsFdTer_4Az","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/611417ef-0f39-448a-80ab-2fdfe3b9af71.png"},"89d5e518-5244-4e73-8952-d48f13b2597d":{"name":"rede2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q4_EFRrWWBrh64xhH4II4gXfSH1AL56p","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/89d5e518-5244-4e73-8952-d48f13b2597d.png"},"03ac0b52-8fd5-4648-b13e-b28c55e8a3c7":{"name":"istockphoto-1313318387-1024x1024.jpg_1","sourceUrl":null,"frameSize":{"x":1024,"y":1024},"frameCount":1,"looping":true,"frameDelay":12,"version":"dfho.euQMGrG6vpNhkWdflGj3TVBdTXO","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/03ac0b52-8fd5-4648-b13e-b28c55e8a3c7.png"},"927db741-afc6-4aff-b491-ba8b93915e82":{"name":"024x1024.jpg_2","sourceUrl":"assets/v3/animations/likgCqfqrhX4kIKW4cU_xfoSnlzRcnIxGAOh76PtUjQ/927db741-afc6-4aff-b491-ba8b93915e82.png","frameSize":{"x":1024,"y":1024},"frameCount":1,"looping":true,"frameDelay":4,"version":"NGfBIIB7_vlLipYHhJY4_HTMI3vOmLW_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/v3/animations/likgCqfqrhX4kIKW4cU_xfoSnlzRcnIxGAOh76PtUjQ/927db741-afc6-4aff-b491-ba8b93915e82.png"},"eb9f509c-aecb-49c4-872d-091615818f62":{"name":"jogador","sourceUrl":null,"frameSize":{"x":360,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"sXefkB7ZMqLWFWNtTcpfNRv5nMeKqdY0","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":393},"rootRelativePath":"assets/eb9f509c-aecb-49c4-872d-091615818f62.png"},"a2f4fe2c-ab99-4a23-8c4a-0d2dd99faf69":{"name":"jogador_copy_1","sourceUrl":null,"frameSize":{"x":360,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"wjmsltuvHk3Hr22YZY4HTvO5vFOARx5j","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":393},"rootRelativePath":"assets/a2f4fe2c-ab99-4a23-8c4a-0d2dd99faf69.png"},"4a5fc235-8b48-4030-abc5-a96271100aa5":{"name":"jogador_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":360,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"HesDi6b_O1jiNIcmeXaUKC1oa0EFjtHp","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":393},"rootRelativePath":"assets/4a5fc235-8b48-4030-abc5-a96271100aa5.png"},"aba3d56a-87ca-4abd-974a-9d7bea537f5f":{"name":"","sourceUrl":null,"frameSize":{"x":360,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"sKN58HnJJCKk0y2ijvnPhmamZHVrQcko","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":393},"rootRelativePath":"assets/aba3d56a-87ca-4abd-974a-9d7bea537f5f.png"},"155dbdd9-ddc1-41fc-a879-09859958cd4c":{"name":"hock","sourceUrl":null,"frameSize":{"x":1024,"y":683},"frameCount":1,"looping":true,"frameDelay":12,"version":"BbarRMCmurgomE8tW8R6aPuvPp2jvOJc","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":683},"rootRelativePath":"assets/155dbdd9-ddc1-41fc-a879-09859958cd4c.png"},"6b769960-9f43-4234-b1c5-32aa17a19598":{"name":"istock-1024x1024.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":1024,"y":683},"frameCount":1,"looping":true,"frameDelay":12,"version":"8bpkAI9TGFmYimzLQWN01xchZBZk7xDP","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":683},"rootRelativePath":"assets/6b769960-9f43-4234-b1c5-32aa17a19598.png"},"f64e2818-a1af-4e46-b863-9a01a5a45ec4":{"name":"istockphoto-1194279999-1024x1024.jpg_1","sourceUrl":"assets/v3/animations/likgCqfqrhX4kIKW4cU_xfoSnlzRcnIxGAOh76PtUjQ/f64e2818-a1af-4e46-b863-9a01a5a45ec4.png","frameSize":{"x":1024,"y":683},"frameCount":1,"looping":true,"frameDelay":4,"version":"zgJ8YS1oeYWgwTr5K8DZUlR2jZ1F5XC_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":683},"rootRelativePath":"assets/v3/animations/likgCqfqrhX4kIKW4cU_xfoSnlzRcnIxGAOh76PtUjQ/f64e2818-a1af-4e46-b863-9a01a5a45ec4.png"},"51efc1c7-8f43-4b7b-90c0-4674a192a1e1":{"name":"play3","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"re40oY9j5XSLUL8MSoY_uodyz9Unw5F.","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/51efc1c7-8f43-4b7b-90c0-4674a192a1e1.png"},"979b2788-d64d-462e-b442-5cfb73d613ea":{"name":"hockey","sourceUrl":"assets/api/v1/animation-library/gamelab/qfPopOz8nFwcQdKvovnN6XVlIPvs5awQ/category_backgrounds/sports_hockey.png","frameSize":{"x":396,"y":374},"frameCount":1,"looping":true,"frameDelay":2,"version":"qfPopOz8nFwcQdKvovnN6XVlIPvs5awQ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":374},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qfPopOz8nFwcQdKvovnN6XVlIPvs5awQ/category_backgrounds/sports_hockey.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----




var estadodejogo="inicio";

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");
goal1.setAnimation("rede1");
goal1.scale=1.0;




var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");
goal2.setAnimation("rede2");
goal2.scale=1.5;

var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";




var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("puck");
striker.scale=0.09;




var playerMallet = createSprite(200,90,50,10);
playerMallet.shapeColor = "black";
playerMallet.setAnimation("jogador");
playerMallet.scale=0.2;

var computerMallet = createSprite(200,310,50,10);
computerMallet.shapeColor = "black";
computerMallet.setAnimation("play3");
computerMallet.scale=0.35;
var playerScore=0;
var compScore=0;




function draw() {
  drawSprites();
  background("white");
  
  
  if(estadodejogo== "inicio")
  {
    textSize(23);
    stroke("blue");
    text("Pressione SPACE para iniciar",70,240);
    
    
    
  }
  
  
  
  
  
  
  textSize(18);
  fill("maroon");
  text( "pontos= "     + compScore , 25,225);
  text(  "pontos= " + playerScore ,25,185);
  
  
  
  
  
    if(striker.isTouching(goal1)){
      
        compScore = compScore+0 +1;
        
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2)){
      
       playerScore=+0 +1;
        
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
 
 
 
 
 if (compScore == 5)
 {
textSize(18);
stroke("red");
text("fim de jogo",170,160);
}
 
 
 if(keyDown("space")){
 striker.x=200;
 striker.y=200;
 striker.velocityX=2;
  striker.velocityY=2;
  estadodejogo="play";
 }
 
  if(estadodejogo== "play"){
  computerMallet.x=World.mouseX;
  
  }
 
 
 if (playerScore == 5)
 {
textSize(18);
stroke("red");
text("fim de jogo",170,160);
}
 
  
  
  
  
  
  paddleMovement();
  


  
  computerMallet.x = striker.x;

  
  
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  


  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  
  



  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();
}





function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}



if(compScore==5){
  estadodejogo="end";
  }

if(estadodejogo== "end"){
  textSize(20);
  stroke("red");
  text("FIM DE JOGO",140,200);
  }


if(estadodejogo=="end"){
striker.x=0;
 striker.y=0;
 striker.velocityX=0;
  striker.velocityY=0;
}


if(estadodejogo=="end"){
computerMallet.x=0;
 computerMallet.y=0;
 computerMallet.velocityX=0;
  computerMallet.velocityY=0;
}


  
  
  








// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
