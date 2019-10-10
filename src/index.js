import Vue from 'vue';

import '@fortawesome/fontawesome-free/js/all';
import 'es6-promise/auto';

import './plugins';
import App from './components/App';
import store from './store';

console.log(store.getters);

import './scss/main.scss';

const vm = new Vue({
    el: '#app',
    render: h => h(App),
    store
});
