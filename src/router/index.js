import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
      	title: '首页'
      },
      component: Hello
    },
    {
      path: '/page1',
      name: 'page1',
      meta: {
      	title: 'page1'
      },
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      meta: {
      	title: 'page2'
      },
      component: Page2
    },
    {
      path: '/page3',
      name: 'page3',
      meta: {
      	title: 'page3'
      },
      component: Page3
    }
  ]
})
