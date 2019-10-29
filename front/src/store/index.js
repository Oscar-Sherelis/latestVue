import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {personModule} from './modules/person.modules'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    personModule
  }
})
