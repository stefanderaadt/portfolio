<template>
    <div class="meteors">
        <meteor v-for="index in 10" :key="index" />
    </div>
</template>

<script>
import Meteor from './Meteor';

export default {
    name: 'meteors',
    components: {
        Meteor
    }
};
</script>