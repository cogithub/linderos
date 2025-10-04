import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipFactConsumerComponent } from './zip-fact-consumer-component';

describe('ZipFactConsumerComponent', () => {
  let component: ZipFactConsumerComponent;
  let fixture: ComponentFixture<ZipFactConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipFactConsumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipFactConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
