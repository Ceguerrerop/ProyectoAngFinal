import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router'; 
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { HelperService } from 'src/app/servicios/helper.service';
import { StorageService } from 'src/app/servicios/storage.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})




export class AsistenciaPage implements OnInit {

  dataAsis:any[]=[]
  private animation!:Animation;
  assitUs:any;
  

  constructor(private router: Router,
              private animationCtrl: AnimationController,
              private servicio:HelperService,
              private storage:StorageService,
              private authfire:AngularFireAuth) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.playAnimation();
  }

  async mostrarInfo() {
    try {
      this.assitUs = await this.storage.obtenerAsistencia();
      const pelTokken = await this.authfire.currentUser;
  
      if (this.assitUs && pelTokken && pelTokken.email) {
        const usPel = this.assitUs.find((e: { correo: string; }) => e.correo === pelTokken.email);
  
        if (usPel) {
          this.dataAsis.push(usPel);
        } else {
        
          this.servicio.showAlert('Usuario no encontrado en la lista de asistencia.',"error");
        }
      } else {
      
        this.servicio.showAlert("Datos de usuario o lista de asistencia nulos o incompletos.","error");
      }
    } catch (error) {
    
      this.servicio.showAlert('Error al obtener datos de asistencia:', "error");
    }
  }

  

  playAnimation() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .fill('none')
      .iterations(1)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(0,1)', opacity: '0,4' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '0,5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);
      this.animation.play()
  }


 
}
