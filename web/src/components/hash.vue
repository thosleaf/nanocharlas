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
            randomText: 'Probando el algoritmo de hashing...',
            hashKey: '1234fwef wwe w',
            textToHash: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                        Suspendisse convallis, quam id porta lobortis, enim sem blandit nibh, \
                        sed rhoncus leo mauris ut elit. Pellentesque erat purus, lacinia ut \
                        iaculis accumsan, semper eget neque. Cras libero ligula, suscipit sit \
                        amet dolor quis, tincidunt finibus leo. Etiam eleifend hendrerit viverra. \
                        Suspendisse in justo in diam efficitur imperdiet quis non leo. In viverra \
                        risus elit, nec vehicula ligula semper sed. Ut semper ipsum vitae mauris \
                        placerat fermentum.',
            hashedText:''
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
        <p class="section-text">funci&oacute;n&nbsp;hash.</p>
        <div class="section-container">
            <form name="hash-form">
                <div class="form-controls">
                    <input id="hashKey" form="hash-form" type="text" v-model="hashKey" style="width:600px;">
                    <label for="hashKey">palabra&nbsp;semilla</label>
                </div>
                <div class="form-controls">
                    <textarea id="textToHash" form="hash-form" v-model="textToHash" rows="8" cols="80" style="text-align:left;"></textarea>
                    <label for="textToHash">texto&nbsp;a&nbsp;resumir</label>
                </div>
                <div class="form-controls">
                    <textarea id="hashedText" form="hash-form" v-model="hashedText" rows="8" cols="80"></textarea>
                    <label for="hashedText">texto&nbsp;resumido</label>
                </div>
                <div class="form-controls">
                    <input form="hash-form" type="submit" value="resumir">
                </div>
            </form>
        </div>
        </span>
    </div>
</template>
<style scoped>
@import "../dynamic.scss";
</style>