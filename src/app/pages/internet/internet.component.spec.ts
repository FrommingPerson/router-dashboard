import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetComponent } from './internet.component';

describe('InternetComponent', () => {
  let component: InternetComponent;
  let fixture: ComponentFixture<InternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
