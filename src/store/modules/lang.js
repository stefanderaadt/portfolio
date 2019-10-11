import lang from '../../lang';

const state = {
    lang: localStorage.getItem('lang') || lang.languages[0],
    content: lang
};

const getters = {
    getLang: state => state.lang,
    getContent: state => state.content[lang.languages.includes(state.lang) ? state.lang : lang.languages[0]]
};

const actions = {};

const mutations = {
    setLang(state, l) {
        if (lang.languages.includes(l)) {
            localStorage.setItem('lang', l);
            state.lang = l;
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
