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
            randomText: 'Verificando un archivo...',
            textToHash: '-- Hash del archivo seleccionado --',
            file: null
        }
    },
    methods: {
        pageContentText() {
            if ((this.optionPassed != null) && (this.optionPassed >= 0)) {
                return this.optionsArray[this.optionPassed].text
            }else{
                return this.randomText
            }
        },
        assignFile(file){
            this.file=file;
        }
    },
    computed: {}
};
</script>
<template>
    <div class="section-container">
        <span class="section-text">{{ pageContentText() }}
        <p class="section-text">funci&oacute;n hash.</p>
        <div class="section-container">
            <form name="hash-form">
                <div class="form-controls" style="border:dashed 5px grey;">
                    <!-- Styled -->
                    <input id="file" type="file" form="hash-form" size="256" placeholder="selecciona fichero" @change="assignFile(file)">
                    <p>here&nbsp;goes&nbsp;the: {{ file }} .</p>
                </div>
                <div class="form-controls">

                    <textarea id="textToHash" form="hash-form" v-model="textToHash" rows="8" cols="80" style="text-align:left;">file</textarea>
                    <label for="textToHash">hash&nbsp;del&nbsp;fichero</label>
                </div>
                <div class="form-controls">
                    <input form="hash-form" type="submit" value="calcular hash">
                </div>
            </form>
        </div>
        </span>
    </div>
</template>
<style scoped>
@import "../dynamic.scss";
</style>