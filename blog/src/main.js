import { createApp } from 'vue';
import App from './App.vue';
import http from "./http";


Vue.prototype.$http = http;
createApp(App).mount('#app')
