
import Vue from 'vue'
import Router from 'vue-router'
import Master from "../components/Master";
import Details from "../components/Details";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import * as firebase from "firebase";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/signin'
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin,
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
        },
        {
            path: '/countries',
            name: 'master',
            component: Master,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/countries/:countryName',
            name: 'details',
            component: Details,
            props: true,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/signin')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;