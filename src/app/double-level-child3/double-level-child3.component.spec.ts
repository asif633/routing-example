import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLevelChild3Component } from './double-level-child3.component';

describe('DoubleLevelChild3Component', () => {
  let component: DoubleLevelChild3Component;
  let fixture: ComponentFixture<DoubleLevelChild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleLevelChild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLevelChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
