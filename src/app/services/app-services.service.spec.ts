import { TestBed } from '@angular/core/testing';

import { AppServicesService } from './app-services.service';

describe('AppServicesService', () => {
  let service: AppServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expect "getTodoList" to set todoList',()=>{
    let todoList= [
      {
        id: 1,
        title: 'Task One',
        isCompleted: false,
        isPriority:false,
        date: new Date('4-15-2020')
      },
      {
        id: 2,
        title: 'Task Two',
        isCompleted: false,
        isPriority:true,
        date: new Date('5-15-2020')
      },
      {
        id: 3,
        title: 'Task Three',
        isCompleted: true,
        isPriority:false,
        date: new Date('6-15-2020')
      }
    ];
  
    service.getTodoList();
    expect(service.todoList).toEqual(todoList);
  });

  it('expect "deleteTodos" to delete todoList item',()=>{
    service.deleteTodos(1);
    expect(service.todoList.length).toEqual(2);
  });

  it('expect "addTodo" to add todo items',()=>{
    let value="xyz";
    service.addTodo(value);
    expect(service.todoList.length).toEqual(4);
  });

  it('expect "updateTodo" to update todo items',()=>{
    let value={
      id:1,
      todo:"xyz"
    }
    service.addTodo(value);
    expect(service.todoList[1].id).toEqual(value.id);
  });



});
