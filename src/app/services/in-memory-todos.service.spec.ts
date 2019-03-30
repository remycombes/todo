import { TestBed } from '@angular/core/testing';

import { InMemoryTodosService } from './in-memory-todos.service';

describe('InMemoryTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryTodosService = TestBed.get(InMemoryTodosService);
    expect(service).toBeTruthy();
  });
});
