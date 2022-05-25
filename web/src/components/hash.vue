<script>
import * as myJwt from '../services/jwt.js'
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
            hashKey: 'REPLACE-WITH-YOUR-SEED-PHRASE',
            textToHash: 'PASTE-YOUR-JWT-TOKEN',
            hashedText:'',
            header:'',
            signature: '',
            calculated_signature:''
        }
    },
    methods: {
        decodeToken(){
            this.header = myJwt.parseJwtHeader(this.textToHash);
            this.hashedText = myJwt.parseJwtBody(this.textToHash);
            this.signature= myJwt.extractSignature(this.textToHash);
        },
        encodeToken(){
            
        },
        requestJWT(){
            var myResponse={
                event:'hash',
                seed:this.hashKey,
                text:this.textToHash
            }
            //var result = jwtHash(myResponse);
            //console.log(`response generated: ${JSON.stringify(myResponse)}\r\nand jwt response: ${result}`);
            this.$emit('jwt-click',myResponse);
        },
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
        <div class="section-container">
            <form name="hash-form">
                <div class="form-controls">
                    <label for="hashKey">palabra&nbsp;semilla</label>
                    <input id="hashKey" form="hash-form" type="text" v-model="hashKey" style="width:600px;">
                </div>
                <div class="form-controls">
                    <label for="textToHash">texto&nbsp;resumido</label>
                    <textarea id="textToHash" form="hash-form" v-model="textToHash" rows="8" cols="80" style="text-align:left;"></textarea>
                </div>
                <div class="form-controls">
                    <label for="header">cabecera</label>
                    <textarea id="header" form="hash-form" v-model="header" rows="2" cols="80"></textarea>
                    <label for="hashedText">texto&nbsp;a&nbsp;resumir</label>
                    <textarea id="hashedText" form="hash-form" v-model="hashedText" rows="8" cols="80"></textarea>
                    <label for="signature">firma:</label>
                    <input id="signature" form="hash-form" v-model="signature"/>
                    <label for="calculated_signature">&nbsp;c&aacute;lculo&nbsp;firma:</label>
                    <input id="calculated_signature" form="hash-form" v-model="calculated_signature"/>
                </div>
                <div class="form-controls">
                    <input form="hash-form" type="submit" value="expandir" v-on:click="decodeToken()">
                    <input form="hash-form" type="submit" value="resumir" v-on:click="encodeJWT()">
                    <input form="hash-form" type="submit" value="validar" v-on:click="requestJWT()">
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
@import "../dynamic.scss";
</style>