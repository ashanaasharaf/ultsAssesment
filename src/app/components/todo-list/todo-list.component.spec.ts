import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from 'src/app/common/header/header.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent,HeaderComponent],
      imports: [ToastrModule.forRoot()],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('expect "todoDelete" to delete todoList item',()=>{
    component.todoDelete(1);
    expect(component.isDeleted).toEqual(true);
  });

  it('expect "checkData" if checkValue equal to true',()=>{
    component.checkData(1,{target:true});
    expect(component.listData.length).toEqual(3);
  });

  it('expect "checkData" if checkValue equal to false',()=>{
    component.checkData(1,{target:false});
    expect(component.listData[1].isCompleted).toEqual(false);
  });  

  it('expect "priorityData" to priorities todo value',()=>{
    component.priorityData(1);
    expect(component.listData[1].isPriority).toEqual(true);
  });

});

































































































































































































































