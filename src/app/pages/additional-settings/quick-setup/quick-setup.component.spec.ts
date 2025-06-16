import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSetupComponent } from './quick-setup.component';

describe('QuickSetupComponent', () => {
  let component: QuickSetupComponent;
  let fixture: ComponentFixture<QuickSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
