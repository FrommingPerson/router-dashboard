import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTableComponent } from './route-table.component';

describe('RouteTableComponent', () => {
  let component: RouteTableComponent;
  let fixture: ComponentFixture<RouteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
