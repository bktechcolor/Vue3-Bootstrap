import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../composables/DefaultLayout.vue'
import HomeComponent from '../views/HomeComponent.vue'
import LessonsView from '../views/LessonsView.vue'
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
            },
            {
                path:'/lessons',
                name:'lessons',
                component:LessonsView
            }

        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes
})
export default router