import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionLogin = () => redirectUnauthorizedTo(['/login'])

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'resgitro',
    loadChildren: () => import('./pages/resgitro/resgitro.module').then( m => m.ResgitroPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'confirmar-qr',
    loadChildren: () => import('./modals/confirmar-qr/confirmar-qr.module').then( m => m.ConfirmarQRPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'gatos',
    loadChildren: () => import('./pages/gatos/gatos.module').then( m => m.GatosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
