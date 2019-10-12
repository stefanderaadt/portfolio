<template>
    <div class="stars">
        <star v-for="index in stars" :key="index" />
    </div>
</template>

<script>
import isMobile from '../../../../helpers/isMobile';

import Star from './Star';

export default {
    name: 'stars',
    components: { Star },
    data: function() {
        return {
            stars: isMobile() ? 15 : 75
        };
    }
};
</script>