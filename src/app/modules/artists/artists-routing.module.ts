import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsPage } from './artists.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsPage
  },
  {
    path: 'album',
    loadChildren: () => import('./pages/album/album.module').then( m => m.AlbumPageModule)
  },
  {
    path: 'album/:id',
    loadChildren: () => import('./pages/album/album.module').then( m => m.AlbumPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsPageRoutingModule {}
