import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTripulacionComponent } from './nueva-tripulacion.component';

describe('NuevaTripulacionComponent', () => {
  let component: NuevaTripulacionComponent;
  let fixture: ComponentFixture<NuevaTripulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTripulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTripulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
