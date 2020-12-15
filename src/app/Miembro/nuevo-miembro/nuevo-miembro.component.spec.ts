import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMiembroComponent } from './nuevo-miembro.component';

describe('NuevoMiembroComponent', () => {
  let component: NuevoMiembroComponent;
  let fixture: ComponentFixture<NuevoMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMiembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
