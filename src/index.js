import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

const vm = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    data: {
        test: 'test1234'
    }
});
