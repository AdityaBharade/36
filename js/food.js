class Food{

constructor(){    

this.foodStock = 20;    
this.image=loadImage("Images/Milk.png")

}
deductFood(){

  this.foodStock--
}  
 addFoods(){

  this.foodStock++
 // database.ref('/').update({
 // foodStock : this.foodStock
 // } )
}

getFoodStock(){

 var foodStockRef = database.ref('foodStock')

 foodStockRef.on("value", function(data){
  this.foodStock = data.val();
 })

} 
updateFoodStock(){

database.ref('/').update({
  'foodStock': this.foodStock
})
  
}

display(){


var x = 80;
var y = 100;

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!=null){
  for(var i = 0; i<this.foodStock; i++){
      if(i%10==0){
          x=80;
          y=y+50
      }
      image(this.image,x,y,50,50)
      x = x+30;
  }

}

}

}