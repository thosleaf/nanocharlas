// src/App.vue
<script>
import PageHeader from './components/PageHeader.vue';
import MenuDisplay from './components/MenuDisplay.vue';
import PageContent from './components/PageContent.vue';
import PageFooter from './components/PageFooter.vue';
export default {
    components:{
        PageHeader,
        MenuDisplay,
        PageContent,
        PageFooter,
    },
    data() {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
};
</script>

<template>
    <div class="page-container">
        <PageHeader />
        <div class="page-body">
            <MenuDisplay />
            <PageContent />
        </div>
        <PageFooter />
    </div>
</template>

<style lang="css">
@import "./styles.scss";
</style>