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
import Divider from './Divider';
import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default {
    name: 'pages',
    components: { Divider, Welcome, AboutMe, Projects, Contact }
};
</script>