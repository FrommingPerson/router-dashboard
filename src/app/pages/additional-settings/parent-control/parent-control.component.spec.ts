import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentControlComponent } from './parent-control.component';

describe('ParentControlComponent', () => {
  let component: ParentControlComponent;
  let fixture: ComponentFixture<ParentControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
