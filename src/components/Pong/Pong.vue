<template>
  <div class="hello">
    <h2>Pong game</h2>
    <p> This is indeed pong </p>
    
    <canvas id="pongCanvas" width="800" height="600" ></canvas> 
  </div>
</template>

<script>
import Engine from "./Core/engine.js"
import Game from "./Core/game.js"
import Display from "./Core/display.js"
import Controller from "./Core/controller.js"

export default {
  name: 'Pong',
  props: {}
}

window.addEventListener("load", function() {
  const canvas = document.getElementById('pongCanvas');
  if(canvas!=null){
    const controller = Controller();
    const game = Game();
    const display = Display(canvas);
    const engine = Engine(60,game,display,controller);
    window.addEventListener("keydown", controller.handleKeyDown); 
    window.addEventListener("keyup", controller.handleKeyUp);

    display.render()
    engine.start();
  }
})

</script>

<style scoped>

  #pongCanvas{
    background-color:#333;
    background-image: url("https://i.ibb.co/dG9ZjNg/PongBG.png")
  } 

</style>
