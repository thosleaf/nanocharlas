// src/App.vue
<script>
import PageHeader from './components/PageHeader.vue';
import MenuDisplay from './components/MenuDisplay.vue';
import PageContent from './components/PageContent.vue';
import PageContentDynamic from './components/PageContentDynamic.vue';
import PageFooter from './components/PageFooter.vue';
export default {
    components:{
        PageHeader,
        MenuDisplay,
        PageContent,
        PageContentDynamic,
        PageFooter,
    },
    data() {
        return {
            selectedOption: -1,
            optionsList: [
                {id:0, bullet:'intro', text:'Introducción', active:false},
                {id:1, bullet:'hash', text:'HASH', active:false},
                {id:2, bullet:'verify', text:'Verificación', active:false},
                {id:3, bullet:'authenticate', text:'Autenticación', active:false},
                {id:4, bullet:'merkle', text:'Merkle', active:false}
            ]
        }
    },
    methods: {
        updateSelected(selection) {
            this.selectedOption = selection;
        }
    }
};
</script>

<template>
    <div class="page-container">
        <PageHeader />
        <div class="page-body">
            <MenuDisplay :buttonsArray="this.optionsList" @button-click="updateSelected" />
            <PageContentDynamic :optionsArray="this.optionsList" :optionPassed="selectedOption" />
        </div>
        <PageFooter />
    </div>
</template>

<style lang="css">
@import "./styles.scss";
</style>