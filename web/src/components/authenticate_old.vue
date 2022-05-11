<script>
export default {
    name: "App",
    data() {
        return {
            randomText: 'You shouldn\'t see this (authenticate)',
        }
    },
    methods: {},
    components: {}
};
</script>
<template>
    <div class="section-container">
        <span class="section-header">{{ randomText }}</span>
        <p class="section-text">authenticate demo</p>
    </div>
</template>
<style scoped>
@import "../pageContent.scss";
</style>