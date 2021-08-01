import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentinfo1Component } from './studentinfo1.component';

describe('Studentinfo1Component', () => {
  let component: Studentinfo1Component;
  let fixture: ComponentFixture<Studentinfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studentinfo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Studentinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
