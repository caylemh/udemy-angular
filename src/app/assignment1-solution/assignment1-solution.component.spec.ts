import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1SolutionComponent } from './assignment1-solution.component';

describe('Assignment1SolutionComponent', () => {
  let component: Assignment1SolutionComponent;
  let fixture: ComponentFixture<Assignment1SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment1SolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment1SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
