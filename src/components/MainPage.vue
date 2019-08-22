<template>
  <div class="mainPage">
    <h1>Compendium of games</h1>
    <Pong/>
  </div>
</template>

<script>
import Pong from './Pong/Pong.vue'

export default {
  name: 'MainPage',
  components: {
    Pong
  },
  props: {
  }
}
</script>


<style scoped>
  .mainPage{
    text-align:center;
    font-family: Helvetica, Arial, Sans-Serif;
  }
</style>