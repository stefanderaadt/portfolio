<template>
    <div class="navbar-menu" v-bind:class="{'is-active': menuOpen}">
        <div class="navbar-end">
            <nav-bar-item
                name="About me"
                :scrollToElement="'about-me'"
                :bottomMargin="340"
                @close-menu="closeMenu"
            />
            <nav-bar-item
                name="Projects"
                :scrollToElement="'projects'"
                :bottomMargin="180"
                @close-menu="closeMenu"
            />
            <nav-bar-item
                name="Contact"
                :scrollToElement="'contact'"
                :bottomMargin="20"
                @close-menu="closeMenu"
            />
        </div>
    </div>
</template>


<script>
import NavBarItem from './NavBarItem';

export default {
    name: 'nav-bar-menu',
    components: {
        NavBarItem
    },
    props: ['menuOpen'],
    methods: {
        closeMenu() {
            this.$emit('close-menu');
        }
    }
};
</script>