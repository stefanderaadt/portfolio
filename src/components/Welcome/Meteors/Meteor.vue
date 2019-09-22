<template>
    <div class="meteor" :style="style" />
</template>

<script>
import { setTimeout } from 'timers';
import random from '../../../helpers/random';

export default {
    name: 'meteor',
    data() {
        return { active: true, x: random(0, 100), y: random(0, 100), duration: 0.5, delay: random(50, 250) / 10 };
    },
    computed: {
        style() {
            if (!this.active) return;
            return {
                animation: `shower ${this.duration}s infinite`,
                left: `${this.x}vw`,
                top: `${this.y}vh`,
                'animation-delay': `${this.delay}s`,
                'animation-iteration-count': 1
            };
        }
    },
    methods: {
        reset() {
            const timeoutDelay = 1;
            this.active = false;
            setTimeout(() => (this.active = true), timeoutDelay * 1000);
            setTimeout(this.reset, (this.duration + this.delay + timeoutDelay) * 1000);
        }
    },
    mounted() {
        setTimeout(this.reset, (this.duration + this.delay) * 1000);
    }
};
</script>