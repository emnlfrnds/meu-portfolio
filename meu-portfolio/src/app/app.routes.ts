import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'sobremim',
    loadComponent: () => import('./features/sobre-mim/sobre-mim').then((m) => m.SobreMim),
  },
  {
    path: 'projetos',
    loadComponent: () => import('./features/projetos/projetos').then((m) => m.Projetos),
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contato/contato').then((m) => m.Contato),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
