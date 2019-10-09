<template>
    <div class="image-slider">
        <div
            class="image-slider-icon image-slider-icon-left"
            @click="previous"
            v-if="this.index > 0"
        >
            <div class="image-slider-icon-container">
                <i class="icon icon-cheveron-left" />
            </div>
        </div>
        <img
            class="image-slider-image"
            :src="images[index].src"
            :alt="images[index].name"
            :title="images[index].name"
        />
        <div
            class="image-slider-icon image-slider-icon-right"
            @click="next"
            v-if="this.index < this.size - 1"
        >
            <div class="image-slider-icon-container">
                <i class="icon icon-cheveron-right" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-slider',
    props: ['images'],
    data: function() {
        return {
            index: 0,
            size: this.images && this.images.length
        };
    },
    methods: {
        next: function() {
            if (this.index < this.size - 1) this.index += 1;
        },
        previous: function() {
            if (this.index > 0) this.index -= 1;
        }
    }
};
</script>