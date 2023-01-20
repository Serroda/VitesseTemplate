import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

export const routerInstance = () => {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    return {router}
} 