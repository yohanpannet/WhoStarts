import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickFirstPlayerComponent } from './pick-first-player.component';

describe('PickFirstPlayerComponent', () => {
  let component: PickFirstPlayerComponent;
  let fixture: ComponentFixture<PickFirstPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickFirstPlayerComponent]
    });
    fixture = TestBed.createComponent(PickFirstPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
