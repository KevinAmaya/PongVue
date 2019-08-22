const Display= (ncanvas) =>{
    const canvas = ncanvas;
    const context = canvas.getContext("2d");
    const drawRectangle = function(obj){
        context.fillStyle = "#FFFFFF";
        context.fillRect(Math.floor(obj.getX()), Math.floor(obj.getY()), obj.getWidth(), obj.getHeigth());         
    };
    const drawText = function(obj){
        context.font = "80px Teko";
        context.fillText(obj.getText(), obj.getX(), obj.getY()); 
    };
    return {  
        clearScreen: ()=>{
            context.clearRect(0, 0, canvas.width, canvas.height);
        },
        render: (objects) => {
            if(objects!=null){
                for (let obj of objects){
                    switch(obj.getType()){
                        case 1:
                            drawRectangle(obj)
                        break;
                        case 2:
                            drawText(obj);
                        break;
                    }
                }    
            }
        }
    }
}
export default Display;