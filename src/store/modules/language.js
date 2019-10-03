const state = {
    language: 'nl',
    content: {
        nl: {},
        en: {}
    }
};

const getters = {
    getLanguage: state => state.setLanguage
};

const actions = {};

const mutations = {
    setLanguage(state, language) {
        state.language = language;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
