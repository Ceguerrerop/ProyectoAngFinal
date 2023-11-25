import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  const activatedRouteStub = {
    queryParams: new BehaviorSubject({}),
    snapshot: { paramMap: { get: () => 'hola' } }
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MenuPage],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,], 
      providers: [ModalController,{ provide: ActivatedRoute, useValue: activatedRouteStub },],       
    });



    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

