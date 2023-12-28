import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPermisoComponent } from './admin-permiso.component';

describe('AdminPermisoComponent', () => {
  let component: AdminPermisoComponent;
  let fixture: ComponentFixture<AdminPermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPermisoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
