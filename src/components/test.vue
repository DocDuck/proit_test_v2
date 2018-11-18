<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Testing Page</h2>        
    <div>
        <hr>
        <h2>Lets take some parent Data</h2>
        <hr>
        <p>{{parentData}}</p>
        <!-- <hr>
        <h2>Now Its From Parent JSON</h2>
        <div v-for="data in myJSON" :key="data">{{data}}</div>
        <hr>  -->
    </div>    
  </div>
</template>

<script>

export default {
  props: ['parentData'],
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'      
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
