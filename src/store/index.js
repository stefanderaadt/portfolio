import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import lang from './modules/lang';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        lang
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
