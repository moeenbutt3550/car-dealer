const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'showroominformation', component: () => import('pages/ShowroomManagement/ShowroomInformation.vue') },
      { path: 'companyinformation', component: () => import('pages/CreateCompanyPages/CompanyInformation.vue') },
      { path: 'createcompanyuser', component: () => import('pages/CreateCompanyPages/CreateCompanyUser.vue') },
      { path: 'paymentpackage', component: () => import('pages/CreateCompanyPages/PaymentPackage.vue') },
      { path: 'paymentpackagetwo', component: () => import('pages/CreateCompanyPages/PaymentPackage2.vue') }

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
