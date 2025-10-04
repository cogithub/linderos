import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDashboard } from './data-dashboard';

describe('DataDashboard', () => {
  let component: DataDashboard;
  let fixture: ComponentFixture<DataDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
