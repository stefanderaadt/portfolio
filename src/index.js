import { createApp } from 'vue';
import 'es6-promise/auto';
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';

import App from './components/App.vue';
import store from './store';
import './scss/main.scss';

createApp(App)
    .use(store)
    .use(VueScrollTo, { offset: -75 }) // navbar height
    .use(Vuex)
    .mount('#app');
