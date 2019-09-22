<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-content">
            <nav-bar-brand :menuOpen="menuOpen" @toggle-menu="toggleMenu" @close-menu="closeMenu" />
            <nav-bar-menu :menuOpen="menuOpen" @close-menu="closeMenu" />
        </div>
    </nav>
</template>

<script>
import NavBarBrand from './NavBarBrand';
import NavBarMenu from './NavBarMenu/NavBarMenu';

export default {
    name: 'nav-bar',
    components: {
        NavBarBrand,
        NavBarMenu
    },
    data() {
        return { menuOpen: false };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        }
    }
};
</script>