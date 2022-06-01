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
            randomText: 'El árbol de Merkle...',
            textToHash: '-- texto para representar el árbol. --'
        }
    },
    methods: {
        pageContentText() {
            if ((this.optionPassed != null) && (this.optionPassed >= 0)) {
                return this.optionsArray[this.optionPassed].text
            }else{
                return this.randomText
            }
        }
    },
    computed: {}
};
</script>
<template>
    <div class="section-container">
        <span class="section-text">{{ pageContentText() }}
        <p class="section-text">Merkle tree.</p>
        <div class="section-container">
            <form name="hash-form">
                <div class="form-controls">
                    <textarea id="textToHash" form="hash-form" v-model="textToHash" rows="8" cols="80" style="text-align:left;">file</textarea>
                    <label for="textToHash">texto&nbsp;a&nbsp;comprimir</label>
                </div>
                <div class="form-controls">
                    <input form="hash-form" type="submit" value="calcular hash">
                </div>
                <div class="form-controls" style="border:dashed 5px grey;height:270px;overflow:scroll;">
                    <span>merkle&nbsp;tree&nbsp;representation</span>
                </div>
            </form>
        </div>
        </span>
    </div>
</template>
<style scoped>
@import "../dynamic.scss";
</style>