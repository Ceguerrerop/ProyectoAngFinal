import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarQRPage } from './confirmar-qr.page';
import { IonicModule, ModalController } from '@ionic/angular';

describe('ConfirmarQRPage', () => {
  let component: ConfirmarQRPage;
  let fixture: ComponentFixture<ConfirmarQRPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarQRPage],
      imports: [IonicModule.forRoot()],  
      providers: [ModalController],       
    });
    
    fixture = TestBed.createComponent(ConfirmarQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  });
});
