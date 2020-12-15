import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/components/table'
import login from '@/components/login'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
	 {
	     path: '/login',
	     name: 'login',
	     component: login
	 },
	 {
	      path: '/home',
	      name: 'home',
	      component: home,
	      children:[
	          {
	        	  path: '/HelloWorld',
	              name: 'HelloWorld',
	              component: HelloWorld
	            },
	          {
	               path: '/table',
	         	   name: 'table',
	         	   component: table
	            }
	       ]
	  }
  ]
})
