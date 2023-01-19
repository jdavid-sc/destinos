import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseEjecutivaComponent } from './clase-ejecutiva.component';

describe('ClaseEjecutivaComponent', () => {
  let component: ClaseEjecutivaComponent;
  let fixture: ComponentFixture<ClaseEjecutivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseEjecutivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaseEjecutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
