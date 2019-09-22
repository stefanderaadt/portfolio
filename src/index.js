import Vue from 'vue';

import '@fortawesome/fontawesome-free/js/all';

import App from './components/App';
import router from './router';

import './scss/main.scss';
import './plugins';

const vm = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    data: {
        todos: [{ id: 1, task: 'Niets doen' }, { id: 2, task: 'Wel iets doen?' }, { id: 3, task: 'Nee toch niet.' }]
    }
});
