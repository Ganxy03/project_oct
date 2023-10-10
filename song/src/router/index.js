import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    redirect: '/home',
    children: [
      { path: 'home', name: 'home', component: () => import('../views/HomeView.vue') },
      { path: 'about', name: 'about', component: () => import('../views/AboutView.vue') },
      { path: 'listen', name: 'listen', component: () => import('../views/ListenView.vue') },
      { path: 'story', name: 'story', component: () => import('../views/StoryView.vue') },
      { path: 'yiyan', name: 'yiyan', component: () => import('../views/YiYan.vue') },
      { path: 'result', name: 'result', component: () => import('../views/ResultView.vue') },
    ]
  },
  // {
  //   path: '/main',
  //   name: 'main',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
