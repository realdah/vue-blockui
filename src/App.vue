<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BlockUI message="Loading ..."></BlockUI>
  </div>
</template>

<script>
import BlockUI from './components/BlockUI'

export default {
  name: 'app',
  components: {
    BlockUI
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
