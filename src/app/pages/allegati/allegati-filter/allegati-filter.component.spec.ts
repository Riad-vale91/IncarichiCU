import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegatiFilterComponent } from './allegati-filter.component';

describe('AllegatiFilterComponent', () => {
  let component: AllegatiFilterComponent;
  let fixture: ComponentFixture<AllegatiFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllegatiFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllegatiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
