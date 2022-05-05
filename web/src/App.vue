// src/App.vue
<script>
export default {
    data() {
        return {
            greeting: "Hello, world!",
        };
    },
};
</script>

<template>
    <div class="message">{{ greeting }}</div>
</template>

<style lang="css">
@import "./styles.scss";
</style>