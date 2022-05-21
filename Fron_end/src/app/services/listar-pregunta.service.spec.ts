import { TestBed } from '@angular/core/testing';

import { ListarPreguntaService } from './listar-pregunta.service';

describe('ListarPreguntaService', () => {
  let service: ListarPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
