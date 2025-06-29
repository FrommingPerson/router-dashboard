import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSettingsComponent } from './additional-settings.component';

describe('AdditionalSettingsComponent', () => {
  let component: AdditionalSettingsComponent;
  let fixture: ComponentFixture<AdditionalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
