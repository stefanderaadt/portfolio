<template>
    <div>
        <nav-bar />
        <welcome />
        <divider from="middle" to="left" />
        <about-me />
        <divider from="left" to="right" />
        <div id="projects" class="container custom-container line-right">
            <div class="columns">
                <div class="column">
                    <h1 class="title is-3 hero-title">Projects</h1>
                </div>
            </div>
        </div>
        <divider from="right" to="middle" />
        <div id="contact" class="container custom-container line-middle">
            <div class="columns">
                <div class="column">
                    <h1 class="title is-3 hero-title">Contact</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar/NavBar';
import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import Divider from './Divider/Divider';

export default {
    name: 'app',
    components: {
        NavBar,
        Welcome,
        AboutMe,
        Divider
    }
};
</script>
