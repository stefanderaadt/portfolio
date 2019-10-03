import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import language from './modules/language';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        language
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
