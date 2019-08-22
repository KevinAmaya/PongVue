const Controller = () => {
    let up_p1 = false;
    let down_p1 = false;
    let up_p2 = false;
    let down_p2 = false;
    return{ 
        handleKeyDown : function(event){
            switch(event.keyCode){
                case 38:
                    up_p1 = true;    
                break;
                case 40:
                    down_p1 = true;
                break;
                case 87:
                    up_p2 = true;    
                break;
                case 83:
                    down_p2 = true;    
                break;
            }   
        },

        handleKeyUp : function(event){
            switch(event.keyCode){
                case 38:
                    up_p1 = false;    
                break;
                case 40:
                    down_p1 = false;    
                break;
                case 87:
                    up_p2 = false;    
                break;
                case 83:
                    down_p2 = false;    
                break;
            }   
        },

        getButtonsPressed(){
            return {up_p1:up_p1,down_p1:down_p1,
                    up_p2:up_p2,down_p2:down_p2}
        }

    }

}

export default Controller;