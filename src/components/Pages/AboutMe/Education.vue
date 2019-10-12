<template>
    <div class="about-me-education" :class="position">
        <div class="title-bar">
            <i class="icon icon-graduation-cap" />
            <h5 class="title is-5">{{data.name}}</h5>
        </div>
        <div class="time-table-icon-line">
            <p class="time-table-icon-line-text">{{data.description}}</p>
            <i class="icon icon-book" />
        </div>
        <div class="time-table-icon-line">
            <p class="time-table-icon-line-text">{{data.city}}</p>
            <i class="icon icon-location_city" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'education',
    props: ['data', 'position']
};
</script>