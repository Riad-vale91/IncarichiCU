import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiListComponent } from './dati-list.component';

describe('DatiListComponent', () => {
  let component: DatiListComponent;
  let fixture: ComponentFixture<DatiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
