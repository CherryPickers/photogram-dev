import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home.vue'
import Login from './../components/authentication/Login.vue'
import Register from './../components/authentication/Register.vue'
import Profile from './../components/Profile.vue'
import Editprofile from './../components/Editprofile.vue'
import Feed from './../components/Feed.vue'
import Static from './../components/Static.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: "/",
			component: Login,
			meta: {
				forVisitors: true
			}
		},
		{
			path: "/register",
			component: Register,
			meta: {
				forVisitors: true
			}
		},
		{
			path: "/home",
			component: Home,
			meta: {
				forAuth: true
			}
		},
		{
			path: "/profile",
			component: Profile,
			meta: {
				forAuth: true
			}
		},
		{
			path: "/edit-profile",
			component: Editprofile,
			meta: {
				forAuth: true
			}
		},
		{
			path: "/feed",
			component: Feed,
			meta: {
				forAuth: true
			}
		},
		{
			path: "/terms-and-condition",
			component: Static,
			meta: {
				forVisitors: true
			}
		}
	],
	linkActiveClass: 'active'
})

export default router
