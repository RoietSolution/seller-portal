import { Routes } from '@angular/router';
import { Shell } from  './layout/shell/shell'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then(m => m.Shell),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard/dashboard').then(
            m => m.Dashboard
          )
      }
    ]
  }
];