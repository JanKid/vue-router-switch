// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import components from './components' // 组件扩展

Vue.config.productionTip = false

// 自定义组件扩展
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`${name}`, components[key])
})

// 路由检查
// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  store.commit('UPDATE_LOADING', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  // 如果不是新路由历史
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    // 记录新历史位置
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  next()
})

router.afterEach(function (to) {
  store.commit('UPDATE_LOADING', {isLoading: false})
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
