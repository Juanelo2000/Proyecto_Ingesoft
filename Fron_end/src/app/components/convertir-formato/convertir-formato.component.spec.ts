import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertirFormatoComponent } from './convertir-formato.component';

describe('ConvertirFormatoComponent', () => {
  let component: ConvertirFormatoComponent;
  let fixture: ComponentFixture<ConvertirFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertirFormatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertirFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
