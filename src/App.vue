<template>
  <div class="container" id="app">
    <app-navigation></app-navigation>
    <img class="logo" src="./assets/logo.png">
    <app-test-page :parentData="someData"></app-test-page>
    <router-view/>
  </div>
</template>

<script>

import outerJSON from './persons.json';

import test from './components/test.vue';
import navigation from './components/navigation.vue';
import auth from './components/auth.vue';
import HelloWorld from './components/HelloWorld.vue';
import newperson from './components/newperson.vue';
import personlist from './components/personlist.vue';


export default {
  name: 'App',
  components: {
    "app-navigation": navigation,
    "app-auth": auth,
    "app-test-page": test,
    "app-new-person": newperson,
    "app-person-list": personlist
  },
  data() {
    return {
      someData: 'Hello from parent component!',
      myJSON: outerJSON,
      persons: [
        {
            "fio": "Ivanov Ivan Ivanovich",
            "birth": "33331333",
            "address": "address1",
            "login": "notadmin",
            "pass": "111",
            "isAdmin": false
        },
        {
            "fio": "Petrov Petr Petrovich",
            "birth": "33331333",
            "address": "address2",
            "login": "admin",
            "pass": "222",
            "isAdmin": true
        },
        {
            "fio": "Sidorov Sidor Sidorovich",
            "birth": "33331333",
            "address": "address3",
            "login": "notadmin",
            "pass": "333",
            "isAdmin": false
        }
      ]
    }
  }
  
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
ul > li {
  list-style-type: none; 
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
