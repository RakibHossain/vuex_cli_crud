import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import routing components
import Home from './components/Home.vue'
import Form from './components/views/Form.vue'
import Todos from './components/views/Todos.vue'

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ 
			path: '/', 
			component: Home, 
			name: 'home'
		},
		{ 
			path: '/vuex', 
			component: Form, 
			name: 'vuex'
		},
		{ 
			path: '/axios', 
			component: Todos, 
			name: 'axios'
		},
	]
})

export default router
