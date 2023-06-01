import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegatiViewComponent } from './allegati-view.component';

describe('AllegatiViewComponent', () => {
  let component: AllegatiViewComponent;
  let fixture: ComponentFixture<AllegatiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllegatiViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllegatiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
