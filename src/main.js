import { createApp } from 'vue';
//import { axios } from 'axios';
//import { VueAxios } from 'vue-axios'; 

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

import router from './router.js';
import App from './App.vue';

const app = createApp(App);

app.use(router);
//app.use(VueAxios, axios);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.mount('#app');
