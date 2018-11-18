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
  props: ['userlist'],
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
<style scoped>
h1 {
  margin-bottom: 2.5rem;
}
.form__layout{
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgb(68, 160, 96);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;	
}

.form-test {
	margin: 1rem;
	padding: 1rem;
  background: rgb(185, 228, 231);
  box-shadow: 1px 1px 32px 1px rgba(44,62,5,0.62);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-test_auth {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.form-test > .input {
	margin-bottom: 15px;
}

.form-test > .label {
	color: #2c3e50;
	font-size: 12px;
	display: block;
	margin-bottom: 5px;
}
.form-test > .error {
	margin: 0.2rem 0;
	font-size: 0.8rem;
	color: rgb(201, 38, 13);
}
.form-test > .input {
	padding: 0.3rem 1rem;
	border: 1px solid #CCCCCC;
	outline: none;
	
}



</style>