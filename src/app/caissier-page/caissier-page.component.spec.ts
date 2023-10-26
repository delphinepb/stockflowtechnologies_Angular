import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissierPageComponent } from './caissier-page.component';

describe('CaissierPageComponent', () => {
  let component: CaissierPageComponent;
  let fixture: ComponentFixture<CaissierPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaissierPageComponent]
    });
    fixture = TestBed.createComponent(CaissierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
