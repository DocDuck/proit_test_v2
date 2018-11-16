<template>
  <div class="container" id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgb(173, 241, 210);
  border-color: #35495e;
}
.container {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  display: block;
  margin: 20px auto;
  height: 72px;
}

.btn {
  background-color: #42b883;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
</style>
