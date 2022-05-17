<script>
import intro from './intro.vue';
import hash from './hash.vue';
import verify from './verify.vue';
import authenticate from './authenticate.vue';
import merkle from './merkle.vue';
//import '../services/jwt.js';
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
            sections: ['intro','hash','verify','authenticate','merkle'],
            currentComponent: "intro",
        }
    },
    methods: {
        pageContentText() {
            if ((this.optionPassed != null) && (this.optionPassed >= 0)) {
                return this.optionsArray[this.optionPassed].text
            }else{
                return this.practise
            }
        },
        isActive(){
            if ((this.optionPassed != null) && (this.optionPassed >= 0)) {
                return this.optionsArray[this.optionPassed].bullet
            }
            return 'intro';
        },
        processCallback(data){
            //var text = JSON(pair)
            console.log(`Data on my request is: ${JSON.stringify(data)}`);
            if (data!=null){
                if (data.event==='hash') {
                    console.log(`event: ${data.event}`);
                    //getJwtAxios(data)
                }
                if (data.event==='verify') console.log(`event: ${data.event}`)
                if (data.event==='authenticate') console.log(`event: ${data.event} `)
                if (data.event==='merkle') console.log(`event: ${data.event} `)
            }
        }
    },
    components: {
        intro,
        hash,
        verify,
        authenticate,
        merkle
    }
};
</script>
<template>
    <div class="page-content">
        <div class="section-header">Visualizando: <span class="section-header">{{ pageContentText() }}</span></div>
        <component :class="section-container" :is="isActive()" :optionsArray="this.optionsArray"
                    :optionPassed="this.optionPassed"
                    @jwt-click="processCallback"/>
    </div>
</template>
<style scoped>
@import "../pageContent.scss";
</style>