import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Auth from '@/components/auth'
import NewPerson from '@/components/newperson'
import PersonList from '@/components/personlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'page-auth',
      component: Auth
    },
    {
      path: '/new',
      name: 'page-new-person',
      component: NewPerson
    },
    {
      path: '/list',
      name: 'page-person-list',
      component: PersonList
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
