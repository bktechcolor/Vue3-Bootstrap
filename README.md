# Vue 3 + TypeScript + Vite

## Install Vue-bootstrap Vue3
- Inside the main.ts file install the following code
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')