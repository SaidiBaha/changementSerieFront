export const childRoutes = [
  {path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },
  {path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: false }
  },
  {path: 'management',
  loadChildren: () => import('./management/management.module').then(m => m.ManagementModule),
  data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: false }
},
  {path: 'checklist',
  loadChildren: () => import('./checklist/checklist.module').then(m => m.ChecklistModule),
  data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: false }
  }
];
