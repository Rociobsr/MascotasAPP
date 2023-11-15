import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearBusquedaPage } from './crear-busqueda.page';

describe('CrearBusquedaPage', () => {
  let component: CrearBusquedaPage;
  let fixture: ComponentFixture<CrearBusquedaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
