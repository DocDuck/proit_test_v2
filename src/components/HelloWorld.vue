<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Testing Page</h2>
    <div>
        <div v-for="data in componentJson">{{data}}</div>
    </div>

    
  </div>
</template>

<script>
import outerJSON from '../persons.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      componentJson: outerJSON
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
