<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import io from 'socket.io-client';

export default {
  name: 'app',
  components: {
    MainPage,
  },
}
</script>