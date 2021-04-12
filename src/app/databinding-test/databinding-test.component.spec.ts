import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingTestComponent } from './databinding-test.component';

describe('DatabindingTestComponent', () => {
  let component: DatabindingTestComponent;
  let fixture: ComponentFixture<DatabindingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
