var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

var font_size = 10;

var columns = c.width/font_size;

var drops = [];

var colorchanged = false;

for(var x = 0; x < columns; x++)
    drops[x] = 1; 


function draw()
{
    if(delayandgameended == true) {

    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    if(colorchanged == true) {
        ctx.fillStyle = "#ff0000";
        ctx.font = font_size + "px arial";
    }
    else{

        ctx.fillStyle = "#f4427d";
        ctx.font = font_size + "px arial";
    }

    for(var i = 0; i < drops.length; i++)
    {
        
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        
        ctx.fillText(text, i*font_size, drops[i]*font_size);


        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        
        drops[i]++;
    }
}


setTimeout(function(){
    if(colorchanged == false) {
        colorchanged = true;
    }
    else{
        colorchanged = false;
    }
},5000); 

}
setInterval(draw, 35);


