import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultSearchPageRoutingModule } from './result-search-routing.module';

import { ResultSearchPage } from './result-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultSearchPageRoutingModule
  ],
  declarations: []
})
export class ResultSearchPageModule {}
