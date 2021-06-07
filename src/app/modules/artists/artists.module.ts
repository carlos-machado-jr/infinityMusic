import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { AlbumPage } from './pages/album/album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsPageRoutingModule
  ],
  declarations: [ArtistsPage, HeaderComponent, AlbumPage]
})
export class ArtistsPageModule {}
