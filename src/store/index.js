import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persons: [
      {
        'fio': 'Ivanov Ivan Ivanovich',
        'birth': '33331333',
        'address': 'address1',
        'login': 'notadmin',
        'pass': '111',
        'isAdmin': false
      },
      {
        'fio': 'Petrov Petr Petrovich',
        'birth': '33331333',
        'address': 'address2',
        'login': 'admin',
        'pass': '222',
        'isAdmin': true
      },
      {
        'fio': 'Sidorov Sidor Sidorovich',
        'birth': '33331333',
        'address': 'address3',
        'login': 'notadmin',
        'pass': '333',
        'isAdmin': false
      }
    ]
  }
})
