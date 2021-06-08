import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MusicsPageRoutingModule } from './musics-routing.module';

import { MusicsPage } from './musics.page';
import { HeaderComponent } from '../../core/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MusicsPage, HeaderComponent]
})
export class MusicsPageModule {}
