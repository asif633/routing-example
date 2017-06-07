import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamsChildComponent } from './query-params-child.component';

describe('QueryParamsChildComponent', () => {
  let component: QueryParamsChildComponent;
  let fixture: ComponentFixture<QueryParamsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryParamsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParamsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
