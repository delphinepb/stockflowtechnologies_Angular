import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAjouterProduitComponent } from './dialog-ajouter-produit.component';

describe('DialogAjouterProduitComponent', () => {
  let component: DialogAjouterProduitComponent;
  let fixture: ComponentFixture<DialogAjouterProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAjouterProduitComponent]
    });
    fixture = TestBed.createComponent(DialogAjouterProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
