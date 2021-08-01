import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomp5Component } from './mycomp5.component';

describe('Mycomp5Component', () => {
  let component: Mycomp5Component;
  let fixture: ComponentFixture<Mycomp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mycomp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
