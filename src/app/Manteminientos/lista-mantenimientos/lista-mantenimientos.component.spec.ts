import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMantenimientosComponent } from './lista-mantenimientos.component';

describe('ListaMantenimientosComponent', () => {
  let component: ListaMantenimientosComponent;
  let fixture: ComponentFixture<ListaMantenimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMantenimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMantenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
