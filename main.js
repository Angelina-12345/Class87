var canvas = new fabric.Canvas ('myCanvas')

player_x = 10
player_y = 10

block_image_height = 30
block_image_width = 30

player_object =""
block_image_object =""

function player_update(){
   fabric.Image.fromURL("player.png",function(Img){
player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
})
canvas.add(player_object)
   })
}


function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object =Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
 top:player_y,
 left:player_x
 })
 canvas.add(block_image_object)
    })
 }

 window.addEventListener("keydown",my_keydown)

 function my_keydown(e)
 {
   keypress = e.keyCode
   console.log(keypress)
   if(e.shiftKey==true&&keypress=='80' ){
     block_image_width = block_image_width+10
     block_image_height = block_image_height+10
     document.getElementById("current_width").innerHTML=block_image_width
     document.getElementById("current_height").innerHTML=block_image_height
   }
   if(e.shiftKey==true&&keypress=='77' ){
      block_image_width = block_image_width-10
      block_image_height = block_image_height-10
      document.getElementById("current_width").innerHTML=block_image_width
      document.getElementById("current_height").innerHTML=block_image_height
    }
    if(keypress=='67'){
     new_image("cloud.jpg")
    }
    if(keypress=='68'){
      new_image("dark_green.png")
     }
     if(keypress=='71'){
      new_image("ground.png")
     }
     if(keypress=='76'){
      new_image("light_green.png")
     }
     if(keypress=='82'){
      new_image("roof.jpg")
     }
     if(keypress=='84'){
      new_image("trunk.jpg")
     }
     if(keypress=='85'){
      new_image("unique.png")
     }
     if(keypress=='87'){
      new_image("wall.jpg")
     }
     if(keypress=='89'){
      new_image("yellow_wall.png")
     }

 }