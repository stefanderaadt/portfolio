<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">{{lang.toUpperCase()}}</a>
        <div class="navbar-dropdown">
            <a
                class="navbar-item"
                :class="{'is-active': lang === 'nl'}"
                @click="setLanguage('nl')"
            >NL</a>
            <a
                class="navbar-item"
                :class="{'is-active': lang === 'en'}"
                @click="setLanguage('en')"
            >EN</a>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'nav-bar-lang-picker',
    methods: {},
    computed: {
        ...mapGetters({ lang: 'lang/getLang' })
    },
    methods: {
        ...mapMutations({ setLang: 'lang/setLang' }),
        setLanguage(lang) {
            this.setLang(lang);
            this.closeMenu();
        },
        closeMenu() {
            this.$emit('close-menu');
        }
    }
};
</script>