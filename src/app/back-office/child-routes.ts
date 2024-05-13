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
  },
  {path: 'planning-changement',
  loadChildren: () => import('./planning-changement/planning-changement.module').then(m => m.PlanningChangementModule),
  data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: false }
  },
  
  {path: 'utilisateur',
  loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule),
  data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: false }
  }
];
