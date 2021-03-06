import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee : Employee;
  employeeList :Employee[];

  constructor(private http : Http) { }
// Posts the form inputs to create a new Employee
/**
 * 
 * @param emp 
 */
  postEmployee(emp :Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:8000/api/employee',body,requestOptions).map(x =>x.json());
  }
// Puts the form inputs to update an Employee
/**
 * 
 * @param id 
 * @param emp 
 */
  putEmployee(id,emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put,headers : headerOptions});
    return this.http.put('http://localhost:8000/api/employee',body,requestOptions).map(x =>x.json());
  }
// Fetch the Employees using GET
/**
 * 
 */
  getEmployeeList(){
    this.http.get('http://localhost:8000/api/employees')
    .map((data : Response) => {
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
    })
  }
// Delets an employee
/**
 * 
 * @param id 
 */
  deleteEmployee(id :number){
    return this.http.delete('http://localhost:8000/api/employee/' + id).map(res => res.json());
  }
}
