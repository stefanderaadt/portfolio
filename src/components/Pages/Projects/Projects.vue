<template>
    <div id="projects" class="container custom-container projects line-right">
        <div class="columns">
            <div class="column custom-container-title">
                <div class="custom-container-title-icon">
                    <i class="icon icon-folder" />
                </div>
                <div class="custom-container-title-divider" />
                <div class="custom-container-title-text">
                    <h5 class="title is-3 hero-title">Projects</h5>
                </div>
            </div>
        </div>
        <div class="columns is-multiline project-items">
            <div v-for="(project, i) in projects" :key="i" class="column is-half project-item">
                <div class="project-item-content">
                    <div class="project-item-slider">
                        <image-slider :images="project.images" />
                    </div>
                    <div class="project-item-description">
                        <div class="project-item-description-top">
                            <div class="project-item-description-title">
                                <h5 class="title is-4">{{project.name}}</h5>
                            </div>
                            <div class="project-item-description-companies">
                                <i class="icon icon-account_balance" />
                                {{project.for}}
                            </div>
                        </div>
                        <div class="project-item-description-middle">
                            <div class="project-item-description-links">
                                <i class="icon icon-link" />
                                <a
                                    v-for="(link, i) in project.links"
                                    :key="i"
                                    :href="link.url"
                                    target="_blank"
                                >{{link.name}}</a>
                            </div>
                            <div class="project-item-description-techniques">
                                <span
                                    v-for="(technique, i) in project.techniques"
                                    :key="i"
                                    class="project-item-description-technique"
                                >{{technique}}</span>
                            </div>
                        </div>
                        <div class="project-item-description-text">{{project.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageSlider from './ImageSlider';

export default {
    name: 'projects',
    props: ['projects'],
    components: { ImageSlider }
};
</script>