import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTripulacionesComponent } from './lista-tripulaciones.component';

describe('ListaTripulacionesComponent', () => {
  let component: ListaTripulacionesComponent;
  let fixture: ComponentFixture<ListaTripulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTripulacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTripulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
