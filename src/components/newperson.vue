<template>
  <div class="page-new">
    <h1>New Person Page</h1>
    <form class="form-test">
      <label class="label" for="input-fio">Введите ваше ФИО</label>
      <input class="input input-fio" type="text" v-model="newPerson.fio"/>
      <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
      <label class="label" for="input-birth">Введите вашу дату рождения</label>
      <input class="input input-birth" type="text" v-model="newPerson.birth"/>
      <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
      <label class="label" for="input-address">Введите ваш адрес</label>
      <input class="input input-address" type="text" v-model="newPerson.address"/>
      <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
      <button class="btn btn-success" type="button" @click = 'addPerson' >OK</button>
    </form>
  </div>
    
</template>

<script>
export default {
  name: 'page-new-person',
  data () {
    return {
      newPerson: {}
    }
  },
  methods: {
    addPerson(e){
      //this.userlist.push(this.newPerson); - должно сработать без $emit так как юзерлист это не примитив а ссылочный тип данных
      /*this.$emit('add-new-person', this.newPerson); создаём ивент который отправит нового юзера в рут компонент*/
      this.$store.commit('addDude', this.newPerson);     
      console.log(JSON.stringify(this.newPerson));
      //console.log(JSON.stringify(this.$store.state.persons));

                
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>