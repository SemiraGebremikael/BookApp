import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QutotesComponent } from './qutotes-component';

describe('QutotesComponent', () => {
  let component: QutotesComponent;
  let fixture: ComponentFixture<QutotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QutotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QutotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
