import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResgitroPage } from './resgitro.page';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResgitroPage', () => {
  let component: ResgitroPage;
  let fixture: ComponentFixture<ResgitroPage>;
  let http:HttpClientTestingModule;
  
    beforeEach(() => {
      const activatedRouteStub = {
        snapshot: {
          params: {
            idempleado: true
          },
        },
        paramMap: new BehaviorSubject({}),
      };
  
      TestBed.configureTestingModule({
        declarations: [ResgitroPage],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },ModalController
        ],
        imports: [
          IonicModule.forRoot(),
          AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFireAuthModule,HttpClientTestingModule
        ],
      });
    fixture = TestBed.createComponent(ResgitroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpClientTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
