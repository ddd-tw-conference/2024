import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/about.vue';


const routes = [
    {path: '', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path: '/volunteer', component: () => import('../views/volunteer.vue')},
    {path: '/agenda', component: () => import('../views/agenda.vue')},
    {path: '/call-for-proposals', component: () => import('../views/call-for-proposals.vue')},
    {
        path: '/sponsors', component: () => import('../views/sponsors.vue'),
    },
    {path: '/tickets', component: () => import('../views/tickets.vue')},
    {path: '/speakers', component: () => import('../views/speakers.vue')},
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory('/2024/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            console.log(to.hash);
            return {
                selector: to.hash
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0}
        }
    }
});

export default router;
