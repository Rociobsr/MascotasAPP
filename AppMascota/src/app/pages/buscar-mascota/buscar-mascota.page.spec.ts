import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarMascotaPage } from './buscar-mascota.page';

describe('BuscarMascotaPage', () => {
  let component: BuscarMascotaPage;
  let fixture: ComponentFixture<BuscarMascotaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscarMascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
