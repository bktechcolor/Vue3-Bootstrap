import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../composables/DefaultLayout.vue'
import HomeComponent from '../views/HomeComponent.vue'
const routes = [
    {
        path:'/',
        name:'defaultlayout',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component:HomeComponent
            }

        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes
})
export default router