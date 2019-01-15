import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjjGuardsComponent } from './bjj-guards.component';

describe('BjjGuardsComponent', () => {
  let component: BjjGuardsComponent;
  let fixture: ComponentFixture<BjjGuardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjjGuardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjjGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
