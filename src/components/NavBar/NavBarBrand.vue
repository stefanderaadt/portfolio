<template>
    <div class="navbar-brand">
        <a class="navbar-item" v-scroll-to="'#home'" v-on:click="closeMenu">
            <img src="img/logo.png" alt="Stefan de Raadt logo" />
        </a>
        <nav-bar-burger :menuOpen="menuOpen" @toggle-menu="toggleMenu" />
    </div>
</template>


<script>
import NavBarBurger from './NavBarBurger';

export default {
    name: 'nav-bar-brand',
    components: {
        NavBarBurger
    },
    props: ['menuOpen'],
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
        closeMenu() {
            this.$emit('close-menu');
        }
    }
};
</script>