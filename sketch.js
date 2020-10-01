var ball,database,position;

function setup(){
database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('ball/position');
    ballPosition.on("valure",rePosition,showError);
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        wrightPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        wrightPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        wrightPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        wrightPosition(0,+1);
    }
    drawSprites();
}

function wrightPosition(x,y){
    database.ref('ball/position').set({
    'x' : ball.x + x,
    'y' : ball.y + y
});
   }
function rePosition(data) {
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showError() {
    console.log("This Is An Error");
}
