<template>
    <div class="navbar-menu" v-bind:class="{'is-active': menuOpen}">
        <div class="navbar-end">
            <nav-bar-item
                :name="lang.nav.aboutMe"
                :scrollToElement="'about-me'"
                :bottomMargin="340"
                @close-menu="closeMenu"
            />
            <nav-bar-item
                :name="lang.nav.projects"
                :scrollToElement="'projects'"
                :bottomMargin="180"
                @close-menu="closeMenu"
            />
            <nav-bar-item
                :name="lang.nav.contact"
                :scrollToElement="'contact'"
                :bottomMargin="20"
                @close-menu="closeMenu"
            />
            <div class="navbar-divider" />
            <a class="navbar-item" :href="lang.nav.cv.pdf_url" target="_blank">{{lang.nav.cv.name}}</a>
            <nav-bar-lang-picker @close-menu="closeMenu" />
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

import NavBarItem from './NavBarItem.vue';
import NavBarLangPicker from './NavBarLangPicker.vue';

export default {
    name: 'nav-bar-menu',
    components: {
        NavBarItem,
        NavBarLangPicker
    },
    props: ['menuOpen'],
    methods: {
        closeMenu() {
            this.$emit('close-menu');
        }
    },
    computed: {
        ...mapGetters({ lang: 'lang/getContent' })
    }
};
</script>