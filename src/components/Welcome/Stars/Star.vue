<template>
    <div class="star" :style="style" />
</template>

<script>
import random from '../../../helpers/random';

export default {
    name: 'star',
    data() {
        return { x: random(0, 100), y: random(0, 100), size: random(1, 4), opacity: random(1, 10) };
    },
    computed: {
        style() {
            return {
                left: `${this.x}vw`,
                top: `${this.y}vh`,
                width: `${this.size}px`,
                height: `${this.size}px`,
                opacity: this.opacity / 10
            };
        }
    }
};
</script>