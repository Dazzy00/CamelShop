import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "./../components/HomePage.vue"
import Products from "./../components/Products.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "./../components/Cart.vue"
import ServicesOffered from "./../components/ServicesOffered.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/Products',
        name: 'products',
        component: Products,
    },
    {
        path: '/AboutUs',
        name: 'about',
        component: AboutUs,
    },
    {
        path: '/ContactUs',
        name: 'contact',
        component: ContactUs,
    },
    {
        path: '/Cart',
        name: 'cart',
        component: Cart,
    },
    {
        path: '/ServicesOffered',
        name: 'services',
        component: ServicesOffered,
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router