import { TestBed } from '@angular/core/testing';

import { ResourceStoreService } from './resource-store.service';

describe('ResourceStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceStoreService = TestBed.get(ResourceStoreService);
    expect(service).toBeTruthy();
  });
});
