<template>
    <div id="projects" class="container custom-container projects line-right">
        <div class="columns">
            <div class="column custom-container-title">
                <div class="custom-container-title-icon">
                    <i class="icon icon-folder" />
                </div>
                <div class="custom-container-title-divider" />
                <div class="custom-container-title-text">
                    <h5 class="title is-3 hero-title">{{lang.projects.title}}</h5>
                </div>
            </div>
        </div>
        <div class="columns is-multiline is-desktop project-items">
            <div
                v-for="(project, i) in lang.projects.projects"
                :key="i"
                class="column is-half project-item"
            >
                <div class="project-item-content">
                    <div class="project-item-slider">
                        <media-slider :media="project.media" />
                    </div>
                    <div class="project-item-description">
                        <div class="project-item-description-top">
                            <div class="project-item-description-title">
                                <h5 class="title is-4">{{project.name}}</h5>
                            </div>
                            <div class="project-item-description-companies" v-if="project.for">
                                <i class="icon icon-briefcase" />
                                {{project.for}}
                            </div>
                        </div>
                        <div class="project-item-description-middle">
                            <div
                                class="project-item-description-links"
                                v-if="project.links && project.links.length"
                            >
                                <i class="icon icon-link" />
                                <span v-for="(link, i) in project.links" :key="i">
                                    <a :href="link.url" target="_blank">{{link.name}}</a>
                                    <span
                                        v-if="project.links.length - 1 !== i"
                                        class="project-item-description-link-comma"
                                    >,</span>
                                </span>
                            </div>
                            <div
                                class="project-item-description-techniques"
                                v-if="project.techniques && project.techniques.length"
                            >
                                <span
                                    v-for="(technique, i) in project.techniques"
                                    :key="i"
                                    class="project-item-description-technique"
                                >{{technique}}</span>
                            </div>
                        </div>
                        <div class="project-item-description-text">
                            <p v-for="(desc, i) in project.description" :key="i">{{desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import MediaSlider from './MediaSlider.vue';

export default {
    name: 'projects',
    components: { MediaSlider },
    computed: {
        ...mapGetters({ lang: 'lang/getContent' })
    }
};
</script>