<script>
export default {
    name: "App",
    data() {
        return {
            randomText: 'You shouldn\'t see this (introduction)',
        }
    },
    methods: {},
    components: {}
};
</script>
<template>
    <div class="section-container">
        <span class="section-header">{{ randomText }}</span>
        <p class="section-text">La presentaci&oacute;n asociada a esta nanoCharla quedará disponible en el Teams del equipo correspondiente.</p>
        <p class="section-text">Cualquier comentario es más que bienvenido, gracias!</p>
        <p class="section-text">UST Arquitectura, Mayo de 2022.</p>
    </div>
</template>
<style scoped>
@import "../pageContent.scss";
</style>