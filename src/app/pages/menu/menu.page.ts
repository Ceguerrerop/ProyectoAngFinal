import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HelperService } from 'src/app/servicios/helper.service';
import { Menu } from 'src/app/models/menu';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { StorageService } from 'src/app/servicios/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})


export class MenuPage implements OnInit   {


  menuArray:Menu[]=[];
  mensaje: string = "";
  private animation!:Animation;




  constructor(private rutaActiva: ActivatedRoute,
              private router: Router,
              private servicio:HelperService,
              private animationCtrl: AnimationController, 
              private storage:StorageService,
              private auth:AngularFireAuth,
              ) { 
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['nombreUsuario']) {
        this.mensaje = params['nombreUsuario'];
      }
    });
  }

  
  async obtenerubi(){
    let ubicacion = await Geolocation.getCurrentPosition();
    let ubicaciontexto = "Latitud:"+ ubicacion.coords.latitude +" Longitud:"+ ubicacion.coords.longitude
    console.log(ubicacion)
    this.servicio.showToast(ubicaciontexto);


  }

  menuSerch(){
    this.menuArray.push(

      {
        id:1,
        img:"assets/img/qr.png",
        nombre:"Escanear codigo Qr",
        url:"/qr"

      },
      {
        id:2,
        img:"assets/img/asistencia.png",
        nombre:"Revisar asistencia",
        url:"/asistencia"
      }
    )
  }

 

  ngOnInit() {
    this.cargarUsuarios();
    this.servicio.showToast("Conectado con exito!");
  }

  async cargarUsuarios(){
    console.log("USUARIOS",await this.storage.obtenerUsuario())
  }

  ionViewWillEnter() {
    this.playAnimation();
  }

  playAnimation() {
    const animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-item"))
      .fill('none')
      .iterations(1)
      .duration(400)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(100%)', 'translateX(0)');
    animation.play();
  }

  async back() {
    var confirm = await this.servicio.showConfirm("Desea cerrar sesion?","Confirmar","Cancelar");
    if(confirm == true ) {
      this.router.navigateByUrl("login");
    }
  }

  asistencia() {
    this.router.navigate(['/asistencia']);
  }

  qr() {
    this.router.navigate(['/qr']);
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }

  play(){
    this.animation.play();
  }
  
  stop(){
    this.animation.stop();
  }
  gatos() {
    this.router.navigate(['/gatos']);
  }
}



