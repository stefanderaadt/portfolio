<template>
    <a
        class="navbar-item"
        v-bind:class="{'is-active': active}"
        v-scroll-to="`#${scrollToElement}`"
        v-on:click="closeMenu"
    >{{name}}</a>
</template>

<script>
export default {
    name: 'nav-bar-item',
    props: ['name', 'scrollToElement'],
    data() {
        return { active: false };
    },
    methods: {
        handleScroll(event) {
            const scrollElement = document.getElementById(this.scrollToElement);
            const scrollTop = scrollElement.getBoundingClientRect().top;

            // Check if element is within viewport and top is not outside viewport
            this.active = scrollTop >= 0 && scrollElement.offsetHeight - scrollTop > 0;
        },
        closeMenu() {
            this.$emit('close-menu');
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>