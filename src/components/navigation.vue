<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/auth">Login</router-link></li>
            <li><router-link to="/list">Person List</router-link></li>
            <li><router-link to="/new">New Person</router-link></li>
        </ul>
        <hr>
    </nav>      
</template>


<script>


export default {
  name: 'app-navigation',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content:space-between;
        text-decoration: none;
    }
    li {
        padding: 0 20px;
        font-size: 20px;        
    }
    a {
        text-decoration: none;
        color: #35495e;
    }

</style>