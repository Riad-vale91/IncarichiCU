import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegatiListComponent } from './allegati-list.component';

describe('AllegatiListComponent', () => {
  let component: AllegatiListComponent;
  let fixture: ComponentFixture<AllegatiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllegatiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllegatiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
