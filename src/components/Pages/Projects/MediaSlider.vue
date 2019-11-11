<template>
    <div class="media-slider">
        <div class="media-slider-content">
            <div class="media-slider-dots" v-if="size > 1">
                <div
                    class="media-slider-dot"
                    v-for="i in size"
                    :key="i"
                    :class="{'media-slider-dot-active': i - 1===index}"
                    @click="select(i - 1)"
                />
            </div>
            <div
                class="media-slider-icon media-slider-icon-left"
                @click="previous"
                v-if="index > 0"
            >
                <div class="media-slider-icon-container">
                    <i class="icon icon-cheveron-left" />
                </div>
            </div>
            <img
                v-if="media[index].type === 'image'"
                class="media-slider-image"
                :src="media[index].src"
                :alt="media[index].name"
                :title="media[index].name"
            />
            <iframe
                v-if="media[index].type === 'youtube'"
                :src="media[index].src"
                width="560"
                height="349"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                class="media-slider-youtube"
            ></iframe>
            <div
                class="media-slider-icon media-slider-icon-right"
                @click="next"
                v-if="index < size - 1"
            >
                <div class="media-slider-icon-container">
                    <i class="icon icon-cheveron-right" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'media-slider',
    props: ['media'],
    data: function() {
        return {
            index: 0,
            size: this.media && this.media.length
        };
    },
    methods: {
        next: function() {
            if (this.index < this.size - 1) this.index += 1;
        },
        previous: function() {
            if (this.index > 0) this.index -= 1;
        },
        select: function(i) {
            this.index = i;
        }
    }
};
</script>