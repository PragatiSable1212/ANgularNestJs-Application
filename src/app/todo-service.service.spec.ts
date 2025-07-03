import { TodoServiceService } from "./todo-service.service";
import { TestBed } from '@angular/core/testing';

describe('TodoServiceService', () => {
  let service: TodoServiceService;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
  fixture=  TestBed.createComponent(TodoServiceService);
  fixture.detectChanges();

});
it('should add two numbers', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });

   
    });


  

