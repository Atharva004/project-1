var canvas=new fabric.Canvas("myCanvas");
blockimagewidth=30;
blockimageheight=30;
playerx=10;
playery=10;
var playerobjects="";
function playerupdate(){
    fabric.Image.fromURL("AntmanSuit3.png",function(Img){
        playerobjects=Img;
        playerobjects.scaleToWidth(150);
        playerobjects.scaleToHeight(150);
        playerobjects.set({
            top:playery,left:playerx
        });
        canvas.add(playerobjects);

    });
}
function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:playery,left:playerx
        });
        canvas.add(blockimageobject);

    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true&&keypressed=='80'){
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;

    }
    if(e.shiftKey==true&&keypressed=='77'){
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down")
    }
    if(keypressed=='37'){
        left();
        console.log("left")
    }
    if(keypressed=='39'){
        right();
        console.log("right")
    }
    if(keypressed=='87'){
        new_image('unknown.jpg');
        console.log("w")
    }
    if(keypressed=='71'){
        new_image('spider-man.jpg');
        console.log("g")
    }
    if(keypressed=='76'){
        new_image('doctor-strange6.jpg');
        console.log("l")
    }
    if(keypressed=='84'){
        new_image('iron_man_mark_85.png');
        console.log("t")
    }
    if(keypressed=='82'){
        new_image('MUA3_Black_Panther.png');
        console.log("r")
    }
    if(keypressed=='89'){
        new_image('unknown 2.jpg');
console.log("y")
    }
    if(keypressed=='68'){
        new_image('hawkeye.jpg');
        console.log("d")
    }
    if(keypressed=='85'){
        new_image('Captain-America.png');
        console.log("u")
    }
    if(keypressed=='67'){
        new_image('unknown 3.jpg');
        console.log("c")
    }
    
}
function up(){
    if(playery>=0){
        playery=playery-blockimageheight;
        canvas.remove(playerobjects);
        playerupdate();
    }
    
}
function down(){
    if(playery<=500){
        playery=playery+blockimageheight;
        canvas.remove(playerobjects);
        playerupdate();
    }
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockimagewidth;
        canvas.remove(playerobjects);
        playerupdate();
    }
}
function right(){
    if(playerx<=850){
        playerx=playerx+blockimagewidth;
        canvas.remove(playerobjects);
        playerupdate();
    }
}