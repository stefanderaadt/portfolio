<template>
    <div id="home" class="container custom-container welcome">
        <div class="welcome-container-wrapper">
            <div class="welcome-container">
                <div class="welcome-container-content">
                    <h4 class="title is-2">{{lang.welcome.title}}</h4>
                    <h1 class="title is-1 name">{{lang.welcome.name}}</h1>
                    <h4 class="title is-2">{{lang.welcome.subtitle1}}</h4>
                    <h1 class="title is-2">{{lang.welcome.subtitle2}}</h1>
                </div>
            </div>
        </div>
        <meteors />
        <stars />
        <div class="scrolldown-bar">
            <i class="icon-mouse" v-scroll-to="'#about-me'" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Meteors from './Meteors/Meteors.vue';
import Stars from './Stars/Stars.vue';

export default {
    name: 'welcome',
    components: {
        Meteors,
        Stars
    },
    computed: {
        ...mapGetters({ lang: 'lang/getContent' })
    }
};
</script>
