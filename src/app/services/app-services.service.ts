import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor() { }

  todoList: any = [
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

  private dataSource=new BehaviorSubject<any>(this.todoList);
  data=this.dataSource.asObservable();

  setData(datum:any):void{
    console.log(datum,"uu")
    this.dataSource.next(datum);

  }

  ngOnDestroy(){
    this.dataSource.complete();
  }

  /*function for list the todolist*/
  getTodoList() {
    return this.todoList;
  }

  /*function for delete theitem from todolist*/
  deleteTodos(item: any) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  /*function for add the item to todo list*/

  addTodo(value: any) {
    let id = this.todoList.length + 2;
    const item: any = {
      id: id,
      title: value?.todo,
      isCompleted: false,
      date: new Date(),
    }
    this.todoList.unshift(item)

  }

  /*function for update the todolist*/

  updateTodo(value:any){
    let indexToUpdate = this.todoList.findIndex((item:any) => item.id === value.id);
    this.todoList[indexToUpdate].title = value.todo;
  }


}
