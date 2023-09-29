import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './firebase.config';

import PrimeVue from 'primevue/config';
import '/node_modules/primeflex/primeflex.css';
import "primevue/resources/themes/md-dark-indigo/theme.css";
import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
