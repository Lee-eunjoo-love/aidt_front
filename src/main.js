import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import vuetify from '@/plugins/vuetify';
//import crypto from '@/plugins/crypto';

const app = createApp(App);

app.use(router);
app.use(vuetify);
//app.use(crypto);

app.mount('#app');
