import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';


const keyStorageUser = "usuarioData";
const keyStorageAsistencia = "asistenciaData";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public correoUsuario:string = "";
  pelmazos:any;

  constructor(private authFire:AngularFireAuth,
              private servicio:HelperService) { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }


  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave, value:valor});
  }


  async obtenerUsuario(){
    const usuarios = await this.getItem(keyStorageUser);
    
    if(usuarios == null){
      return [];
    }

    const users = JSON.parse(usuarios)

    if(users){
      return users
    }
    else{
      return[];
    }
  }

  async guardarUsuario(usuario:any[]){
    const userStorage = await this.obtenerUsuario();
    for(const i of userStorage){
      if(i){
        usuario.push(i);
      }
    }
    this.setItem(keyStorageUser,JSON.stringify(usuario))

  }



  //asistencia
  async getAsistencia(clave: string): Promise<string | null> {
    try {
      const asi = await Preferences.get({ key: clave });
      return asi.value;
    } catch (error) {
      this.servicio.showAlert('Error al obtener la asistencia:', "error");
      return null;
    }
  }

  async setAsistencia(clave: string, contenido: string): Promise<void> {
    try {
      await Preferences.set({ key: clave, value: contenido });
    } catch (error) {
      this.servicio.showAlert('Error al enviar la asistencia:', "error");
    }
  }

  async obtenerAsistencia(): Promise<any[]> {
    const asst = await this.getAsistencia(keyStorageAsistencia);
    return asst ? JSON.parse(asst) : [];
  }


  async guardarAsistencia(presentes:any[]){
    try {
    const asistStorage = await this.obtenerAsistencia();
    this.pelmazos = await this.obtenerUsuario();


    const tokkent = await this.authFire.currentUser;
    const pelLogeado = this.pelmazos.find((e: {correo:string; }) => e.correo == tokkent?.email);
    
    if(pelLogeado){
      const pMail = pelLogeado.correo;
      let pelAsiste = false;

      for (const h of asistStorage){
        if (h.correo === pMail){
          pelAsiste = true;
          
          return;
        }else{
          presentes.push(h);
        }
      }
      await this.setAsistencia(keyStorageAsistencia,JSON.stringify(presentes));
    }
   } catch (error) {
    this.servicio.showAlert('Error al guardar la asistencia:', "error");
   }
 }
  
  

   

  

  
  


}
