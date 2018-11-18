<template>
    <div class="personlist">
        <h1>Person List Page</h1>
        <p>{{msg}}</p>
        <p>{{persons}}</p>
    </div>      
</template>

<script>


export default {
  name: 'page-auth',
  data () {
    return {
      msg: 'Welcome to Personlist',
    }
  },
  computed: {
      persons() {
          return this.$store.state.persons;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>