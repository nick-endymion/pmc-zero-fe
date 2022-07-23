import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerFitsComponent } from './scanner-fits.component';

describe('ScannerFitsComponent', () => {
  let component: ScannerFitsComponent;
  let fixture: ComponentFixture<ScannerFitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerFitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerFitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
