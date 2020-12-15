import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaBaseComponent } from './nueva-base.component';

describe('NuevaBaseComponent', () => {
  let component: NuevaBaseComponent;
  let fixture: ComponentFixture<NuevaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
