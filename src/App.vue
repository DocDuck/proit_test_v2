<template>
  <div class="container" id="app">
    <img class="logo" src="./assets/logo.png">
    <div>
        <hr>
        <span>DATA From outer json is below</span>
        <hr>
        <div v-for="data in myJSON" :key="data[0]">{{data}}</div>
        <hr>
        <button class="btn">CLICK TO MODIFY JSON</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import outerJSON from './persons.json'

export default {
  name: 'App',
  data() {
    return {
      someData: 'Hello from parent component!',
      myJSON: outerJSON
    }
  }
  // methods: {
  //   updateJSON: () => {
  //       let modJson = JSON.parse(this.outerJSON);
  //       console.log(this.myJSON);
  //       //this.myJSON.push({firstName: 'Иван', lastName: 'Петров', age: 30})
  //   }
  // }
 
}
 

</script>

<style>
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
