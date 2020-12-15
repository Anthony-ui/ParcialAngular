import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVueloComponent } from './nuevo-vuelo.component';

describe('NuevoVueloComponent', () => {
  let component: NuevoVueloComponent;
  let fixture: ComponentFixture<NuevoVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
