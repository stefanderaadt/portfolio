<template>
    <div id="home" class="container custom-container welcome">
        <div class="welcome-container-wrapper">
            <div class="welcome-container">
                <div class="welcome-container-content">
                    <h4 class="title is-2">Hello, my name is</h4>
                    <h1 class="title is-1 name">Stefan de Raadt</h1>
                    <h4 class="title is-2">Welcome to my</h4>
                    <h1 class="title is-2">portfolio!</h1>
                </div>
            </div>
        </div>
        <meteors />
        <stars />
        <div class="scrolldown-bar">
            <i class="icon-mouse" />
        </div>
    </div>
</template>

<script>
import Meteors from './Meteors/Meteors';
import Stars from './Stars/Stars';

export default {
    name: 'welcome',
    components: {
        Meteors,
        Stars
    }
};
</script>
