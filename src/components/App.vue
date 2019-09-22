<template>
    <div>
        <nav-bar />
        <pages />
    </div>
</template>

<script>
import NavBar from './NavBar/NavBar';
import Pages from './Pages/Pages';

export default {
    name: 'app',
    components: {
        NavBar,
        Pages
    }
};
</script>
