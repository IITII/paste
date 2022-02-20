const loginRoutes = {
    path: '/', name: 'login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {path: 'login', alias: '', component: () => import('pages/public/Login.vue')},
      // {path: 'register', component: () => import('pages/public/Login.vue')},
    ]
  },
  userRoutes = {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')}
    ]
  },
  adminRoutes = {
    path: '/github',
    component: () => import('layouts/GithubLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')}
    ]
  }

const routes = [
  loginRoutes,
  userRoutes,
  adminRoutes,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*', name: '404',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
