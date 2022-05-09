<script>
export default {
    data() {
        return {
            nanoCharlas_logo: './assets/images/nanocharlas.png',
            ust_website: "https://www.ust.com",
            pageHeader: "nanoCharlas",
            pageTitle: "Introducción a la Criptografía.",
            pageIntroduction: "Pequeño repaso de los conceptos elementales de la criptografía \
                                y ejecución de un par de casos prácticos con ejemplos.",
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
            <a v-bind:href="ust_website"><img class="header-img" v-bind:src="nanoCharlas_logo"></a>{{ pageHeader }}
            <h1 class="nanocharlas-title">{{ pageTitle }}</h1>
            <p class="nanocharlas-introduction">{{ pageIntroduction }}</p>
        </div>
</template>
<style scoped>
@import "../pageHeader.scss";
</style>