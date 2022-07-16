import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsetComponent } from './mset.component';

describe('MsetComponent', () => {
  let component: MsetComponent;
  let fixture: ComponentFixture<MsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
