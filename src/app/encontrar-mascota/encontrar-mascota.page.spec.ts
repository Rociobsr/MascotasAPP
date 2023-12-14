import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncontrarMascotaPage } from './encontrar-mascota.page';

describe('EncontrarMascotaPage', () => {
  let component: EncontrarMascotaPage;
  let fixture: ComponentFixture<EncontrarMascotaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EncontrarMascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
