var bgImg,catImg,mouseImg;
var cat,mouse;
function preload() {
    //carregue as imagens aqui
    bgImg=loadImage("images/garden.png")
   catImg1 = loadImage("images/cat1.png")
   catImg2 = loadImage("images/cat2.png")
   catImg3 = loadImage("images/cat3.png")
   catImg4 = loadImage("images/cat4.png")

mouseImg1=loadImage("images/mouse1.png")
mouseImg2=loadImage("images/mouse2.png")
mouseImg3=loadImage("images/mouse3.png")
mouseImg4=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
     cat = createSprite(870,600);
     cat.addAnimation("gatoSentado",catImg1);
     cat.scale = 0.2


     mouse = createSprite(200,600);
     mouse.addAnimation("ratoQueijo",mouseImg1);
     mouse.scale = 0.2
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    


    


    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("UltimaImagemGato",catImg4);
        cat.changeAnimation("UltimaImagemGato");
        cat.x = 300;
        cat.scale=0.2;

        mouse.addAnimation("ultimaImagemRato",mouseImg4);
        mouse.scale = 0.15;
        mouse.changeAnimation("ultimaImagemRato")
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
 if(keyCode === 32){
     mouse.addAnimation("ratoProvoacando", mouseImg2)
     mouse.changeAnimation("ratoProvocando")
      mouse.frameDeLay = 25

      cat.velocityX = -5
      cat.addAnimation("gatoCorrendo",catImg2)
      cat.changeAnimation("gatoCorrendo")
 }

}
