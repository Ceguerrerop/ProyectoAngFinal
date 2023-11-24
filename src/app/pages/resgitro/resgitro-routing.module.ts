import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgitroPage } from './resgitro.page';

const routes: Routes = [
  {
    path: '',
    component: ResgitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgitroPageRoutingModule {}
