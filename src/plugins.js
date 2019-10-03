import Vue from 'vue';

import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(VueScrollTo, { offset: -75 }); // navbar height
Vue.use(Vuex);
