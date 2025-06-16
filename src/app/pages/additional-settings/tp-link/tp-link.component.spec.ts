import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpLinkComponent } from './tp-link.component';

describe('TpLinkComponent', () => {
  let component: TpLinkComponent;
  let fixture: ComponentFixture<TpLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TpLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
