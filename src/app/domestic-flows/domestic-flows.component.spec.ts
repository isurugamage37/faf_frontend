import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticFlowsComponent } from './domestic-flows.component';

describe('DomesticFlowsComponent', () => {
  let component: DomesticFlowsComponent;
  let fixture: ComponentFixture<DomesticFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomesticFlowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
