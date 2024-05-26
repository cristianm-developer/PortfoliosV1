import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container3dComponent } from './container3d.component';

describe('Container3dComponent', () => {
  let component: Container3dComponent;
  let fixture: ComponentFixture<Container3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Container3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Container3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
