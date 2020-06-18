class Pet{
    constructor(){}

 getValues(){
  var virtulPetValues = database.ref('virtualPet');
  virtulPetValues.on("value",function(data){
    quantity=data.val();
    foodQuantity=quantity.foodQuantity;
    lastFed=quantity.lastFed; 
})
}

dining(){
    canvas = createCanvas(550,500);
    background(dining_img,550,500);  
    drawSprites();  
    fill(255,0,0);
    text("Note: Press UP_ARROW key to feed Drago milk!",90,5,300,20);
    fill(0,0,0);
    textSize(13); 
    if(lastFed >12){
      temp= lastFed%12;
      text('Drago was last fed at:\n\t\t\t\t\t' + temp + " PM",150,90,150,80);
    }else{
      temp= lastFed;
      text('Drago was last fed at:\n\t\t\t\t\t' + temp + " PM",150,90,150,80);
    }
    text("You have "+ foodQuantity + " milk bottles!",370,460,200,100);
    image(milk_img,100,250,80,80);  
    scale(0.2);
    dogHungry.frameDelay = 12;
    animation(dogHungry,1000,1300);
}

bedRoom(){
  canvas = createCanvas(400,500);
  background(bedroom_img,550,500);  
  drawSprites();  
}

livingRoom(){
  canvas = createCanvas(400,500);
  background(livingroom_img,550,500);  
  drawSprites(); 
}

washroom(){
  canvas = createCanvas(400,500);
  background(washroom_img,550,500); 
  drawSprites();  
}

//function to insert data
writeQuantity(count){
    if(count<=0){
      count=0;
      lastFed =hour();
    }else{
      count=count-1;
      lastFed =hour();
    }
    database.ref('virtualPet').set({
      'foodQuantity': count,
      'lastFed' : lastFed
    })
  }

  showError(){
  console.log("Error in writing to the database");
  }
}
