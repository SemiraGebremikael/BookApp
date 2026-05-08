import { TestBed } from '@angular/core/testing';

import { QutoeServices } from './qutoe-services';

describe('QutoeServices', () => {
  let service: QutoeServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QutoeServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
