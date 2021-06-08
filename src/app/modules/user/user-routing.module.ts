import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'playlists',
    loadChildren: () => import('./pages/playlists/playlists.module').then( m => m.PlaylistsPageModule)
  },
  {
    path: 'playlists/:id',
    loadChildren: () => import('./pages/playlists/playlists.module').then( m => m.PlaylistsPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
