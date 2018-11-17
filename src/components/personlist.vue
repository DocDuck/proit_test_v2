<template>
    <div class="personlist">
        <h1>Person List Page</h1>
        <p>{{msg}}</p>
        <p>{{list}}</p>
    </div>      
</template>

<script>


export default {
  name: 'page-auth',
  props: ['list'],
  data () {
    return {
      msg: 'Welcome to Personlist',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>