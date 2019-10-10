import lang from '../../lang';

const state = {
    lang: 'nl',
    content: lang
};

const getters = {
    getLang: state => state.lang,
    getContent: state => state.content[state.lang]
};

const actions = {};

const mutations = {
    setLang(state, lang) {
        state.lang = lang;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
