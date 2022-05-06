// src/App.vue
<script>
export default {
    data() {
        return {
            like: 0,
            love: 0,
            alien: 0,
            nanoCharlas_logo: './assets/images/nanocharlas.png',
            ust_website: "https://www.ust.com",
            pageHeader: "nanoCharlas",
            pageTitle: "Introducción a la Criptografía.",
            pageFooter: " - UST Arquitectura",
            pageIntroduction: "Pequeño repaso de los conceptos elementales de la criptografía \
                                y ejecución de un par de casos prácticos con ejemplos.",
            bulletpoints: [
                {id:1, bullet:'Introducción'},
                {id:2, bullet:'HASH'},
                {id:3, bullet:'Verificación'},
                {id:4, bullet:'Autenticación'},
                {id:5, bullet:'Merkle'},
                ],
            practise: "Contenido de la nanocharla.",
        };
    },
    methods: {
        addLike(){
            this.like += 1;
        },
        addLove(){
            this.love += 1;
        },
        addAlien(){
            this.alien += 1;
        },
        menuOption(option){
            this.practise = this.bulletpoints[option-1].bullet;
        },
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
        <div class="pageBody">
            <div class="pageMenu">
                Ejemplos:
                <ol>
                    <li class="index_bulletpoint" v-for='bulletpoint in bulletpoints' :style="{backgroundColor:red, color:blue}" :key="bulletpoint.id" v-on:click="menuOption(bulletpoint.id)">{{ bulletpoint.bullet }}</li>
                </ol>
            </div>
            <div class="pageContent">
                <span class="nanocharlas_description">
                    {{ practise }}
                </span>
            </div>

        </div>
        <div class="pageFooter">
            <p class="pageFooter">
                <span v-on:click="addLike">&#128077;</span> : {{ like }}
                <span v-on:click="addLove">&#128147;</span> : {{ love }}
                <span v-on:click="addAlien">&#128125;</span> : {{ alien }}
                {{ pageFooter }}
            </p>
        </div>
    </div>
</template>

<style lang="css">
@import "./styles.scss";
</style>