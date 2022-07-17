import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerializedScannerComponent } from './serialized-scanner.component';

describe('SerializedScannerComponent', () => {
  let component: SerializedScannerComponent;
  let fixture: ComponentFixture<SerializedScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerializedScannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerializedScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
