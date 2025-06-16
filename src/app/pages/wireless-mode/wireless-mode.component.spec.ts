import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessModeComponent } from './wireless-mode.component';

describe('WirelessModeComponent', () => {
  let component: WirelessModeComponent;
  let fixture: ComponentFixture<WirelessModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WirelessModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WirelessModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
