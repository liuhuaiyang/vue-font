import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
	    path: '/test/table',
	    name: 'table',
	    component: table
	 }
  ]
})
