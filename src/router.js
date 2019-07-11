import Vue from 'vue'
import Router from 'vue-router'
import Sheet from './views/Sheet'
import Answer from './views/Answer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Sheet
    },
    {
      path: '/Answer',
      component: Answer
    },
	]
})