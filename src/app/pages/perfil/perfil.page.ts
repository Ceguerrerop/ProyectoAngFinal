import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  usuario: any;
  usuarioFiltro:any;
  
 


  editarPerfil: boolean = false;

  constructor(
    private storage:StorageService,
    private auth:AngularFireAuth,
  ) { 
    

  }

  ngOnInit() {
    this.cargarUsuario();
  }


 

  async cargarUsuario(){
    this.usuario = await this.storage.obtenerUsuario();
    console.log("USUARIOS REGISTRADOS",this.usuario);
    var emailUserToken = await this.auth.currentUser;
    this.usuarioFiltro = this.usuario.filter((e: { correo: string; }) => e.correo == emailUserToken?.email);
    console.log("USUARIO FILTRADOS", this.usuarioFiltro);
}

habilitarEdicion() {
  this.editarPerfil = true;
}

guardarCambios() {

  this.editarPerfil = false;
}
}

