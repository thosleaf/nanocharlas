// src/index.js
import * as Vue from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";

const routes = [{ path: "/", component: App }];
const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
});

const app = Vue.createApp(App);
app.use(router);
app.mount("#root");