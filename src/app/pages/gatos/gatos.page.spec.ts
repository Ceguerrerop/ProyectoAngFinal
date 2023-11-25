import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatosPage } from './gatos.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatsService } from 'src/app/servicios/cats.service';
import { AngularDelegate } from '@ionic/angular';

describe('GatosPage', () => {
  let service: CatsService;
  let component: GatosPage;
  let fixture: ComponentFixture<GatosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatsService, AngularDelegate],
      imports: [HttpClientTestingModule],
    });     

    service = TestBed.inject(CatsService);
    fixture = TestBed.createComponent(GatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
