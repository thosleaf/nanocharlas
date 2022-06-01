<script>
export default {
    data() {
        return {
            nanoCharlas_logo: './assets/images/nanocharlas.png',
            ust_website: "https://www.ust.com",
            pageHeader: "nanoCharlas",
            pageTitle: "Introducción a la Criptografía.",
            pageIntroduction: "Pequeño vistazo a los conceptos elementales de la criptografía \
                                y repaso de un par de casos prácticos a modo de ejemplo.",
        };
    },
    methods: {
    },
    computed: {

    }
};
</script>
<template>
        <div class="page-header">
            <a v-bind:href="ust_website"><img class="header-img" v-bind:src="nanoCharlas_logo"></a>
            <span class="page-header">{{ pageHeader }}</span>
            <h1 class="header-title">{{ pageTitle }}</h1>
            <p class="page-header">{{ pageIntroduction }}</p>
        </div>
</template>
<style scoped>
@import "../pageHeader.scss";
</style>