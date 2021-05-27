import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'musics',
    loadChildren: () => import('./modules/musics/musics.module').then( m => m.MusicsPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./modules/navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  
  {
    path: 'favorites',
    loadChildren: () => import('./modules/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },

  {
    path: '',
    redirectTo: 'musics',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
