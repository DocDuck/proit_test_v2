<template>
  <div class="page-new">
    <h1>New Person Page</h1>
    <form class="form-test">
      <label class="label" for="input-fio">Введите ваше ФИО</label>
      <input class="input input-fio" type="text" v-model="newUser.fio"/>
      <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
      <label class="label" for="input-birth">Введите вашу дату рождения</label>
      <input class="input input-birth" type="text" v-model="newUser.birth"/>
      <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
      <label class="label" for="input-address">Введите ваш адрес</label>
      <input class="input input-address" type="text" v-model="newUser.address"/>
      <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
      <button class="btn btn-success" type="button" @click = 'addUser' >OK</button>
    </form>
  </div>
    
</template>

<script>
export default {
  name: 'page-new-person',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newUser: {}
    }
  },
  methods: {
    addUser(){
      //this.userList.push('');        
      console.log(JSON.stringify(this.newUser));                    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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