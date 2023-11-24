import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarQRPageRoutingModule } from './confirmar-qr-routing.module';

import { ConfirmarQRPage } from './confirmar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarQRPageRoutingModule
  ],
  declarations: [ConfirmarQRPage]
})
export class ConfirmarQRPageModule {}
