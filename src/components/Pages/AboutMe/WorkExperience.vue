<template>
    <div class="about-me-work-experience" :class="position">
        <div class="title-bar">
            <i class="icon icon-briefcase" />
            <h5 class="title is-5">{{data.name}}</h5>
        </div>
        <div class="time-table-icon-line">
            <p class="time-table-icon-line-text">{{data.city}}</p>
            <i class="icon icon-location_city" />
        </div>
        <div class="time-table-icon-line">
            <p class="time-table-icon-line-text">{{data.duties && data.duties.join(', ')}}</p>
            <i class="icon icon-user" />
        </div>
        <div class="about-me-work-experience-techniques">
            <div
                class="about-me-work-experience-technique"
                v-for="(technique, i) in data.techniques"
                :key="i"
            >{{technique}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'work-experience',
    props: ['data', 'position']
};
</script>