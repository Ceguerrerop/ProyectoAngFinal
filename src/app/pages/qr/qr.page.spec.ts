import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPage } from './qr.page';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('QrPage', () => {
  let component: QrPage;
  let fixture: ComponentFixture<QrPage>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        params: {
          idempleado: 123
        },
      },
      paramMap: new BehaviorSubject({}),
    };

    TestBed.configureTestingModule({
      declarations: [QrPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },ModalController
      ],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
    });



    fixture = TestBed.createComponent(QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

