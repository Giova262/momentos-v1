const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'infinite-scroll', component: () => import('pages/InfiniteScrollPage.vue') },
      { path: 'account_balance', component: () => import('pages/AccountingPage.vue') },
      // { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      // { path: 'settings', component: () => import('pages/SettingsPage.vue') },
      // { path: 'help', component: () => import('pages/HelpPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
