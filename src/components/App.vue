<template>
    <div>
        <nav-bar />
        <pages />
    </div>
</template>

<script>
import NavBar from './NavBar/NavBar.vue';
import Pages from './Pages/Pages.vue';

export default {
    name: 'app',
    components: {
        NavBar,
        Pages
    }
};
</script>
