import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipv6Component } from './ipv6.component';

describe('Ipv6Component', () => {
  let component: Ipv6Component;
  let fixture: ComponentFixture<Ipv6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ipv6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ipv6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
