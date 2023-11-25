import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { BehaviorSubject } from 'rxjs';
import { IonicModule, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ActivatedRoute } from '@angular/router';

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

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
      declarations: [RecuperarPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },ModalController
      ],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
    });

    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
