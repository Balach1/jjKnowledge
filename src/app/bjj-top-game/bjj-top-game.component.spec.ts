import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjjTopGameComponent } from './bjj-top-game.component';

describe('BjjTopGameComponent', () => {
  let component: BjjTopGameComponent;
  let fixture: ComponentFixture<BjjTopGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjjTopGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjjTopGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
