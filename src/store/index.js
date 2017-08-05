import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import site from './modules/site'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
 		site,
  }
})

export default store