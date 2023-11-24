import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/servicios/helper.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ConfirmarQRPage } from 'src/app/modals/confirmar-qr/confirmar-qr.page';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { StorageService } from 'src/app/servicios/storage.service';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  parametroIdEmpleado:number | undefined;
  constructor(private activatedRoute:ActivatedRoute,
              private helper:HelperService,
              private storage:StorageService,
              private servicio:HelperService) { } 


  async scan(){
    var resultadoQr = (await BarcodeScanner.scan()).code;
    if (resultadoQr) {
      var qrInfo=JSON.parse(resultadoQr)
      console.log ("Qr", JSON.parse(resultadoQr));
      
    }
  
    var infoQr = [];
    infoQr.push(
                {
                  asignatura:qrInfo.asignatura,
                  docente:qrInfo.docente,
                  fecha:qrInfo.fecha,
                  horario:qrInfo.hora,
                  clase:qrInfo.leccion,
                  sala:qrInfo.sala,
                  seccion:qrInfo.seccion
                  
                }
              );

              const parametros = {dataQr:infoQr};
    
    this.helper.showModal(ConfirmarQRPage,parametros);
    this.storage.guardarAsistencia(infoQr);
    await this.servicio.showToast('Asistencia guardada correctamente');
  } 
  ngOnInit() {
    
    
  }       
  
  
}
