// src/components/MenuDisplay.vue
<script>
export default {
    name: "App",
    props: {
        buttonsArray: {
            type: Array,
            required: true,
            default: () => [0,'no_key','no text',false]
        }
    },
    data() {
        return {
            selected: "seleccione:",
            selectedBullet: -1,
            key:''
        }
    },
    methods: {
        menuOption(option){
            this.selected = this.buttonsArray[option].bullet;
            this.selectedBullet=option;
            this.$emit('button-click',this.selectedBullet);
        },
        selectBullet(option){
            this.selectedBullet=option;
            this.buttonsArray[option].active=true;
        },
        unselectBullet(option){
            this.selectedBullet=-1;
            this.buttonsArray[option].active=false;
        },
        isActive(option){
            return this.selectedBullet==option;
        }
    },
    components: {}
}
</script>
<template>
    <div class="page-menu">
        {{ selected }}
        <ul>
            <li v-for='button in this.buttonsArray' :key="button.id"
                :class="{'index-bulletpoint-hover': isActive(button.id), 'index-bulletpoint': !isActive(button.id)}"
                @mouseover="selectBullet(button.id)"
                @mouseout="unselectBullet(button.id)"
                v-on:click="menuOption(button.id)">{{ button.text }}
            </li>
        </ul>
    </div>
</template>
<style scoped>
@import "../menu.scss";
</style>