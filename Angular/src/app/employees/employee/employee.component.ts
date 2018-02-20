import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm) {
    if(form != null)
    form.reset();
    this.employeeService.selectedEmployee = {
      id : null,
      FirstName : '',
      LastName : '',
      EmpCode : '',
      Position : '',
      Office : ''
    }
  }
/**
 * 
 * @param form 
 */
  onSubmit(form :NgForm) {
    if(form.value.id == null) {
      this.employeeService.postEmployee(form.value)
      .subscribe(data =>{
        this.resetForm(form);
        this.employeeService.getEmployeeList();
        this.toastr.success('New Record Added sSuiccessfully','Employee Register')
      })
    } else {
      this.employeeService.putEmployee(form.value.id,form.value)
      .subscribe(data =>{
        this.resetForm(form);
        this.employeeService.getEmployeeList();
        this.toastr.info('Record Updated Successfully','Employee Register')
      })
    }
  }
}
