<template>
    <div class="about-me-education" :class="position">
        <div class="title-bar">
            <i class="icon icon-book" />
            <h5 class="title is-5">{{data.name}}</h5>
        </div>
        <p>{{data.description}}</p>
        <p>{{data.city}}</p>
    </div>
</template>

<script>
export default {
    name: 'education',
    props: ['data', 'position']
};
</script>