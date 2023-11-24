import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatsService } from './cats.service';
import { AngularDelegate } from '@ionic/angular';

describe('CatsService', () => {
  let service: CatsService;
  let http:HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
        //los providers 
        providers: [CatsService, AngularDelegate],
        imports: [HttpClientTestingModule],
      });     

    service = TestBed.inject(CatsService);
    http = TestBed.inject(HttpClientTestingModule);
  });

   it('should be created', () => {
    expect(service).toBeTruthy();
    
  }); 
});
