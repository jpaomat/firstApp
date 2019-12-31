import { TestBed } from '@angular/core/testing';

import { TodoModelService } from './todo-model.service';

describe('TodoModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoModelService = TestBed.get(TodoModelService);
    expect(service).toBeTruthy();
  });
});
