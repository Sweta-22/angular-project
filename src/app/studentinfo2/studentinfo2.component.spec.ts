import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentinfo2Component } from './studentinfo2.component';

describe('Studentinfo2Component', () => {
  let component: Studentinfo2Component;
  let fixture: ComponentFixture<Studentinfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studentinfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Studentinfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
