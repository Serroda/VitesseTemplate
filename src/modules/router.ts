//https://github.com/antfu/unplugin-auto-import/issues/292

import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

export const routerInstance = () => {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    return {router}
} 