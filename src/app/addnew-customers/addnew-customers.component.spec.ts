import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCustomersComponent } from './addnew-customers.component';

describe('AddnewCustomersComponent', () => {
  let component: AddnewCustomersComponent;
  let fixture: ComponentFixture<AddnewCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
