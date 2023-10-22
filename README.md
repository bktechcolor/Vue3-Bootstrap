# Vue 3 + TypeScript + Vite

## Install Vue-bootstrap Vue3
1. npm create vite@latest vue-bootstrap
2. npm install -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
4. Add code inside tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
5. Add code inside style.css( global css file)
@tailwind base;
@tailwind components;
@tailwind utilities;
### npm install vue-bootstrap
- npm i -S bootstrap bootstrap-vue-3
### Inside the main.ts file install the following code
- import { createApp } from 'vue'  
- import BootstrapVue3 from 'bootstrap-vue-3'  
- import 'bootstrap/dist/css/bootstrap.css'  
- import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'  
- const app = createApp(App)  
- app.use(BootstrapVue3)  
- app.mount('#app')  
## Run project
1. npm install
2. npm run dev
