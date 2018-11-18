<template>
  <div class="login">
    <div class="form__layout">
      <div class="form__wrapper">
        <h1>Auth Page</h1>
        <form class="form-test">
          <label class="label" for="input-fio">Логин</label>
          <input class="input" type="text" v-model="person.login"/>
          <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
          <label class="label" for="input-birth">Пароль</label>
          <input class="input" type="text" v-model="person.pass"/>
          <!-- <div class="error" v-show="email &amp;&amp; !isEmailValid"><span>Неправильный email </span><i class="ion-alert-circled"></i></div> -->
          <button class="btn btn-success" type="submit" @click.prevent = 'auth' >Войти</button>
          <button class="btn btn-success" type="button" @click = 'guest' >Гостевой вход</button>
        </form>
      </div>  
    </div>  
  </div>   
    
</template>

<script>
export default {
  name: 'page-auth',
  data () {
    return {
      person: {}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form__layout {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.25);
  }
  .form__wrapper {
    display: block;
  }    

  .btn + .btn {
    margin-top: 1rem;    
  }


</style>