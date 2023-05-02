import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPrestamosComponent } from './gestionar-prestamos.component';

describe('GestionarPrestamosComponent', () => {
  let component: GestionarPrestamosComponent;
  let fixture: ComponentFixture<GestionarPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarPrestamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
