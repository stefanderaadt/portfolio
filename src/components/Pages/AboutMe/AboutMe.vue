<template>
    <div id="about-me" class="container custom-container about-me line-left">
        <div class="columns">
            <div class="column custom-container-title">
                <div class="custom-container-title-icon">
                    <i class="icon icon-user" />
                </div>
                <div class="custom-container-title-divider" />
                <div class="custom-container-title-text">
                    <h5 class="title is-3 hero-title">Over mij</h5>
                </div>
            </div>
        </div>
        <div class="columns custom-container-columns">
            <div class="column custom-container-columns-content">
                <h5 class="title is-4">Opleidingen</h5>
                <time-table :data="educations" :component="educationComponent" />
            </div>
        </div>
        <div class="columns custom-container-columns">
            <div class="column custom-container-columns-content">
                <h5 class="title is-4">Werkervaring</h5>
                <time-table :data="workExperience" :component="workExperienceComponent" />
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
                            :src="`img/${language.img}`"
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
                            :src="`img/${framework.img}`"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
};
</script>