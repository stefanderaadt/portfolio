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
    props: ['name', 'scrollToElement', 'bottomMargin'],
    data() {
        return { active: false };
    },
    methods: {
        handleScroll(event) {
            const element = document.getElementById(this.scrollToElement);
            const scrollTop = element.getBoundingClientRect().top;

            // Check if element is within viewport
            this.active = scrollTop < window.innerHeight && scrollTop * -1 + window.innerHeight < element.clientHeight + this.bottomMargin;
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