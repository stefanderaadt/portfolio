<template>
    <div
        class="container divider"
        :class="[height === 'half' ? 'divider-half-height' : 'divider-full-height']"
    >
        <svg viewBox="0 0 100 100">
            <line :x1="x1" :x2="x2" :y1="y1" :y2="y2" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'divider',
    components: {},
    props: ['from', 'to'],
    data: function() {
        if (this.from === 'right' && this.to === 'left') {
            return {
                x1: 100,
                x2: 0,
                y1: 0,
                y2: 100,
                height: 'full'
            };
        }

        if (this.from === 'left' && this.to === 'right') {
            return {
                x1: 0,
                x2: 100,
                y1: 0,
                y2: 100,
                height: 'full'
            };
        }

        if (this.from === 'right' && this.to === 'center') {
            return {
                x1: 100,
                x2: 50,
                y1: 0,
                y2: 50,
                height: 'half'
            };
        }

        if (this.from === 'left' && this.to === 'center') {
            return {
                x1: 0,
                x2: 50,
                y1: 0,
                y2: 50,
                height: 'half'
            };
        }

        if (this.from === 'center' && this.to === 'right') {
            return {
                x1: 50,
                x2: 100,
                y1: 0,
                y2: 50,
                height: 'half'
            };
        }

        if (this.from === 'center' && this.to === 'left') {
            return {
                x1: 50,
                x2: 0,
                y1: 0,
                y2: 50,
                height: 'half'
            };
        }

        return {
            x1: 50,
            x2: 0,
            y1: 0,
            y2: 50,
            height: 'half'
        };
    }
};
</script>