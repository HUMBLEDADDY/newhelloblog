import App from './App.vue';
import http from "./http";
import VueRouter from "vue-router";
import {createApp} from 'vue';
import router from './router'
import "./Style/style.scss";
import "./Style/animation.scss";

const app = createApp(App).use(router)


app.use(VueRouter);
app.mount('#app')
app.prototype.$http = http;
app.use(router)