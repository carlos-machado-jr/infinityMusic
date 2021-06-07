import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultSearchPage } from './result-search.page';

const routes: Routes = [
  {
    path: '',
    component: ResultSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultSearchPageRoutingModule {}
