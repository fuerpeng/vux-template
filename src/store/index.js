import Vue from 'vue';
import Vuex from 'vuex';
import header from './modules/header';
import lottery from './modules/lottery';
import load from './modules/load';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    header,
    lottery,
    load,
    user
  },
  getters
});

export default store
