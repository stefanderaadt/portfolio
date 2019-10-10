<template>
    <div class="about-me-work-experience" :class="position">
        <div class="title-bar">
            <i class="icon icon-briefcase" />
            <h5 class="title is-5">{{data.name}}</h5>
        </div>
        <p>{{data.city}}</p>
        <p>{{data.duties && data.duties.join(', ')}}</p>
        <div class="about-me-work-experience-techniques">
            <span
                class="about-me-work-experience-technique"
                v-for="(technique, i) in data.techniques"
                :key="i"
            >{{technique}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'work-experience',
    props: ['data', 'position']
};
</script>