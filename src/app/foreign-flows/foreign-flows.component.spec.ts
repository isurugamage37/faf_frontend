import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignFlowsComponent } from './foreign-flows.component';

describe('ForeignFlowsComponent', () => {
  let component: ForeignFlowsComponent;
  let fixture: ComponentFixture<ForeignFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignFlowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
