import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoasterComponent } from './create-roaster.component';

describe('CreateRoasterComponent', () => {
  let component: CreateRoasterComponent;
  let fixture: ComponentFixture<CreateRoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
