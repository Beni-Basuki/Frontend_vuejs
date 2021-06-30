//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'post.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Index.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/Edit.vue')
    },
    {
        path: '/editmobil/:id',
        name: 'post.editmobil',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/Editmobil.vue')
    },
    {
        path: '/editkeretaapi/:id',
        name: 'post.editkeretaapi',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/Editkeretaapi.vue')
    },
    {
        path: '/pesawat',
        name: 'post.pesawat',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Pesawat.vue')
    },
    {
        path: '/mobil',
        name: 'post.mobil',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Mobil.vue')
    },
    {
        path: '/keretaapi',
        name: 'post.keretaapi',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Keretaapi.vue')
    },
    {
        path: '/datapesawat',
        name: 'post.datapesawat',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Datapesawat.vue')
    },
    {
        path: '/datamobil',
        name: 'post.datamobil',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Datamobil.vue')
    },
    {
        path: '/datakeretaapi',
        name: 'post.datakeretaapi',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Datakeretaapi.vue')
    },
    {
        path: '/profil',
        name: 'post.profil',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Profil.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router