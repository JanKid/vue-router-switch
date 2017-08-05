import Vue from 'vue'
import { UPDATE_LOADING, UPDATE_DIRECTION } from '../mutations'

const state = {
  isLoading: false,
  direction: 'forward'
}

export default {
  state,
  mutations: {
    [UPDATE_LOADING] (state, status) {
      Object.assign(state, status)
    },
    [UPDATE_DIRECTION] (state, direction) {      
      Object.assign(state, direction )
    }
  },
  actions: {
    [UPDATE_LOADING] (state, status) {
       commit(UPDATE_LOADING, status)
    },
    [UPDATE_DIRECTION] (state, direction) {
      commit(UPDATE_DIRECTION, direction)
    }
  }
}