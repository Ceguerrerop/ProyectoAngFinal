import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarQRPage } from './confirmar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarQRPageRoutingModule {}
