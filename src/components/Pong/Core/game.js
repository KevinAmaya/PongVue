import io from "socket.io-client";
const socket = io("http://localhost:3001");

const Ball = (nPosX, nPosY) => {
    let posX = nPosX;
    let posY = nPosY;
    const width = 10;
    const heigth = 10;
    const type = 1;

    return{
        getX: function(){
            return posX;
        },
        getY: function(){
            return posY;
        },
        setX: function(nPosX){
            posX = nPosX;
        },
        setY: function(nPosY){
            posY = nPosY;
        },
        getWidth: function(){
            return width;
        },
        getHeigth: function(){
            return heigth;
        },
        getType: function(){
            return type;
        }
    }
}


const Player = (nPosX, nPosY,nNumber) => {
    let number = nNumber;  
    let posX = nPosX;
    let posY = nPosY;
    const type = 1;
    const width = 10;
    const heigth = 80;

    return{
        getX: function(){
            return posX;
        },
        getNumber: function(){
            return number;
        },
        getY: function(){
            return posY;
        },
        getWidth: function(){
            return width;
        },
        getHeigth: function(){
            return heigth;
        },
        getType: function(){
            return type;
        },
        setY: function(nPosY){
            posY = nPosY;
        },
    }  
}

const Text = (nText,nPosX,nPosY)=>{
    const text = nText; 
    const posX = nPosX;
    const posY = nPosY
    const type = 2;
    return{
        getX: function(){
            return posX;
        },
        getText: function(){
            return text;
        },
        getY: function(){
            return posY;
        },
        getType: function(){
            return type;
        }
    }   
}


const Game = ()=> {
    const maxWidth = 800;
    let ball = Ball(0,400);
    let players = [Player(20,10,1), Player(760,10,2)];
    let scorePlayer1= 0;
    let scorePlayer2= 0;

    socket.on("update", data => {
        players[0].setY(data[0]);
        players[1].setY(data[1]);
        ball.setX(data[2]);
        ball.setY(data[3]);
        scorePlayer1 = data[4];
        scorePlayer2 = data[5];
    });
    return{
        update: function(controller){
            let type = 0;
            let number = 0;

            if(controller.up_p1){
                type = -1;
                number = 1;
            }
            else if(controller.down_p1){
                type = 1;
                number = 1;
            }
            else if(controller.up_p2){
                type = -1;
                number = 2;
            }
            else if(controller.down_p2){
                type = 1;
                number = 2;
            }
            if (type!=0){
                socket.emit("update",[number,type]);
            }
            else{
                socket.emit("update",null);
            }

        },
        getBall(){
            return ball;
        },
        getPlayers(){
            return players;
        },
        getScores(){
            return [
                Text(""+scorePlayer1,maxWidth/4,100,2),
                Text(""+scorePlayer2,3*(maxWidth/4),100,2),
            ]
        }
    }
}

export default Game;