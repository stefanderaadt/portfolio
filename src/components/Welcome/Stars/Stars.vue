<template>
    <div class="stars">
        <star v-for="index in 75" :key="index" />
    </div>
</template>

<script>
import Star from './Star';

export default {
    name: 'stars',
    components: { Star }
};
</script>