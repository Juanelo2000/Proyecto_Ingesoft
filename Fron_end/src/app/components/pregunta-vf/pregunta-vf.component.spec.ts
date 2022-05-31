import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaVfComponent } from './pregunta-vf.component';

describe('PreguntaVfComponent', () => {
  let component: PreguntaVfComponent;
  let fixture: ComponentFixture<PreguntaVfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaVfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaVfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
