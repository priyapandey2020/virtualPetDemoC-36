var canvas, backgroundImage;

var quantity,lastFed,foodQuantity;
var database;

var temp,CurrTime;
var pet;

function preload(){
  dogHungry= loadAnimation("./images/DogHungry.png","./images/DogHappy.png","./images/DogHungry.png");
  dining_img = loadImage("./images/diningRoom.png");
  bedroom_img=loadImage("./images/BedRoom.png");
  livingroom_img=loadImage("./images/Living Room.png");
  washroom_img=loadImage("./images/WashRoom.png");
  milk_img=loadImage("./images/milk.png");
}

function setup(){
  database=firebase.database();
  pet= new Pet();
  pet.getValues();
}

function draw(){
  CurrTime=hour();
  // console.log(CurrTime +"Current Time");
  // console.log(lastFed + "LastFed");
 if(CurrTime==(lastFed+1)){
   pet.bedRoom();
  }else if(CurrTime==(lastFed+2)){
   pet.livingRoom();
  }else if(CurrTime==(lastFed+4)){
   pet.washroom();
  }else{
    pet.dining(); 
    if(keyDown(UP_ARROW)){
      pet.writeQuantity(foodQuantity);
    }
  }
}