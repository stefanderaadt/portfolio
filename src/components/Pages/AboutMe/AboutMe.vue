<template>
    <div id="about-me" class="container custom-container about-me line-left">
        <div class="columns">
            <div class="column custom-container-title">
                <div class="custom-container-title-icon">
                    <i class="icon icon-user" />
                </div>
                <div class="custom-container-title-divider" />
                <div class="custom-container-title-text">
                    <h5 class="title is-3 hero-title">{{lang.aboutMe.title}}</h5>
                </div>
            </div>
        </div>
        <div class="columns custom-container-columns">
            <div class="column custom-container-columns-content">
                <h5 class="title is-4">{{lang.aboutMe.educationsTitle}}</h5>
                <div class="about-me-educations">
                    <time-table :data="lang.aboutMe.educations" :component="educationComponent" />
                </div>
            </div>
        </div>
        <div class="columns custom-container-columns">
            <div class="column custom-container-columns-content">
                <h5 class="title is-4">{{lang.aboutMe.workExperienceTitle}}</h5>
                <div class="about-me-work-experiences">
                    <time-table
                        :data="lang.aboutMe.workExperience"
                        :component="workExperienceComponent"
                    />
                </div>
            </div>
        </div>
        <div class="columns custom-container-columns">
            <div class="column custom-container-columns-content">
                <h5 class="title is-4">Ervaring met de volgende talen</h5>
                <div class="about-me-languages">
                    <div v-for="(language, i) in languages" :key="i" class="about-me-item">
                        <img
                            class="about-me-image"
                            :title="language.name"
                            :alt="language.name"
                            :src="language.src"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="columns custom-container-columns">
            <div class="column custom-container-columns-content about-me-frameworks">
                <h5 class="title is-4">Ervaring met de volgende frameworks/tools</h5>
                <div class="about-me-languages">
                    <div v-for="(framework, i) in frameworks" :key="i" class="about-me-item">
                        <img
                            class="about-me-image"
                            :title="framework.name"
                            :alt="framework.name"
                            :src="framework.src"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TimeTable from './TimeTable';
import Education from './Education';
import WorkExperience from './WorkExperience';

export default {
    name: 'about-me',
    components: { TimeTable, Education },
    props: ['educations', 'workExperience', 'languages', 'frameworks'],
    data: function() {
        return {
            educationComponent: Education,
            workExperienceComponent: WorkExperience
        };
    },
    computed: {
        ...mapGetters({ lang: 'lang/getContent' })
    }
};
</script>