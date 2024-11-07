import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyUiLibComponent } from './dummy-ui-lib.component';

describe('DummyUiLibComponent', () => {
  let component: DummyUiLibComponent;
  let fixture: ComponentFixture<DummyUiLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyUiLibComponent]
    });
    fixture = TestBed.createComponent(DummyUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
