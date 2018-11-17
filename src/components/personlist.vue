<template>
    <div class="personlist">
        <h1>Person List Page</h1>
        <p>{{msg}}</p>
        <p>{{list}}</p>
    </div>      
</template>

<script>

import jsonlist from '../persons.json'

export default {
  name: 'page-auth',
  props: ['list'],
  data () {
    return {
      msg: 'Welcome to Personlist',
      list: jsonlist
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>