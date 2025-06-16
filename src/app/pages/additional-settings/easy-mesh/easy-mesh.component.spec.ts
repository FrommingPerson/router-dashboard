import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyMeshComponent } from './easy-mesh.component';

describe('EasyMeshComponent', () => {
  let component: EasyMeshComponent;
  let fixture: ComponentFixture<EasyMeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EasyMeshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
