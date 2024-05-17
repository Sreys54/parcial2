/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PinguinosService } from './pinguinos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Pinguinos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PinguinosService]
    });
  });

  it('should ...', inject([PinguinosService], (service: PinguinosService) => {
    expect(service).toBeTruthy();
  }));
});
