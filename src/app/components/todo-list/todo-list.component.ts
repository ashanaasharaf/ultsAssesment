import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/services/app-services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listData: any = [];
  isDeleted:boolean=false;
  isPriorities:boolean=false;

  constructor(private appServices: AppServicesService, private toaster: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.listData = this.appServices.getTodoList();
    console.log(this.listData, "data")
  }

  /*function to delete the todo data from todo list*/
  todoDelete(item: any) {
    this.appServices.deleteTodos(item);
    this.isDeleted=true;
    this.toaster.error('Task Deleted Successfully')
  }

  /*function to mark the completed task in todolist*/

  checkData(event: any,checkValue:any) {
    let checkToUpdate = this.listData.findIndex((item:any) => item.id === event);
    if(checkValue.target.checked == true){
      this.listData[checkToUpdate].isCompleted =true;
    }else{
      this.listData[checkToUpdate].isCompleted =false;
    } 
    this.appServices.setData(this.listData)
    
  }
  

  /*function to work the edit section*/
  todoUpdate(data:any){
    this.router.navigate(['update/',data.id])
  }

  /*function to priority the task in todolist*/
  priorityData(event:any){
    let checkToPriority = this.listData.findIndex((item:any) => item.id === event);
    this.listData[checkToPriority].isPriority= !this.listData[checkToPriority].isPriority;
    this.appServices.setData(this.listData);
  }

  ngAferContentChecked(){
    this.appServices.data.subscribe((data:any)=>{
      this.listData=data
    })
  }

}
