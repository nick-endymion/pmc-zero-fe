import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnsViewComponent } from './tns-view.component';

describe('TnsViewComponent', () => {
  let component: TnsViewComponent;
  let fixture: ComponentFixture<TnsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
