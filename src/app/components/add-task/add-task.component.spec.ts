import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from '../todo-list/todo-list.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent,HeaderComponent],
      imports:[ToastrModule.forRoot(), RouterModule.forRoot([]),FormsModule,ReactiveFormsModule,RouterTestingModule.withRoutes([
        { path: 'view', component:TodoListComponent }
    ])]
    });
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect "onSubmit" to create todo data', () => {
    component.myForm.patchValue({
      todo:"asd"
    })
    component.onSubmit();
    expect(component.formSubmitted).toEqual(false);
  });

  it('expect "onSubmit" to update todo data', () => {
    component.updateData=1;
    component.myForm.patchValue({
      todo:"xyz"
    })
    component.onSubmit();
    expect(component.formSubmitted).toEqual(false);
  });

  it('expect "onSubmit" if form is invalid', () => {;
    component.myForm.patchValue({
      key:"xyz"
    })
    component.onSubmit();
    expect(component.formSubmitted).toEqual(true);
  });

  
});
