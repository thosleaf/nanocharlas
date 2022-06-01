<script>
export default {
    data() {
        return {
            pageFooter: " - UST Arquitectura",
            like: 0,
            love: 0,
            alien: 0,
        };
    },
    methods: {
        addLike(){
            this.like += 1;
        },
        addLove(){
            this.love += 1;
        },
        addAlien(){
            this.alien += 1;
        },
    },
    computed: {

    }
};
</script>
<template>
    <div class="page-footer">
        <p class="page-footer">
            <span v-on:click="addLike">&#128077;</span> : {{ like }}
            <span v-on:click="addLove">&#128147;</span> : {{ love }}
            <span v-on:click="addAlien">&#128125;</span> : {{ alien }}
            {{ pageFooter }}
        </p>
    </div>
</template>
<style scoped>
@import "../pageFooter.scss";
</style>