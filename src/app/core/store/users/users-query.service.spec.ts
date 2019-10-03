import { TestBed } from '@angular/core/testing';

import { UsersQueryService } from './users-query.service';

describe('UsersQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersQueryService = TestBed.get(UsersQueryService);
    expect(service).toBeTruthy();
  });
});
