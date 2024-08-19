import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/components/ProductsPage.vue')
    },
    {
        path: '/calculate',
        component: () => import('@/components/CalculatePage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})