import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPilotoComponent } from './nuevo-piloto.component';

describe('NuevoPilotoComponent', () => {
  let component: NuevoPilotoComponent;
  let fixture: ComponentFixture<NuevoPilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPilotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
