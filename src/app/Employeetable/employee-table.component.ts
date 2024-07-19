import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html'
  
})
export class EmployeeTableComponent {
 name:string="john";
 Age:number=23;
 address:string="Hyd";
 sal:number=60000;

}
