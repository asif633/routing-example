import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamsGrandChildComponent } from './query-params-grand-child.component';

describe('QueryParamsGrandChildComponent', () => {
  let component: QueryParamsGrandChildComponent;
  let fixture: ComponentFixture<QueryParamsGrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryParamsGrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParamsGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
