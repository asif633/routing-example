import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLevelChild1Component } from './double-level-child1.component';

describe('DoubleLevelChild1Component', () => {
  let component: DoubleLevelChild1Component;
  let fixture: ComponentFixture<DoubleLevelChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleLevelChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLevelChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
