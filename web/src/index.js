// src/index.js
import * as Vue from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";

const routes = [{ path: "/", component: App }];
const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
});
if (process.env.NODE_ENV === "development") {
    globalThis.__VUE_OPTIONS_API__ = true
    globalThis.__VUE_PROD_DEVTOOLS__ = true;
 } else {
    // different values for production.
    globalThis.__VUE_OPTIONS_API__ = false;
    globalThis.__VUE_PROD_DEVTOOLS__ = false;
 };
const app = Vue.createApp(App);
app.use(router);
app.mount("#root");