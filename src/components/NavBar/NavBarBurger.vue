<template>
    <a
        role="button"
        class="navbar-burger burger"
        v-bind:class="{'is-active': menuOpen}"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="toggleMenu"
    >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</template>


<script>
export default {
    name: 'nav-bar-burger',
    props: ['menuOpen'],
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        }
    }
};
</script>