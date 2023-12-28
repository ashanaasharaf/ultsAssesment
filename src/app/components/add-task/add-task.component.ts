import { Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppServicesService } from 'src/app/services/app-services.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  constructor(private fb:FormBuilder,private appservices:AppServicesService,private toastr:ToastrService,private route:ActivatedRoute,private router:Router){}
  
  myForm!:FormGroup;
  formSubmitted:boolean=false;
  updateData:any;

  ngOnInit(): void {
    this.myForm=this.fb.group({
      todo:['',Validators.required]
    })
    this.route.params.subscribe(params => {
      this.updateData= params['id']; 
    });
    if(this.updateData){
      this.appservices.getTodoList().filter((res:any)=>{
        if(res?.id == this.updateData){
          this.myForm.patchValue({
            todo:res?.title
          })
        }
      })
    }

  }

  // *function for form submition*/
  onSubmit(){
    this.formSubmitted=true
    if(this.myForm.valid){
      if(this.updateData){
        var data={
          id:Number(this.updateData),
          todo:this.myForm.value.todo
        }
        this.appservices.updateTodo(data)
        this.toastr.success("Item Updated Successfully");
      }else{
      this.appservices.addTodo(this.myForm.value)
      this.toastr.success("Item Added Successfully")
      }
      this.formSubmitted=false;
      this.myForm.reset(); 
      this.router.navigate(['/view'])
    }
  }
}
