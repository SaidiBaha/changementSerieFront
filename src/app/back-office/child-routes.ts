export const childRoutes = [
  {path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },
  {path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: false }
  }
];
