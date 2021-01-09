import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoasterComponent } from './employee-roaster.component';

describe('EmployeeRoasterComponent', () => {
  let component: EmployeeRoasterComponent;
  let fixture: ComponentFixture<EmployeeRoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
