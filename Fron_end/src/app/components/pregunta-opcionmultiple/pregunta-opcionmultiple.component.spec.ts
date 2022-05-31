import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaOpcionmultipleComponent } from './pregunta-opcionmultiple.component';

describe('PreguntaOpcionmultipleComponent', () => {
  let component: PreguntaOpcionmultipleComponent;
  let fixture: ComponentFixture<PreguntaOpcionmultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaOpcionmultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaOpcionmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
