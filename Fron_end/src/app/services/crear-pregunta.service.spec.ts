import { TestBed } from '@angular/core/testing';

import { CrearPreguntaService } from './crear-pregunta.service';

describe('CrearPreguntaService', () => {
  let service: CrearPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
