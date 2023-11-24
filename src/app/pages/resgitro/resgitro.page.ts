import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { HelperService } from 'src/app/servicios/helper.service';
import { LocationService } from 'src/app/servicios/location.service';
import { StorageService } from 'src/app/servicios/storage.service';


@Component({
  selector: 'app-resgitro', 
  templateUrl: 'resgitro.page.html', 
  styleUrls: ['resgitro.page.scss'],
})
export class ResgitroPage implements OnInit {

  usuario:string="";
  nombre:string="";
  apellido:string="";
  contrasena:string="";
  correo:string="";
  regiones:Region[]=[];
  comunas:Comuna[]=[];
  regionSel:number = 0;
  comunaSel:number = 0;
  disabledComuna:boolean = true;

  regionFiltro:any;
  comunaFiltro:any;


  constructor( private router: Router
    ,private servicio:HelperService
    ,private auth:AngularFireAuth
    ,private storage:StorageService
    ,private locationService:LocationService ) {}

    ngOnInit() {
      this.cargarRegion();
    }
  
    async cargarRegion(){
      const req = await this.locationService.getRegion();
      this.regiones = req.data;
      
      
    }
  
    async cargarComuna(){
      try {
        const req = await this.locationService.getComuna(this.regionSel);
        this.comunas = req.data;
        this.disabledComuna = false;
      } catch (error:any) {
        await this.servicio.showAlert(error.error.msg,"Error");
      }
    }
    
    validarCampos(): boolean {
      if (this.correo === '' || this.contrasena === '' || this.usuario === '' || this.nombre === '' || this.apellido === '' || this.regionSel === 0 || this.comunaSel === 0) {
        this.servicio.showAlert("Todos los campos son obligatorios.", "Error");
        return false;
      }
      return true;
    }

  async registro(){

    if (!this.validarCampos()) {
      return;
    }

    const loader = await this.servicio.showLoader("Cargando");
    if (this.correo == '') {
      await loader.dismiss(); 
      await this.servicio.showAlert("Debe ingresar un correo","Error");
      return;
    }

    this.regionFiltro =this.regiones.filter(h => h.id==this.regionSel)[0].nombre;
    this.comunaFiltro =this.comunas.filter(h => h.id==this.comunaSel)[0].nombre;
    
    var user =
    [
      {
        correo:this.correo,
        contrasena:this.contrasena,
        usuario:this.usuario,
        nombre:this.nombre,
        apellido:this.apellido,
        region:this.regionFiltro,
        comuna:this.comunaFiltro
      }
    ]

    try {
    const request = await this.auth.createUserWithEmailAndPassword(this.correo,this.contrasena);
      this.storage.guardarUsuario(user);
    await this.router.navigateByUrl('login');
    await loader.dismiss(); 
    await this.servicio.showAlert("Usuario registrado correctamente","Información");  
    } catch (error:any) {
      if (error.code == 'auth/email-already-in-use') {
        await loader.dismiss();
        await this.servicio.showAlert("El correo ya se encuentra registrado.","Error");
      }
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.servicio.showAlert("El correo no es el correcto.","Error");
      }
    }    



   
    
  }
  
 
  


}
