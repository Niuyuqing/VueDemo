import Vue from 'vue'
import Vuex from 'vuex'
import count from './module/count'
import user from './module/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count, user
  }
});
