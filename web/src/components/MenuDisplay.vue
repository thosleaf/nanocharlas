// src/components/MenuDisplay.vue
<script>
export default {
    data() {
        return {
            selectedBullet: 0,
            bulletpoints: [
                {id:1, bullet:'Introducción', active:false},
                {id:2, bullet:'HASH', active:false},
                {id:3, bullet:'Verificación', active:false},
                {id:4, bullet:'Autenticación', active:false},
                {id:5, bullet:'Merkle', active:false},
                ],
        };
    },
    methods: {
        menuOption(option){
            this.practise = this.bulletpoints[option-1].bullet;
        },
        selectBullet(option){
            console.log(`This is hover bullet data BEFORE Activation: ${this.bulletpoints[option-1].id}, bullet: "${this.bulletpoints[option-1].bullet}" and it is ${this.bulletpoints[option-1].active}`);
            this.selectedBullet=option;
            this.bulletpoints[option-1].active=true;
            console.log(`This is hover bullet data AFTER Activation: ${this.bulletpoints[option-1].id}, bullet: "${this.bulletpoints[option-1].bullet}" and it is ${this.bulletpoints[option-1].active}`);
        },
        unselectBullet(option){
            console.log(`This is hover bullet data BEFORE de-activation: ${this.bulletpoints[option-1].id}, bullet: "${this.bulletpoints[option-1].bullet}" and it is ${this.bulletpoints[option-1].active}`);
            this.selectedBullet=option;
            this.bulletpoints[option-1].active=false;
            console.log(`This is hover bullet data AFTER de-activation: ${this.bulletpoints[option-1].id}, bullet: "${this.bulletpoints[option-1].bullet}" and it is ${this.bulletpoints[option-1].active}`);
        },
        isActive(option){
            return this.selectedBullet==option;
        }
    },
    computed: {

    }
}
</script>
<template>
    <div class="page-menu">
        Ejemplos:
        <ol>
            <li :class="{'index-bulletpoint-hover': isActive(bulletpoint.id), 'index-bulletpoint': !isActive(bulletpoint.id)}" v-for='bulletpoint in bulletpoints' :key="bulletpoint.id" @mouseover="selectBullet(bulletpoint.id)" @mouseout="updateMenu(bulletpoint.id)" v-on:click="menuOption(bulletpoint.id)">{{ bulletpoint.bullet }}</li>
        </ol>
    </div>
</template>
<style scoped>
@import "../menu.scss";
</style>