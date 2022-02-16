import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappoinmentComponent } from './addappoinment.component';

describe('AddappoinmentComponent', () => {
  let component: AddappoinmentComponent;
  let fixture: ComponentFixture<AddappoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddappoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
