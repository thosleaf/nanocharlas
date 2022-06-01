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
            randomText: 'Probando la autenticación de recursos...',
            hashKey: '-- texto aleatorio para usar como semilla --',
            publicKey: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                        Suspendisse convallis, quam id porta lobortis, enim sem blandit nibh, \
                        sed rhoncus leo mauris ut elit. Pellentesque erat purus, lacinia ut \
                        iaculis accumsan, semper eget neque. Cras libero ligula, suscipit sit \
                        amet dolor quis, tincidunt finibus leo. Etiam eleifend hendrerit viverra. \
                        Suspendisse in justo in diam efficitur imperdiet quis non leo. In viverra \
                        risus elit, nec vehicula ligula semper sed. Ut semper ipsum vitae mauris \
                        placerat fermentum.',
            privateKey:''
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
        <p class="section-text">autenticaci&oacute;n&nbsp;de&nbsp;usuarios.</p>
        <div class="section-container">
            <form name="hash-form">
                <div class="form-controls">
                    <input id="publicKey" form="hash-form" type="text" v-model="publicKey" style="width:600px;">
                    <label for="publicKey">palabra&nbsp;semilla</label>
                </div>
                <div class="form-controls">
                    <textarea id="textToHash" form="hash-form" v-model="textToHash" rows="8" cols="80" style="text-align:left;"></textarea>
                    <label for="textToHash">clave&nbsp;p&uacute;blica</label>
                </div>
                <div class="form-controls">
                    <textarea id="privateKey" form="hash-form" v-model="privateKey" rows="8" cols="80"></textarea>
                    <label for="privateKey">clave&nbsp;privada</label>
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