// src/App.vue
<script>
export default {
    data() {
        return {
            nanoCharlas_logo: './assets/images/nanocharlas.png',
            ust_website: "https://www.ust.com",
            pageHeader: "nanoCharlas - Arquitectura",
            pageTitle: "Introducción a la Criptografía.",
            pageFooter: "UST",
            pageIntroduction: "Pequeño repaso de los conceptos elementales de la criptografía \
                                y ejecución de un par de casos prácticos con ejemplos.",
            bulletpoints: [
                'Introducción',
                'Objetivos',
                'Tipos',
                'Casos prácticos',
                'Enlaces',
                ],
            practise: "Contenido de la nanocharla.",
            
        };
    },
};
</script>

<template>
    <div class="pageContainer">
        <div class="pageHeader">
            <a v-bind:href="ust_website"><img class="header_img" v-bind:src="nanoCharlas_logo"></a>{{ pageHeader }}
            <h1 class="nanocharlas_title">{{ pageTitle }}</h1>
            <p class="nanocharlas_introduction">{{ pageIntroduction }}</p>
        </div>
        <div class="pageContent">
            <ul>
                <li class="index_bulletpoint" v-bind:key="bullet" v-for="bullet in bulletpoints" >{{ bullet }}</li>
            </ul>
            <p class="nanocharlas_description">{{ practise }}</p>
        </div>
        <div class="pageFooter">{{ pageFooter }}</div>
    </div>
</template>

<style lang="css">
@import "./styles.scss";
</style>