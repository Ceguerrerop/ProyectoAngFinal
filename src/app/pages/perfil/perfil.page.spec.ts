import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('PerfilUsuarioPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,], 
    });


    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    component.usuarioFiltro = [{ nombre: 'John', apellido: 'Doe' }];
    fixture.detectChanges();
    const cardHeader = fixture.nativeElement.querySelector('.card-header');
    expect(cardHeader.textContent).toContain('John Doe');
  });
  
  it('should display user email', () => {
    component.usuarioFiltro = [{ correo: 'john.doe@example.com'}];
    fixture.detectChanges();
    const cardItem = fixture.nativeElement.querySelector('.card-item:nth-child(1)');
    expect(cardItem.textContent).toContain('john.doe@example.com');
  });
});
