const Engine = (nFPS, game, display, nController) => {
    const FPS = nFPS;
    const update = game.update;
    const render = display.render;
    const controller = nController;
    let last_update_time = 0;
    let was_updated = false;
    const handleRun = (time_stamp) => run(time_stamp);
    const run =  function(time_stamp){
            let cycles = time_stamp-last_update_time; 
            let ball = null;
            while (cycles > (1000/FPS)){
                ball = game.getBall();
                update(controller.getButtonsPressed());
                was_updated = true;
                last_update_time = time_stamp;
                cycles = cycles-((1000/FPS)*1.3);
            }
            if(was_updated){
                
                display.clearScreen();
                render(game.getPlayers());
                render([game.getBall()]);
                render(game.getScores());
                was_updated = false;
            }
            window.requestAnimationFrame(handleRun);
        };
    return {
        start:function(){
            window.requestAnimationFrame(handleRun);
        },
        stop:function(){
            window.requestAnimationFrame(handleRun);
        }
    }

}

export default Engine;