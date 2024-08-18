<template>
    <div>
        <welcome />
        <divider from="center" to="left" />
        <about-me />
        <divider from="left" to="right" />
        <projects />
        <divider from="right" to="center" />
        <contact />
    </div>
</template>

<script>
import Divider from './Divider.vue';
import Welcome from './Welcome/Welcome.vue';
import AboutMe from './AboutMe/AboutMe.vue';
import Projects from './Projects/Projects.vue';
import Contact from './Contact/Contact.vue';

export default {
    name: 'pages',
    components: { Divider, Welcome, AboutMe, Projects, Contact }
};
</script>