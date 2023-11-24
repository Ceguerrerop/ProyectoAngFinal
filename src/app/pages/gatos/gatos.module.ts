import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { GatosPage } from './gatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, 
    RouterModule.forChild([
      {
        path: '',
        component: GatosPage
      }
    ])
  ],
  declarations: [GatosPage]
})
export class GatosPageModule {}
