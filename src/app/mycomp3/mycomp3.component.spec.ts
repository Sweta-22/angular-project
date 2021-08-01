import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomp3Component } from './mycomp3.component';

describe('Mycomp3Component', () => {
  let component: Mycomp3Component;
  let fixture: ComponentFixture<Mycomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mycomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
