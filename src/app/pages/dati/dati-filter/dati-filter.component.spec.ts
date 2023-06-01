import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiFilterComponent } from './dati-filter.component';

describe('DatiFilterComponent', () => {
  let component: DatiFilterComponent;
  let fixture: ComponentFixture<DatiFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatiFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
