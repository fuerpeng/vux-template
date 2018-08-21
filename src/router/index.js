import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldF from '@/components/HelloFromVux'
import HelloWorldF2 from '@/components/HelloFromVux2'
import HelloWorldF3 from '@/components/HelloFromVux3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorldF',
      name: 'HelloWorldF',
      component: HelloWorldF
    },
    {
      path: '/HelloWorldF2',
      name: 'HelloWorldF2',
      component: HelloWorldF2
    },
    {
      path: '/HelloWorldF3',
      name: 'HelloWorldF3',
      component: HelloWorldF3
    }
  ]
})
