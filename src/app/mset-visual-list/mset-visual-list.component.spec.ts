import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsetVisualListComponent } from './mset-visual-list.component';

describe('MsetVisualListComponent', () => {
  let component: MsetVisualListComponent;
  let fixture: ComponentFixture<MsetVisualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsetVisualListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsetVisualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
