import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    islogin: false,
    user: null
  },
  mutations: {
    increment(state, value) {
      // 变更状态
      state.islogin = value
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser(context, value) {
      context.commit('setUser', value)
    }
  },
  getters: {
    islogin: (state) => {
      return state.islogin
    },
    getUserInfo: (state) => {
      return state.user || {}
    }
  }
})
