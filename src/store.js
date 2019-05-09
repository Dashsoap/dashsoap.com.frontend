import Vue from 'vue'
import Vuex from 'vuex'
import { AxiosDefault } from "./plugins/axios";
import Cookies from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    me: null,
  },
  mutations: {
    setMe(state, me) {
      state.me = me;
      console.log(me);

    },
  },
  actions: {
    async login(context) {
      const { data } = await AxiosDefault.get('/api/auth');
      if (!data.code) {
        context.commit('setMe', data.body);
      }
    },
    logout(context) {
      Cookies.remove('token');
      context.commit('setMe', null);
    },
  }
})
