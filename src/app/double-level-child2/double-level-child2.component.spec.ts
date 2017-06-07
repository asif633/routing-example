import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLevelChild2Component } from './double-level-child2.component';

describe('DoubleLevelChild2Component', () => {
  let component: DoubleLevelChild2Component;
  let fixture: ComponentFixture<DoubleLevelChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleLevelChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLevelChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
