import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

//la nonstra app usa il routing
app.use(router)

app.mount('#app');
