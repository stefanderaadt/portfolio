<template>
    <div id="contact" class="container custom-container contact line-center">
        <div class="columns">
            <div class="column custom-container-title">
                <div class="custom-container-title-icon">
                    <i class="icon icon-mail" />
                </div>
                <div class="custom-container-title-divider" />
                <div class="custom-container-title-text">
                    <h5 class="title is-3 hero-title">{{lang.contact.title}}</h5>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column custom-container-content">
                <div class="contact-information">
                    <div class="title is-4">{{lang.contact.information}}</div>
                    <div class="contact-email">
                        <img src="/img/stefanderaadt_email_address.png" />
                    </div>
                    <div class="title is-5">{{lang.contact.information2}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'contact',
    computed: {
        ...mapGetters({ lang: 'lang/getContent' })
    }
};
</script>