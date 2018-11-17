<template>
  <div class="page-new">
    <h1>New Person Page</h1>
    <form class="form-test">
      <label class="label" for="input-fio">Введите ваше ФИО</label>
        <input class="input input-fio" type="text" v-model="parentUser.fio"/>
        <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
        <label class="label" for="input-birth">Введите вашу дату рождения</label>
        <input class="input input-birth" type="text" v-model="parentUser.birth"/>
        <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
        <label class="label" for="input-address">Введите ваш адрес</label>
        <input class="input input-address" type="text" v-model="parentUser.address"/>
        <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
        <button class="btn btn-success" type="button" @click = 'toConsole' >OK</button>
    </form>
  </div>
    
</template>

<script>
export default {
  name: 'page-new-person',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    addUser(){
      //this.userList.push('');        
      console.log(JSON.stringify(this.parentUser));                    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>