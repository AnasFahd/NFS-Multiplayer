var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6bf2d91f-7c96-4a76-9dc8-91776f1f905e","5dabe47b-1b0d-47ed-9f1a-817e9c7334e4","28aeb53a-37e5-4086-8ecf-1c095b2a17f1","3616ab4f-b105-40ea-8bbc-b24ed42ec2a0","f1583d21-b570-43ba-bffc-9b95b08093f9","8d269c44-1a48-4063-94dd-8661b32badc7","7cf568dd-ab4a-4096-a7f5-bc321dccde35","6b6ab2ea-a20a-497d-b8e4-ed43faeec7f5","716569ee-5120-483e-8ea0-407905ee6df9","6825f848-61ca-4538-ab87-73aa1467afa5","c7684add-b974-468a-b154-3791773c2f71","e7020468-0a7a-4179-a506-fd8e97b6c17a"],"propsByKey":{"6bf2d91f-7c96-4a76-9dc8-91776f1f905e":{"name":"santa_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"dCXYdoecCtWopQHPKucRfhRNcVqiX4J_","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6bf2d91f-7c96-4a76-9dc8-91776f1f905e.png"},"5dabe47b-1b0d-47ed-9f1a-817e9c7334e4":{"name":"car_red_1","sourceUrl":null,"frameSize":{"x":70,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"v4cehmLTUBrhefr2xpc.04o.meUzfwxK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":130},"rootRelativePath":"assets/5dabe47b-1b0d-47ed-9f1a-817e9c7334e4.png"},"28aeb53a-37e5-4086-8ecf-1c095b2a17f1":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"3616ab4f-b105-40ea-8bbc-b24ed42ec2a0":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"f1583d21-b570-43ba-bffc-9b95b08093f9":{"name":"award_trophy1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"},"8d269c44-1a48-4063-94dd-8661b32badc7":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"7cf568dd-ab4a-4096-a7f5-bc321dccde35":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"yyZ_xqTgCEbdebKLNXXOOrgwRB0emw2G","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7cf568dd-ab4a-4096-a7f5-bc321dccde35.png"},"6b6ab2ea-a20a-497d-b8e4-ed43faeec7f5":{"name":"trophy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png","frameSize":{"x":381,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"7x2COokMDKpyqrZGY9g1FYvMdliu6wtd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png"},"716569ee-5120-483e-8ea0-407905ee6df9":{"name":"burst06_1","sourceUrl":null,"frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":12,"version":"0Jc6EnR8WoITlyygLPO0yUoXVXo6GTpE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/716569ee-5120-483e-8ea0-407905ee6df9.png"},"6825f848-61ca-4538-ab87-73aa1467afa5":{"name":"burst13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4w1YT2.CLu05W4qksYK2L8NEJKrqKWGr/category_video_games/burst13.png","frameSize":{"x":398,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"4w1YT2.CLu05W4qksYK2L8NEJKrqKWGr","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4w1YT2.CLu05W4qksYK2L8NEJKrqKWGr/category_video_games/burst13.png"},"c7684add-b974-468a-b154-3791773c2f71":{"name":"burst18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/19.Uhbft7Pr9ez3_WElUGWIRxCBoi5Bv/category_video_games/burst18.png","frameSize":{"x":396,"y":222},"frameCount":1,"looping":true,"frameDelay":2,"version":"19.Uhbft7Pr9ez3_WElUGWIRxCBoi5Bv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":222},"rootRelativePath":"assets/api/v1/animation-library/gamelab/19.Uhbft7Pr9ez3_WElUGWIRxCBoi5Bv/category_video_games/burst18.png"},"e7020468-0a7a-4179-a506-fd8e97b6c17a":{"name":"burst04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RZxIB1TzLq8KxqEkMmaak3ppw9ee5yfv/category_video_games/burst04.png","frameSize":{"x":398,"y":318},"frameCount":1,"looping":true,"frameDelay":2,"version":"RZxIB1TzLq8KxqEkMmaak3ppw9ee5yfv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":318},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RZxIB1TzLq8KxqEkMmaak3ppw9ee5yfv/category_video_games/burst04.png"}}};
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

var trophy,car1,car2,gameState = "rules",rulesCar1;
trophy = createSprite(200,30,10,10);
trophy.setAnimation("award_trophy1_1");
trophy.scale = 0.2;
car1 = createSprite(100,365,2,2);
car1.setAnimation("car_red_1");
car1.scale = 0.5;
car2 = createSprite(300,365,10,10);
car2.setAnimation("car_green_1");
car2.scale = 0.5;


createEdgeSprites();

function draw() {
  background("darkgrey");
  
  drawSprites();
  
  if(gameState=="rules"){
textSize(12);
fill(0);
text("This Is A 2 Player Game",140,100);
textSize(12);
fill(0);
text("The Rules Are Simple! All You Have To Do Is Get Your Car",55,130);
textSize(12);
fill(0);
text("To Touch The Trophy First. But Be Careful If You Crash You Lose",38,160);
textSize(12);
fill(0);
text("The Controls For Red Are Simple, W A S D",100,190);
textSize(12);
fill(0);
text("The Controls For Green Are The Arrow Keys",95,220);
textSize(12);
fill(0);
text("Click Enter To Continue",150,250);
if(keyDown("Enter")){
  gameState = "play";
}
  }
  
  if(gameState=="play"){
   
    Movement();
    if(car1.isTouching(trophy)||
    car2.isTouching(trophy)||
    car1.isTouching(car2)){
      gameState="restart";
    }
  }
  
  if(gameState=="restart"){
     if(car1.isTouching(car2)){
    car2.setAnimation("burst06_1");
    car1.setAnimation("burst06_1");
    playSound("assets/category_explosion/8bit_explosion.mp3",false);
    textSize(50);
    fill(0);
    text("You Lose",100,200);
    trophy.destroy();
     textSize(20);
     fill(0);
     text("Click R To Restart",130,300);
  }
  if(car1.isTouching(trophy)){
    textSize(50);
    fill(0);
    text("Red wins :)",100,200);
    textSize(20);
    fill(0);
    text("Click R To Restart",130,300);
  }

  if(car2.isTouching(trophy)){
    textSize(50);
    fill(0);
    text("Green wins :)",80,200);
    textSize(20);
    fill(0);
    text("Click R To Restart",130,300);
  }
  if(keyDown("R")){
 car1.x=100;
 car1.y=365;
 car2.x=300;
 car2.y=365;
 trophy = createSprite(200,30,10,10);
trophy.setAnimation("award_trophy1_1");
trophy.scale = 0.2;
 car1.setAnimation("car_red_1");
 car2.setAnimation("car_green_1");
 gameState = "play";
}
  }
 
  
  car1.collide(edges);
  car2.collide(edges);  
  
   
  
 
  if(car1.isTouching(car2)||
  car1.isTouching(trophy)||
  car2.isTouching(trophy)){
  }
  

}







function Movement(){
  if(keyDown("W")){
    car1.y = car1.y-4;
  }
  if(keyDown("S")){
    car1.y = car1.y+4;
  }
  if(keyDown("D")){
    car1.x = car1.x+4;
  }
  if(keyDown("A")){
    car1.x = car1.x-4;
  }
  
  if(keyDown("up")){
    car2.y = car2.y-4;
  }
  if(keyDown("down")){
    car2.y = car2.y+4;
  }
  if(keyDown("right")){
    car2.x = car2.x+4;
  }
  if(keyDown("left")){
    car2.x = car2.x-4;
  }
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
