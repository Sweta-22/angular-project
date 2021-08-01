import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycom4Component } from './mycom4.component';

describe('Mycom4Component', () => {
  let component: Mycom4Component;
  let fixture: ComponentFixture<Mycom4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mycom4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
