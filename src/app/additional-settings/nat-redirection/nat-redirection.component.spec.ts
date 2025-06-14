import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatRedirectionComponent } from './nat-redirection.component';

describe('NatRedirectionComponent', () => {
  let component: NatRedirectionComponent;
  let fixture: ComponentFixture<NatRedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatRedirectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NatRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
