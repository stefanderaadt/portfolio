import Vue from 'vue';

import '@fortawesome/fontawesome-free/js/all';
import 'es6-promise/auto';

import App from './components/App';
import router from './router';

import './scss/main.scss';
import './plugins';

const vm = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
