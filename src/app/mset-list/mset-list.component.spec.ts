import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsetListComponent } from './mset-list.component';

describe('MsetListComponent', () => {
  let component: MsetListComponent;
  let fixture: ComponentFixture<MsetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
