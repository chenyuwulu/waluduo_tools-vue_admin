import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const baseRouters = [
	{//如果什么都不带，默认进login
		path: '/',
		redirect: '/login'
	},{//去login页面
		path: '/login',
		name: 'login',
		component: () => import ('@/view/login/login.vue')
	},{//去注册页面
		path: '/register',
		name: 'register',
		component: () => import ('@/view/login/register.vue')
	}
]

// 需要通过后台数据来生成的组件

const createRouter = () => new Router({
	routes: baseRouters
})

const router = createRouter()

export default router