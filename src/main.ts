import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routers/index.ts'
//import vue bootstrap 3
import BootstrapVue3 from 'bootstrap-vue-3'
import './style.css'
import App from './App.vue'
//import vue bootstrap 3
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
const app = createApp(App)
//import vue bootstrap 3
app.use(router)
app.use(createPinia())
app.use(BootstrapVue3)
app.mount('#app')
