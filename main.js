canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
rover_width = 100; rover_height = 90; 
background_image = "mars.jpg"; 
rover_image = "rover.png"; 
rover_x = 10; 
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;

}

function uploadBackground (){
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas,height);
}

function uploadrover (){
    ctx.drawImage(rover_imgTag,0,0,canvas.width, canvas,height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log("key_pressed");
    if (key_pressed == '38'){
        up();
        console.log("up");
    }

     if (key_pressed == '37'){
        left();
        console.log("left");
    }

     if (key_pressed == '39'){
        right();
        console.log("right");
    }

     if (key_pressed == '40'){
        down();
        console.log("down");
    }
}