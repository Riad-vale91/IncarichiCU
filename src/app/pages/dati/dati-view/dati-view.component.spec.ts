import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiViewComponent } from './dati-view.component';

describe('DatiViewComponent', () => {
  let component: DatiViewComponent;
  let fixture: ComponentFixture<DatiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatiViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
