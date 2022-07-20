import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }
    public msg="Customer Login successfully"

  ngOnInit(): void {
  }

  logEmployee(){
    this.employeeService.loginEmployee(this.employee).subscribe( data =>{
      console.log(data);
      alert(this.msg)
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/home']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.logEmployee();
  }
}
