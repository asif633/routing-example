import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLevelComponent } from './double-level.component';

describe('DoubleLevelComponent', () => {
  let component: DoubleLevelComponent;
  let fixture: ComponentFixture<DoubleLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
