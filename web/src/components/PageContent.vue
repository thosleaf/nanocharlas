<script>
export default {
    name: "App",
    props: {
        optionPassed: {
            type: Number,
            required: true
        },
        optionsArray: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            practise: "Contenido de las nanoCharlas :)",
            key:''
        }
    },
    methods: {
        pageContentText() {
            if ((this.optionPassed != null) && (this.optionPassed >= 0)) {
                return this.optionsArray[this.optionPassed].bullet
            }else{
                return this.practise
            }
        },
        isActive(option){
            return this.optionPassed==option;
        }
    },
    components: {}
};
</script>
<template>
    <div class="page-content">
        <div class="section-header">Visualizando: <span class="section-header">{{ pageContentText() }}</span></div>
        <div v-for='element in this.optionsArray' :key="element.id"
        :class="{'section-container': isActive(element.id), 'section-container section-container-disabled': !isActive(element.id)}" >
            {{ element.bullet }}
        </div>
    </div>
</template>
<style scoped>
@import "../pageContent.scss";
</style>