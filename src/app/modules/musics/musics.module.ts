import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MusicsPageRoutingModule } from './musics-routing.module';

import { MusicsPage } from './musics.page';
import { HeaderComponent } from '../../core/header/header.component';
import { MusicsService } from './musics.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicsPageRoutingModule,
    HttpClientModule
  ],
  providers:[MusicsService],
  declarations: [MusicsPage, HeaderComponent]
})
export class MusicsPageModule {}
