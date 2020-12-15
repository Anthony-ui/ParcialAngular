import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMantenimientoComponent } from './nuevo-mantenimiento.component';

describe('NuevoMantenimientoComponent', () => {
  let component: NuevoMantenimientoComponent;
  let fixture: ComponentFixture<NuevoMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
